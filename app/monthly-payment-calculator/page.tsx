"use client";

import { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";

export default function MonthlyPaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState("25000");
  const [rate, setRate] = useState("6.5");
  const [term, setTerm] = useState("60");

  const numericLoanAmount = Number(loanAmount || 0);
  const numericRate = Number(rate || 0);
  const numericTerm = Number(term || 0);

  const monthlyRate = numericRate / 100 / 12;

  const monthlyPayment =
    numericTerm <= 0
      ? 0
      : monthlyRate === 0
      ? numericLoanAmount / numericTerm
      : (numericLoanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, numericTerm)) /
        (Math.pow(1 + monthlyRate, numericTerm) - 1);

  const totalPaid = monthlyPayment * numericTerm;
  const totalInterest = totalPaid - numericLoanAmount;

  const money = (num: number) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-slate-100 text-slate-900">
      
      <section className="py-16 px-6 text-center">
        <p className="text-lg text-blue-700 font-semibold uppercase tracking-wide mb-4">
          Loan Payment Estimate
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Monthly Payment Calculator
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Estimate your possible monthly payment based on loan amount,
          interest rate, and repayment term.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8">Enter Loan Details</h2>

          <div className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Loan Amount</label>
              <input
                type="number"
                value={loanAmount}
                placeholder="25000"
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Interest Rate (%)</label>
              <input
                type="number"
                value={rate}
                placeholder="6.5"
                onChange={(e) => setRate(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Loan Term (Months)</label>
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

        <div className="bg-blue-700 text-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Estimated Results</h2>

          <div className="bg-blue-600 rounded-2xl p-6 mb-8">
            <p className="text-lg mb-2">Estimated Monthly Payment</p>
            <h3 className="text-5xl font-bold">
              {money(isFinite(monthlyPayment) ? monthlyPayment : 0)}
            </h3>
          </div>

          <div className="space-y-6 text-lg">
            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Loan Amount</span>
              <span className="font-bold">{money(numericLoanAmount)}</span>
            </div>

            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Total Amount Paid</span>
              <span className="font-bold">
                {money(isFinite(totalPaid) ? totalPaid : 0)}
              </span>
            </div>

            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Total Interest Paid</span>
              <span className="font-bold">
                {money(isFinite(totalInterest) ? totalInterest : 0)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            How Monthly Loan Payments Are Estimated
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            Monthly loan payments are commonly based on the loan amount,
            interest rate, and repayment term. Longer terms may lower monthly
            payments but can increase total interest paid over time.
          </p>

          <p className="text-slate-700 leading-8">
            My Loan Preview provides educational estimates only and is not a
            lender, broker, or financial advisor. Actual loan payments may vary
            based on lender requirements, credit profile, fees, and loan terms.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Other Calculators
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a
             href="/auto-loan-calculator" 
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
              >
              <div className="text-5xl mb-5">🚗</div>

              <h3 className="text-2xl font-bold mb-4">
                Auto Loan Calculator
                </h3>

              <p className="text-slate-600 leading-relaxed">
                Estimate vehicle payments and financing costs.
              </p>
            </a>

            <a 
            href="/personal-loan-calculator" 
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
            >
            <div className="text-5xl mb-5">💳</div>

              <h3 className="text-2xl font-bold mb-4">
                Personal Loan Calculator
                </h3>

              <p className="text-slate-600 leading-relaxed">
                Preview personal loan repayment options.
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
                Estimate mortgage payments and home financing.
              </p>
            </a>
          </div>
        </div>
      </section>
       </main>
  </>
);
}