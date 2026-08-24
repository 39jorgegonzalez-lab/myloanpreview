"use client";

import {
  type ChangeEvent,
  useId,
  useRef,
  useState,
} from "react";
import { trackCalculatorUse } from "../lib/analytics";

type NumericInputValue = number | "";

type LoanType =
  | "personal"
  | "new-auto"
  | "used-auto";

type RateAssumption = {
  scoreLabel: string;
  scoreRange: string;
  lowRate: number;
  highRate: number;
  benchmarkRate?: number;
  warningTitle?: string;
  warningText?: string;
};

type PersonalLoanBand = {
  minimumScore: number;
  maximumScore: number;
  scoreLabel: string;
  scoreRange: string;
  lowRate: number;
  highRate: number;
  warningTitle?: string;
  warningText?: string;
};

type AutoLoanBand = {
  minimumScore: number;
  maximumScore: number;
  scoreLabel: string;
  scoreRange: string;
  newAutoBenchmarkRate: number;
  usedAutoBenchmarkRate: number;
  planningSpread: number;
  warningTitle?: string;
  warningText?: string;
};

const ASSUMPTIONS_REVIEWED = "July 2026";

const LOAN_TYPE_DETAILS: Record<
  LoanType,
  {
    label: string;
    maximumLoanAmount: number;
    maximumLoanTerm: number;
    description: string;
  }
> = {
  personal: {
    label: "Personal Loan",
    maximumLoanAmount: 250000,
    maximumLoanTerm: 120,
    description:
      "An unsecured personal installment-loan scenario.",
  },
  "new-auto": {
    label: "New Auto Loan",
    maximumLoanAmount: 500000,
    maximumLoanTerm: 96,
    description:
      "A financing scenario for a new vehicle.",
  },
  "used-auto": {
    label: "Used Auto Loan",
    maximumLoanAmount: 500000,
    maximumLoanTerm: 96,
    description:
      "A financing scenario for a used vehicle.",
  },
};

/*
 * Personal-loan interest-rate ranges are MYLOANPREVIEW
 * educational planning assumptions.
 *
 * They are not published averages for each score band
 * and are not lender offers.
 *
 * The ranges remain within broadly advertised unsecured
 * personal-loan interest-rate spans reviewed in July 2026.
 */
const PERSONAL_LOAN_BANDS: PersonalLoanBand[] = [
  {
    minimumScore: 800,
    maximumScore: 850,
    scoreLabel: "Exceptional",
    scoreRange: "800–850",
    lowRate: 7,
    highRate: 13,
  },
  {
    minimumScore: 740,
    maximumScore: 799,
    scoreLabel: "Very Good",
    scoreRange: "740–799",
    lowRate: 9,
    highRate: 16,
  },
  {
    minimumScore: 670,
    maximumScore: 739,
    scoreLabel: "Good",
    scoreRange: "670–739",
    lowRate: 13,
    highRate: 23,
  },
  {
    minimumScore: 580,
    maximumScore: 669,
    scoreLabel: "Fair",
    scoreRange: "580–669",
    lowRate: 19,
    highRate: 30,
    warningTitle:
      "ELEVATED BORROWING-COST SCENARIO",
    warningText:
      "Personal-loan offers in this score range may carry higher rates, origination fees, smaller loan limits, or shorter repayment terms. Compare the full APR and total repayment cost carefully.",
  },
  {
    minimumScore: 300,
    maximumScore: 579,
    scoreLabel: "Lower Score Range",
    scoreRange: "300–579",
    lowRate: 29,
    highRate: 35.99,
    warningTitle:
      "LIMITED AVAILABILITY AND HIGH-COST WARNING",
    warningText:
      "Some lenders may not offer unsecured personal loans in this score range. The displayed range illustrates possible borrowing costs and does not indicate that financing is available.",
  },
];

/*
 * Auto benchmark rates come from Experian's
 * Q1 2026 State of the Automotive Finance Market data.
 *
 * The calculator expands each published category average
 * into a wider educational planning range so that an
 * average is not presented as a personalized lender offer.
 *
 * Scores in that source use VantageScore 4.0 bands.
 */
const AUTO_LOAN_BANDS: AutoLoanBand[] = [
  {
    minimumScore: 781,
    maximumScore: 850,
    scoreLabel: "Super Prime",
    scoreRange: "781–850",
    newAutoBenchmarkRate: 4.55,
    usedAutoBenchmarkRate: 6.3,
    planningSpread: 1.25,
  },
  {
    minimumScore: 661,
    maximumScore: 780,
    scoreLabel: "Prime",
    scoreRange: "661–780",
    newAutoBenchmarkRate: 6.23,
    usedAutoBenchmarkRate: 8.77,
    planningSpread: 1.75,
  },
  {
    minimumScore: 601,
    maximumScore: 660,
    scoreLabel: "Near Prime",
    scoreRange: "601–660",
    newAutoBenchmarkRate: 9.67,
    usedAutoBenchmarkRate: 14.03,
    planningSpread: 2.5,
  },
  {
    minimumScore: 501,
    maximumScore: 600,
    scoreLabel: "Subprime",
    scoreRange: "501–600",
    newAutoBenchmarkRate: 13.44,
    usedAutoBenchmarkRate: 19.42,
    planningSpread: 3.5,
    warningTitle:
      "HIGH-COST AUTO-FINANCING SCENARIO",
    warningText:
      "Borrowers in this score range may encounter higher rates, larger down-payment requirements, fewer available offers, or other lender restrictions. Compare multiple offers and review the total cost carefully.",
  },
  {
    minimumScore: 300,
    maximumScore: 500,
    scoreLabel: "Deep Subprime",
    scoreRange: "300–500",
    newAutoBenchmarkRate: 16.01,
    usedAutoBenchmarkRate: 21.77,
    planningSpread: 4.5,
    warningTitle:
      "VERY HIGH-COST AND LIMITED-AVAILABILITY WARNING",
    warningText:
      "Financing availability may be limited in this score range, and available offers may carry substantial borrowing costs. This estimate does not indicate approval or loan availability.",
  },
];

function numericValue(
  value: NumericInputValue,
): number {
  return value === "" ? 0 : value;
}

function clampCreditScore(
  creditScore: number,
): number {
  return Math.min(
    850,
    Math.max(300, creditScore),
  );
}

function roundRate(
  value: number,
): number {
  return Math.round(value * 10) / 10;
}

function getMaximumLoanAmount(
  loanType: LoanType,
): number {
  return LOAN_TYPE_DETAILS[loanType]
    .maximumLoanAmount;
}

function getMaximumLoanTerm(
  loanType: LoanType,
): number {
  return LOAN_TYPE_DETAILS[loanType]
    .maximumLoanTerm;
}

function findPersonalLoanBand(
  creditScore: number,
): PersonalLoanBand {
  return (
    PERSONAL_LOAN_BANDS.find(
      (band) =>
        creditScore >= band.minimumScore &&
        creditScore <= band.maximumScore,
    ) ?? PERSONAL_LOAN_BANDS.at(-1)!
  );
}

function findAutoLoanBand(
  creditScore: number,
): AutoLoanBand {
  return (
    AUTO_LOAN_BANDS.find(
      (band) =>
        creditScore >= band.minimumScore &&
        creditScore <= band.maximumScore,
    ) ?? AUTO_LOAN_BANDS.at(-1)!
  );
}

function getRateAssumption(
  loanType: LoanType,
  creditScore: number,
): RateAssumption {
  const safeCreditScore =
    clampCreditScore(creditScore);

  if (loanType === "personal") {
    const band =
      findPersonalLoanBand(safeCreditScore);

    return {
      scoreLabel: band.scoreLabel,
      scoreRange: band.scoreRange,
      lowRate: band.lowRate,
      highRate: band.highRate,
      warningTitle: band.warningTitle,
      warningText: band.warningText,
    };
  }

  const band =
    findAutoLoanBand(safeCreditScore);

  const benchmarkRate =
    loanType === "new-auto"
      ? band.newAutoBenchmarkRate
      : band.usedAutoBenchmarkRate;

  return {
    scoreLabel: band.scoreLabel,
    scoreRange: band.scoreRange,
    benchmarkRate,
    lowRate: roundRate(
      Math.max(
        0,
        benchmarkRate - band.planningSpread,
      ),
    ),
    highRate: roundRate(
      benchmarkRate + band.planningSpread,
    ),
    warningTitle: band.warningTitle,
    warningText: band.warningText,
  };
}

function validateCreditScoreLoanInputs({
  loanType,
  creditScore,
  loanAmount,
  loanTerm,
}: {
  loanType: LoanType;
  creditScore: NumericInputValue;
  loanAmount: NumericInputValue;
  loanTerm: NumericInputValue;
}): string | null {
  if (creditScore === "") {
    return "Enter an estimated credit score.";
  }

  if (
    !Number.isInteger(creditScore) ||
    creditScore < 300 ||
    creditScore > 850
  ) {
    return "Credit score must be a whole number from 300 to 850.";
  }

  if (loanAmount === "") {
    return "Enter a loan amount.";
  }

  const maximumLoanAmount =
    getMaximumLoanAmount(loanType);

  if (
    loanAmount < 1 ||
    loanAmount > maximumLoanAmount
  ) {
    const formattedMaximum =
      maximumLoanAmount.toLocaleString("en-US");

    return `Loan amount must be between $1 and $${formattedMaximum} for this loan type.`;
  }

  if (loanTerm === "") {
    return "Enter a loan term.";
  }

  const maximumLoanTerm =
    getMaximumLoanTerm(loanType);

  if (
    !Number.isInteger(loanTerm) ||
    loanTerm < 1 ||
    loanTerm > maximumLoanTerm
  ) {
    return `Loan term must be a whole number from 1 to ${maximumLoanTerm} months for this loan type.`;
  }

  return null;
}

function calculateInstallmentPayment({
  principal,
  annualRate,
  loanTerm,
}: {
  principal: number;
  annualRate: number;
  loanTerm: number;
}): number {
  if (
    principal <= 0 ||
    annualRate < 0 ||
    loanTerm <= 0
  ) {
    return 0;
  }

  const monthlyRate =
    annualRate / 100 / 12;

  if (monthlyRate === 0) {
    return principal / loanTerm;
  }

  const growthFactor = Math.pow(
    1 + monthlyRate,
    loanTerm,
  );

  return (
    (principal *
      monthlyRate *
      growthFactor) /
    (growthFactor - 1)
  );
}

export default function CreditScoreLoanEstimate() {
  const [loanType, setLoanType] =
    useState<LoanType>("personal");

  const [creditScore, setCreditScore] =
    useState<NumericInputValue>(700);

  const [loanAmount, setLoanAmount] =
    useState<NumericInputValue>(25000);

  const [loanTerm, setLoanTerm] =
    useState<NumericInputValue>(60);

  const validationMessage =
    validateCreditScoreLoanInputs({
      loanType,
      creditScore,
      loanAmount,
      loanTerm,
    });

  const numericCreditScore =
    numericValue(creditScore);

  const numericLoanAmount =
    numericValue(loanAmount);

  const numericLoanTerm =
    numericValue(loanTerm);

  const rateAssumption =
    getRateAssumption(
      loanType,
      numericCreditScore,
    );

  const calculatedLowMonthlyPayment =
    validationMessage === null
      ? calculateInstallmentPayment({
          principal: numericLoanAmount,
          annualRate: rateAssumption.lowRate,
          loanTerm: numericLoanTerm,
        })
      : 0;

  const calculatedHighMonthlyPayment =
    validationMessage === null
      ? calculateInstallmentPayment({
          principal: numericLoanAmount,
          annualRate: rateAssumption.highRate,
          loanTerm: numericLoanTerm,
        })
      : 0;

  const calculatedLowTotalPaid =
    calculatedLowMonthlyPayment *
    numericLoanTerm;

  const calculatedHighTotalPaid =
    calculatedHighMonthlyPayment *
    numericLoanTerm;

  const calculatedLowTotalInterest =
    calculatedLowTotalPaid -
    numericLoanAmount;

  const calculatedHighTotalInterest =
    calculatedHighTotalPaid -
    numericLoanAmount;

  const hasValidResults =
    validationMessage === null &&
    Number.isFinite(
      calculatedLowMonthlyPayment,
    ) &&
    Number.isFinite(
      calculatedHighMonthlyPayment,
    ) &&
    Number.isFinite(
      calculatedLowTotalPaid,
    ) &&
    Number.isFinite(
      calculatedHighTotalPaid,
    ) &&
    Number.isFinite(
      calculatedLowTotalInterest,
    ) &&
    Number.isFinite(
      calculatedHighTotalInterest,
    ) &&
    calculatedLowMonthlyPayment >= 0 &&
    calculatedHighMonthlyPayment >=
      calculatedLowMonthlyPayment &&
    calculatedLowTotalPaid >= 0 &&
    calculatedHighTotalPaid >=
      calculatedLowTotalPaid &&
    calculatedLowTotalInterest >= 0 &&
    calculatedHighTotalInterest >=
      calculatedLowTotalInterest;

  const resultMessage =
    validationMessage ??
    (hasValidResults
      ? null
      : "We could not calculate a reliable estimate from these values. Review the loan type, credit score, loan amount, and loan term and try again.");

  const money = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const percentage = (value: number) =>
    `${value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}%`;

  const moneyRange = (
    lowValue: number,
    highValue: number,
  ) =>
    `${money(lowValue)} – ${money(
      highValue,
    )}`;

  const rateRange = (
    lowValue: number,
    highValue: number,
  ) =>
    `${percentage(lowValue)} – ${percentage(
      highValue,
    )}`;

  const loanTypeDetails =
    LOAN_TYPE_DETAILS[loanType];

  const creditScoreContext =
    hasValidResults
      ? `${numericCreditScore} — ${rateAssumption.scoreLabel} (${rateAssumption.scoreRange})`
      : "—";

  const hasTrackedCalculatorUse =
    useRef(false);

  function handleCalculatorInteraction(): void {
    if (hasTrackedCalculatorUse.current) {
      return;
    }

    hasTrackedCalculatorUse.current = true;

    trackCalculatorUse(
      "credit_score_loan_estimate",
    );
  }

  return (
    <main
      className="min-h-screen bg-slate-100 text-slate-900"
      onChangeCapture={
        handleCalculatorInteraction
      }
    >
      <section className="mx-auto max-w-7xl overflow-x-hidden px-4 py-16 sm:px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-wide text-blue-700">
            Score-Influenced Loan Cost Estimate
          </p>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Credit Score Loan Estimate
          </h1>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-600 md:text-xl">
            See how the entered credit-score
            range may influence an illustrative
            interest-rate range, monthly payment, and total
            borrowing cost for the selected loan
            type.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-500">
            This educational tool does not check
            your credit, submit an application,
            prequalify you, or provide financing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* INPUTS */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Enter Loan Details
            </h2>

            <div className="space-y-6">
              <LoanTypeSelect
                value={loanType}
                setValue={setLoanType}
              />

              <InputBox
                label="Estimated Credit Score"
                value={creditScore}
                setValue={setCreditScore}
                min={300}
                max={850}
                step="1"
                inputMode="numeric"
                required
                helpText="Enter a whole number from 300 to 850. The score materially changes the calculator's illustrative interest-rate range."
              />

              <InputBox
                label="Loan Amount"
                value={loanAmount}
                setValue={setLoanAmount}
                min={1}
                max={
                  loanTypeDetails.maximumLoanAmount
                }
                step="100"
                inputMode="decimal"
                required
                helpText={
                  loanType === "personal"
                    ? "Enter the amount that would be borrowed before any origination fee deductions."
                    : "Enter the amount that would be financed after any down payment, trade-in credit, or cash contribution."
                }
              />

              <InputBox
                label="Loan Term (Months)"
                value={loanTerm}
                setValue={setLoanTerm}
                min={1}
                max={
                  loanTypeDetails.maximumLoanTerm
                }
                step="1"
                inputMode="numeric"
                required
                helpText={`Enter the repayment term in whole months. The maximum safeguard for ${loanTypeDetails.label.toLowerCase()} scenarios is ${loanTypeDetails.maximumLoanTerm} months.`}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <p className="font-semibold text-blue-950">
                The visitor does not choose an interest rate
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-900">
                MYLOANPREVIEW selects an
                illustrative interest-rate planning range
                from the entered credit score and
                loan type. A real lender determines
                the actual interest rate and APR after reviewing an
                application and its underwriting
                factors.
              </p>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              The input limits are calculator
              safeguards. They do not represent
              lender requirements, available loan
              amounts, guaranteed terms, or approval
              standards.
            </p>
          </div>

          {/* RESULTS */}

          <div className="self-start rounded-3xl bg-blue-700 p-6 text-white shadow-sm md:p-8">
            <h2 className="mb-8 text-2xl font-bold">
              Estimated Planning Range
            </h2>

            {resultMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-6 text-amber-950"
              >
                {resultMessage}
              </div>
            )}

            {hasValidResults &&
              rateAssumption.warningTitle &&
              rateAssumption.warningText && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 text-amber-950"
                >
                  <p className="font-bold">
                    {
                      rateAssumption.warningTitle
                    }
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    {
                      rateAssumption.warningText
                    }
                  </p>
                </div>
              )}

            <div className="mb-6 rounded-2xl bg-white/10 p-6">
              <p className="mb-2 text-blue-100">
                Estimated Monthly Payment Range
              </p>

              <p
                className="break-words text-3xl font-bold sm:text-4xl"
                aria-live="polite"
                aria-atomic="true"
              >
                {hasValidResults
                  ? moneyRange(
                      calculatedLowMonthlyPayment,
                      calculatedHighMonthlyPayment,
                    )
                  : "—"}
              </p>
            </div>

            <div className="mb-6 rounded-2xl border border-blue-400 bg-blue-800 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                Credit-Score Context
              </p>

              <p className="mt-2 break-words text-2xl font-bold">
                {creditScoreContext}
              </p>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                This label describes a broad score
                band. It is not an approval rating,
                qualification result, or promise
                that a lender will offer financing.
              </p>
            </div>

            <div className="grid gap-4">
              <Result
                label="Loan Type"
                value={
                  hasValidResults
                    ? loanTypeDetails.label
                    : "—"
                }
              />

              <Result
                label="Illustrative Interest Rate Range"
                value={
                  hasValidResults
                    ? rateRange(
                        rateAssumption.lowRate,
                        rateAssumption.highRate,
                      )
                    : "—"
                }
              />

              <Result
                label="Estimated Loan Amount"
                value={
                  hasValidResults
                    ? money(numericLoanAmount)
                    : "—"
                }
              />

              <Result
                label="Total Amount Paid Range"
                value={
                  hasValidResults
                    ? moneyRange(
                        calculatedLowTotalPaid,
                        calculatedHighTotalPaid,
                      )
                    : "—"
                }
              />

              <Result
                label="Total Interest Range"
                value={
                  hasValidResults
                    ? moneyRange(
                        calculatedLowTotalInterest,
                        calculatedHighTotalInterest,
                      )
                    : "—"
                }
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-blue-100">
              The calculator applies the lower and
              upper interest-rate assumptions to the entered
              loan amount and term. Possible
              origination fees, taxes, insurance,
              late fees, add-ons, and other costs
              are not automatically included. Because APR can include lender fees, the displayed interest-rate range is not an APR calculation.
            </p>
          </div>
        </div>

        {/* METHODOLOGY */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              How the Credit Score Affects This
              Estimate
            </h2>

            <p className="mb-4 leading-relaxed text-slate-600">
              The calculator places the entered
              score into a broad range associated
              with the selected loan type. Lower
              score ranges receive higher
              illustrative interest-rate assumptions, while
              stronger score ranges receive lower
              assumptions.
            </p>

            <p className="mb-4 leading-relaxed text-slate-600">
              The resulting interest-rate range directly
              changes the monthly-payment range and
              total-interest range. The credit-score
              field is therefore part of the
              calculation rather than a decorative
              label.
            </p>

            <p className="leading-relaxed text-slate-600">
              A higher interest rate generally increases both
              the monthly payment and the total
              amount repaid when the loan amount and
              term remain unchanged.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              Why the Result Is Still a Range
            </h2>

            <p className="mb-4 leading-relaxed text-slate-600">
              Credit score is an important pricing
              factor, but lenders may also review
              income, debts, credit history, loan
              amount, repayment term, collateral,
              down payment, vehicle details, state
              law, and their own underwriting
              standards.
            </p>

            <p className="mb-4 leading-relaxed text-slate-600">
              Consumers can also have multiple
              credit scores. A lender may use a
              different scoring model or score
              version from the one a consumer sees.
            </p>

            <p className="text-sm leading-6 text-slate-500">
              MYLOANPREVIEW is not a lender,
              broker, credit bureau, credit-repair
              company, or financial advisor. Actual
              rates, fees, payments, decisions,
              loan availability, and terms may vary.
            </p>
          </div>
        </div>

        {/* ASSUMPTIONS AND SOURCES */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">
            Rate Assumptions and Sources
          </h2>

          <p className="mb-4 leading-relaxed text-slate-600">
            Assumptions last reviewed:{" "}
            <strong>
              {ASSUMPTIONS_REVIEWED}
            </strong>
          </p>

          {loanType === "personal" ? (
            <>
              <p className="mb-4 leading-relaxed text-slate-600">
                Personal-loan ranges are
                MYLOANPREVIEW educational planning
                assumptions within broadly published{" "}
                <a
                  href="/learning-center/secured-vs-unsecured-personal-loans"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
                >
                  unsecured personal-loan
                </a>{" "}
                interest-rate spans.
                They are not observed average offers
                for each credit-score band.
              </p>

              <p className="leading-relaxed text-slate-600">
                Review current personal-loan
                information from{" "}
                <a
                  href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-personal-installment-loan-en-2114/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-700 underline underline-offset-4"
                >
                  the Consumer Financial Protection
                  Bureau
                </a>{" "}
                and published market examples from{" "}
                <a
                  href="https://www.experian.com/blogs/ask-experian/what-credit-score-is-needed-for-a-personal-loan/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-700 underline underline-offset-4"
                >
                  Experian
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <p className="mb-4 leading-relaxed text-slate-600">
                Auto-loan assumptions use Experian
                Q1 2026 published auto-loan rates by VantageScore
                4.0 band as reference points. The
                calculator expands each category
                average into a wider educational
                range so it is not presented as a
                personalized offer.
              </p>

              {rateAssumption.benchmarkRate !==
                undefined && (
                <p className="mb-4 leading-relaxed text-slate-600">
                  Published category-average
                  reference for the selected auto
                  scenario:{" "}
                  <strong>
                    {percentage(
                      rateAssumption.benchmarkRate,
                    )}
                  </strong>
                  . This reference is not a rate
                  quote.
                </p>
              )}

              <p className="leading-relaxed text-slate-600">
                Review the published auto-finance
                data from{" "}
                <a
                  href="https://www.experian.com/blogs/ask-experian/auto-loan-rates-financing/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-700 underline underline-offset-4"
                >
                  Experian
                </a>{" "}
                and lender-pricing guidance from{" "}
                <a
                  href="https://www.consumerfinance.gov/ask-cfpb/how-does-a-lender-decide-what-interest-rate-to-offer-me-on-an-auto-loan-en-765/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-700 underline underline-offset-4"
                >
                  the Consumer Financial Protection
                  Bureau
                </a>
                .
              </p>
            </>
          )}
        </div>
      </section>

      {/* INTERNAL LINKS */}

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Explore Other Financial Tools
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <a
              href="/monthly-payment-calculator"
              className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)]"
            >
              <div
                className="mb-5 text-5xl"
                aria-hidden="true"
              >
                📅
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Monthly Payment Calculator
              </h3>

              <p className="leading-relaxed text-slate-600">
                Calculate payments when you already
                have an interest rate from a lender or another
                source.
              </p>
            </a>

            <a
              href="/debt-to-income-calculator"
              className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)]"
            >
              <div
                className="mb-5 text-5xl"
                aria-hidden="true"
              >
                📊
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Debt-to-Income Calculator
              </h3>

              <p className="leading-relaxed text-slate-600">
                Compare monthly debt obligations
                with gross monthly income.
              </p>
            </a>

            <a
              href="/car-affordability-calculator"
              className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)]"
            >
              <div
                className="mb-5 text-5xl"
                aria-hidden="true"
              >
                🚘
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Car Affordability Calculator
              </h3>

              <p className="leading-relaxed text-slate-600">
                Explore a possible vehicle budget
                using income, debts, and financing
                assumptions.
              </p>
            </a>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Related guide
            </p>
            <a
              href="/learning-center/does-checking-loan-rates-hurt-your-credit"
              className="mt-2 inline-block font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
            >
              Does Checking Loan Rates Hurt Your Credit?
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Credit Score Loan Estimate FAQs
        </h2>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Does the credit score change the interest-rate
              estimate?
            </h3>

            <p className="leading-8 text-slate-700">
              Yes. The entered score determines the
              score band and illustrative interest-rate range
              used by this calculator. A score of
              400 will not receive the same planning
              range as a score above 800.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Can I choose my interest rate?
            </h3>

            <p className="leading-8 text-slate-700">
              No. This tool selects an educational
              interest-rate range from the entered credit
              score and loan type. A lender
              determines the actual interest rate and APR after
              reviewing the application and its
              underwriting factors.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Why are new- and used-auto estimates
              different?
            </h3>

            <p className="leading-8 text-slate-700">
              New- and used-vehicle financing can
              have different pricing patterns,
              collateral risks, loan amounts, and
              lender programs. The calculator
              therefore uses separate assumptions
              for each.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Does this calculator check my credit?
            </h3>

            <p className="leading-8 text-slate-700">
              No. The score is entered manually.
              MYLOANPREVIEW does not request a credit
              report, perform a hard inquiry, perform
              a soft inquiry, or send the information
              to a lender.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Does the result mean I will be
              approved?
            </h3>

            <p className="leading-8 text-slate-700">
              No. The result is an educational cost
              estimate only. It is not an
              application, prequalification,
              approval decision, commitment to lend,
              or financing offer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* LOAN-TYPE SELECT */

function LoanTypeSelect({
  value,
  setValue,
}: {
  value: LoanType;
  setValue: (value: LoanType) => void;
}) {
  const inputId = useId();
  const helpId = `${inputId}-help`;

  function handleChange(
    event: ChangeEvent<HTMLSelectElement>,
  ): void {
    setValue(
      event.currentTarget.value as LoanType,
    );
  }

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block font-semibold"
      >
        Loan Type
      </label>

      <select
        id={inputId}
        value={value}
        aria-describedby={helpId}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option value="personal">
          Personal Loan
        </option>

        <option value="new-auto">
          New Auto Loan
        </option>

        <option value="used-auto">
          Used Auto Loan
        </option>
      </select>

      <p
        id={helpId}
        className="mt-2 text-sm leading-6 text-slate-500"
      >
        Select the financing category because
        personal, new-auto, and used-auto loans use
        different rate assumptions.
      </p>
    </div>
  );
}

/* NUMBER INPUT */

function InputBox({
  label,
  value,
  setValue,
  step = "1",
  min,
  max,
  inputMode = "decimal",
  helpText,
  required = false,
}: {
  label: string;
  value: NumericInputValue;
  setValue: (value: NumericInputValue) => void;
  step?: string;
  min?: number;
  max?: number;
  inputMode?: "decimal" | "numeric";
  helpText?: string;
  required?: boolean;
}) {
  const inputId = useId();
  const helpId = `${inputId}-help`;

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    const rawValue =
      event.currentTarget.value;

    if (rawValue === "") {
      setValue("");
      return;
    }

    const nextValue = Number(rawValue);

    if (Number.isFinite(nextValue)) {
      setValue(nextValue);
    }
  }

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block font-semibold"
      >
        {label}
      </label>

      <input
        id={inputId}
        type="number"
        value={value}
        step={step}
        min={min}
        max={max}
        inputMode={inputMode}
        required={required}
        aria-describedby={
          helpText ? helpId : undefined
        }
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      {helpText && (
        <p
          id={helpId}
          className="mt-2 text-sm leading-6 text-slate-500"
        >
          {helpText}
        </p>
      )}
    </div>
  );
}

/* RESULT ROW */

function Result({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-white/20 pb-4 sm:flex-row sm:justify-between sm:gap-4">
      <span className="text-blue-100">
        {label}
      </span>

      <span className="break-words font-bold text-white sm:max-w-[60%] sm:text-right">
        {value}
      </span>
    </div>
  );
}