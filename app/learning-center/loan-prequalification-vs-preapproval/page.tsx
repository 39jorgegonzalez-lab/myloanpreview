import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "Loan Prequalification vs. Preapproval | MYLOANPREVIEW",
  description:
    "Learn the difference between loan prequalification and preapproval, how lenders may review your information, and why neither one guarantees final loan approval.",
};

export default function LoanPrequalificationVsPreapprovalArticle() {
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
            Loan Approval Basics
          </p>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loan Prequalification vs. Preapproval: What&apos;s the Difference?
          </h1>

          <p className="text-lg leading-8 text-slate-700">
            Prequalification and preapproval are two common terms lenders use
            when estimating whether a borrower may qualify for financing. They
            can be helpful planning tools, but neither one guarantees final loan
            approval.
          </p>
        </header>

        <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Quick Answer
          </h2>

          <p className="leading-8 text-slate-700">
            Prequalification is usually an early estimate based on basic
            financial information. Preapproval may involve a more detailed review
            of your credit, income, debts, and documents. However, lenders use
            these terms differently, so it is important to ask what information
            was reviewed and whether a credit check was involved.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What Is Loan Prequalification?
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            Loan prequalification is often a basic estimate of what you may be
            able to borrow. A lender may ask for information such as income,
            estimated credit score, monthly debt payments, employment status, and
            desired loan amount.
          </p>

          <p className="leading-8 text-slate-700">
            Because prequalification may rely on self-reported information, it
            should be treated as an educational estimate instead of a final
            lending decision. The actual loan terms may change after the lender
            verifies your credit, income, identity, debt, and other application
            details.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What Is Loan Preapproval?
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            Loan preapproval is often a more detailed review. Depending on the
            lender and loan type, it may involve a credit check, income
            documentation, employment details, bank statements, tax information,
            or other financial documents.
          </p>

          <p className="leading-8 text-slate-700">
            A preapproval may give you a stronger estimate than a basic
            prequalification, but it still does not guarantee final approval.
            Final approval can depend on updated credit information, verified
            income, collateral, underwriting rules, property details, vehicle
            details, and lender requirements.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Prequalification vs. Preapproval
          </h2>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="p-6">
                <h3 className="font-bold text-slate-900">
                  Prequalification
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                  <li>Usually an early estimate</li>
                  <li>May use self-reported information</li>
                  <li>May involve a soft credit check or no credit check</li>
                  <li>Useful for early planning</li>
                  <li>Not a guaranteed loan offer</li>
                </ul>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-slate-900">
                  Preapproval
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                  <li>Often a more detailed review</li>
                  <li>May require income or asset documents</li>
                  <li>May involve a hard credit inquiry</li>
                  <li>Can be useful before serious shopping</li>
                  <li>Still not a final loan guarantee</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Lender processes vary. Always ask the lender what information is
            being reviewed, whether your credit will be checked, and whether the
            credit check is soft or hard.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Does Prequalification or Preapproval Hurt Your Credit?
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            It depends on the type of credit check. A soft inquiry generally
            does not affect your credit score. A hard inquiry may affect your
            score and usually happens when a lender checks your credit as part of
            a loan application.
          </p>

          <p className="leading-8 text-slate-700">
            Before submitting information, ask whether the lender will perform a
            soft inquiry, hard inquiry, or no credit check. This is especially
            important when comparing personal loans, auto loans, mortgages, or
            other financing options.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Why These Estimates Can Change
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            A prequalification or preapproval can change because the lender may
            later verify more information. Loan terms may also change if your
            credit score changes, your income changes, your debt changes, rates
            move, or the lender reviews new details about the loan.
          </p>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>
              <strong>Credit profile:</strong> Updated credit reports, late
              payments, balances, or new accounts may affect eligibility.
            </li>
            <li>
              <strong>Income verification:</strong> The lender may need to
              verify pay stubs, tax documents, deposits, or employment.
            </li>
            <li>
              <strong>Debt-to-income ratio:</strong> Existing debts can affect
              how much additional payment may be considered affordable.
            </li>
            <li>
              <strong>Collateral:</strong> Auto loans and mortgages may depend
              on the vehicle, home, appraisal, value, or property details.
            </li>
            <li>
              <strong>Loan terms:</strong> APR, loan amount, repayment term,
              down payment, and fees can all affect the final offer.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            When Prequalification Can Be Helpful
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            Prequalification can be helpful early in the process when you are
            trying to understand possible loan ranges without fully applying. It
            may help you compare estimated payments, possible APR ranges, and
            whether a loan amount seems realistic.
          </p>

          <p className="leading-8 text-slate-700">
            This can be useful before shopping for a car, comparing personal
            loan options, or estimating whether a future mortgage payment may
            fit your budget.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            When Preapproval Can Be Helpful
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            Preapproval can be useful when you are closer to borrowing and want a
            more detailed estimate from a lender. For example, homebuyers may use
            a mortgage preapproval letter to show sellers they are more serious
            and have already started the financing process.
          </p>

          <p className="leading-8 text-slate-700">
            For auto loans or personal loans, a more detailed lender review may
            help you compare possible loan amounts, APRs, repayment terms, and
            monthly payments before making a final decision.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Questions to Ask Before You Continue
          </h2>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>Is this a prequalification, preapproval, or full application?</li>
            <li>Will this involve a soft credit inquiry or hard inquiry?</li>
            <li>What information has the lender actually reviewed?</li>
            <li>Is the estimated APR fixed or subject to change?</li>
            <li>Are there fees, origination costs, or closing costs?</li>
            <li>How long is the estimate valid?</li>
            <li>What could cause the final loan terms to change?</li>
          </ul>
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
                Is prequalification the same as approval?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                No. Prequalification is usually an estimate based on limited
                information. It does not guarantee approval, APR, loan amount, or
                final terms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Is preapproval guaranteed?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                No. Preapproval may be more detailed than prequalification, but
                final approval can still depend on underwriting, verified
                documents, credit updates, collateral, and lender requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Should I ask about soft and hard credit checks?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                Yes. Before submitting information, ask whether the lender will
                use a soft inquiry, hard inquiry, or no credit check.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Which is better, prequalification or preapproval?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                It depends on where you are in the borrowing process.
                Prequalification may be useful for early planning, while
                preapproval may be more useful when you are closer to choosing a
                lender, vehicle, home, or final loan amount.
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
            MYLOANPREVIEW is not a lender, bank, mortgage broker, auto dealer,
            credit repair company, or financial advisor. The information in this
            guide is for educational purposes only and should not be considered
            financial, legal, tax, mortgage, or credit advice. Prequalification,
            preapproval, loan estimates, APRs, loan amounts, fees, repayment
            terms, and final approval vary by lender and individual financial
            situation.
          </p>
        </section>
      </article>
    </main>
  );
}