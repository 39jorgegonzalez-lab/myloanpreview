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

function validateAutoLoanInputs({
  vehiclePrice,
  downPayment,
  tradeInValue,
  tradeInPayoff,
  estimatedSalesTax,
  otherFinancedFees,
  interestRate,
  loanTerm,
}: {
  vehiclePrice: NumericInputValue;
  downPayment: NumericInputValue;
  tradeInValue: NumericInputValue;
  tradeInPayoff: NumericInputValue;
  estimatedSalesTax: NumericInputValue;
  otherFinancedFees: NumericInputValue;
  interestRate: NumericInputValue;
  loanTerm: NumericInputValue;
}): string | null {
  if (vehiclePrice === "") {
    return "Enter a vehicle price.";
  }

  if (vehiclePrice < 500) {
    return "Vehicle price must be at least $500.";
  }

  if (vehiclePrice > 5000000) {
    return "Vehicle price must be $5,000,000 or less.";
  }

  if (
    downPayment !== "" &&
    (downPayment < 0 || downPayment > 5000000)
  ) {
    return "Down payment must be between $0 and $5,000,000.";
  }

  if (
    tradeInValue !== "" &&
    (tradeInValue < 0 || tradeInValue > 5000000)
  ) {
    return "Trade-in value must be between $0 and $5,000,000.";
  }

  if (
    tradeInPayoff !== "" &&
    (tradeInPayoff < 0 || tradeInPayoff > 5000000)
  ) {
    return "Trade-in payoff must be between $0 and $5,000,000.";
  }

  if (
    estimatedSalesTax !== "" &&
    (estimatedSalesTax < 0 ||
      estimatedSalesTax > 1000000)
  ) {
    return "Estimated sales tax must be between $0 and $1,000,000.";
  }

  if (
    otherFinancedFees !== "" &&
    (otherFinancedFees < 0 ||
      otherFinancedFees > 250000)
  ) {
    return "Other financed fees must be between $0 and $250,000.";
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

export default function AutoLoanCalculator() {
  const [vehiclePrice, setVehiclePrice] =
    useState<NumericInputValue>(30000);
  const [downPayment, setDownPayment] =
    useState<NumericInputValue>(3000);
  const [tradeInValue, setTradeInValue] =
    useState<NumericInputValue>("");
  const [tradeInPayoff, setTradeInPayoff] =
    useState<NumericInputValue>("");
  const [estimatedSalesTax, setEstimatedSalesTax] =
    useState<NumericInputValue>("");
  const [otherFinancedFees, setOtherFinancedFees] =
    useState<NumericInputValue>("");
  const [interestRate, setInterestRate] =
    useState<NumericInputValue>(6.5);
  const [loanTerm, setLoanTerm] =
    useState<NumericInputValue>(60);

  const validationMessage =
    validateAutoLoanInputs({
      vehiclePrice,
      downPayment,
      tradeInValue,
      tradeInPayoff,
      estimatedSalesTax,
      otherFinancedFees,
      interestRate,
      loanTerm,
    });

  const numericVehiclePrice =
    numericValue(vehiclePrice);
  const numericDownPayment =
    numericValue(downPayment);
  const numericTradeInValue =
    numericValue(tradeInValue);
  const numericTradeInPayoff =
    numericValue(tradeInPayoff);
  const numericEstimatedSalesTax =
    numericValue(estimatedSalesTax);
  const numericOtherFinancedFees =
    numericValue(otherFinancedFees);
  const numericInterestRate =
    numericValue(interestRate);
  const numericLoanTerm =
    numericValue(loanTerm);

  const netTradeInEquity =
    numericTradeInValue - numericTradeInPayoff;

  const estimatedAmountFinanced = Math.max(
    numericVehiclePrice +
      numericEstimatedSalesTax +
      numericOtherFinancedFees -
      numericDownPayment -
      netTradeInEquity,
    0,
  );

  const monthlyRate =
    numericInterestRate / 100 / 12;

  const calculatedMonthlyPayment =
    validationMessage !== null
      ? 0
      : estimatedAmountFinanced === 0
        ? 0
        : monthlyRate === 0
          ? estimatedAmountFinanced /
            numericLoanTerm
          : (estimatedAmountFinanced *
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
    Number.isFinite(estimatedAmountFinanced) &&
    Number.isFinite(netTradeInEquity) &&
    Number.isFinite(calculatedMonthlyPayment) &&
    calculatedMonthlyPayment >= 0;

  const monthlyPayment = hasValidResults
    ? calculatedMonthlyPayment
    : 0;

  const totalPaid = hasValidResults
    ? monthlyPayment * numericLoanTerm
    : 0;

  const totalInterest = hasValidResults
    ? Math.max(
        totalPaid - estimatedAmountFinanced,
        0,
      )
    : 0;

  const resultMessage =
    validationMessage ??
    (hasValidResults
      ? null
      : "We could not calculate a reliable estimate from these values. Review the vehicle and loan details and try again.");

  const zeroFinancingMessage =
    hasValidResults &&
    estimatedAmountFinanced === 0
      ? "The entered down payment and trade-in equity cover the estimated vehicle cost, taxes, and financed fees. The estimated amount financed is $0.00."
      : null;

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
    trackCalculatorUse("auto_loan");
  }

  return (
    <main
      className="min-h-screen bg-slate-100 text-slate-900"
      onChangeCapture={handleCalculatorInteraction}
    >
      <section className="mx-auto max-w-7xl overflow-x-hidden px-4 py-16 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-wide text-blue-700">
            Auto Loan Estimate
          </p>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Auto Loan Calculator
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Estimate a possible monthly vehicle payment
            using the purchase price, down payment,
            trade-in equity, taxes, financed fees, APR,
            and loan term.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* INPUTS */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Enter Vehicle and Loan Details
            </h2>

            <div className="space-y-6">
              <h3 className="text-lg font-bold">
                Vehicle and trade-in
              </h3>

              <InputBox
                label="Vehicle Price"
                value={vehiclePrice}
                setValue={setVehiclePrice}
                min={500}
                max={5000000}
                step="100"
                inputMode="decimal"
                required
              />

              <InputBox
                label="Down Payment"
                value={downPayment}
                setValue={setDownPayment}
                min={0}
                max={5000000}
                step="100"
                inputMode="decimal"
                helpText="Enter 0 or leave blank when no cash down payment applies."
              />

              <InputBox
                label="Trade-In Value"
                value={tradeInValue}
                setValue={setTradeInValue}
                min={0}
                max={5000000}
                step="100"
                inputMode="decimal"
                helpText="Optional. Enter the estimated vehicle trade-in allowance."
              />

              <InputBox
                label="Amount Owed on Trade-In"
                value={tradeInPayoff}
                setValue={setTradeInPayoff}
                min={0}
                max={5000000}
                step="100"
                inputMode="decimal"
                helpText="Optional. Enter the remaining payoff on the vehicle being traded."
              />

              <div className="border-t border-slate-200 pt-6">
                <h3 className="mb-6 text-lg font-bold">
                  Taxes, fees, and financing
                </h3>

                <div className="space-y-6">
                  <InputBox
                    label="Estimated Sales Tax"
                    value={estimatedSalesTax}
                    setValue={setEstimatedSalesTax}
                    min={0}
                    max={1000000}
                    step="1"
                    inputMode="decimal"
                    helpText="Optional. Sales-tax rules vary by location and trade-in treatment. Use a dealer or government estimate when available."
                  />

                  <InputBox
                    label="Other Financed Fees"
                    value={otherFinancedFees}
                    setValue={setOtherFinancedFees}
                    min={0}
                    max={250000}
                    step="1"
                    inputMode="decimal"
                    helpText="Optional. Include only title, registration, dealer, warranty, or other costs that would be added to the loan."
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
                  />

                  <InputBox
                    label="Loan Term (Months)"
                    value={loanTerm}
                    setValue={setLoanTerm}
                    min={1}
                    max={120}
                    step="1"
                    inputMode="numeric"
                    required
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              These input limits are calculator
              safeguards. They do not represent lender
              approval requirements, available vehicle
              prices, or guaranteed loan terms.
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

            {zeroFinancingMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-blue-50"
              >
                {zeroFinancingMessage}
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
                label="Estimated Amount Financed"
                value={
                  hasValidResults
                    ? money(estimatedAmountFinanced)
                    : "—"
                }
              />

              <Result
                label="Net Trade-In Equity"
                value={
                  hasValidResults
                    ? money(netTradeInEquity)
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
              Positive trade-in equity reduces the
              estimated amount financed. Negative equity
              increases it. The estimate includes only
              the taxes and fees entered above and does
              not include vehicle insurance, fuel,
              maintenance, repairs, or future
              registration costs.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL SECTION */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Understanding Auto Loan Payments
          </h2>

          <p className="mb-4 leading-relaxed text-slate-600">
            Auto loan payments may depend on the vehicle
            price, down payment, trade-in equity,
            remaining trade-in payoff, financed taxes and
            fees, interest rate, and repayment term.
            Larger down payments and positive trade-in
            equity generally reduce the amount financed.
          </p>

          <p className="mb-4 leading-relaxed text-slate-600">
            Sales-tax treatment varies by state and
            locality. Some jurisdictions may apply tax
            before or after a trade-in allowance. For a
            more accurate estimate, enter the sales-tax
            amount supplied by a dealer or applicable
            government source.
          </p>

          <p className="text-sm leading-6 text-slate-500">
            MYLOANPREVIEW provides educational estimates
            only and is not a lender, dealer, broker,
            credit repair company, or financial advisor.
            Actual prices, rates, taxes, fees, approval
            decisions, and loan terms may vary.
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
                Estimate possible monthly payments and
                total borrowing costs for a personal
                loan.
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

      <span className="break-words text-right font-bold">
        {value}
      </span>
    </div>
  );
}