import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "Does Checking Loan Rates Hurt Your Credit? | MYLOANPREVIEW",
  description:
    "Learn whether checking loan rates can hurt your credit, the difference between soft and hard inquiries, and how to compare loan options more carefully.",
};

export default function CheckingLoanRatesCreditArticle() {
  return (
    <main className="min-h-screen bg-slate-50">
      <article className="mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/learning-center"
          className="mb-6 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          ← Back to Loan Learning Center
        </Link>

        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Credit Scores
          </p>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Does Checking Loan Rates Hurt Your Credit?
          </h1>

          <p className="text-lg leading-8 text-slate-700">
            Checking loan rates can be a smart way to compare borrowing options,
            but it is important to understand the difference between a soft
            credit inquiry and a hard credit inquiry before submitting your
            information.
          </p>
        </header>

        <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Quick Answer
          </h2>

          <p className="leading-8 text-slate-700">
            Checking estimated loan rates may not hurt your credit if the lender
            uses a soft inquiry. However, submitting a full loan application may
            involve a hard inquiry, which can affect your credit score. Always
            ask the lender whether checking rates uses a soft inquiry, hard
            inquiry, or no credit check.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What Is a Soft Credit Inquiry?
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            A soft credit inquiry, sometimes called a soft pull, is a credit
            review that generally does not affect your credit score. Soft
            inquiries may happen when you check your own credit, when a lender
            provides an estimated prequalification, or when a company reviews
            your credit for certain promotional offers.
          </p>

          <p className="leading-8 text-slate-700">
            Many loan comparison or{" "}
            <Link
              href="/learning-center/loan-prequalification-vs-preapproval"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              prequalification tools
            </Link>{" "}
            advertise soft credit checks, but you should still read the details
            before submitting your information.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What Is a Hard Credit Inquiry?
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            A hard credit inquiry, sometimes called a hard pull, usually happens
            when you apply for new credit. This may include applying for a
            personal loan, auto loan, mortgage, credit card, or another type of
            financing.
          </p>

          <p className="leading-8 text-slate-700">
            A hard inquiry may affect your credit score. The impact is often
            temporary, but it can still matter if you are close to a lender&apos;s
            credit score cutoff or planning to apply for major financing soon.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Soft Inquiry vs. Hard Inquiry
          </h2>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="p-6">
                <h3 className="font-bold text-slate-900">Soft Inquiry</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                  <li>Usually does not affect your credit score</li>
                  <li>May be used for prequalification estimates</li>
                  <li>May happen when you check your own credit</li>
                  <li>Can be useful for early loan research</li>
                </ul>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-slate-900">Hard Inquiry</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                  <li>May affect your credit score</li>
                  <li>Often happens during a full loan application</li>
                  <li>Can appear on your credit report</li>
                  <li>May matter more if you apply for many types of credit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What About Rate Shopping?
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            Credit scoring models may treat multiple inquiries for certain loan
            types as one inquiry when they happen within a short period of time.
            This is often called rate shopping.
          </p>

          <p className="leading-8 text-slate-700">
            Rate shopping rules can vary by credit scoring model and loan type.
            Auto loans, mortgages, and student loans are commonly discussed in
            rate-shopping windows. Personal loans may not always be treated the
            same way, so it is smart to ask lenders how their process works
            before applying.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Questions to Ask Before Checking Rates
          </h2>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>Will this use a soft inquiry or hard inquiry?</li>
            <li>Is this only a rate estimate or a full application?</li>
            <li>Will my information be shared with lenders or partners?</li>
            <li>Is the estimated APR guaranteed or subject to change?</li>
            <li>Are there origination fees, closing costs, or dealer fees?</li>
            <li>How long is the estimated offer valid?</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            How to Compare Loan Rates More Carefully
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            When comparing loan options, look beyond the monthly payment. Review
            the APR, repayment term, fees, total interest, and total amount you
            may repay over the life of the loan.
          </p>

          <p className="leading-8 text-slate-700">
            A lower monthly payment can sometimes come from a longer repayment
            term, which may increase the total interest paid over time. That is
            why it helps to{" "}
            <Link
              href="/learning-center/how-to-compare-personal-loan-offers"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              compare the full loan cost
            </Link>{" "}
            before deciding.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-blue-200 bg-blue-600 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">
            Preview Possible Loan Estimates
          </h2>

          <p className="mb-6 leading-8 text-blue-50">
            Use our free credit score loan estimate tool to explore possible
            loan ranges based on credit score, loan type, and estimated borrower
            information.
          </p>

          <Link
            href="/credit-score-loan-estimate"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Try the Credit Score Loan Estimate Tool
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900">
                Does checking my own credit hurt my score?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                Checking your own credit is generally considered a soft inquiry
                and does not usually affect your credit score.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Does prequalification hurt my credit?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                Prequalification may use a soft inquiry, but that depends on the
                lender or platform. Always confirm whether the process uses a
                soft inquiry, hard inquiry, or no credit check.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Can multiple loan applications hurt my credit?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                Multiple hard inquiries can affect your credit. Some credit
                scoring models may group certain loan inquiries within a short
                rate-shopping window, but rules can vary by loan type and score
                model.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Should I compare APR or monthly payment?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                Compare both. APR helps show borrowing cost, while the monthly
                payment helps you understand whether the loan may fit your
                budget.
              </p>
            </div>
          </div>
        </section>

        <EmailSignupCTA />

        <section className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-slate-900">
            Important Disclaimer
          </h2>

          <p className="leading-8 text-slate-700">
            MYLOANPREVIEW is not a lender, bank, credit bureau, credit repair
            company, or financial advisor. The information in this guide is for
            educational purposes only and should not be considered financial,
            legal, tax, or credit advice. Credit inquiry treatment, credit score
            impact, loan estimates, APRs, loan amounts, fees, repayment terms,
            and approval decisions vary by lender, credit scoring model, and
            individual financial situation.
          </p>
        </section>
      </article>
    </main>
  );
}