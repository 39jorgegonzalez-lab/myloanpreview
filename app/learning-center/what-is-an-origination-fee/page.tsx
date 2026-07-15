import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "What Is an Origination Fee? | MYLOANPREVIEW",
  description:
    "Learn how loan origination fees work, how they may reduce loan proceeds, how they affect APR, and what to compare before accepting a loan.",
};

export default function WhatIsAnOriginationFeePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Learning Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            What Is an Origination Fee?
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            An origination fee is a charge some lenders assess when making a
            loan. Understanding how the fee is calculated, paid, and disclosed
            can help you compare the amount you receive, the APR, and the total
            cost of borrowing.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Quick answer
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            An origination fee is a lender charge associated with processing
            and issuing a loan. It may be calculated as a percentage of the loan
            amount or as a flat charge. Depending on the agreement, the fee may
            be deducted from the loan proceeds, included in the amount financed,
            or paid as part of closing costs.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What does an origination fee cover?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Lenders may use origination fees to cover work associated with
              reviewing, processing, underwriting, preparing, and funding a
              loan. The exact services and terminology can vary by lender and
              loan type.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A lender may show one origination fee or separate charges for
              processing, documentation, underwriting, application review, or
              other services. Review the complete disclosure rather than
              assuming similarly named fees are identical.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How is an origination fee calculated?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Many origination fees are calculated as a percentage of the loan
              amount. Others may be stated as a fixed dollar amount.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Percentage-fee formula
              </h3>

              <p className="mt-3 font-medium leading-7 text-slate-900">
                Origination fee = loan amount × fee percentage
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                For example, a 5% origination fee on a $10,000 loan would equal
                $500.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Origination fee examples
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              These examples assume the fee is deducted from the loan proceeds
              before the remaining funds are provided to the borrower.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Loan amount
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Fee percentage
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Origination fee
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Estimated amount received
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      $5,000
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      3%
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $150
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $4,850
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      $10,000
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      5%
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $500
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $9,500
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      $20,000
                    </td>
                    <td className="px-4 py-3">
                      8%
                    </td>
                    <td className="px-4 py-3">
                      $1,600
                    </td>
                    <td className="px-4 py-3">
                      $18,400
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              These examples are for educational purposes only. Actual fees,
              proceeds, APRs, payment calculations, and repayment obligations
              depend on the lender and official loan agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Loan amount versus amount received
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              One of the most important questions is whether the origination fee
              will reduce the amount of money you receive.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              If a lender approves a $10,000 loan and deducts a $500 fee from
              the proceeds, you may receive $9,500. Your repayment obligation
              may still be based on the full loan amount and the terms stated in
              the agreement.
            </p>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Plan for the amount you actually need
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                If you need exactly $10,000 for an expense, a $10,000 loan with
                a deducted fee may not provide enough usable funds. Check the
                estimated net proceeds before accepting the offer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How much would you need to borrow to receive $10,000?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              If a 5% fee is deducted from the proceeds, borrowing $10,000 would
              provide only $9,500. To receive approximately $10,000 after that
              fee, the loan amount would need to be approximately $10,526.32.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Simplified calculation
              </h3>

              <p className="mt-3 font-medium leading-7 text-slate-900">
                Required loan amount = desired proceeds ÷ (1 − fee percentage)
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                $10,000 ÷ 0.95 = approximately $10,526.32
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Actual lender calculations may use different rounding,
                disclosure, or fee-assessment methods.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Does an origination fee affect APR?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              An origination charge may be included when APR is calculated. This
              is one reason the APR can be higher than the stated interest rate.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              APR can help compare offers that have different combinations of
              interest rates and certain lender charges. However, also review
              the monthly payment, amount received, repayment term, and total
              repayment amount.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Origination fee versus interest
            </h2>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[640px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Cost
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      What it generally represents
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      How it may be charged
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Origination fee
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      A charge associated with making or processing the loan.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      It may be assessed near the beginning of the loan.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Interest
                    </td>
                    <td className="px-4 py-3">
                      The cost charged for borrowing and carrying the balance.
                    </td>
                    <td className="px-4-3">
                      The cost charged for borrowing and carrying the balance.
                    </td>
                    <td className="px-4 py-3">
                      It is generally paid through scheduled loan payments.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Is a loan with no origination fee always better?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Not necessarily. A loan with no origination fee could have a
              higher interest rate, higher APR, less favorable repayment term,
              or other costs.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A loan with an origination fee is also not automatically a poor
              choice. Compare the complete cost and terms of each offer rather
              than evaluating one fee by itself.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Can an origination fee be reduced or waived?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              You can ask whether the lender offers another loan option with a
              lower fee or no origination fee. The lender may or may not offer
              an alternative, and a reduced fee could be paired with a different
              interest rate or other terms.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Compare the complete revised offer before accepting it. A lower
              fee does not necessarily produce a lower overall borrowing cost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How to compare two offers with different fees
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Start by comparing offers for the same amount of usable funds and
              a similar repayment term. Then review each offer using the
              following figures:
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>The stated loan amount.</li>
              <li>The amount you will actually receive.</li>
              <li>The origination fee in dollars and as a percentage.</li>
              <li>The interest rate and APR.</li>
              <li>The required monthly payment.</li>
              <li>The number of scheduled payments.</li>
              <li>The total amount you may repay.</li>
              <li>Any late, returned-payment, or prepayment charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask before accepting the fee
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>How much is the origination fee in dollars?</li>
              <li>What percentage of the loan amount does it represent?</li>
              <li>Will the fee be deducted from the loan proceeds?</li>
              <li>How much money will I actually receive?</li>
              <li>Is the fee included in the disclosed APR?</li>
              <li>Is the fee refundable if the loan does not close?</li>
              <li>Is another loan option available without the fee?</li>
              <li>Would the alternative have a different APR or term?</li>
              <li>Are there any additional lender or processing fees?</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Origination fees are different from advance-fee loan scams
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Be cautious if someone promises or guarantees a loan but requires
              you to send money first through a gift card, wire transfer,
              cryptocurrency, payment app, or another difficult-to-reverse
              method.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A legitimate loan charge should be explained clearly in official
              disclosures. Pressure, guaranteed-approval claims, unclear lender
              information, and demands for immediate payment are warning signs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Warning signs to watch for
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>A promise of guaranteed approval regardless of your profile.</li>
              <li>A demand to pay before receiving official loan disclosures.</li>
              <li>Pressure to act immediately or keep the offer secret.</li>
              <li>A lender that will not clearly identify itself.</li>
              <li>A fee requested through a gift card or cryptocurrency.</li>
              <li>Loan terms that are vague, incomplete, or unavailable.</li>
              <li>An unexpected loan message for a loan you never requested.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Review official disclosures
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Before accepting an offer, review the lender's official
              disclosures and agreement. Confirm the fee amount, APR, interest
              rate, payment schedule, amount financed, net proceeds, and total
              repayment obligation.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Save copies of the disclosures and ask questions about anything
              you do not understand before signing or authorizing the loan.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Helpful calculators
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Use these tools to preview possible payments and compare borrowing
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
                href="/learning-center/personal-loan-fees-explained"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Personal Loan Fees Explained
              </Link>

              <Link
                href="/learning-center/how-apr-works-on-a-loan"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How APR Works on a Loan
              </Link>

              <Link
                href="/learning-center/how-to-compare-personal-loan-offers"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How to Compare Personal Loan Offers
              </Link>

              <Link
                href="/learning-center/how-loan-terms-affect-monthly-payments"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How Loan Terms Affect Monthly Payments
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
              purposes only. Origination fees, APRs, interest rates, proceeds,
              payments, approvals, and terms vary by lender, product, borrower
              profile, credit history, income, debt, location, and other
              factors. Review the official loan agreement and disclosures before
              accepting any offer.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}