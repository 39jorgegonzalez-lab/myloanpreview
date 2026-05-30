"use client";

import { useState } from "react";

export default function PersonalLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(11.5);
  const [loanTerm, setLoanTerm] = useState(36);

  const monthlyRate = interestRate / 100 / 12;

  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / loanTerm
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
        (Math.pow(1 + monthlyRate, loanTerm) - 1);

  const totalPaid = monthlyPayment * loanTerm;
  const totalInterest = totalPaid - loanAmount;

  const money = (num: number) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">

  <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

    {/* LOGO */}

    <a
      href="/"
      className="text-2xl font-bold tracking-tight"
    >
      MY LOAN PREVIEW
    </a>


    {/* NAVIGATION */}

    <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-semibold">

      <a href="/" className="hover:text-blue-700 transition">
        Home
      </a>

      <a
        href="/auto-loan-calculator"
        className="hover:text-blue-700 transition"
      >
        Auto Loans
      </a>

      <a
        href="/personal-loan-calculator"
        className="hover:text-blue-700 transition"
      >
        Personal Loans
      </a>

      <a
        href="/mortgage-calculator"
        className="hover:text-blue-700 transition"
      >
        Mortgage
      </a>

      <a
        href="/about"
        className="hover:text-blue-700 transition"
      >
        About
      </a>

    </nav>


    {/* CTA BUTTON */}

    <a
      href="/personal-loan-calculator"
      className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition"
    >
      Get Estimate
    </a>

  </div>

</header>


      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-blue-700 font-semibold uppercase tracking-wide mb-3">
            Personal Loan Estimate
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Personal Loan Calculator
          </h1>

          <p className="text-lg text-slate-600">
            Estimate possible monthly payments, total interest,
            and total repayment costs for personal loans.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-8">

          {/* INPUTS */}

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Enter Loan Details
            </h2>

            <div className="space-y-6">

              <InputBox
                label="Loan Amount"
                value={loanAmount}
                setValue={setLoanAmount}
              />

              <InputBox
                label="Interest Rate (%)"
                value={interestRate}
                setValue={setInterestRate}
                step="0.1"
              />

              <InputBox
                label="Loan Term (Months)"
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
            Understanding Personal Loan Payments
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Personal loan payments depend on several factors including
            loan amount, repayment term, interest rate, and credit profile.
            Lower interest rates and shorter repayment terms typically
            reduce total interest costs over time.
          </p>

          <p className="text-slate-500 text-sm">
            MYLOANPREVIEW provides educational estimates only and is not
            a lender, broker, or financial advisor. Actual rates and loan
            approval terms may vary by lender and borrower qualifications.
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
        className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition block"
      >

        <div className="text-5xl mb-5">
          🚗
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Auto Loan Calculator
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Estimate car payments, total loan cost,
          and monthly affordability.
        </p>

      </a>


      {/* MORTGAGE */}

      <a
        href="/mortgage-calculator"
        className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition block"
      >

        <div className="text-5xl mb-5">
          🏠
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Mortgage Calculator
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Explore mortgage affordability,
          estimated payments, and housing costs.
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