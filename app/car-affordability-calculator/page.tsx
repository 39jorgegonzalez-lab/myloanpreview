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

function validateCarAffordabilityInputs({
  grossMonthlyIncome,
  monthlyExpenses,
  monthlySafetyCushion,
  vehicleBudgetShare,
  estimatedMonthlyVehicleCosts,
  downPayment,
  estimatedSalesTaxRate,
  otherFinancedFees,
  interestRate,
  loanTerm,
}: {
  grossMonthlyIncome: NumericInputValue;
  monthlyExpenses: NumericInputValue;
  monthlySafetyCushion: NumericInputValue;
  vehicleBudgetShare: NumericInputValue;
  estimatedMonthlyVehicleCosts: NumericInputValue;
  downPayment: NumericInputValue;
  estimatedSalesTaxRate: NumericInputValue;
  otherFinancedFees: NumericInputValue;
  interestRate: NumericInputValue;
  loanTerm: NumericInputValue;
}): string | null {
  if (grossMonthlyIncome === "") {
    return "Enter your gross monthly income.";
  }

  if (
    grossMonthlyIncome < 500 ||
    grossMonthlyIncome > 1000000
  ) {
    return "Gross monthly income must be between $500 and $1,000,000.";
  }

  if (monthlyExpenses === "") {
    return "Enter your monthly expenses and existing debt payments.";
  }

  if (
    monthlyExpenses < 0 ||
    monthlyExpenses > 1000000
  ) {
    return "Monthly expenses must be between $0 and $1,000,000.";
  }

  if (
    monthlySafetyCushion !== "" &&
    (monthlySafetyCushion < 0 ||
      monthlySafetyCushion > 1000000)
  ) {
    return "Monthly safety cushion must be between $0 and $1,000,000.";
  }

  if (vehicleBudgetShare === "") {
    return "Enter a vehicle budget percentage.";
  }

  if (
    vehicleBudgetShare < 0 ||
    vehicleBudgetShare > 100
  ) {
    return "Vehicle budget percentage must be between 0% and 100%.";
  }

  if (
    estimatedMonthlyVehicleCosts !== "" &&
    (estimatedMonthlyVehicleCosts < 0 ||
      estimatedMonthlyVehicleCosts > 100000)
  ) {
    return "Estimated monthly vehicle costs must be between $0 and $100,000.";
  }

  if (
    downPayment !== "" &&
    (downPayment < 0 ||
      downPayment > 5000000)
  ) {
    return "Down payment or trade-in equity must be between $0 and $5,000,000.";
  }

  if (
    estimatedSalesTaxRate !== "" &&
    (estimatedSalesTaxRate < 0 ||
      estimatedSalesTaxRate > 25)
  ) {
    return "Estimated sales tax rate must be between 0% and 25%.";
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
    loanTerm > 120
  ) {
    return "Loan term must be a whole number from 1 to 120 months.";
  }

  return null;
}

export default function CarAffordabilityCalculator() {
  const [grossMonthlyIncome, setGrossMonthlyIncome] =
    useState<NumericInputValue>(6000);

  const [monthlyExpenses, setMonthlyExpenses] =
    useState<NumericInputValue>(2500);

  const [monthlySafetyCushion, setMonthlySafetyCushion] =
    useState<NumericInputValue>("");

  const [vehicleBudgetShare, setVehicleBudgetShare] =
    useState<NumericInputValue>(15);

  const [
    estimatedMonthlyVehicleCosts,
    setEstimatedMonthlyVehicleCosts,
  ] = useState<NumericInputValue>("");

  const [downPayment, setDownPayment] =
    useState<NumericInputValue>(5000);

  const [
    estimatedSalesTaxRate,
    setEstimatedSalesTaxRate,
  ] = useState<NumericInputValue>("");

  const [otherFinancedFees, setOtherFinancedFees] =
    useState<NumericInputValue>("");

  const [interestRate, setInterestRate] =
    useState<NumericInputValue>(6.5);

  const [loanTerm, setLoanTerm] =
    useState<NumericInputValue>(60);

  const validationMessage =
    validateCarAffordabilityInputs({
      grossMonthlyIncome,
      monthlyExpenses,
      monthlySafetyCushion,
      vehicleBudgetShare,
      estimatedMonthlyVehicleCosts,
      downPayment,
      estimatedSalesTaxRate,
      otherFinancedFees,
      interestRate,
      loanTerm,
    });

  const numericGrossMonthlyIncome =
    numericValue(grossMonthlyIncome);

  const numericMonthlyExpenses =
    numericValue(monthlyExpenses);

  const numericMonthlySafetyCushion =
    numericValue(monthlySafetyCushion);

  const numericVehicleBudgetShare =
    numericValue(vehicleBudgetShare);

  const numericEstimatedMonthlyVehicleCosts =
    numericValue(estimatedMonthlyVehicleCosts);

  const numericDownPayment =
    numericValue(downPayment);

  const numericEstimatedSalesTaxRate =
    numericValue(estimatedSalesTaxRate);

  const numericOtherFinancedFees =
    numericValue(otherFinancedFees);

  const numericInterestRate =
    numericValue(interestRate);

  const numericLoanTerm =
    numericValue(loanTerm);

  const remainingMonthlyCashFlow = Math.max(
    numericGrossMonthlyIncome -
      numericMonthlyExpenses -
      numericMonthlySafetyCushion,
    0,
  );

  const plannedTotalMonthlyVehicleBudget =
    remainingMonthlyCashFlow *
    (numericVehicleBudgetShare / 100);

  const estimatedMonthlyLoanPaymentBudget =
    Math.max(
      plannedTotalMonthlyVehicleBudget -
        numericEstimatedMonthlyVehicleCosts,
      0,
    );

  const monthlyInterestRate =
    numericInterestRate / 100 / 12;

  const calculatedLoanAmount =
    validationMessage !== null
      ? 0
      : estimatedMonthlyLoanPaymentBudget === 0
        ? 0
        : monthlyInterestRate === 0
          ? estimatedMonthlyLoanPaymentBudget *
            numericLoanTerm
          : estimatedMonthlyLoanPaymentBudget *
            ((1 -
              Math.pow(
                1 + monthlyInterestRate,
                -numericLoanTerm,
              )) /
              monthlyInterestRate);

  const amountAvailableForVehicleAndTax =
    Math.max(
      calculatedLoanAmount +
        numericDownPayment -
        numericOtherFinancedFees,
      0,
    );

  const salesTaxMultiplier =
    1 + numericEstimatedSalesTaxRate / 100;

  const calculatedAffordableVehiclePrice =
    validationMessage !== null
      ? 0
      : amountAvailableForVehicleAndTax /
        salesTaxMultiplier;

  const calculatedSalesTaxAmount =
    calculatedAffordableVehiclePrice *
    (numericEstimatedSalesTaxRate / 100);

  const hasValidResults =
    validationMessage === null &&
    Number.isFinite(remainingMonthlyCashFlow) &&
    Number.isFinite(
      plannedTotalMonthlyVehicleBudget,
    ) &&
    Number.isFinite(
      estimatedMonthlyLoanPaymentBudget,
    ) &&
    Number.isFinite(calculatedLoanAmount) &&
    Number.isFinite(
      calculatedAffordableVehiclePrice,
    ) &&
    Number.isFinite(calculatedSalesTaxAmount) &&
    remainingMonthlyCashFlow >= 0 &&
    plannedTotalMonthlyVehicleBudget >= 0 &&
    estimatedMonthlyLoanPaymentBudget >= 0 &&
    calculatedLoanAmount >= 0 &&
    calculatedAffordableVehiclePrice >= 0 &&
    calculatedSalesTaxAmount >= 0;

  const estimatedLoanAmount = hasValidResults
    ? calculatedLoanAmount
    : 0;

  const estimatedAffordableVehiclePrice =
    hasValidResults
      ? calculatedAffordableVehiclePrice
      : 0;

  const estimatedSalesTaxAmount =
    hasValidResults
      ? calculatedSalesTaxAmount
      : 0;

  const resultMessage =
    validationMessage ??
    (hasValidResults
      ? null
      : "We could not calculate a reliable estimate from these values. Review the income, expenses, and financing details and try again.");

  const zeroLoanBudgetMessage =
    hasValidResults &&
    estimatedMonthlyLoanPaymentBudget === 0
      ? remainingMonthlyCashFlow === 0
        ? "No remaining monthly cash flow is available after the entered expenses and safety cushion. The estimated vehicle price reflects only the down payment or trade-in equity entered."
        : "The estimated monthly insurance, fuel, and maintenance costs use the planned vehicle budget, leaving $0.00 for a monthly loan payment. The estimated vehicle price reflects only the down payment or trade-in equity entered."
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
    trackCalculatorUse("car_affordability");
  }

  return (
    <main
      className="min-h-screen bg-slate-100 text-slate-900"
      onChangeCapture={handleCalculatorInteraction}
    >
      <section className="mx-auto max-w-7xl overflow-x-hidden px-4 py-16 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-wide text-blue-700">
            Vehicle Budget Estimator
          </p>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Car Affordability Calculator
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Preview a possible vehicle price using your
            remaining monthly cash flow, selected budget
            percentage, estimated ownership costs, down
            payment, taxes, fees, APR, and loan term.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* INPUTS */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Enter Budget and Financing Details
            </h2>

            <div className="space-y-6">
              <h3 className="text-lg font-bold">
                Monthly budget
              </h3>

              <InputBox
                label="Gross Monthly Income"
                value={grossMonthlyIncome}
                setValue={setGrossMonthlyIncome}
                min={500}
                max={1000000}
                step="100"
                inputMode="decimal"
                required
                helpText="Enter income before taxes and other payroll deductions."
              />

              <InputBox
                label="Monthly Expenses and Existing Debt Payments"
                value={monthlyExpenses}
                setValue={setMonthlyExpenses}
                min={0}
                max={1000000}
                step="100"
                inputMode="decimal"
                required
                helpText="Include housing, debts, utilities, and recurring commitments. Exclude the future vehicle payment and vehicle costs entered separately below."
              />

              <InputBox
                label="Monthly Safety Cushion"
                value={monthlySafetyCushion}
                setValue={setMonthlySafetyCushion}
                min={0}
                max={1000000}
                step="50"
                inputMode="decimal"
                helpText="Optional. Reserve an amount that should remain after expenses before calculating a vehicle budget."
              />

              <InputBox
                label="Vehicle Budget Share of Remaining Cash Flow (%)"
                value={vehicleBudgetShare}
                setValue={setVehicleBudgetShare}
                min={0}
                max={100}
                step="0.1"
                inputMode="decimal"
                required
                helpText="This is your selected planning percentage, not a lender rule or recommendation. The default is 15%."
              />

              <InputBox
                label="Estimated Monthly Insurance, Fuel, and Maintenance"
                value={estimatedMonthlyVehicleCosts}
                setValue={
                  setEstimatedMonthlyVehicleCosts
                }
                min={0}
                max={100000}
                step="25"
                inputMode="decimal"
                helpText="Optional. These costs are subtracted from the planned total vehicle budget before estimating the available loan payment."
              />

              <div className="border-t border-slate-200 pt-6">
                <h3 className="mb-6 text-lg font-bold">
                  Purchase and financing
                </h3>

                <div className="space-y-6">
                  <InputBox
                    label="Down Payment or Trade-In Equity"
                    value={downPayment}
                    setValue={setDownPayment}
                    min={0}
                    max={5000000}
                    step="100"
                    inputMode="decimal"
                    helpText="Optional. Enter cash down payment plus positive trade-in equity. Enter 0 or leave blank when none applies."
                  />

                  <InputBox
                    label="Estimated Sales Tax Rate (%)"
                    value={estimatedSalesTaxRate}
                    setValue={
                      setEstimatedSalesTaxRate
                    }
                    min={0}
                    max={25}
                    step="0.01"
                    inputMode="decimal"
                    helpText="Optional. Tax rules vary by location. Use a dealer or government estimate when available."
                  />

                  <InputBox
                    label="Other Financed Fees"
                    value={otherFinancedFees}
                    setValue={setOtherFinancedFees}
                    min={0}
                    max={250000}
                    step="1"
                    inputMode="decimal"
                    helpText="Optional. Include title, registration, dealer, warranty, or other costs that would be added to financing."
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
              These limits are calculator safeguards.
              They do not represent lender approval
              requirements, guaranteed affordability, or
              available financing terms.
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

            {zeroLoanBudgetMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-blue-50"
              >
                {zeroLoanBudgetMessage}
              </div>
            )}

            <div className="mb-6 rounded-2xl bg-white/10 p-6">
              <p className="mb-2 text-blue-100">
                Estimated Affordable Vehicle Price
              </p>

              <p
                className="break-words text-4xl font-bold sm:text-5xl"
                aria-live="polite"
                aria-atomic="true"
              >
                {hasValidResults
                  ? money(
                      estimatedAffordableVehiclePrice,
                    )
                  : "—"}
              </p>
            </div>

            <div className="grid gap-4">
              <Result
                label="Remaining Monthly Cash Flow"
                value={
                  hasValidResults
                    ? money(remainingMonthlyCashFlow)
                    : "—"
                }
              />

              <Result
                label="Planned Total Monthly Vehicle Budget"
                value={
                  hasValidResults
                    ? money(
                        plannedTotalMonthlyVehicleBudget,
                      )
                    : "—"
                }
              />

              <Result
                label="Estimated Monthly Loan Payment Budget"
                value={
                  hasValidResults
                    ? money(
                        estimatedMonthlyLoanPaymentBudget,
                      )
                    : "—"
                }
              />

              <Result
                label="Estimated Loan Amount"
                value={
                  hasValidResults
                    ? money(estimatedLoanAmount)
                    : "—"
                }
              />

              <Result
                label="Down Payment or Trade-In Equity"
                value={
                  hasValidResults
                    ? money(numericDownPayment)
                    : "—"
                }
              />

              <Result
                label="Estimated Sales Tax Included"
                value={
                  hasValidResults
                    ? money(estimatedSalesTaxAmount)
                    : "—"
                }
              />

              <Result
                label="Other Financed Fees"
                value={
                  hasValidResults
                    ? money(numericOtherFinancedFees)
                    : "—"
                }
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-blue-100">
              The vehicle-price estimate is based only on
              the values entered above. It is not a lender
              affordability decision or approval preview.
              Insurance, fuel, maintenance, and repairs are
              included only when entered in the monthly
              vehicle-cost field.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL SECTION */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold">
            How This Vehicle Budget Estimate Works
          </h2>

          <p className="mb-4 leading-relaxed text-slate-600">
            The calculator first subtracts monthly
            expenses and the optional safety cushion from
            gross monthly income. It then applies the
            vehicle-budget percentage you selected to the
            remaining monthly cash flow.
          </p>

          <p className="mb-4 leading-relaxed text-slate-600">
            Estimated insurance, fuel, and maintenance
            costs are subtracted from that total vehicle
            budget. The remaining amount becomes the
            estimated monthly loan-payment budget used to
            calculate a possible loan amount.
          </p>

          <p className="mb-4 leading-relaxed text-slate-600">
            The estimated vehicle price then accounts for
            the down payment or trade-in equity, entered
            sales-tax rate, and financed fees. Actual tax
            treatment and purchase costs vary by location
            and transaction.
          </p>

          <p className="text-sm leading-6 text-slate-500">
            MYLOANPREVIEW provides educational estimates
            only and is not a lender, dealer, broker,
            credit repair company, or financial advisor.
            Actual affordability, approval decisions,
            rates, taxes, fees, insurance costs, and loan
            terms may vary.
          </p>
        </div>
      </section>

      {/* INTERNAL LINKS */}

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Explore Other Financial Tools
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
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
                Estimate payments using vehicle price,
                trade-in equity, taxes, fees, APR, and
                loan term.
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
                Estimate the percentage of gross monthly
                income used for monthly debt payments.
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

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              What does the vehicle budget percentage mean?
            </h2>

            <p className="leading-8 text-slate-700">
              It is the share of remaining monthly cash
              flow that you choose to reserve for total
              vehicle costs. The default 15% is only a
              calculator example and is not a lender rule,
              approval standard, or personal financial
              recommendation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              Why include insurance, fuel, and maintenance?
            </h2>

            <p className="leading-8 text-slate-700">
              A loan payment is only one part of vehicle
              ownership. Entering possible insurance,
              fuel, and maintenance costs reduces the
              amount reserved for a loan payment and may
              create a more cautious estimate.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              Does this estimate guarantee financing?
            </h2>

            <p className="leading-8 text-slate-700">
              No. This calculator provides an educational
              planning estimate. Lenders may consider
              credit history, debt, income verification,
              collateral, loan-to-value limits, and other
              information.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              Does using this calculator affect my credit score?
            </h2>

            <p className="leading-8 text-slate-700">
              No. The calculator does not request a credit
              report, perform a credit check, or submit a
              financing application.
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