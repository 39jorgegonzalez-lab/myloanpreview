"use client";

import { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";

export default function CarAffordabilityCalculator() {
  const [income, setIncome] = useState("6000");
  const [expenses, setExpenses] = useState("2500");
  const [downPayment, setDownPayment] = useState("5000");
  const [rate, setRate] = useState("6.5");
  const [term, setTerm] = useState("60");

  const numericIncome = Number(income || 0);
  const numericExpenses = Number(expenses || 0);
  const numericDownPayment = Number(downPayment || 0);
  const numericRate = Number(rate || 0);
  const numericTerm = Number(term || 0);

  const availableMonthly =
    Math.max(numericIncome - numericExpenses, 0) * 0.15;

  const monthlyRate = numericRate / 100 / 12;

  const estimatedLoan =
    monthlyRate === 0
      ? availableMonthly * numericTerm
      : (availableMonthly *
          (Math.pow(1 + monthlyRate, numericTerm) - 1)) /
        (monthlyRate *
          Math.pow(1 + monthlyRate, numericTerm));

  const estimatedVehiclePrice =
    estimatedLoan + numericDownPayment;

  const money = (num: number) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

 return (
  <>
    <Navbar />

    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* NAVBAR */}

      {/* HERO */}

      <section className="py-16 px-6 text-center">
        <p className="text-lg text-blue-700 font-semibold uppercase tracking-wide mb-4">
          Vehicle Budget Estimator
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Car Affordability Calculator
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Estimate how much vehicle you may be able to afford
          based on income, expenses, financing terms, and
          down payment.
        </p>
      </section>

      {/* CALCULATOR */}

      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-8">
        {/* INPUTS */}

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm w-full overflow-hidden">
          <h2 className="text-3xl font-bold mb-8">
            Enter Financial Information
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
                Monthly Expenses
              </label>

              <input
                type="number"
                value={expenses}
                placeholder="2500"
                onChange={(e) => setExpenses(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Down Payment
              </label>

              <input
                type="number"
                value={downPayment}
                placeholder="5000"
                onChange={(e) =>
                  setDownPayment(e.target.value)
                }
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Interest Rate (%)
              </label>

              <input
                type="number"
                value={rate}
                placeholder="6.5"
                onChange={(e) => setRate(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Loan Term (Months)
              </label>

              <input
                type="number"
                value={term}
                placeholder="60"
                onChange={(e) => setTerm(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* RESULTS */}

        <div className="bg-blue-700 text-white rounded-3xl p-8 shadow-lg w-full overflow-hidden">
          <h2 className="text-3xl font-bold mb-8">
            Estimated Results
          </h2>

          <div className="bg-blue-600 rounded-2xl p-6 mb-8">
            <p className="text-lg mb-2">
              Estimated Affordable Vehicle Price
            </p>

            <h3 className="text-5xl font-bold">
              {money(
                isFinite(estimatedVehiclePrice)
                  ? estimatedVehiclePrice
                  : 0
              )}
            </h3>
          </div>

          <div className="space-y-6 text-lg">
            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Estimated Monthly Budget</span>

              <span className="font-bold">
                {money(availableMonthly)}
              </span>
            </div>

            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Estimated Loan Amount</span>

              <span className="font-bold">
                {money(
                  isFinite(estimatedLoan)
                    ? estimatedLoan
                    : 0
                )}
              </span>
            </div>

            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Estimated Down Payment</span>

              <span className="font-bold">
                {money(numericDownPayment)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            How Much Car Can You Afford?
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            Vehicle affordability depends on income, monthly
            expenses, interest rates, down payment, loan term,
            insurance costs, and lender requirements.
          </p>

          <p className="text-slate-700 leading-8 mb-6">
            Many financial experts recommend limiting total
            vehicle expenses to a manageable percentage of
            monthly income to reduce financial stress and
            improve long-term affordability.
          </p>

          <p className="text-slate-700 leading-8">
            My Loan Preview provides educational estimate tools
            only and does not guarantee financing approvals,
            rates, or loan terms.
          </p>
        </div>
      </section>

      {/* INTERNAL LINKS */}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Other Financial Tools
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 w-full">
            <a
              href="/auto-loan-calculator"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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
              href="/debt-to-income-calculator"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
            >
              <div className="text-5xl mb-5">📊</div>

              <h3 className="text-2xl font-bold mb-4">
                Debt-to-Income Calculator
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Estimate your debt-to-income ratio and affordability.
              </p>
            </a>

            <a
              href="/mortgage-calculator"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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
              What percentage of income should go toward a car payment?
            </h3>

            <p className="text-slate-700 leading-8">
              Financial experts often recommend limiting total
              vehicle expenses to around 10%–15% of monthly income,
              although individual budgets and lender requirements vary.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Does a larger down payment improve affordability?
            </h3>

            <p className="text-slate-700 leading-8">
              Yes. Larger down payments may reduce monthly payments,
              reduce interest costs, and improve financing flexibility.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Does using this calculator affect my credit score?
            </h3>

            <p className="text-slate-700 leading-8">
              No. This calculator is educational only and does not
              require a credit check or affect your credit score.
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);
}