import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "How to Compare Personal Loan Offers | MYLOANPREVIEW",
  description:
    "Learn how to compare personal loan offers by reviewing APR, monthly payment, fees, loan term, total repayment cost, and lender requirements.",
};

export default function HowToComparePersonalLoanOffersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Learning Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            How to Compare Personal Loan Offers
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Comparing personal loan offers is about more than finding the lowest
            monthly payment. APR, fees, loan term, total repayment cost, and
            lender requirements can all affect how affordable a loan may be.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Quick answer
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            To compare personal loan offers, review the APR, monthly payment,
            repayment term, fees, total repayment amount, funding timeline, and
            whether checking your rate affects your credit. The best offer is
            usually the one that fits your budget and has the lowest reasonable
            total cost for your situation.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Why comparing offers matters
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Two personal loans can look similar at first but cost very
              different amounts over time. One lender may offer a lower interest
              rate but charge an origination fee. Another may offer a slightly
              higher rate with fewer upfront costs.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Comparing the full offer can help you avoid focusing only on the
              advertised rate or the lowest monthly payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Personal loan offer comparison checklist
            </h2>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      What to compare
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Why it matters
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      APR
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      APR can include interest and certain loan fees, making it
                      useful for comparing total borrowing cost.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Monthly payment
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The payment should fit your budget without making other
                      bills harder to manage.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Loan term
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Longer terms may lower the payment but can increase total
                      interest paid.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Fees
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Origination fees, late fees, and prepayment penalties can
                      affect the real cost of the loan.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Total repayment amount
                    </td>
                    <td className="px-4 py-3">
                      This shows how much you may pay over the full life of the
                      loan.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Step 1: Compare APR, not just interest rate
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              The interest rate tells you how much the lender charges to borrow
              the money. APR can give a broader view because it may include
              certain loan costs or fees.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              When comparing personal loans, APR is often a better starting
              point than the interest rate alone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Step 2: Review the monthly payment
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              A loan offer may look attractive if the monthly payment is low,
              but make sure the payment is low for the right reason. Sometimes a
              lower payment comes from a longer repayment term, which can
              increase the total cost.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              A payment may be reasonable if it fits your monthly budget while
              still leaving room for savings, housing, food, transportation,
              insurance, and other debt payments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Step 3: Check fees and how they are charged
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Some personal loans include an origination fee. This fee may be
              deducted from your loan proceeds or included in the amount you
              repay. That can affect how much money you actually receive and how
              much the loan costs overall.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Example question to ask
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                “If I borrow $10,000, how much will I actually receive after
                fees, and how much will I repay in total?”
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Step 4: Compare total repayment cost
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              The total repayment amount shows the bigger picture. It includes
              the amount borrowed plus interest and any applicable costs over
              the full repayment term.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              If two offers have similar payments, the one with the lower total
              repayment cost may be less expensive over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Step 5: Understand the credit check
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Some lenders let you check possible rates with a soft inquiry,
              which generally does not affect your credit score. A full loan
              application may require a hard inquiry, which may affect your
              credit score.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Before submitting an application, review whether you are checking
              possible rates or officially applying for credit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Simple comparison example
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">Offer A</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Loan amount: $10,000</li>
                  <li>APR: 11.99%</li>
                  <li>Term: 36 months</li>
                  <li>Origination fee: $0</li>
                  <li>Payment: higher than a longer-term option</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">Offer B</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Loan amount: $10,000</li>
                  <li>APR: 13.99%</li>
                  <li>Term: 60 months</li>
                  <li>Origination fee: may apply</li>
                  <li>Payment: lower, but total cost may be higher</li>
                </ul>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-700">
              Offer B may have a lower monthly payment because the term is
              longer, but that does not automatically make it the cheaper loan.
              Comparing APR, fees, term, and total repayment cost together gives
              you a clearer view.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Red flags to watch for
            </h2>
            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Pressure to accept before comparing other options.</li>
              <li>Unclear fees or confusing repayment terms.</li>
              <li>Promises of guaranteed approval.</li>
              <li>Payments that appear affordable but stretch your budget.</li>
              <li>Large fees that reduce the amount you actually receive.</li>
              <li>No clear explanation of APR, term, and total repayment cost.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Helpful calculators
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Use these tools to preview possible payments and compare loan
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
                href="/learning-center/loan-prequalification-vs-preapproval"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Loan Prequalification vs. Preapproval
              </Link>
              <Link
                href="/learning-center/does-checking-loan-rates-hurt-your-credit"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Does Checking Loan Rates Hurt Your Credit?
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
              Personal loan rates, APRs, fees, approvals, and terms vary by
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