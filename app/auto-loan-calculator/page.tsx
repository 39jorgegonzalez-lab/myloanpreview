"use client";

import { useState } from "react";

export default function AutoLoanCalculator() {
  const [price, setPrice] = useState("30000");
  const [downPayment, setDownPayment] = useState("3000");
  const [rate, setRate] = useState("6.5");
  const [term, setTerm] = useState("60");

  const numericPrice = Number(price || 0);
  const numericDownPayment = Number(downPayment || 0);
  const numericRate = Number(rate || 0);
  const numericTerm = Number(term || 0);

  const loanAmount = Math.max(numericPrice - numericDownPayment, 0);
  const monthlyRate = numericRate / 100 / 12;

  const monthlyPayment =
    numericTerm <= 0
      ? 0
      : monthlyRate === 0
      ? loanAmount / numericTerm
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numericTerm)) /
        (Math.pow(1 + monthlyRate, numericTerm) - 1);

  const totalPaid = monthlyPayment * numericTerm;
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
          <a href="/" className="text-2xl font-bold tracking-tight">
            MY LOAN PREVIEW
          </a>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-semibold">
            <a href="/" className="hover:text-blue-700 transition">
              Home
            </a>
            <a href="/auto-loan-calculator" className="hover:text-blue-700 transition">
              Auto Loans
            </a>
            <a href="/personal-loan-calculator" className="hover:text-blue-700 transition">
              Personal Loans
            </a>
            <a href="/mortgage-calculator" className="hover:text-blue-700 transition">
              Mortgage
            </a>
            <a href="/about" className="hover:text-blue-700 transition">
              About
            </a>
          </nav>
          
        </div>
      </header>

      <section className="py-16 px-6 text-center">
        <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
          Auto Loan Estimate
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Auto Loan Calculator
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Estimate your possible monthly car payment based on vehicle price,
          down payment, interest rate, and loan term.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8">Enter Loan Details</h2>

          <div className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Vehicle Price</label>
              <input
                type="number"
                value={price}
                placeholder="30000"
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Down Payment</label>
              <input
                type="number"
                value={downPayment}
                placeholder="3000"
                onChange={(e) => setDownPayment(e.target.value)}
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
              <span>Estimated Loan Amount</span>
              <span className="font-bold">{money(loanAmount)}</span>
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
          <h2 className="text-2xl font-bold mb-4">
            Understanding Auto Loan Payments
          </h2>

          <p className="text-slate-700 leading-8 mb-4">
            Auto loan payments depend on vehicle price, down payment, interest
            rate, loan term, taxes, fees, and lender requirements. A larger down
            payment or shorter repayment term may reduce total interest paid over
            time.
          </p>

          <p className="text-slate-700 leading-8">
            My Loan Preview provides educational estimates only and is not a
            lender, broker, credit repair company, or financial advisor. Actual
            loan terms may vary by lender and borrower qualifications.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Other Calculators
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="/personal-loan-calculator"
              className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition block"
            >
              <div className="text-5xl mb-5">💳</div>

              <h3 className="text-2xl font-bold mb-4">
                Personal Loan Calculator
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Estimate monthly payments for personal loans and compare
                repayment options.
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
                Explore mortgage affordability, estimated payments, and housing
                costs.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}