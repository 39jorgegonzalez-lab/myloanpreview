"use client";

import { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";
export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTerm, setLoanTerm] = useState(30);

  const loanAmount = Math.max(homePrice - downPayment, 0);

  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTerm * 12;

  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / totalMonths
      : (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPaid = monthlyPayment * totalMonths;
  const totalInterest = totalPaid - loanAmount;

  const money = (num: number) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

return (
  <>
    <Navbar />

    <main className="min-h-screen bg-slate-100 text-slate-900">

    {/* CTA BUTTON */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-700 font-semibold uppercase tracking-wide mb-3">
            Mortgage Estimate
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Mortgage Calculator
          </h1>

          <p className="text-lg text-slate-600">
            Estimate monthly mortgage payments, total interest,
            and long-term home loan costs.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-8">

          {/* INPUTS */}

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Enter Mortgage Details
            </h2>

            <div className="space-y-6">

              <InputBox
                label="Home Price"
                value={homePrice}
                setValue={setHomePrice}
              />

              <InputBox
                label="Down Payment"
                value={downPayment}
                setValue={setDownPayment}
              />

              <InputBox
                label="Interest Rate (%)"
                value={interestRate}
                setValue={setInterestRate}
                step="0.1"
              />

              <InputBox
                label="Loan Term (Years)"
                value={loanTerm}
                setValue={setLoanTerm}
              />

            </div>

          </div>


          {/* RESULTS */}

          <div className="bg-blue-700 text-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-8">
              Estimated Results
            </h2>

            <div className="bg-white/10 rounded-2xl p-6 mb-6">

              <p className="text-blue-100 mb-2">
                Estimated Monthly Payment
              </p>

              <p className="text-5xl font-bold">
                {money(monthlyPayment)}
              </p>

            </div>

            <div className="grid gap-4">

              <Result
                label="Estimated Loan Amount"
                value={money(loanAmount)}
              />

              <Result
                label="Total Amount Paid"
                value={money(totalPaid)}
              />

              <Result
                label="Total Interest Paid"
                value={money(totalInterest)}
              />

            </div>

          </div>

        </div>


        {/* EDUCATIONAL SECTION */}

        <div className="bg-white rounded-3xl border border-slate-200 p-8 mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Understanding Mortgage Payments
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Mortgage payments are influenced by home price, down payment,
            interest rate, and repayment term. Larger down payments can
            reduce borrowing costs and monthly payments over time.
          </p>

          <p className="text-slate-500 text-sm">
            MYLOANPREVIEW provides educational estimates only and is not
            a lender, broker, or financial advisor. Actual rates,
            loan approvals, taxes, insurance, and fees may vary.
          </p>

        </div>

      </section>
{/* OTHER CALCULATORS */}

<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">

    <h2 className="text-3xl font-bold text-center mb-10">
      Explore Other Calculators
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* AUTO */}

      <a
        href="/auto-loan-calculator"
        className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
      >

        <div className="text-5xl mb-5">
          🚗
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Auto Loan Calculator
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Estimate monthly car payments,
          loan costs, and affordability.
        </p>

      </a>


      {/* PERSONAL */}

      <a
        href="/personal-loan-calculator"
        className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
      >

        <div className="text-5xl mb-5">
          💳
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Personal Loan Calculator
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Preview personal loan payments
          and repayment options instantly.
        </p>

      </a>

    </div>

  </div>

</section>
    </main>
    </>
  );
}


/* INPUT COMPONENT */

function InputBox({
  label,
  value,
  setValue,
  step = "1",
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  step?: string;
}) {
  return (
    <div>

      <label className="block font-semibold mb-2">
        {label}
      </label>

      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
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

      <span className="font-bold">
        {value}
      </span>

    </div>
  );
}