import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "Personal Loan Minimum Income: What to Know | MYLOANPREVIEW",
  description:
    "Learn how income, debt-to-income ratio, credit history, loan size, and lender requirements may affect personal loan eligibility and payment estimates.",
};

export default function PersonalLoanMinimumIncomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Learning Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Personal Loan Minimum Income: What to Know
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Personal loan income requirements vary by lender, loan amount, and
            borrower profile. Income matters, but lenders may also review your
            existing debts, credit history, requested payment, and ability to
            manage the loan.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Quick answer
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            There is no single minimum income that applies to every personal
            loan. Each lender sets its own requirements and may consider your
            gross income, debt-to-income ratio, credit profile, requested loan
            amount, repayment term, and estimated monthly payment. Meeting an
            advertised income requirement does not guarantee approval.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Is there a universal minimum income for a personal loan?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              No universal minimum income applies to every lender or personal
              loan. One lender may publish a minimum annual income, while
              another may focus more heavily on monthly cash flow,
              debt-to-income ratio, credit history, and the size of the
              requested loan.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Requirements may also differ between loan products offered by the
              same lender. An applicant seeking a smaller loan may receive a
              different result than an applicant with the same income seeking a
              much larger loan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What lenders may review
            </h2>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[760px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Factor
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      What it may show
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Why it matters
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Income
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The money available to support debts and living expenses.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      A lender may evaluate the amount, source, documentation,
                      and expected continuation of the income.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Debt-to-income ratio
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      How monthly debt payments compare with gross monthly
                      income.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      A higher ratio may indicate less room for another required
                      payment.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Credit history
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      How credit accounts and payments have been managed.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      It may affect eligibility, loan amount, APR, and other
                      terms.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Requested loan amount
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The amount the applicant wants to borrow.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      A larger loan generally produces a larger payment when
                      other terms remain similar.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Repayment term
                    </td>
                    <td className="px-4 py-3">
                      The number of months scheduled for repayment.
                    </td>
                    <td className="px-4 py-3">
                      It affects the required payment and possible total
                      interest cost.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Gross income versus take-home pay
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Gross income is income before taxes, insurance premiums,
              retirement contributions, and other deductions. Take-home pay is
              the amount received after those deductions.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Debt-to-income calculations commonly use gross monthly income.
              However, your personal budget should also account for take-home
              pay because that is the money generally available for housing,
              food, transportation, utilities, savings, and other expenses.
            </p>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Approval and affordability are not the same
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                A lender may determine that an applicant meets its criteria, but
                that does not automatically mean the payment will feel
                comfortable within the applicant's complete household budget.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How to estimate monthly income
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              If you receive a fixed annual salary, divide the annual amount by
              12 to estimate gross monthly income.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Salary example
              </h3>

              <p className="mt-3 font-medium leading-7 text-slate-900">
                $48,000 annual gross income ÷ 12 = $4,000 gross monthly income
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                This is a simplified educational example. Actual qualifying
                income may be calculated differently by a lender.
              </p>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              If income varies, a lender may request documentation covering a
              longer period and may use an average or another method described
              in its underwriting standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How debt-to-income ratio affects the estimate
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Debt-to-income ratio, commonly called DTI, compares monthly debt
              payments with gross monthly income.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                DTI formula
              </h3>

              <p className="mt-3 font-medium leading-7 text-slate-900">
                Monthly debt payments ÷ gross monthly income × 100
              </p>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              Different lenders and loan products may use different DTI limits.
              A lender may also calculate DTI using the proposed personal loan
              payment in addition to existing monthly debts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Example: income and a proposed loan payment
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Suppose an applicant has $4,000 in gross monthly income, $1,200 in
              existing monthly debt payments, and a proposed personal loan
              payment of $300.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[640px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Calculation item
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Example amount
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Gross monthly income
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $4,000
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Existing monthly debts
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $1,200
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Proposed loan payment
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $300
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Estimated DTI including new payment
                    </td>
                    <td className="px-4 py-3">
                      37.5%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              The calculation is $1,500 divided by $4,000, which equals 37.5%.
              This example does not predict whether a particular lender would
              approve the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Why the same income can produce different results
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Income alone does not show the applicant's complete financial
              profile. Two applicants earning the same amount could receive
              different estimates or offers.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">
                  Applicant A
                </h3>

                <ul className="mt-3 space-y-2 leading-7 text-slate-700">
                  <li>Lower existing monthly debts.</li>
                  <li>Longer history of on-time payments.</li>
                  <li>Smaller requested loan amount.</li>
                  <li>More stable documented income.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">
                  Applicant B
                </h3>

                <ul className="mt-3 space-y-2 leading-7 text-slate-700">
                  <li>Higher existing monthly debts.</li>
                  <li>Recent missed payments.</li>
                  <li>Larger requested loan amount.</li>
                  <li>Income that is harder to document.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What income may be considered?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Depending on the lender and applicable requirements, income may
              come from more than a traditional full-time salary.
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Full-time or part-time employment.</li>
              <li>Self-employment or contract work.</li>
              <li>Retirement or pension benefits.</li>
              <li>Social Security or certain public assistance benefits.</li>
              <li>Investment, rental, or other recurring income.</li>
              <li>
                Alimony or child support when the applicant chooses to rely on
                it and applicable requirements are satisfied.
              </li>
            </ul>

            <p className="mt-4 leading-7 text-slate-700">
              A lender may ask for documentation and may evaluate whether the
              income is likely to continue. Do not include income you do not
              receive or cannot reasonably document.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Common income documentation
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Documentation requirements vary, but a lender may request one or
              more of the following:
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Recent pay statements.</li>
              <li>Bank statements showing deposits.</li>
              <li>Tax returns or tax forms.</li>
              <li>Employer contact or employment verification.</li>
              <li>Benefit or award statements.</li>
              <li>Retirement or pension statements.</li>
              <li>Business income records for self-employed applicants.</li>
            </ul>

            <p className="mt-4 leading-7 text-slate-700">
              Provide accurate information that matches the documents you
              submit. Differences between stated and documented income may delay
              review or affect the application decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Self-employed and variable income
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Self-employed, commission, seasonal, overtime, bonus, and contract
              income can vary from month to month. A lender may review a longer
              history to estimate a sustainable income amount.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Gross business revenue is not necessarily the same as personal
              qualifying income. Business expenses, taxes, and the lender's
              calculation method may affect the amount used for review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Does a higher income guarantee approval?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              No. Higher income may improve available cash flow, but approval
              can still depend on credit history, existing debts, recent
              applications, loan size, documentation, lender standards, and
              other factors.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A high-income applicant with substantial debt or serious payment
              problems may receive a different result than an applicant with
              lower income and fewer financial obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Can a co-borrower help?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Some lenders allow a joint application or co-borrower. A lender
              may then evaluate the income, debts, and credit profiles of both
              applicants.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A co-borrower is generally responsible for repayment under the
              agreement. Adding another person should not be treated as a simple
              approval strategy because missed payments can affect both
              borrowers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Ways to improve a possible loan estimate
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Request only the amount you reasonably need.</li>
              <li>Pay down existing revolving balances where practical.</li>
              <li>Correct possible errors on your credit reports.</li>
              <li>Make current payments on time when possible.</li>
              <li>Gather income documentation before applying.</li>
              <li>Compare more than one lender's terms.</li>
              <li>Use prequalification when available and appropriate.</li>
              <li>
                Preview the proposed payment before submitting an application.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Would requesting a smaller loan help?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A smaller requested amount generally produces a lower payment when
              the APR and term remain similar. This may improve affordability.
              You can also review{" "}
              <Link
                href="/learning-center/how-much-personal-loan-can-i-afford"
                className="font-medium text-blue-700 hover:underline"
              >
                how much personal loan you can afford
              </Link>{" "}
              before deciding on a requested amount. A smaller request can also
              reduce the amount of additional debt included in the lender's
              review.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Do not borrow extra money simply because a lender offers a larger
              amount. Compare the payment and total repayment cost using the
              amount you actually need.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Would choosing a longer term help?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A longer term may reduce the required monthly payment by spreading
              repayment across more months. That may improve monthly cash flow,
              but it can also increase total interest and keep the debt in your
              budget longer.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Compare both the monthly payment and total repayment amount before
              choosing a longer term.
            </p>
          </section>

          <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Never change income figures to qualify
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Enter complete and accurate information on a loan application. Do
              not inflate income, omit required debts, alter documents, or claim
              income that you do not receive.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              If a payment does not fit based on accurate information, consider
              requesting a smaller amount, improving your financial position, or
              exploring another option rather than submitting false details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What to do if an application is denied
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Review the lender's adverse-action notice or instructions for
              obtaining the principal reasons for the decision. The stated
              reasons may help identify whether income, existing debt, credit
              history, documentation, or another issue affected the result.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Do not immediately submit many new applications without reviewing
              the reason. Consider whether the issue can be corrected or whether
              a smaller requested amount would be more manageable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask before applying
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Does the lender publish a minimum income requirement?</li>
              <li>Does it use gross or net income for the requirement?</li>
              <li>Which income sources may be considered?</li>
              <li>What documents will be required?</li>
              <li>Can I check possible terms through prequalification?</li>
              <li>Will the initial check affect my credit?</li>
              <li>What loan amount and payment fit my budget?</li>
              <li>What APR, fees, and repayment terms may apply?</li>
              <li>Is a joint application allowed?</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Helpful calculators
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Use these tools to preview income, debt, payment, and possible loan
              scenarios before applying.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/debt-to-income-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Debt-to-Income Calculator
              </Link>

              <Link
                href="/personal-loan-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Personal Loan Calculator
              </Link>

              <Link
                href="/monthly-payment-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Monthly Payment Calculator
              </Link>

              <Link
                href="/credit-score-loan-estimate"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Credit Score Loan Estimate
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Related guides
            </h2>

            <div className="mt-5 grid gap-3">
              <Link
                href="/learning-center/what-is-debt-to-income-ratio"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                What Is Debt-to-Income Ratio?
              </Link>

              <Link
                href="/learning-center/what-credit-score-do-you-need-for-a-personal-loan"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                What Credit Score Do You Need for a Personal Loan?
              </Link>

              <Link
                href="/learning-center/loan-prequalification-vs-preapproval"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Loan Prequalification vs. Preapproval
              </Link>

              <Link
                href="/learning-center/how-to-lower-your-personal-loan-payment"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How to Lower Your Personal Loan Payment
              </Link>
            </div>
          </section>

          <EmailSignupCTA />

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Educational disclaimer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              MYLOANPREVIEW is not a lender, broker, credit repair company, or
              financial advisor. This guide and its examples are for educational
              purposes only. Income requirements, qualifying income, DTI limits,
              credit criteria, rates, APRs, fees, approvals, and terms vary by
              lender, product, borrower profile, location, and other factors.
              Meeting an estimated or advertised requirement does not guarantee
              approval. Review official lender requirements and disclosures
              before applying or accepting an offer.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}