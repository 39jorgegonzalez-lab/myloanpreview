"use client";

import {
  type ChangeEvent,
  useId,
  useRef,
  useState,
} from "react";
import { trackCalculatorUse } from "../lib/analytics";

type NumericInputValue = number | "";

function validatePersonalLoanInputs({
  loanAmount,
  interestRate,
  loanTerm,
}: {
  loanAmount: NumericInputValue;
  interestRate: NumericInputValue;
  loanTerm: NumericInputValue;
}): string | null {
  if (loanAmount === "") {
    return "Enter a loan amount.";
  }

  if (loanAmount < 100) {
    return "Loan amount must be at least $100.";
  }

  if (loanAmount > 1000000) {
    return "Loan amount must be $1,000,000 or less.";
  }

  if (interestRate === "") {
    return "Enter an interest rate.";
  }

  if (interestRate < 0 || interestRate > 100) {
    return "Interest rate must be between 0% and 100%.";
  }

  if (loanTerm === "") {
    return "Enter a loan term.";
  }

  if (
    !Number.isInteger(loanTerm) ||
    loanTerm < 1 ||
    loanTerm > 120
  ) {
    return "Loan term must be a whole number from 1 to 120 months.";
  }

  return null;
}

export default function PersonalLoanCalculator() {
  const [loanAmount, setLoanAmount] =
    useState<NumericInputValue>(10000);
  const [interestRate, setInterestRate] =
    useState<NumericInputValue>(11.5);
  const [loanTerm, setLoanTerm] =
    useState<NumericInputValue>(36);

  const validationMessage =
    validatePersonalLoanInputs({
      loanAmount,
      interestRate,
      loanTerm,
    });

  const numericLoanAmount =
    loanAmount === "" ? 0 : loanAmount;
  const numericInterestRate =
    interestRate === "" ? 0 : interestRate;
  const numericLoanTerm =
    loanTerm === "" ? 0 : loanTerm;

  const monthlyRate =
    numericInterestRate / 100 / 12;

  const calculatedMonthlyPayment =
    validationMessage !== null
      ? 0
      : monthlyRate === 0
        ? numericLoanAmount / numericLoanTerm
        : (numericLoanAmount *
            monthlyRate *
            Math.pow(
              1 + monthlyRate,
              numericLoanTerm,
            )) /
          (Math.pow(
            1 + monthlyRate,
            numericLoanTerm,
          ) -
            1);

  const hasValidResults =
    validationMessage === null &&
    Number.isFinite(calculatedMonthlyPayment) &&
    calculatedMonthlyPayment >= 0;

  const monthlyPayment = hasValidResults
    ? calculatedMonthlyPayment
    : 0;

  const totalPaid = hasValidResults
    ? monthlyPayment * numericLoanTerm
    : 0;

  const totalInterest = hasValidResults
    ? Math.max(totalPaid - numericLoanAmount, 0)
    : 0;

  const resultMessage =
    validationMessage ??
    (hasValidResults
      ? null
      : "We could not calculate a reliable estimate from these values. Review the loan details and try again.");

  const money = (num: number) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const hasTrackedCalculatorUse = useRef(false);

  function handleCalculatorInteraction(): void {
    if (hasTrackedCalculatorUse.current) {
      return;
    }

    hasTrackedCalculatorUse.current = true;
    trackCalculatorUse("personal_loan");
  }

  return (
    <main
      className="min-h-screen bg-slate-100 text-slate-900"
      onChangeCapture={handleCalculatorInteraction}
    >
      <section className="mx-auto max-w-7xl overflow-x-hidden px-4 py-16 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-wide text-blue-700">
            Personal Loan Estimate
          </p>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Personal Loan Calculator
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Estimate possible monthly payments, total
            interest, and total repayment costs for a
            personal loan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* INPUTS */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Enter Loan Details
            </h2>

            <div className="space-y-6">
              <InputBox
                label="Loan Amount"
                value={loanAmount}
                setValue={setLoanAmount}
                min={100}
                max={1000000}
                step="100"
                inputMode="numeric"
              />

              <InputBox
                label="Interest Rate (%)"
                value={interestRate}
                setValue={setInterestRate}
                min={0}
                max={100}
                step="0.01"
                inputMode="decimal"
              />

              <InputBox
                label="Loan Term (Months)"
                value={loanTerm}
                setValue={setLoanTerm}
                min={1}
                max={120}
                step="1"
                inputMode="numeric"
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              These input limits are calculator
              safeguards and do not represent lender
              eligibility requirements or available loan
              terms.
            </p>
          </div>

          {/* RESULTS */}

          <div className="self-start rounded-3xl bg-blue-700 p-6 text-white shadow-sm md:p-8">
            <h2 className="mb-8 text-2xl font-bold">
              Estimated Results
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

            <div className="mb-6 rounded-2xl bg-white/10 p-6">
              <p className="mb-2 text-blue-100">
                Estimated Monthly Payment
              </p>

              <p
                className="break-words text-4xl font-bold sm:text-5xl"
                aria-live="polite"
                aria-atomic="true"
              >
                {hasValidResults
                  ? money(monthlyPayment)
                  : "—"}
              </p>
            </div>

            <div className="grid gap-4">
              <Result
                label="Estimated Loan Amount"
                value={
                  hasValidResults
                    ? money(numericLoanAmount)
                    : "—"
                }
              />

              <Result
                label="Total Amount Paid"
                value={
                  hasValidResults
                    ? money(totalPaid)
                    : "—"
                }
              />

              <Result
                label="Total Interest Paid"
                value={
                  hasValidResults
                    ? money(totalInterest)
                    : "—"
                }
              />
            </div>
          </div>
        </div>

        {/* EDUCATIONAL SECTION */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Understanding Personal Loan Payments
          </h2>

          <p className="mb-4 leading-relaxed text-slate-600">
            Personal loan payments depend on factors
            including the loan amount, repayment term,
            interest rate, fees, and borrower
            qualifications. Lower interest rates and
            shorter repayment terms generally reduce
            total interest costs, although shorter terms
            may result in higher monthly payments.
          </p>

          <p className="text-sm leading-6 text-slate-500">
            MYLOANPREVIEW provides educational estimates
            only and is not a lender, broker, or financial
            advisor. This calculator does not include
            origination fees, late fees, optional
            products, or other possible lender charges.
            Actual rates, approval decisions, fees, and
            loan terms may vary.
          </p>
        </div>
      </section>

      {/* OTHER CALCULATORS */}

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Explore Other Calculators
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <a
              href="/auto-loan-calculator"
              className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)]"
            >
              <div
                className="mb-5 text-5xl"
                aria-hidden="true"
              >
                🚗
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Auto Loan Calculator
              </h3>

              <p className="leading-relaxed text-slate-600">
                Estimate car payments, total loan cost,
                and monthly affordability.
              </p>
            </a>

            <a
              href="/mortgage-calculator"
              className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)]"
            >
              <div
                className="mb-5 text-5xl"
                aria-hidden="true"
              >
                🏠
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Mortgage Calculator
              </h3>

              <p className="leading-relaxed text-slate-600">
                Explore mortgage payments, long-term
                borrowing costs, and possible housing
                expenses.
              </p>
            </a>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Related guide
            </p>
            <a
              href="/learning-center/how-much-personal-loan-can-i-afford"
              className="mt-2 inline-block font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
            >
              How Much Personal Loan Can I Afford?
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Personal Loan Calculator FAQs
        </h2>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              What does this personal loan calculator
              estimate?
            </h3>

            <p className="leading-8 text-slate-700">
              It uses the entered loan amount, interest rate,
              and repayment term to estimate a monthly payment,
              total interest, and total repayment amount.
              The results are planning estimates and not
              lender quotes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Are personal loan fees included?
            </h3>

            <p className="leading-8 text-slate-700">
              No. The calculator does not separately include
              origination fees, late fees, optional products,
              or other possible lender charges. Those costs
              may change the amount received or the total
              borrowing cost.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              How does the loan term affect the payment?
            </h3>

            <p className="leading-8 text-slate-700">
              A shorter term may produce a higher monthly
              payment while reducing total interest. A longer
              term may reduce the monthly payment but increase
              the total interest paid.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Does this estimate mean I will be approved?
            </h3>

            <p className="leading-8 text-slate-700">
              No. Using the calculator does not submit a loan
              application or provide an approval decision.
              Lenders may consider credit, income, existing
              debts, documentation, and other factors.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

/* INPUT COMPONENT */

function InputBox({
  label,
  value,
  setValue,
  step = "1",
  min,
  max,
  inputMode = "decimal",
}: {
  label: string;
  value: NumericInputValue;
  setValue: (value: NumericInputValue) => void;
  step?: string;
  min?: number;
  max?: number;
  inputMode?: "decimal" | "numeric";
}) {
  const inputId = useId();

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    const rawValue = event.currentTarget.value;

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
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}

/* RESULT COMPONENT */

function Result({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/20 pb-4">
      <span className="text-blue-100">
        {label}
      </span>

      <span className="break-words text-right font-bold">
        {value}
      </span>
    </div>
  );
}