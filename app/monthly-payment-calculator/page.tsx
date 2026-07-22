"use client";

import {
  type ChangeEvent,
  useId,
  useRef,
  useState,
} from "react";
import { trackCalculatorUse } from "../lib/analytics";

type NumericInputValue = number | "";

function numericValue(
  value: NumericInputValue,
): number {
  return value === "" ? 0 : value;
}

function validateMonthlyPaymentInputs({
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

  if (
    loanAmount < 1 ||
    loanAmount > 5000000
  ) {
    return "Loan amount must be between $1 and $5,000,000.";
  }

  if (interestRate === "") {
    return "Enter an interest rate.";
  }

  if (
    interestRate < 0 ||
    interestRate > 100
  ) {
    return "Interest rate must be between 0% and 100%.";
  }

  if (loanTerm === "") {
    return "Enter a loan term.";
  }

  if (
    !Number.isInteger(loanTerm) ||
    loanTerm < 1 ||
    loanTerm > 480
  ) {
    return "Loan term must be a whole number from 1 to 480 months.";
  }

  return null;
}

export default function MonthlyPaymentCalculator() {
  const [loanAmount, setLoanAmount] =
    useState<NumericInputValue>(25000);

  const [interestRate, setInterestRate] =
    useState<NumericInputValue>(6.5);

  const [loanTerm, setLoanTerm] =
    useState<NumericInputValue>(60);

  const validationMessage =
    validateMonthlyPaymentInputs({
      loanAmount,
      interestRate,
      loanTerm,
    });

  const numericLoanAmount =
    numericValue(loanAmount);

  const numericInterestRate =
    numericValue(interestRate);

  const numericLoanTerm =
    numericValue(loanTerm);

  const monthlyInterestRate =
    numericInterestRate / 100 / 12;

  const calculatedMonthlyPayment =
    validationMessage !== null
      ? 0
      : monthlyInterestRate === 0
        ? numericLoanAmount / numericLoanTerm
        : (numericLoanAmount *
            monthlyInterestRate *
            Math.pow(
              1 + monthlyInterestRate,
              numericLoanTerm,
            )) /
          (Math.pow(
            1 + monthlyInterestRate,
            numericLoanTerm,
          ) -
            1);

  const calculatedTotalPaid =
    calculatedMonthlyPayment * numericLoanTerm;

  const calculatedTotalInterest =
    calculatedTotalPaid - numericLoanAmount;

  const hasValidResults =
    validationMessage === null &&
    Number.isFinite(calculatedMonthlyPayment) &&
    Number.isFinite(calculatedTotalPaid) &&
    Number.isFinite(calculatedTotalInterest) &&
    calculatedMonthlyPayment >= 0 &&
    calculatedTotalPaid >= 0 &&
    calculatedTotalInterest >= 0;

  const monthlyPayment = hasValidResults
    ? calculatedMonthlyPayment
    : 0;

  const totalPaid = hasValidResults
    ? calculatedTotalPaid
    : 0;

  const totalInterest = hasValidResults
    ? calculatedTotalInterest
    : 0;

  const resultMessage =
    validationMessage ??
    (hasValidResults
      ? null
      : "We could not calculate a reliable estimate from these values. Review the loan amount, interest rate, and loan term and try again.");

  const money = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const hasTrackedCalculatorUse = useRef(false);

  function handleCalculatorInteraction(): void {
    if (hasTrackedCalculatorUse.current) {
      return;
    }

    hasTrackedCalculatorUse.current = true;
    trackCalculatorUse("monthly_payment");
  }

  return (
    <main
      className="min-h-screen bg-slate-100 text-slate-900"
      onChangeCapture={handleCalculatorInteraction}
    >
      <section className="mx-auto max-w-7xl overflow-x-hidden px-4 py-16 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-wide text-blue-700">
            Loan Payment Estimate
          </p>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Monthly Payment Calculator
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Estimate a possible monthly loan payment,
            total repayment amount, and total interest
            using the loan amount, APR, and repayment
            term entered below.
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
                min={1}
                max={5000000}
                step="100"
                inputMode="decimal"
                required
                helpText="Enter the amount that would be borrowed. Do not include fees unless they would be financed as part of the loan."
              />

              <InputBox
                label="Interest Rate / APR (%)"
                value={interestRate}
                setValue={setInterestRate}
                min={0}
                max={100}
                step="0.01"
                inputMode="decimal"
                required
                helpText="Enter an estimated annual percentage rate. Enter 0 when estimating a zero-interest loan."
              />

              <InputBox
                label="Loan Term (Months)"
                value={loanTerm}
                setValue={setLoanTerm}
                min={1}
                max={480}
                step="1"
                inputMode="numeric"
                required
                helpText="Enter the full repayment term in months. For example, five years equals 60 months."
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              These input limits are calculator
              safeguards. They do not represent lender
              approval requirements, available loan
              amounts, guaranteed rates, or guaranteed
              repayment terms.
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

            <p className="mt-6 text-sm leading-6 text-blue-100">
              This estimate assumes fixed monthly
              payments for the full term and no additional
              payments. It does not automatically include
              origination fees, late fees, insurance,
              taxes, or other possible borrowing costs.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL SECTION */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold">
            How Monthly Loan Payments Are Estimated
          </h2>

          <p className="mb-4 leading-relaxed text-slate-600">
            For a fixed-rate installment loan, the
            estimated monthly payment is calculated using
            the amount borrowed, monthly interest rate,
            and number of monthly payments.
          </p>

          <p className="mb-4 leading-relaxed text-slate-600">
            A longer term may reduce the monthly payment,
            but it can increase the total interest paid.
            A shorter term may increase the monthly
            payment while reducing total interest.
          </p>

          <p className="mb-4 leading-relaxed text-slate-600">
            For a 0% interest estimate, the calculator
            divides the loan amount evenly across the
            entered number of months.
          </p>

          <p className="text-sm leading-6 text-slate-500">
            MYLOANPREVIEW provides educational estimates
            only and is not a lender, broker, credit
            repair company, or financial advisor. Actual
            payments, fees, rates, approval decisions,
            and loan terms may vary.
          </p>
        </div>
      </section>

      {/* INTERNAL LINKS */}

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Explore Other Calculators
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
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
                Estimate vehicle payments using trade-in
                equity, taxes, fees, APR, and loan term.
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
                Estimate possible personal-loan payments
                and total borrowing costs.
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
                Estimate principal, interest, taxes,
                insurance, and other possible housing
                costs.
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

      <span className="break-words text-right font-bold text-white">
        {value}
      </span>
    </div>
  );
}