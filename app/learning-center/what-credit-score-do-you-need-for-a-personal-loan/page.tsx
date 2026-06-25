import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Credit Score Do You Need for a Personal Loan? | MYLOANPREVIEW",
  description:
    "Learn what credit score you may need for a personal loan, how lenders evaluate applications, and how to improve your chances of qualifying.",
};

export default function CreditScoreArticle() {
  return (
    <main className="min-h-screen bg-slate-50">
  <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        What Credit Score Do You Need for a Personal Loan?
      </h1>

      <p className="text-slate-700 leading-8 mb-6">
        If you're thinking about applying for a personal loan, one of the
        first questions you may have is:
      </p>

      <p className="text-slate-700 leading-8 font-semibold">
        "What credit score do I need to qualify?"
        <section className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
  <h2 className="text-2xl font-bold text-slate-900 mb-4">
    Quick Answer
  </h2>

  <p className="text-slate-700 leading-8">
    Most lenders prefer borrowers with credit scores of <strong>670 or higher</strong>,
    but some lenders may approve applicants with lower scores depending on income,
    debt-to-income ratio, employment history, and other financial factors.
  </p>
</section>
<section className="mt-12">
  <h2 className="text-2xl font-bold text-slate-900 mb-4">
    Why Credit Scores Matter
  </h2>

  <p className="text-slate-700 leading-8 mb-6">
    Your credit score helps lenders estimate how likely you are to repay a loan.
    Although it's an important factor, it isn't the only one. Lenders may also
    consider your income, employment history, existing debt, and overall financial
    profile before making a lending decision.
  </p>

  <p className="text-slate-700 leading-8">
    A higher credit score may improve your chances of qualifying for a loan and
    may also help you receive lower interest rates. However, borrowers with lower
    scores may still qualify depending on the lender's requirements and the
    strength of the rest of their application.
  </p>
</section>
<section className="mt-12 rounded-xl bg-slate-100 p-8 border border-slate-200">
  <h2 className="text-2xl font-bold text-slate-900 mb-4">
    Estimate Your Personal Loan Payment
  </h2>

  <p className="text-slate-700 leading-8 mb-6">
    Once you have a better understanding of your credit profile, the next step is
    estimating what your monthly payment could look like. Our free calculator lets
    you estimate payments based on the loan amount, interest rate, and repayment term.
  </p>

  <Link
    href="/personal-loan-calculator"
    className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
  >
    Try the Personal Loan Calculator
  </Link>
</section>
<section className="mt-12">
  <h2 className="text-2xl font-bold text-slate-900 mb-6">
    Frequently Asked Questions
  </h2>

  <div className="space-y-6">

    <div>
      <h3 className="font-semibold text-slate-900">
        Can I get a personal loan with a 600 credit score?
      </h3>

      <p className="mt-2 text-slate-700 leading-8">
        Some lenders may approve borrowers with credit scores around 600,
        although interest rates may be higher and additional requirements may apply.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-slate-900">
        Does checking my own credit score hurt my credit?
      </h3>

      <p className="mt-2 text-slate-700 leading-8">
        No. Checking your own credit score is generally considered a soft inquiry
        and does not affect your credit score.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-slate-900">
        Is my credit score the only thing lenders consider?
      </h3>

      <p className="mt-2 text-slate-700 leading-8">
        No. Lenders may also review your income, employment history,
        existing debt, and other financial information when evaluating
        your application.
      </p>
    </div>

  </div>
</section>
<section className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6">
  <h2 className="text-xl font-bold text-slate-900 mb-3">
    Important Disclaimer
  </h2>

  <p className="text-slate-700 leading-8">
    MYLOANPREVIEW is not a lender, bank, or financial advisor. The information
    provided in this guide is for educational purposes only and should not be
    considered financial or legal advice. Loan approval, interest rates, and
    borrowing terms vary by lender and your individual financial situation.
  </p>
</section>
      </p>
       </div>
  </main>
  );
}