"use client";

import { useState } from "react";

export default function DebtToIncomeCalculator() {
  const [income, setIncome] = useState("6000");
  const [debt, setDebt] = useState("2000");

  const numericIncome = Number(income || 0);
  const numericDebt = Number(debt || 0);

  const dti =
    numericIncome > 0
      ? (numericDebt / numericIncome) * 100
      : 0;

  const getDTIStatus = () => {
    if (dti <= 20)
      return {
        label: "Excellent",
        color: "text-green-600",
      };

    if (dti <= 36)
      return {
        label: "Good",
        color: "text-blue-600",
      };

    if (dti <= 43)
      return {
        label: "Moderate",
        color: "text-yellow-600",
      };

    return {
      label: "High Risk",
      color: "text-red-600",
    };
  };

  const status = getDTIStatus();

  const money = (num: number) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* NAVBAR */}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-2xl font-bold tracking-tight">
            MY LOAN PREVIEW
          </a>

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
              href="/debt-to-income-calculator"
              className="hover:text-blue-700 transition"
            >
              DTI Calculator
            </a>
          </nav>

          <a
            href="/debt-to-income-calculator"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            Calculate DTI
          </a>
        </div>
      </header>

      {/* HERO */}

      <section className="py-16 px-6 text-center">
        <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
          Debt-To-Income Ratio Tool
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Debt-to-Income Calculator
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Estimate your debt-to-income ratio to better understand
          affordability and possible loan qualification ranges.
        </p>
      </section>

      {/* CALCULATOR */}

      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-8">
        {/* INPUTS */}

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8">
            Enter Monthly Financial Information
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">
                Gross Monthly Income
              </label>

              <input
                type="number"
                value={income}
                placeholder="6000"
                onChange={(e) => setIncome(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Total Monthly Debt Payments
              </label>

              <input
                type="number"
                value={debt}
                placeholder="2000"
                onChange={(e) => setDebt(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* RESULTS */}

        <div className="bg-blue-700 text-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8">
            Estimated Results
          </h2>

          <div className="bg-blue-600 rounded-2xl p-6 mb-8">
            <p className="text-lg mb-2">
              Estimated Debt-to-Income Ratio
            </p>

            <h3 className="text-6xl font-bold">
              {isFinite(dti) ? dti.toFixed(1) : "0"}%
            </h3>
          </div>

          <div className="space-y-6 text-lg">
            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Monthly Income</span>

              <span className="font-bold">
                {money(numericIncome)}
              </span>
            </div>

            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Monthly Debt</span>

              <span className="font-bold">
                {money(numericDebt)}
              </span>
            </div>

            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>DTI Status</span>

              <span className={`font-bold ${status.color}`}>
                {status.label}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            What Is a Debt-to-Income Ratio?
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            A debt-to-income ratio (DTI) compares your total monthly
            debt payments to your gross monthly income. Mortgage
            lenders, auto lenders, and personal loan providers often
            use DTI ratios to help evaluate affordability and financial
            risk.
          </p>

          <p className="text-slate-700 leading-8 mb-6">
            Lower debt-to-income ratios may improve the likelihood of
            qualifying for financing and may help borrowers access
            better interest rates or loan terms.
          </p>

          <p className="text-slate-700 leading-8">
            My Loan Preview provides educational estimate tools only
            and does not guarantee loan approvals, financing offers,
            or interest rates.
          </p>
        </div>
      </section>

      {/* INTERNAL LINKS */}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Other Financial Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/auto-loan-calculator"
              className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition block"
            >
              <div className="text-5xl mb-5">🚗</div>

              <h3 className="text-2xl font-bold mb-4">
                Auto Loan Calculator
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Estimate monthly vehicle payments and financing costs.
              </p>
            </a>

            <a
              href="/personal-loan-calculator"
              className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition block"
            >
              <div className="text-5xl mb-5">💳</div>

              <h3 className="text-2xl font-bold mb-4">
                Personal Loan Calculator
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Compare repayment options for personal financing.
              </p>
            </a>

            <a
              href="/mortgage-calculator"
              className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition block"
            >
              <div className="text-5xl mb-5">🏠</div>

              <h3 className="text-2xl font-bold mb-4">
                Mortgage Calculator
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Explore mortgage affordability and home financing.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              What is considered a good debt-to-income ratio?
            </h3>

            <p className="text-slate-700 leading-8">
              Many lenders prefer debt-to-income ratios below 36%,
              although requirements vary depending on the lender,
              loan type, income, and credit profile.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Does my DTI ratio affect loan approval?
            </h3>

            <p className="text-slate-700 leading-8">
              Yes. Debt-to-income ratios are commonly used by lenders
              when evaluating mortgage loans, personal loans, and
              vehicle financing applications.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Does this calculator affect my credit score?
            </h3>

            <p className="text-slate-700 leading-8">
              No. Using this calculator does not require a credit
              check and does not impact your credit score.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}