import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "Personal Loan Fees Explained | MYLOANPREVIEW",
  description:
    "Learn about common personal loan fees, including origination fees, late fees, prepayment penalties, and how fees can affect APR and total loan cost.",
};

export default function PersonalLoanFeesExplainedPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Learning Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Personal Loan Fees Explained
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Personal loan fees can affect how much money you receive, how much
            you repay, and how expensive a loan really is. Understanding common
            fees can help you compare loan offers more carefully before applying.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Quick answer
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Common personal loan fees may include origination fees, late payment
            fees, returned payment fees, prepayment penalties, and optional
            payment processing fees. Not every lender charges the same fees, so
            compare APR, monthly payment, amount received, and total repayment
            cost before accepting an offer.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Why personal loan fees matter
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              A personal loan with a low interest rate is not always the lowest
              cost option. Fees can increase the APR, reduce the amount of money
              you receive, or increase the total amount you repay over time.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              That is why it is important to compare the full loan offer, not
              just the advertised rate or the monthly payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Common personal loan fees
            </h2>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Fee type
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      What it means
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Why it matters
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Origination fee
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      A fee some lenders charge to process or issue the loan.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      It may reduce the amount you receive or increase the loan
                      cost included in APR.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Late payment fee
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      A fee charged if your payment is not made on time.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      It can make the loan more expensive and may create budget
                      stress.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Returned payment fee
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      A fee charged if a payment fails or is returned.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      It can add cost if your account does not have enough funds
                      when payment is attempted.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Prepayment penalty
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      A fee some lenders may charge if you repay early.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      It can reduce the benefit of paying off the loan ahead of
                      schedule.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Payment processing fee
                    </td>
                    <td className="px-4 py-3">
                      A fee that may apply for certain payment methods.
                    </td>
                    <td className="px-4 py-3">
                      It can add avoidable cost if free payment options are
                      available.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How an origination fee can affect your loan
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              An origination fee is one of the most important personal loan fees
              to understand. Some lenders subtract this fee from your loan
              proceeds. That means you may borrow one amount but receive less
              money after the fee is deducted.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Simple example
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                If you are approved for a $10,000 personal loan with a $500
                origination fee deducted from the proceeds, you may receive
                $9,500 but still repay the loan based on the lender’s terms.
              </p>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              This is why borrowers should ask how much they will actually
              receive after fees and how much they will repay in total.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Do fees affect APR?
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Fees can affect APR because APR may include the interest rate plus
              certain lender charges. This is one reason APR can be more useful
              than the interest rate alone when comparing personal loan offers.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              If two loans have the same interest rate but one has higher fees,
              the loan with higher fees may have a higher APR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Fees to watch carefully
            </h2>
            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>
                Large origination fees that reduce the amount you actually
                receive.
              </li>
              <li>
                Prepayment penalties that make it harder to save money by paying
                off the loan early.
              </li>
              <li>
                Late fees that could add cost if the payment does not fit your
                monthly budget.
              </li>
              <li>
                Returned payment fees if automatic payments fail.
              </li>
              <li>
                Optional add-ons that increase the cost but are not required.
              </li>
              <li>
                Upfront payment requests before you receive a real loan offer.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Be careful with upfront-fee loan promises
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Be cautious if someone promises approval but asks you to pay money
              upfront before receiving a real loan. Legitimate loan costs should
              be clearly explained in official disclosures. Pressure, vague
              fees, and guaranteed approval language are warning signs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask before accepting a loan with fees
            </h2>
            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>What fees are included in this loan offer?</li>
              <li>Is there an origination fee?</li>
              <li>Will any fee be deducted from the amount I receive?</li>
              <li>What is the APR after fees are included?</li>
              <li>What is the total repayment amount?</li>
              <li>Are there late payment or returned payment fees?</li>
              <li>Is there a prepayment penalty?</li>
              <li>Are any add-on products optional?</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How to compare loans with different fees
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              When two loan offers have different fees, compare them using the
              same loan amount and repayment term when possible. Review the APR,
              monthly payment, amount received after fees, and total repayment
              amount.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              A loan with no origination fee is not automatically the best
              choice, and a loan with a fee is not automatically bad. The better
              question is whether the full cost is reasonable compared with
              other offers you may qualify for.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Helpful calculators
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Use these tools to preview payments and compare possible loan
              scenarios before applying.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
              <Link
                href="/debt-to-income-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Debt-to-Income Calculator
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Related guides
            </h2>
            <div className="mt-5 grid gap-3">
              <Link
                href="/learning-center/how-apr-works-on-a-loan"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How APR Works on a Loan
              </Link>
              <Link
                href="/learning-center/what-is-a-good-apr-for-a-personal-loan"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                What Is a Good APR for a Personal Loan?
              </Link>
              <Link
                href="/learning-center/how-to-compare-personal-loan-offers"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How to Compare Personal Loan Offers
              </Link>
              <Link
                href="/learning-center/loan-prequalification-vs-preapproval"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Loan Prequalification vs. Preapproval
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
              financial advisor. This guide is for educational purposes only.
              Personal loan fees, APRs, rates, approvals, and terms vary by
              lender, borrower profile, credit history, income, debt, location,
              and other factors. Always review official loan disclosures before
              accepting any loan offer.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}