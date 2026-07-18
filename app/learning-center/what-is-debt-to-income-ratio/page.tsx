import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "What Is Debt-to-Income Ratio? | MYLOANPREVIEW",
  description:
    "Learn what debt-to-income ratio means, how to calculate DTI, why lenders review it, and how to estimate your ratio before applying for a loan.",
};

export default function DebtToIncomeRatioArticle() {
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
            What Is Debt-to-Income Ratio?
          </h1>

          <p className="text-lg leading-8 text-slate-700">
            Debt-to-income ratio, often called DTI, is one of the key numbers
            lenders may review when deciding whether a borrower can reasonably
            afford a new loan payment.
          </p>
        </header>

        <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Quick Answer
          </h2>

          <p className="leading-8 text-slate-700">
            Your debt-to-income ratio compares your monthly debt payments to
            your gross monthly income. In simple terms, it helps show how much of
            your income is already committed to debt before adding a new loan
            payment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            How to Calculate Debt-to-Income Ratio
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            To estimate your DTI, add up your monthly debt payments, divide that
            number by your gross monthly income, and multiply by 100.
          </p>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-center text-lg font-semibold text-slate-900">
              Monthly Debt Payments ÷ Gross Monthly Income × 100 = DTI %
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-700">
            For example, if your monthly debt payments total $1,500 and your
            gross monthly income is $5,000, your estimated DTI would be 30%.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What Counts as Monthly Debt?
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            Lenders may calculate DTI differently, but monthly debt payments
            commonly include recurring obligations such as:
          </p>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>
              <strong>Auto loans:</strong> Monthly vehicle loan payments.
            </li>
            <li>
              <strong>Personal loans:</strong> Monthly installment loan
              payments.
            </li>
            <li>
              <strong>Student loans:</strong> Monthly student loan payments.
            </li>
            <li>
              <strong>Credit cards:</strong> Minimum required monthly payments.
            </li>
            <li>
              <strong>Mortgage or rent:</strong> Housing payments may be
              considered depending on the loan type and lender.
            </li>
            <li>
              <strong>Other required payments:</strong> Some lenders may include
              child support, alimony, or other recurring obligations.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Why Debt-to-Income Ratio Matters
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            DTI helps lenders estimate whether adding a new monthly payment
            could create too much financial pressure. A lower DTI may suggest
            that more of your income is available for a new loan payment, while
            a higher DTI may make approval more difficult.
          </p>

          <p className="leading-8 text-slate-700">
            DTI does not guarantee approval or denial by itself. Lenders may also
            review credit score, income stability, employment history, payment
            history, down payment, loan amount, collateral, and the specific loan
            program.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            General DTI Range Examples
          </h2>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="p-5">
                <h3 className="font-bold text-slate-900">Below 36%</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  Often viewed as a stronger range because less income is
                  committed to monthly debt payments.
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900">36% to 43%</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  May still be workable for some borrowers, depending on loan
                  type, credit profile, income, and lender requirements.
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900">Above 43%</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  May be more difficult because a larger share of income is
                  already going toward debt payments.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            These are general educational examples, not approval rules. Actual
            DTI limits vary by lender, loan type, credit profile, income,
            financial history, and other application details.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            How DTI Can Affect Different Loan Types
          </h2>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>
              <strong>Personal loans:</strong> Lenders may use DTI to estimate
              whether you can afford an additional unsecured monthly payment.
            </li>
            <li>
              <strong>Auto loans:</strong> Auto lenders may review DTI along
              with credit score, income, down payment, vehicle price, and loan
              term.
            </li>
            <li>
              <strong>Mortgages:</strong> Mortgage lenders often review DTI
              closely because housing payments are usually large long-term
              obligations.
            </li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Ways to Improve Your DTI Before Applying
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            You may be able to improve your debt-to-income ratio by paying down
            existing debt, avoiding unnecessary new debt, increasing reliable
            income, choosing a smaller loan amount, making a larger down payment,
            or selecting a loan term that creates a more manageable payment.
          </p>

          <p className="leading-8 text-slate-700">
            The goal is not only to qualify. The goal is to choose a loan payment
            that fits your real budget without creating unnecessary financial
            stress.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-blue-200 bg-blue-600 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">
            Estimate Your Debt-to-Income Ratio
          </h2>

          <p className="mb-6 leading-8 text-blue-50">
            Use our free debt-to-income calculator to estimate your DTI before
            applying for a personal loan, auto loan, or mortgage.
          </p>

          <Link
            href="/debt-to-income-calculator"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Try the Debt-to-Income Calculator
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900">
                What is a good debt-to-income ratio?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                A lower DTI is generally better because it means less of your
                income is already committed to debt payments. However, what
                counts as acceptable depends on the lender, loan type, credit
                profile, and full application.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Does DTI affect my credit score?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                DTI itself is not usually part of your credit score, but the
                debts used to calculate DTI may still affect your credit profile,
                especially payment history and credit card utilization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Do lenders calculate DTI the same way?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                Not always. Different lenders and loan programs may include or
                exclude certain payments, estimate future housing costs
                differently, or apply different maximum DTI requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Can I get approved with a high DTI?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                It may be possible, but approval is not guaranteed. A higher DTI
                may require stronger credit, stable income, a larger down
                payment, a smaller loan amount, or other compensating factors.
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
            MYLOANPREVIEW is not a lender, bank, mortgage broker, credit repair
            company, or financial advisor. The information in this guide is for
            educational purposes only and should not be considered financial,
            legal, tax, mortgage, or credit advice. Loan approval, DTI
            requirements, APR, fees, down payment requirements, repayment terms,
            and loan availability vary by lender and individual financial
            situation.
          </p>
        </section>
      </article>
    </main>
  );
}