"use client";

import {
  type ChangeEvent,
  useId,
  useRef,
  useState,
} from "react";
import { trackCalculatorUse } from "../lib/analytics";

type NumericInputValue = number | "";

function numericValue(value: NumericInputValue): number {
  return value === "" ? 0 : value;
}

function validateMortgageInputs({
  homePrice,
  downPayment,
  financedCosts,
  interestRate,
  loanTerm,
  annualPropertyTaxes,
  annualHomeownersInsurance,
  monthlyMortgageInsurance,
  monthlyHoaFees,
  otherMonthlyCosts,
}: {
  homePrice: NumericInputValue;
  downPayment: NumericInputValue;
  financedCosts: NumericInputValue;
  interestRate: NumericInputValue;
  loanTerm: NumericInputValue;
  annualPropertyTaxes: NumericInputValue;
  annualHomeownersInsurance: NumericInputValue;
  monthlyMortgageInsurance: NumericInputValue;
  monthlyHoaFees: NumericInputValue;
  otherMonthlyCosts: NumericInputValue;
}): string | null {
  const numericHomePrice = numericValue(homePrice);
  const numericDownPayment = numericValue(downPayment);
  const numericFinancedCosts = numericValue(financedCosts);

  if (homePrice === "") {
    return "Enter a home price.";
  }

  if (numericHomePrice < 1000) {
    return "Home price must be at least $1,000.";
  }

  if (numericHomePrice > 100000000) {
    return "Home price must be $100,000,000 or less.";
  }

  if (numericDownPayment < 0) {
    return "Down payment cannot be negative.";
  }

  if (numericDownPayment >= numericHomePrice) {
    return "Down payment must be less than the home price to estimate a financed mortgage.";
  }

  if (numericFinancedCosts < 0) {
    return "Financed loan costs cannot be negative.";
  }

  if (numericFinancedCosts > 10000000) {
    return "Financed loan costs must be $10,000,000 or less.";
  }

  if (
    numericHomePrice -
      numericDownPayment +
      numericFinancedCosts >
    100000000
  ) {
    return "The estimated loan amount must be $100,000,000 or less.";
  }

  if (interestRate === "") {
    return "Enter an interest rate.";
  }

  if (interestRate < 0 || interestRate > 30) {
    return "Interest rate must be between 0% and 30%.";
  }

  if (loanTerm === "") {
    return "Enter a loan term.";
  }

  if (
    !Number.isInteger(loanTerm) ||
    loanTerm < 1 ||
    loanTerm > 50
  ) {
    return "Loan term must be a whole number from 1 to 50 years.";
  }

  if (numericValue(annualPropertyTaxes) < 0) {
    return "Annual property taxes cannot be negative.";
  }

  if (numericValue(annualPropertyTaxes) > 5000000) {
    return "Annual property taxes must be $5,000,000 or less.";
  }

  if (numericValue(annualHomeownersInsurance) < 0) {
    return "Annual homeowners insurance cannot be negative.";
  }

  if (
    numericValue(annualHomeownersInsurance) >
    1000000
  ) {
    return "Annual homeowners insurance must be $1,000,000 or less.";
  }

  if (numericValue(monthlyMortgageInsurance) < 0) {
    return "Monthly mortgage insurance cannot be negative.";
  }

  if (numericValue(monthlyMortgageInsurance) > 100000) {
    return "Monthly mortgage insurance must be $100,000 or less.";
  }

  if (numericValue(monthlyHoaFees) < 0) {
    return "Monthly HOA fees cannot be negative.";
  }

  if (numericValue(monthlyHoaFees) > 100000) {
    return "Monthly HOA fees must be $100,000 or less.";
  }

  if (numericValue(otherMonthlyCosts) < 0) {
    return "Other monthly housing costs cannot be negative.";
  }

  if (numericValue(otherMonthlyCosts) > 100000) {
    return "Other monthly housing costs must be $100,000 or less.";
  }

  return null;
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] =
    useState<NumericInputValue>(350000);
  const [downPayment, setDownPayment] =
    useState<NumericInputValue>(70000);
  const [financedCosts, setFinancedCosts] =
    useState<NumericInputValue>(0);
  const [interestRate, setInterestRate] =
    useState<NumericInputValue>(6.25);
  const [loanTerm, setLoanTerm] =
    useState<NumericInputValue>(30);

  const [annualPropertyTaxes, setAnnualPropertyTaxes] =
    useState<NumericInputValue>(0);
  const [
    annualHomeownersInsurance,
    setAnnualHomeownersInsurance,
  ] = useState<NumericInputValue>(0);
  const [
    monthlyMortgageInsurance,
    setMonthlyMortgageInsurance,
  ] = useState<NumericInputValue>(0);
  const [monthlyHoaFees, setMonthlyHoaFees] =
    useState<NumericInputValue>(0);
  const [otherMonthlyCosts, setOtherMonthlyCosts] =
    useState<NumericInputValue>(0);

  const validationMessage = validateMortgageInputs({
    homePrice,
    downPayment,
    financedCosts,
    interestRate,
    loanTerm,
    annualPropertyTaxes,
    annualHomeownersInsurance,
    monthlyMortgageInsurance,
    monthlyHoaFees,
    otherMonthlyCosts,
  });

  const numericHomePrice = numericValue(homePrice);
  const numericDownPayment = numericValue(downPayment);
  const numericFinancedCosts = numericValue(financedCosts);
  const numericInterestRate = numericValue(interestRate);
  const numericLoanTerm = numericValue(loanTerm);

  const estimatedLoanAmount =
    validationMessage === null
      ? Math.max(
          numericHomePrice -
            numericDownPayment +
            numericFinancedCosts,
          0,
        )
      : 0;

  const monthlyRate =
    numericInterestRate / 100 / 12;
  const totalMonths = numericLoanTerm * 12;

  const calculatedPrincipalAndInterest =
    validationMessage !== null
      ? 0
      : monthlyRate === 0
        ? estimatedLoanAmount / totalMonths
        : (estimatedLoanAmount *
            monthlyRate *
            Math.pow(
              1 + monthlyRate,
              totalMonths,
            )) /
          (Math.pow(
            1 + monthlyRate,
            totalMonths,
          ) -
            1);

  const monthlyPropertyTaxes =
    numericValue(annualPropertyTaxes) / 12;

  const monthlyHomeownersInsurance =
    numericValue(annualHomeownersInsurance) / 12;

  const numericMonthlyMortgageInsurance =
    numericValue(monthlyMortgageInsurance);

  const numericMonthlyHoaFees =
    numericValue(monthlyHoaFees);

  const numericOtherMonthlyCosts =
    numericValue(otherMonthlyCosts);

  const calculatedTotalMonthlyCost =
    calculatedPrincipalAndInterest +
    monthlyPropertyTaxes +
    monthlyHomeownersInsurance +
    numericMonthlyMortgageInsurance +
    numericMonthlyHoaFees +
    numericOtherMonthlyCosts;

  const hasValidResults =
    validationMessage === null &&
    estimatedLoanAmount > 0 &&
    Number.isFinite(calculatedPrincipalAndInterest) &&
    calculatedPrincipalAndInterest >= 0 &&
    Number.isFinite(calculatedTotalMonthlyCost) &&
    calculatedTotalMonthlyCost >= 0;

  const monthlyPrincipalAndInterest = hasValidResults
    ? calculatedPrincipalAndInterest
    : 0;

  const estimatedTotalMonthlyCost = hasValidResults
    ? calculatedTotalMonthlyCost
    : 0;

  const totalPrincipalAndInterestPaid = hasValidResults
    ? monthlyPrincipalAndInterest * totalMonths
    : 0;

  const totalInterestPaid = hasValidResults
    ? Math.max(
        totalPrincipalAndInterestPaid -
          estimatedLoanAmount,
        0,
      )
    : 0;

  const monthlyTaxesInsuranceAndOtherCosts =
    monthlyPropertyTaxes +
    monthlyHomeownersInsurance +
    numericMonthlyMortgageInsurance +
    numericMonthlyHoaFees +
    numericOtherMonthlyCosts;

  const estimatedOtherHousingCostsOverLoanTerm =
    hasValidResults
      ? monthlyTaxesInsuranceAndOtherCosts *
        totalMonths
      : 0;

  const estimatedTotalHousingCostOverLoanTerm =
    hasValidResults
      ? totalPrincipalAndInterestPaid +
        estimatedOtherHousingCostsOverLoanTerm
      : 0;

  const resultMessage =
    validationMessage ??
    (hasValidResults
      ? null
      : "We could not calculate a reliable estimate from these values. Review the mortgage details and try again.");

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
    trackCalculatorUse("mortgage");
  }

  return (
    <main
      className="min-h-screen bg-slate-100 text-slate-900"
      onChangeCapture={handleCalculatorInteraction}
    >
      <section className="mx-auto max-w-7xl overflow-x-hidden px-4 py-16 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-wide text-blue-700">
            Mortgage Estimate
          </p>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Mortgage Calculator
          </h1>

          <p className="text-lg leading-8 text-slate-600">
            Estimate monthly principal and interest,
            property taxes, insurance, HOA fees, and
            other possible housing costs.
          </p>
        </div>

        <div className="grid w-full gap-8 lg:grid-cols-2">
          {/* INPUTS */}

          <div className="w-full overflow-hidden rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Enter Mortgage Details
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Loan details
                </h3>

                <div className="space-y-6">
                  <InputBox
                    label="Home Price"
                    value={homePrice}
                    setValue={setHomePrice}
                    min={1000}
                    max={100000000}
                    step="1000"
                    inputMode="numeric"
                  />

                  <InputBox
                    label="Down Payment"
                    value={downPayment}
                    setValue={setDownPayment}
                    min={0}
                    max={100000000}
                    step="1000"
                    inputMode="numeric"
                    helpText="Enter 0 when estimating a no-down-payment mortgage."
                  />

                  <InputBox
                    label="Financed Loan Costs"
                    value={financedCosts}
                    setValue={setFinancedCosts}
                    min={0}
                    max={10000000}
                    step="100"
                    inputMode="numeric"
                    helpText="Optional. For example, enter a financed VA funding fee. Enter 0 if none."
                  />

                  <InputBox
                    label="Interest Rate (%)"
                    value={interestRate}
                    setValue={setInterestRate}
                    min={0}
                    max={30}
                    step="0.01"
                    inputMode="decimal"
                  />

                  <InputBox
                    label="Loan Term (Years)"
                    value={loanTerm}
                    setValue={setLoanTerm}
                    min={1}
                    max={50}
                    step="1"
                    inputMode="numeric"
                  />
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Estimated taxes, insurance, and fees
                </h3>

                <p className="mb-5 text-sm leading-6 text-slate-600">
                  These optional amounts help estimate a
                  more complete monthly housing cost.
                  Enter 0 when a cost does not apply.
                </p>

                <div className="space-y-6">
                  <InputBox
                    label="Annual Property Taxes"
                    value={annualPropertyTaxes}
                    setValue={setAnnualPropertyTaxes}
                    min={0}
                    max={5000000}
                    step="100"
                    inputMode="numeric"
                    helpText="Enter the estimated amount for one full year."
                  />

                  <InputBox
                    label="Annual Homeowners Insurance"
                    value={annualHomeownersInsurance}
                    setValue={
                      setAnnualHomeownersInsurance
                    }
                    min={0}
                    max={1000000}
                    step="100"
                    inputMode="numeric"
                    helpText="Enter the estimated premium for one full year."
                  />

                  <InputBox
                    label="Monthly Mortgage Insurance"
                    value={monthlyMortgageInsurance}
                    setValue={
                      setMonthlyMortgageInsurance
                    }
                    min={0}
                    max={100000}
                    step="1"
                    inputMode="decimal"
                    helpText="Enter 0 when mortgage insurance does not apply. VA loans generally do not require monthly mortgage insurance."
                  />

                  <InputBox
                    label="Monthly HOA Fees"
                    value={monthlyHoaFees}
                    setValue={setMonthlyHoaFees}
                    min={0}
                    max={100000}
                    step="1"
                    inputMode="decimal"
                    helpText="Enter 0 when the property has no HOA fee."
                  />

                  <InputBox
                    label="Other Monthly Housing Costs"
                    value={otherMonthlyCosts}
                    setValue={setOtherMonthlyCosts}
                    min={0}
                    max={100000}
                    step="1"
                    inputMode="decimal"
                    helpText="Optional. Use for recurring housing costs you want included in the estimate."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RESULTS */}

          <div className="w-full self-start overflow-hidden rounded-3xl bg-blue-700 p-6 text-white shadow-sm md:p-8 lg:sticky lg:top-6">
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
                Estimated Total Monthly Housing Cost
              </p>

              <p
                className="break-words text-4xl font-bold sm:text-5xl"
                aria-live="polite"
                aria-atomic="true"
              >
                {hasValidResults
                  ? money(estimatedTotalMonthlyCost)
                  : "—"}
              </p>
            </div>

            <div className="grid gap-4">
              <Result
                label="Principal & Interest"
                value={
                  hasValidResults
                    ? money(monthlyPrincipalAndInterest)
                    : "—"
                }
              />

              <Result
                label="Estimated Property Taxes"
                value={
                  hasValidResults
                    ? money(monthlyPropertyTaxes)
                    : "—"
                }
              />

              <Result
                label="Estimated Homeowners Insurance"
                value={
                  hasValidResults
                    ? money(
                        monthlyHomeownersInsurance,
                      )
                    : "—"
                }
              />

              <Result
                label="Mortgage Insurance"
                value={
                  hasValidResults
                    ? money(
                        numericMonthlyMortgageInsurance,
                      )
                    : "—"
                }
              />

              <Result
                label="HOA Fees"
                value={
                  hasValidResults
                    ? money(numericMonthlyHoaFees)
                    : "—"
                }
              />

              <Result
                label="Other Monthly Costs"
                value={
                  hasValidResults
                    ? money(numericOtherMonthlyCosts)
                    : "—"
                }
              />
            </div>

            <div className="mt-8 border-t border-white/30 pt-6">
              <h3 className="mb-5 text-lg font-bold">
                Loan summary
              </h3>

              <div className="grid gap-4">
                <Result
                  label="Estimated Loan Amount"
                  value={
                    hasValidResults
                      ? money(estimatedLoanAmount)
                      : "—"
                  }
                />

                <Result
                  label="Total Principal & Interest Paid"
                  value={
                    hasValidResults
                      ? money(
                          totalPrincipalAndInterestPaid,
                        )
                      : "—"
                  }
                />

                <Result
                  label="Total Interest Paid"
                  value={
                    hasValidResults
                      ? money(totalInterestPaid)
                      : "—"
                  }
                />

                <Result
                  label="Estimated Taxes, Insurance & Other Costs Over Loan Term"
                  value={
                    hasValidResults
                      ? money(
                          estimatedOtherHousingCostsOverLoanTerm,
                        )
                      : "—"
                  }
                />

                <Result
                  label="Estimated Total Housing Cost Over Loan Term"
                  value={
                    hasValidResults
                      ? money(
                          estimatedTotalHousingCostOverLoanTerm,
                        )
                      : "—"
                  }
                />
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-blue-100">
              The total monthly estimate includes only
              the amounts entered above. Long-term totals
              assume the entered taxes, insurance, HOA
              fees, and other monthly costs remain
              unchanged for the full loan term. Actual
              costs may rise or fall over time. Utilities,
              maintenance, repairs, and most closing costs
              are not included.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL SECTION */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Understanding Mortgage Payments
          </h2>

          <p className="mb-4 leading-relaxed text-slate-600">
            Monthly principal and interest are only part
            of the possible cost of owning a home.
            Property taxes, homeowners insurance,
            mortgage insurance when applicable, HOA
            fees, and other recurring expenses may
            increase the total amount paid each month.
          </p>

          <p className="mb-4 leading-relaxed text-slate-600">
            A financed fee or other amount added to the
            loan balance may also increase the monthly
            principal-and-interest payment and total
            interest cost.
          </p>

          <p className="text-sm leading-6 text-slate-500">
            MYLOANPREVIEW provides educational estimates
            only and is not a lender, broker, or financial
            advisor. Actual rates, loan approvals, taxes,
            insurance, escrow amounts, fees, and loan
            terms may vary.
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
                Estimate monthly car payments, loan
                costs, and affordability.
              </p>
            </a>

            <a
              href="/personal-loan-calculator"
              className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)]"
            >
              <div
                className="mb-5 text-5xl"
                aria-hidden="true"
              >
                💳
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                Personal Loan Calculator
              </h3>

              <p className="leading-relaxed text-slate-600">
                Estimate personal loan payments, total
                interest, and repayment costs.
              </p>
            </a>
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
  helpText,
}: {
  label: string;
  value: NumericInputValue;
  setValue: (value: NumericInputValue) => void;
  step?: string;
  min?: number;
  max?: number;
  inputMode?: "decimal" | "numeric";
  helpText?: string;
}) {
  const inputId = useId();
  const helpId = `${inputId}-help`;

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
