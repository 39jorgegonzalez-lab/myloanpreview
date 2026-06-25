import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MortgageGuide() {
  return (
    <>
    
      <main className="bg-slate-50 min-h-screen">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">

            <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
              Mortgage Guide
            </p>

            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              What Credit Score Do You Need for a Mortgage?
            </h1>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Mortgage lenders evaluate credit scores carefully because home
              loans involve larger borrowing amounts and longer repayment
              periods. Better credit scores generally improve approval odds and
              interest rates.
            </p>

            <h2 className="text-black text-2xl font-bold mb-4">
              Common Mortgage Credit Score Benchmarks
            </h2>

            <ul className="space-y-3 text-slate-700 mb-10">
              <li><strong>760+:</strong> Excellent rates and approval odds.</li>
              <li><strong>700–759:</strong> Strong mortgage profile.</li>
              <li><strong>620–699:</strong> Often meets conventional minimums.</li>
              <li><strong>580–619:</strong> May qualify for certain FHA programs.</li>
              <li><strong>Below 580:</strong> Approval may be challenging.</li>
            </ul>

            <h2 className="text-black text-2xl font-bold mb-4">
              Factors Beyond Credit Score
            </h2>

            <ul className="space-y-3 text-slate-700 mb-10">
              <li>Down payment amount</li>
              <li>Income verification</li>
              <li>Employment history</li>
              <li>Debt-to-income ratio</li>
              <li>Cash reserves</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <p className="text-blue-900 font-bold">
                Loan approval requirements vary by lender and program.
                Information on MYLOANPREVIEW is educational only.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}