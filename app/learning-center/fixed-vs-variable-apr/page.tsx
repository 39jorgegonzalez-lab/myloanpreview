import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "Fixed vs. Variable APR: What Borrowers Should Know | MYLOANPREVIEW",
  description:
    "Learn how fixed and variable APRs work, how rate changes may affect loan costs and payments, and what to compare before choosing a loan.",
};

export default function FixedVsVariableAprPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Learning Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Fixed vs. Variable APR: What Borrowers Should Know
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            A fixed APR may provide more predictable borrowing costs, while a
            variable APR may change when its underlying rate changes.
            Understanding the difference can help you compare possible loan
            payments, total costs, and future financial risk.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Quick answer
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            A fixed APR does not automatically rise or fall with a market index.
            A variable APR can change over time based on the index, margin, and
            adjustment rules described in the loan agreement. Fixed-rate loans
            are generally more predictable, while variable-rate loans carry the
            risk that future rates and payments may increase.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What does APR mean?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              APR stands for annual percentage rate. It is a measure intended to
              help borrowers understand and compare the annual cost of
              borrowing. Depending on the type of credit, APR may reflect the
              interest rate and certain fees or finance charges.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              APR and interest rate are related, but they are not always the
              same. When comparing offers, review the APR, interest rate, fees,
              monthly payment, repayment term, and total amount you may repay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What is a fixed APR?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A fixed APR does not fluctuate automatically when a market index
              changes. For a typical fixed-rate installment loan, this can make
              scheduled principal-and-interest payments more predictable when
              payments are made according to the agreement.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              The word fixed does not necessarily mean that nothing about the
              account can ever change. Review the agreement for circumstances
              involving late payments, default, fees, promotions, refinancing,
              or other contract terms.
            </p>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Main benefit of a fixed APR
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Predictability can make it easier to plan a monthly budget and
                estimate the cost of carrying the loan through the scheduled
                repayment term.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What is a variable APR?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A variable APR can rise or fall based on a benchmark or index
              identified in the credit agreement. The lender may add a margin
              to that index when determining the applicable rate.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              The agreement should explain which index is used, how often the
              rate can adjust, whether any caps apply, and how a rate change may
              affect your payment or borrowing cost.
            </p>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Main risk of a variable APR
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                A starting rate that appears affordable today may become more
                expensive if the applicable index increases later.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Fixed APR vs. variable APR
            </h2>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Feature
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Fixed APR
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Variable APR
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Rate movement
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Does not automatically change with an index.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      May rise or fall when the applicable index changes.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Payment predictability
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Usually more predictable for an installment loan.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Payments or finance charges may change.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Effect of falling rates
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The APR generally does not fall automatically.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The APR may decrease, depending on the agreement.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Effect of rising rates
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The APR generally does not rise automatically.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The APR and borrowing cost may increase.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Budget risk
                    </td>
                    <td className="px-4 py-3">
                      Usually lower rate-change risk.
                    </td>
                    <td className="px-4 py-3">
                      Usually greater uncertainty about future costs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How a variable rate may be calculated
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Many variable-rate products use an index plus a lender-set margin.
              The index can move with broader market conditions, while the
              margin is generally described in the agreement.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Simplified example
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Suppose a loan uses a 5% index plus a 4% margin. The resulting
                rate would be 9%, subject to the loan terms and any applicable
                caps. If the index later increased to 6%, the resulting rate
                could become 10%.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                This is an educational example only. Actual calculations,
                adjustment dates, rate caps, rounding methods, and payment
                changes depend on the lender and agreement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How rate changes can affect your loan
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              When a variable rate increases, more of your payment may be needed
              to cover interest. Depending on the product, the required payment,
              repayment period, or total borrowing cost may increase.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              When a variable rate decreases, your interest cost or required
              payment may decrease. However, future rate decreases are not
              guaranteed and should not be treated as certain when planning your
              budget.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Example: How a Rate Increase Can Change the Payment
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Consider a simplified installment-loan example with a $15,000
              remaining balance and 36 equal monthly payments remaining. If
              the rate used to calculate the payment rises from 9% to 13%
              and then stays unchanged, the estimated payment increases.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[700px] w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Example showing how a higher rate changes payments on a $15,000 balance with 36 payments remaining
                </caption>
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Rate used in example
                    </th>
                    <th scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Monthly payment
                    </th>
                    <th scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Total interest
                    </th>
                    <th scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Total repaid
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <th scope="row" className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      9.0%
                    </th>
                    <td className="border-b border-slate-200 px-4 py-3">$477.00</td>
                    <td className="border-b border-slate-200 px-4 py-3">$2,171.86</td>
                    <td className="border-b border-slate-200 px-4 py-3">$17,171.86</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-950">
                      13.0%
                    </th>
                    <td className="px-4 py-3">$505.41</td>
                    <td className="px-4 py-3">$3,194.73</td>
                    <td className="px-4 py-3">$18,194.73</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              In this simplified example, the higher rate increases the
              estimated monthly payment by $28.41 and increases estimated
              interest over the remaining 36 payments by $1,022.88.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              This is an educational illustration, not a lender quote or
              available-rate promise. Actual variable-rate agreements may use
              different indexes, margins, adjustment dates, caps, payment
              recalculation methods, fees, and other rules. APR may also differ
              from the interest rate used to calculate scheduled payments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              When a fixed APR may be easier to manage
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A fixed APR may be worth considering when predictable payments
              are more important to you than the possibility of benefiting from
              future rate decreases.
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>You have limited room in your monthly budget.</li>
              <li>You prefer consistent scheduled payments.</li>
              <li>You expect to keep the loan for most or all of its term.</li>
              <li>You want to reduce exposure to rising market rates.</li>
              <li>You value certainty when comparing long-term loan costs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              When borrowers may consider a variable APR
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A variable APR may be considered when the initial terms are
              competitive and the borrower understands and can manage the risk
              of future increases.
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>
                You expect to repay the balance before several adjustments may
                occur.
              </li>
              <li>
                Your budget could reasonably handle a higher future payment.
              </li>
              <li>
                The agreement includes adjustment limits you understand.
              </li>
              <li>
                You have compared the possible maximum cost with fixed-rate
                alternatives.
              </li>
            </ul>

            <p className="mt-4 leading-7 text-slate-700">
              These factors do not make a variable APR automatically better.
              Compare the full terms and consider how an unfavorable rate change
              would affect your finances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask before choosing a variable APR
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Which index is used to calculate the rate?</li>
              <li>What margin is added to the index?</li>
              <li>When can the first rate adjustment occur?</li>
              <li>How often can the APR change?</li>
              <li>Is there a limit on each adjustment?</li>
              <li>Is there a maximum rate over the life of the loan?</li>
              <li>How would a higher rate affect the required payment?</li>
              <li>Is the initial rate temporary or promotional?</li>
              <li>Are there fees for refinancing or paying the loan early?</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Do not compare only the starting rate
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A low introductory or starting rate may not show what the loan
              could cost after future adjustments. Review the adjustment
              schedule, index, margin, caps, fees, monthly payment, and possible
              maximum rate before accepting an offer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How to compare fixed and variable loan offers
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Compare offers using the same loan amount and repayment period
              when possible. Review both the starting cost and a less favorable
              scenario in which the variable rate increases.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Consider the APR, interest rate, monthly payment, fees, amount
              received, adjustment rules, rate caps, repayment term, and total
              possible cost. The lowest starting payment is not always the
              lowest-risk or lowest-cost option.
            </p>
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
                href="/learning-center/how-to-compare-personal-loan-offers"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How to Compare Personal Loan Offers
              </Link>

              <Link
                href="/learning-center/personal-loan-fees-explained"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Personal Loan Fees Explained
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
              APRs, interest rates, fees, payment adjustments, approvals, and
              loan terms vary by lender, product, borrower profile, credit
              history, income, debt, location, and other factors. Review the
              official loan agreement and disclosures before accepting any
              offer.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}