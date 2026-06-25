"use client";

import { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";

export default function CreditScoreLoanEstimate() {
  const [creditScore, setCreditScore] = useState("700");
  const [loanAmount, setLoanAmount] = useState("25000");
  const [term, setTerm] = useState("60");

  const numericCreditScore = Number(creditScore || 0);
  const numericLoanAmount = Number(loanAmount || 0);
  const numericTerm = Number(term || 0);

  const getEstimatedRate = () => {
    if (numericCreditScore >= 760) return 4.9;
    if (numericCreditScore >= 720) return 6.2;
    if (numericCreditScore >= 680) return 8.5;
    if (numericCreditScore >= 640) return 11.9;
    if (numericCreditScore >= 600) return 16.5;
    return 22.9;
  };

  const estimatedRate = getEstimatedRate();

  const monthlyRate = estimatedRate / 100 / 12;

  const monthlyPayment =
    numericTerm <= 0
      ? 0
      : (numericLoanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, numericTerm)) /
        (Math.pow(1 + monthlyRate, numericTerm) - 1);

  const totalPaid = monthlyPayment * numericTerm;
  const totalInterest = totalPaid - numericLoanAmount;

  const getApprovalLevel = () => {
    if (numericCreditScore >= 760)
      return {
        label: "Excellent Approval Range",
        color: "text-green-600",
      };

    if (numericCreditScore >= 700)
      return {
        label: "Good Approval Range",
        color: "text-blue-600",
      };

    if (numericCreditScore >= 640)
      return {
        label: "Moderate Approval Range",
        color: "text-yellow-600",
      };

    return {
      label: "Higher Risk Range",
      color: "text-red-600",
    };
  };

  const approval = getApprovalLevel();

  const money = (num: number) =>
    num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

return (
  <>
  
    <main className="min-h-screen bg-slate-100 text-slate-900">
      {/* NAVBAR */}

      {/* HERO */}

      <section className="py-16 px-6 text-center">
        <p className="text-lg text-blue-700 font-semibold uppercase tracking-wide mb-4">
          Credit-Based Loan Estimate
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Credit Score Loan Estimate
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Estimate possible loan payment ranges and financing
          scenarios based on your estimated credit score.
        </p>
      </section>

      {/* CALCULATOR */}

      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-8">
        {/* INPUTS */}

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8">
            Enter Loan Information
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">
                Estimated Credit Score
              </label>

              <input
                type="number"
                value={creditScore}
                placeholder="700"
                onChange={(e) =>
                  setCreditScore(e.target.value)
                }
                className="w-full border border-slate-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Loan Amount
              </label>

              <input
                type="number"
                value={loanAmount}
                placeholder="25000"
                onChange={(e) =>
                  setLoanAmount(e.target.value)
                }
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

        <div className="bg-blue-700 text-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8">
            Estimated Results
          </h2>

          <div className="bg-blue-600 rounded-2xl p-6 mb-8">
            <p className="text-lg mb-2">
              Estimated Monthly Payment
            </p>

            <h3 className="text-5xl font-bold">
              {money(
                isFinite(monthlyPayment)
                  ? monthlyPayment
                  : 0
              )}
            </h3>
          </div>

          <div className="space-y-6 text-lg">
            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Estimated Interest Rate</span>

              <span className="font-bold">
                {estimatedRate.toFixed(1)}%
              </span>
            </div>

            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Approval Range</span>

              <span className={`font-bold ${approval.color}`}>
                {approval.label}
              </span>
            </div>

            <div className="flex justify-between border-b border-blue-500 pb-4">
              <span>Total Interest Paid</span>

              <span className="font-bold">
                {money(
                  isFinite(totalInterest)
                    ? totalInterest
                    : 0
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            How Credit Scores May Affect Loan Estimates
          </h2>

          <p className="text-slate-700 leading-8 mb-6">
            Credit scores may influence possible loan approval
            ranges, estimated interest rates, financing terms,
            and monthly payment estimates. Higher credit scores
            may improve financing flexibility and reduce total
            borrowing costs over time.
          </p>

          <p className="text-slate-700 leading-8 mb-6">
            Loan providers evaluate many factors beyond credit
            score including income, debt-to-income ratio,
            employment history, loan type, and down payment.
          </p>

          <p className="text-slate-700 leading-8">
            My Loan Preview provides educational estimate tools
            only and does not guarantee approvals, financing
            offers, or interest rates.
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
              href="/monthly-payment-calculator"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
            >
              <div className="text-5xl mb-5">📅</div>

              <h3 className="text-2xl font-bold mb-4">
                Monthly Payment Calculator
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Estimate monthly loan payments and financing costs.
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
              href="/car-affordability-calculator"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
            >
              <div className="text-5xl mb-5">🚘</div>

              <h3 className="text-2xl font-bold mb-4">
                Car Affordability Calculator
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Estimate how much vehicle you may be able to afford.
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
              What credit score is needed for a loan?
            </h3>

            <p className="text-slate-700 leading-8">
              Loan requirements vary by lender and loan type.
              Higher credit scores may improve financing
              flexibility and estimated interest rate ranges.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Does checking my own estimate affect my credit?
            </h3>

            <p className="text-slate-700 leading-8">
              No. This educational calculator does not perform
              a credit inquiry and does not affect your credit score.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Are loan approvals guaranteed?
            </h3>

            <p className="text-slate-700 leading-8">
              No. Loan approvals depend on many financial factors
              and lender requirements beyond estimated credit score.
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);
}