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

function validateDebtToIncomeInputs({
  grossMonthlyIncome,
  monthlyHousingPayment,
  otherMonthlyDebtPayments,
  proposedNewMonthlyPayment,
}: {
  grossMonthlyIncome: NumericInputValue;
  monthlyHousingPayment: NumericInputValue;
  otherMonthlyDebtPayments: NumericInputValue;
  proposedNewMonthlyPayment: NumericInputValue;
}): string | null {
  if (grossMonthlyIncome === "") {
    return "Enter your gross monthly income.";
  }

  if (
    grossMonthlyIncome < 1 ||
    grossMonthlyIncome > 1000000
  ) {
    return "Gross monthly income must be between $1 and $1,000,000.";
  }

  if (
    monthlyHousingPayment !== "" &&
    (monthlyHousingPayment < 0 ||
      monthlyHousingPayment > 1000000)
  ) {
    return "Monthly housing payment must be between $0 and $1,000,000.";
  }

  if (
    otherMonthlyDebtPayments !== "" &&
    (otherMonthlyDebtPayments < 0 ||
      otherMonthlyDebtPayments > 1000000)
  ) {
    return "Other monthly debt payments must be between $0 and $1,000,000.";
  }

  if (
    proposedNewMonthlyPayment !== "" &&
    (proposedNewMonthlyPayment < 0 ||
      proposedNewMonthlyPayment > 1000000)
  ) {
    return "Proposed new monthly payment must be between $0 and $1,000,000.";
  }

  return null;
}

type DtiSignal = {
  label: string;
  guidance: string;
  panelClassName: string;
  labelClassName: string;
  valueClassName: string;
  dividerClassName: string;
};

function getProjectedDtiSignal({
  projectedDti,
  projectedMonthlyDebtPayments,
  grossMonthlyIncome,
}: {
  projectedDti: number;
  projectedMonthlyDebtPayments: number;
  grossMonthlyIncome: number;
}): DtiSignal {
  if (
    projectedMonthlyDebtPayments >
      grossMonthlyIncome ||
    projectedDti >= 100
  ) {
        return {
      label: "STOP AND REVIEW THIS SCENARIO",
      guidance:
        "Projected monthly debt exceeds gross monthly income. This scenario leaves no gross income remaining for taxes or ordinary living expenses. Test a smaller proposed payment or review the entered debt amounts before proceeding.",
      panelClassName:
        "border-4 border-red-950 bg-red-700 shadow-xl ring-4 ring-red-300",
      labelClassName: "text-white",
      valueClassName: "text-white",
      dividerClassName: "border-red-300",
    };
  }

  if (projectedDti > 50) {
    return {
      label: "Very high projected debt load",
      guidance:
        "More than half of gross monthly income would be assigned to the entered debt payments. Consider testing a smaller proposed payment and reviewing the monthly obligations.",
      panelClassName:
        "border-red-300 bg-red-50",
      labelClassName: "text-red-800",
      valueClassName: "text-red-950",
      dividerClassName: "border-red-200",
    };
  }

  if (projectedDti >= 45) {
    return {
      label: "High projected debt load",
      guidance:
        "The entered debts would use a large share of gross monthly income. Review the proposed payment and confirm that ordinary living expenses remain manageable.",
      panelClassName:
        "border-orange-300 bg-orange-50",
      labelClassName: "text-orange-800",
      valueClassName: "text-orange-950",
      dividerClassName: "border-orange-200",
    };
  }

  if (projectedDti >= 36) {
    return {
      label: "Elevated projected debt load",
      guidance:
        "The projected ratio deserves careful review. Consider comparing a smaller proposed payment or longer repayment term before making a borrowing decision.",
      panelClassName:
        "border-amber-300 bg-amber-50",
      labelClassName: "text-amber-900",
      valueClassName: "text-amber-950",
      dividerClassName: "border-amber-200",
    };
  }

  return {
    label: "Lower projected debt load",
    guidance:
      "The projected ratio is below the calculator’s elevated planning range. This does not guarantee affordability or lender approval.",
    panelClassName:
      "border-blue-300 bg-blue-600",
    labelClassName: "text-blue-100",
    valueClassName: "text-white",
    dividerClassName: "border-blue-400",
  };
}

export default function DebtToIncomeCalculator() {
  const [grossMonthlyIncome, setGrossMonthlyIncome] =
    useState<NumericInputValue>(6000);

  const [
    monthlyHousingPayment,
    setMonthlyHousingPayment,
  ] = useState<NumericInputValue>(1500);

  const [
    otherMonthlyDebtPayments,
    setOtherMonthlyDebtPayments,
  ] = useState<NumericInputValue>(500);

  const [
    proposedNewMonthlyPayment,
    setProposedNewMonthlyPayment,
  ] = useState<NumericInputValue>(500);

  const validationMessage =
    validateDebtToIncomeInputs({
      grossMonthlyIncome,
      monthlyHousingPayment,
      otherMonthlyDebtPayments,
      proposedNewMonthlyPayment,
    });

  const numericGrossMonthlyIncome =
    numericValue(grossMonthlyIncome);

  const numericMonthlyHousingPayment =
    numericValue(monthlyHousingPayment);

  const numericOtherMonthlyDebtPayments =
    numericValue(otherMonthlyDebtPayments);

  const numericProposedNewMonthlyPayment =
    numericValue(proposedNewMonthlyPayment);

  const currentMonthlyDebtPayments =
    numericMonthlyHousingPayment +
    numericOtherMonthlyDebtPayments;

  const projectedMonthlyDebtPayments =
    currentMonthlyDebtPayments +
    numericProposedNewMonthlyPayment;

  const calculatedCurrentDti =
    validationMessage === null
      ? (currentMonthlyDebtPayments /
          numericGrossMonthlyIncome) *
        100
      : 0;

  const calculatedProjectedDti =
    validationMessage === null
      ? (projectedMonthlyDebtPayments /
          numericGrossMonthlyIncome) *
        100
      : 0;

  const grossIncomeRemainingAfterCurrentDebt =
    numericGrossMonthlyIncome -
    currentMonthlyDebtPayments;

  const grossIncomeRemainingAfterProjectedDebt =
    numericGrossMonthlyIncome -
    projectedMonthlyDebtPayments;

  const hasValidResults =
    validationMessage === null &&
    Number.isFinite(currentMonthlyDebtPayments) &&
    Number.isFinite(projectedMonthlyDebtPayments) &&
    Number.isFinite(calculatedCurrentDti) &&
    Number.isFinite(calculatedProjectedDti) &&
    Number.isFinite(
      grossIncomeRemainingAfterCurrentDebt,
    ) &&
    Number.isFinite(
      grossIncomeRemainingAfterProjectedDebt,
    ) &&
    currentMonthlyDebtPayments >= 0 &&
    projectedMonthlyDebtPayments >= 0 &&
    calculatedCurrentDti >= 0 &&
    calculatedProjectedDti >= 0;

  const currentDti = hasValidResults
    ? calculatedCurrentDti
    : 0;

  const projectedDti = hasValidResults
    ? calculatedProjectedDti
    : 0;

  const resultMessage =
    validationMessage ??
    (hasValidResults
      ? null
      : "We could not calculate a reliable estimate from these values. Review the income and monthly debt payments and try again.");

    const projectedDtiSignal = hasValidResults
    ? getProjectedDtiSignal({
        projectedDti,
        projectedMonthlyDebtPayments,
        grossMonthlyIncome:
          numericGrossMonthlyIncome,
      })
    : null;

  const contextMessage =
    hasValidResults &&
    numericProposedNewMonthlyPayment === 0
      ? "No proposed new monthly payment is entered, so the current and projected DTI ratios are the same."
      : null;

  const money = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const percentage = (value: number) =>
    `${value.toFixed(1)}%`;

  const hasTrackedCalculatorUse = useRef(false);

  function handleCalculatorInteraction(): void {
    if (hasTrackedCalculatorUse.current) {
      return;
    }

    hasTrackedCalculatorUse.current = true;
    trackCalculatorUse("debt_to_income");
  }

  return (
    <main
      className="min-h-screen bg-slate-100 text-slate-900"
      onChangeCapture={handleCalculatorInteraction}
    >
      <section className="mx-auto max-w-7xl overflow-x-hidden px-4 py-16 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-wide text-blue-700">
            Debt-to-Income Ratio Estimate
          </p>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Debt-to-Income Calculator
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Estimate your current debt-to-income ratio
            and preview how a possible new monthly loan
            payment could change it.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* INPUTS */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Enter Monthly Financial Information
            </h2>

            <div className="space-y-6">
              <InputBox
                label="Gross Monthly Income"
                value={grossMonthlyIncome}
                setValue={setGrossMonthlyIncome}
                min={1}
                max={1000000}
                step="100"
                inputMode="decimal"
                required
                helpText="Enter income before taxes, insurance, retirement contributions, and other payroll deductions."
              />

              <InputBox
                label="Monthly Housing Payment"
                value={monthlyHousingPayment}
                setValue={setMonthlyHousingPayment}
                min={0}
                max={1000000}
                step="50"
                inputMode="decimal"
                helpText="Enter the monthly housing payment you want included in this estimate. Enter 0 or leave blank if none applies."
              />

              <InputBox
                label="Other Monthly Debt Payments"
                value={otherMonthlyDebtPayments}
                setValue={setOtherMonthlyDebtPayments}
                min={0}
                max={1000000}
                step="50"
                inputMode="decimal"
                helpText="Include recurring debt payments such as auto, student, personal-loan, and minimum credit-card payments. Lenders may calculate obligations differently."
              />

              <InputBox
                label="Proposed New Monthly Payment"
                value={proposedNewMonthlyPayment}
                setValue={setProposedNewMonthlyPayment}
                min={0}
                max={1000000}
                step="25"
                inputMode="decimal"
                helpText="Optional. Enter a possible new loan payment to preview a projected DTI ratio. Enter 0 or leave blank to view current DTI only."
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              These input limits are calculator
              safeguards. They do not represent lender
              approval rules, required income, acceptable
              debt levels, or guaranteed loan terms.
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

            {contextMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-blue-50"
              >
                {contextMessage}
              </div>
            )}

                        <div
              className={`mb-6 rounded-2xl border p-6 ${
                projectedDtiSignal
                  ? projectedDtiSignal.panelClassName
                  : "border-white/10 bg-white/10"
              }`}
            >
              <p
                className={`mb-2 ${
                  projectedDtiSignal
                    ? projectedDtiSignal.labelClassName
                    : "text-blue-100"
                }`}
              >
                Estimated Projected DTI Ratio
              </p>

              <p
                className={`break-words text-4xl font-bold sm:text-5xl ${
                  projectedDtiSignal
                    ? projectedDtiSignal.valueClassName
                    : "text-white"
                }`}
                aria-live="polite"
                aria-atomic="true"
              >
                {hasValidResults
                  ? percentage(projectedDti)
                  : "—"}
              </p>

              {projectedDtiSignal && (
                <div
                  className={`mt-5 border-t pt-4 ${projectedDtiSignal.dividerClassName}`}
                >
                  <p
                    className={`font-bold ${projectedDtiSignal.valueClassName}`}
                  >
                    {projectedDtiSignal.label}
                  </p>

                  <p
                    className={`mt-2 text-sm leading-6 ${projectedDtiSignal.valueClassName}`}
                  >
                    {projectedDtiSignal.guidance}
                  </p>

                  <p
                    className={`mt-2 text-xs leading-5 ${projectedDtiSignal.labelClassName}`}
                  >
                    Planning signal only. Lender
                    calculations and limits vary.
                  </p>
                </div>
              )}
            </div>

            <div className="grid gap-4">
              <Result
                label="Estimated Current DTI Ratio"
                value={
                  hasValidResults
                    ? percentage(currentDti)
                    : "—"
                }
              />

              <Result
                label="Gross Monthly Income"
                value={
                  hasValidResults
                    ? money(numericGrossMonthlyIncome)
                    : "—"
                }
              />

              <Result
                label="Current Monthly Debt Payments"
                value={
                  hasValidResults
                    ? money(currentMonthlyDebtPayments)
                    : "—"
                }
              />

              <Result
                label="Proposed New Monthly Payment"
                value={
                  hasValidResults
                    ? money(
                        numericProposedNewMonthlyPayment,
                      )
                    : "—"
                }
              />

              <Result
                label="Projected Monthly Debt Payments"
                value={
                  hasValidResults
                    ? money(projectedMonthlyDebtPayments)
                    : "—"
                }
              />

              <Result
                label="Gross Income Remaining After Current Debt"
                value={
                  hasValidResults
                    ? money(
                        grossIncomeRemainingAfterCurrentDebt,
                      )
                    : "—"
                }
                tone={
                  hasValidResults &&
                  grossIncomeRemainingAfterCurrentDebt <
                    0
                    ? "danger"
                    : "default"
                }
              />

                            <Result
                label="Gross Income Remaining After Projected Debt"
                value={
                  hasValidResults
                    ? money(
                        grossIncomeRemainingAfterProjectedDebt,
                      )
                    : "—"
                }
                tone={
                  hasValidResults &&
                  grossIncomeRemainingAfterProjectedDebt <
                    0
                    ? "danger"
                    : "default"
                }
              />
            </div>

            <p className="mt-6 text-sm leading-6 text-blue-100">
              DTI compares monthly debt payments with
              gross monthly income. It does not subtract
              taxes or ordinary living expenses such as
              groceries, utilities, transportation,
              insurance, maintenance, or savings.
            </p>
          </div>
        </div>

        {/* EDUCATIONAL SECTION */}

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold">
            How This DTI Estimate Works
          </h2>

          <p className="mb-4 leading-relaxed text-slate-600">
            The current DTI estimate divides the entered
            housing payment and other monthly debt
            payments by gross monthly income. Gross income
            generally means income before taxes and other
            payroll deductions.
          </p>

          <p className="mb-4 leading-relaxed text-slate-600">
            The projected DTI estimate adds the proposed
            new monthly payment before dividing total
            projected debt payments by gross monthly
            income.
          </p>

          <p className="mb-4 leading-relaxed text-slate-600">
            Different lenders and loan products may use
            different debt definitions, documentation
            rules, and DTI limits. A displayed ratio is
            not an approval decision and does not predict
            a specific lender’s result.
          </p>

          <p className="text-sm leading-6 text-slate-500">
            MYLOANPREVIEW provides educational estimates
            only and is not a lender, broker, credit
            repair company, or financial advisor. Actual
            affordability, underwriting, approval
            decisions, rates, and loan terms may vary.
          </p>
        </div>
      </section>

      {/* INTERNAL LINKS */}

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Explore Other Financial Tools
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
                Estimate payments using vehicle price,
                trade-in equity, taxes, fees, APR, and
                loan term.
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

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              What is included in a DTI ratio?
            </h2>

            <p className="leading-8 text-slate-700">
              DTI generally compares recurring monthly
              debt payments with gross monthly income.
              The exact obligations included may vary by
              lender, loan product, and underwriting
              method.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              Why does this calculator show current and projected DTI?
            </h2>

            <p className="leading-8 text-slate-700">
              Current DTI uses the housing and other debt
              payments already entered. Projected DTI
              adds a possible new monthly payment so you
              can preview how additional debt may change
              the ratio.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">
              Is there one DTI limit used by every lender?
            </h2>

            <p className="leading-8 text-slate-700">
              No. Different lenders and loan products may
              use different limits and underwriting
              requirements. A ratio displayed here does
              not guarantee approval or denial.
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
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "danger";
}) {
  const isDanger = tone === "danger";

  return (
    <div
      className={`flex justify-between gap-4 border-b pb-4 ${
                isDanger
          ? "rounded-xl border-2 border-red-950 bg-red-700 px-3 pt-3 shadow-md"
          : "border-white/20"
      }`}
    >
      <span
        className={
                    isDanger
            ? "font-bold text-white"
            : "text-blue-100"
        }
      >
        {label}
      </span>

     <span className="break-words text-right font-bold text-white">
  {value}
</span>
    </div>
  );
}