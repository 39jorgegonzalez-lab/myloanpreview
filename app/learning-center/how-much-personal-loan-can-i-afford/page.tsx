import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "How Much Personal Loan Can I Afford? | MYLOANPREVIEW",
  description:
    "Estimate how much personal loan payment may fit your budget by reviewing income, expenses, debt-to-income ratio, APR, loan term, fees, and emergency savings.",
};

export default function HowMuchPersonalLoanCanIAffordPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Learning Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            How Much Personal Loan Can I Afford?
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            A realistic personal loan amount depends on more than the maximum a
            lender may offer. Your income, existing debts, essential expenses,
            savings needs, APR, repayment term, fees, and available monthly cash
            flow can all affect what payment may be manageable.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Quick answer
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Start by deciding how much monthly payment fits your real household
            budget after essential expenses, existing debts, savings, and
            irregular costs. Then use that payment with possible APRs and loan
            terms to estimate a loan amount. The amount you qualify to borrow
            may be higher than the amount you can comfortably afford.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Affordability is different from approval
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A lender may decide how much it is willing to lend based on its
              underwriting standards. That decision does not account for every
              expense, goal, or financial risk in your household.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Your affordability decision should consider whether the payment
              leaves enough room for housing, food, transportation, utilities,
              insurance, healthcare, childcare, savings, and unexpected
              expenses.
            </p>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Maximum approval is not a spending target
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Borrowing less than the maximum offered can reduce the monthly
                payment, total interest, and pressure on your budget.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Start with the monthly payment, not the loan amount
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              It can be tempting to begin with the amount you want to borrow.
              A safer comparison begins with the payment your budget may be able
              to support.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Once you identify a possible payment, you can compare how much
              that payment may support under several interest-rate and
              repayment-term assumptions.
            </p>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-semibold text-slate-950">
                A practical order
              </h3>

              <ol className="mt-3 space-y-3 leading-7 text-slate-700">
                <li>1. Review your monthly take-home income.</li>
                <li>2. Subtract essential expenses.</li>
                <li>3. Subtract existing debt payments.</li>
                <li>4. Include savings and irregular expenses.</li>
                <li>5. Choose a cautious possible loan payment.</li>
                <li>6. Preview several APR and term scenarios.</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Review your complete monthly budget
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              List your actual monthly spending before estimating a new payment.
              Include expenses that do not appear on a credit report.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[760px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Budget category
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Examples
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Why to include it
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Housing
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Rent, mortgage, association charges, and maintenance.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Housing is usually one of the largest required expenses.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Household essentials
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Food, utilities, phone, internet, and household supplies.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      These costs may not be included in a lender&apos;s DTI
                      calculation.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Transportation
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Vehicle payment, fuel, insurance, maintenance, or transit.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Transportation expenses can change throughout the year.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Healthcare and insurance
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Premiums, prescriptions, appointments, and deductibles.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Medical costs can be recurring or unpredictable.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Family responsibilities
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Childcare, education, elder care, and support obligations.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      These expenses can materially affect available cash flow.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Existing debts
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Credit cards, auto loans, student loans, and other debts.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      New borrowing adds another required payment.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Savings and irregular costs
                    </td>
                    <td className="px-4 py-3">
                      Emergency savings, repairs, annual bills, and seasonal
                      expenses.
                    </td>
                    <td className="px-4 py-3">
                      Leaving no room for these costs can make a payment harder
                      to maintain.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Example: estimating available monthly cash flow
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The following example starts with monthly take-home income and
              subtracts expenses, debts, savings, and a reserve for irregular
              costs.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[640px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Example budget item
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Monthly amount
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Take-home income
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $4,100
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Essential household expenses
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      − $2,550
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Existing debt payments
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      − $750
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Savings contribution
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      − $300
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Irregular-expense reserve
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      − $250
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Estimated remaining cash flow
                    </td>
                    <td className="px-4 py-3">
                      $250
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              This example does not mean that the entire $250 should become a
              loan payment. Keeping additional monthly flexibility can help
              protect against higher bills or reduced income.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              This is an educational example only. Household expenses and
              appropriate savings amounts vary significantly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Calculate your current debt-to-income ratio
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
              Lender DTI standards vary. DTI is useful for comparison, but it
              should not replace a review of take-home pay and complete
              household expenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Example: how a new payment changes DTI
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Suppose an applicant has $5,000 in gross monthly income and $1,250
              in existing monthly debt payments.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[760px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Scenario
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Total monthly debts
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Example DTI
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Before a new loan
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $1,250
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      25%
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      With a $300 payment
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $1,550
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      31%
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      With a $500 payment
                    </td>
                    <td className="px-4 py-3">
                      $1,750
                    </td>
                    <td className="px-4 py-3">
                      35%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              These percentages are examples, not approval limits or recommended
              targets. Each lender uses its own standards, and the household
              must still evaluate whether the payment fits its complete budget.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Estimate a loan amount from a payment budget
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Once you select a cautious possible payment, compare what that
              payment could support under different rate and term assumptions.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              The example below uses a $300 monthly payment and assumes a fixed
              interest rate, equal monthly payments, and no fees.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Example rate
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Term
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Monthly payment
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Estimated loan amount
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Estimated interest
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      10%
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      36 months
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $300
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      About $9,297
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      About $1,503
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      15%
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      36 months
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $300
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      About $8,654
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      About $2,146
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      10%
                    </td>
                    <td className="px-4 py-3">
                      60 months
                    </td>
                    <td className="px-4 py-3">
                      $300
                    </td>
                    <td className="px-4 py-3">
                      About $14,120
                    </td>
                    <td className="px-4 py-3">
                      About $3,880
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 leading-7 text-slate-700">
              The longer-term example supports a larger loan amount with the
              same monthly payment, but it also results in substantially more
              estimated interest and five years of scheduled payments.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              These figures are educational estimates. Actual loan amounts,
              payments, APRs, fees, and rounding methods vary by lender.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How APR affects affordability
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A higher rate means more of each payment may be needed for
              interest. With the same payment and term, a higher rate generally
              supports a smaller loan amount.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              APR may include certain lender charges in addition to the interest
              rate. Compare both the interest rate and APR, and review the
              official fee disclosures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How the repayment term affects affordability
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A longer term spreads repayment across more months. This can lower
              the required payment or support a larger loan amount, but it may
              increase total interest.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A shorter term generally requires a higher payment, but it may
              reduce the time spent carrying the debt and the total interest
              paid.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Account for an origination fee
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Some lenders charge an origination fee. Depending on the
              agreement, the fee may be deducted from the loan proceeds.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              If a $500 fee is deducted from a $10,000 loan, the borrower may
              receive $9,500. The payment and repayment obligation may still be
              based on the terms for the full loan amount.
            </p>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Compare the amount borrowed with the amount received
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Borrowing extra to offset a deducted fee can increase the
                payment and total cost. Review the net proceeds before accepting
                an offer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Keep room for emergencies
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A payment that uses every available dollar may become difficult
              after a repair, medical bill, income interruption, insurance
              increase, or other unplanned expense.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Consider whether the payment allows you to maintain or gradually
              rebuild emergency savings rather than relying on additional debt
              whenever an unexpected cost occurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Consider income stability
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A payment may appear manageable during a high-income month but
              become difficult when overtime, commission, bonuses, seasonal
              work, or contract income decreases.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              When income varies, consider using a cautious recurring amount
              rather than the highest recent month. Review how the payment would
              fit during a lower-income period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Consider changes that may occur during the loan term
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Rent, insurance, utilities, or childcare may increase.</li>
              <li>A vehicle or home may require repairs.</li>
              <li>Medical expenses may change.</li>
              <li>Income or working hours may decrease.</li>
              <li>Another debt may have a variable payment.</li>
              <li>Family or caregiving responsibilities may change.</li>
              <li>A planned move or employment change may affect expenses.</li>
            </ul>

            <p className="mt-4 leading-7 text-slate-700">
              Longer loan terms create more time for circumstances to change.
              Consider whether the payment remains reasonable under a less
              favorable scenario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Debt consolidation requires a complete comparison
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A personal loan used for debt consolidation may replace several
              monthly payments with one payment. The new payment may be lower
              because of a lower rate, a longer term, or both.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Compare the remaining balances, interest costs, fees, and payoff
              periods of the existing debts with the complete cost of the new
              loan.
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Confirm which debts will be paid off.</li>
              <li>Compare the new APR with the existing rates.</li>
              <li>Include the origination fee.</li>
              <li>Compare the new payoff date with the old payoff dates.</li>
              <li>Avoid borrowing unnecessary additional cash.</li>
              <li>Plan how paid-off revolving accounts will be managed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Should you use a secured personal loan?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A secured loan may offer different possible rates or eligibility
              terms, but it requires collateral. The pledged asset may be at
              risk if the loan is not repaid according to the agreement.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Do not pledge essential savings or a vehicle solely to make a
              larger loan appear affordable. Compare the financial benefit with
              the consequence of losing the collateral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Signs a proposed payment may be too high
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>
                The payment would require reducing essential household
                expenses.
              </li>
              <li>
                You would need to stop all emergency savings.
              </li>
              <li>
                A small income interruption would cause a missed payment.
              </li>
              <li>
                You would rely on credit cards for routine monthly expenses.
              </li>
              <li>
                The payment fits only during unusually high-income months.
              </li>
              <li>
                You have not included annual or irregular expenses.
              </li>
              <li>
                You are choosing a very long term only to reach the payment.
              </li>
              <li>
                The loan amount is larger than the expense you need to cover.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Do not change financial information to obtain a larger estimate
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Use accurate income, debt, housing, employment, and expense
              information. Do not inflate income, omit required debts, or alter
              documents to qualify for a larger loan.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A smaller realistic estimate is more useful than a larger amount
              based on information that cannot be verified or a payment that
              does not fit the household budget.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Ways to reduce the amount you need to borrow
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Delay nonessential parts of the expense.</li>
              <li>Use available savings without exhausting emergency reserves.</li>
              <li>Request a lower price or less expensive alternative.</li>
              <li>Split the project into smaller stages.</li>
              <li>Apply only for the amount needed.</li>
              <li>Avoid optional loan add-ons.</li>
              <li>Compare whether another payment arrangement is available.</li>
              <li>Review whether the expense can be postponed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How to compare possible loan offers
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Compare offers using the same desired amount received and similar
              repayment terms whenever possible.
            </p>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Comparison checklist
              </h3>

              <ul className="mt-3 space-y-3 leading-7 text-slate-700">
                <li>Stated loan amount.</li>
                <li>Net amount received after fees.</li>
                <li>Interest rate.</li>
                <li>APR.</li>
                <li>Monthly payment.</li>
                <li>Number of scheduled payments.</li>
                <li>Total repayment amount.</li>
                <li>Origination and other fees.</li>
                <li>Fixed or variable rate structure.</li>
                <li>Prepayment and late-payment terms.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask yourself
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>How much money do I actually need?</li>
              <li>What payment fits after all essential expenses?</li>
              <li>Can I keep contributing to emergency savings?</li>
              <li>Would the payment still fit during a lower-income month?</li>
              <li>Have I included annual and irregular expenses?</li>
              <li>How long will the debt remain in my budget?</li>
              <li>What is the total repayment amount?</li>
              <li>Could I postpone or reduce the expense?</li>
              <li>Am I borrowing more because the lender offered more?</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask the lender
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>What is the interest rate and APR?</li>
              <li>What fees apply?</li>
              <li>How much money will I actually receive?</li>
              <li>What is the required monthly payment?</li>
              <li>How many payments will I make?</li>
              <li>What is the total amount expected to be repaid?</li>
              <li>Is the rate fixed or variable?</li>
              <li>Is a smaller loan amount available?</li>
              <li>Are other repayment terms available?</li>
              <li>Is there a prepayment penalty?</li>
              <li>Can I review the complete offer in writing?</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Helpful calculators
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Use these tools to preview possible payments, loan amounts,
              repayment terms, and debt-to-income scenarios before applying.
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
                href="/debt-to-income-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Debt-to-Income Calculator
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
                href="/learning-center/personal-loan-minimum-income"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Personal Loan Minimum Income: What to Know
              </Link>

              <Link
                href="/learning-center/what-is-debt-to-income-ratio"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                What Is Debt-to-Income Ratio?
              </Link>

              <Link
                href="/learning-center/how-loan-terms-affect-monthly-payments"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How Loan Terms Affect Monthly Payments
              </Link>

              <Link
                href="/learning-center/how-to-lower-your-personal-loan-payment"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How to Lower Your Personal Loan Payment
              </Link>

              <Link
                href="/learning-center/how-to-compare-personal-loan-offers"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How to Compare Personal Loan Offers
              </Link>

              <Link
                href="/learning-center/secured-vs-unsecured-personal-loans"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Secured vs. Unsecured Personal Loans
              </Link>
            </div>
          </section>

          <EmailSignupCTA />

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Educational disclaimer
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              MYLOANPREVIEW is not a lender, broker, credit repair company, debt
              relief company, or financial advisor. This guide, calculators, and
              examples are for educational purposes only. Affordability,
              qualifying amounts, DTI requirements, payments, APRs, rates, fees,
              approvals, and terms vary by lender, borrower profile, household
              budget, location, and other factors. An estimate does not
              represent approval or a guaranteed offer. Review official lender
              disclosures before applying for or accepting a loan.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}