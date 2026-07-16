import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "Secured vs. Unsecured Personal Loans | MYLOANPREVIEW",
  description:
    "Compare secured and unsecured personal loans, including collateral, APR, approval factors, repayment risks, and what to review before accepting an offer.",
};

export default function SecuredVsUnsecuredPersonalLoansPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Learning Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Secured vs. Unsecured Personal Loans
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            A secured personal loan requires collateral, while an unsecured
            personal loan does not require a specific asset to support the loan.
            Understanding the differences can help you compare possible APRs,
            approval requirements, repayment risks, and borrower
            responsibilities.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Quick answer
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            A secured personal loan is backed by collateral such as eligible
            savings, a certificate account, a vehicle, or another asset accepted
            by the lender. An unsecured personal loan is approved without
            pledging a specific asset. Secured loans may offer different rates,
            amounts, or eligibility requirements, but the pledged property may
            be at risk if the borrower does not repay according to the
            agreement.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What is a secured personal loan?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A secured personal loan requires the borrower to pledge an
              eligible asset as collateral. The collateral gives the lender a
              security interest or other contractual right in the property
              described in the loan agreement.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              If the borrower defaults, the lender may be able to take, apply,
              or sell the collateral as permitted by the agreement and
              applicable law. The exact process and borrower protections depend
              on the loan, collateral, lender, and location.
            </p>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Secured does not mean guaranteed approval
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Collateral may reduce part of the lender&apos;s risk, but the
                lender may still review income, debts, credit history, payment
                history, requested amount, and the value of the proposed
                collateral.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What is an unsecured personal loan?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              An unsecured personal loan does not require the borrower to pledge
              a specific asset as collateral. The lender generally evaluates
              whether the applicant appears able and likely to repay based on
              the information included in its review.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              The lender may consider credit reports, credit scores, income,
              existing debt, employment information, requested loan amount,
              repayment term, and other factors.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Unsecured does not mean consequence-free. Missed payments,
              default, collection activity, fees, credit reporting, or other
              remedies may still apply depending on the agreement and
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Secured versus unsecured personal loans
            </h2>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Feature
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Secured personal loan
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Unsecured personal loan
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Collateral
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Requires an eligible asset accepted by the lender.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Does not require a specific pledged asset.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Main borrower risk
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The pledged asset may be taken or applied after default,
                      subject to the agreement and law.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Credit damage, collection activity, fees, or legal remedies
                      may still follow default.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Possible pricing
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      May have a different APR because collateral can reduce some
                      lender risk.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Pricing may depend more heavily on the borrower&apos;s
                      credit and financial profile.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Application review
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      May include borrower underwriting and collateral
                      verification.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Generally focuses on borrower eligibility and ability to
                      repay.
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Funding speed
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Collateral review may add steps to the process.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      May require fewer collateral-related steps.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Availability
                    </td>
                    <td className="px-4 py-3">
                      Depends on the lender and the type and value of collateral.
                    </td>
                    <td className="px-4 py-3">
                      Depends on the lender&apos;s credit and underwriting
                      requirements.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What assets may be used as collateral?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Acceptable collateral varies by lender. A lender may accept only
              certain assets and may place restrictions on how those assets are
              valued or used.
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Funds in an eligible savings account.</li>
              <li>A certificate of deposit or certificate account.</li>
              <li>A vehicle that meets the lender&apos;s requirements.</li>
              <li>Investment or brokerage assets accepted by the lender.</li>
              <li>Equipment or other eligible personal property.</li>
            </ul>

            <p className="mt-4 leading-7 text-slate-700">
              Not every lender offers each option. Property that is already
              pledged to another debt may also be unavailable or subject to
              additional restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Savings-secured personal loans
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Some banks and credit unions offer loans secured by funds held in
              a savings or certificate account. The financial institution may
              place a hold on some or all of the pledged funds while the loan is
              outstanding.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Depending on the agreement, the funds may become available
              gradually as the balance declines, or they may remain restricted
              until the loan is repaid.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Questions to ask
              </h3>

              <ul className="mt-3 space-y-3 leading-7 text-slate-700">
                <li>How much of the account will be restricted?</li>
                <li>Will the pledged funds continue earning interest?</li>
                <li>When will the funds become available again?</li>
                <li>What happens to the account after a missed payment?</li>
                <li>Can additional funds be withdrawn during repayment?</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Vehicle-secured personal loans
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Some personal loans may use an eligible vehicle as collateral.
              The lender may review ownership, existing liens, mileage,
              condition, age, insurance, and estimated value.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Using a vehicle as collateral creates a serious practical risk.
              Losing access to the vehicle could affect transportation to work,
              medical appointments, school, childcare, and other essential
              activities.
            </p>

            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Consider the consequence, not only the rate
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                A possible rate reduction may not justify pledging a vehicle
                that is essential to your household. Review what could happen
                after default before accepting the loan.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Does collateral guarantee a lower APR?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              No. A secured loan may have a lower APR than a comparable
              unsecured offer, but that outcome is not guaranteed.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Pricing can still depend on the borrower&apos;s credit history,
              income, existing debt, requested amount, repayment term, lender
              policies, collateral value, and other factors.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Compare actual written offers rather than assuming the secured
              option will automatically be less expensive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Does collateral make approval easier?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Collateral may improve the possible options available to some
              borrowers, but it does not guarantee approval.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A lender may still determine that the applicant&apos;s income,
              existing debts, payment history, requested amount, documentation,
              or other information does not satisfy its requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What happens if a secured loan is not repaid?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The consequences depend on the agreement, collateral, lender, and
              applicable law. The lender may have the right to take possession
              of the collateral, apply pledged funds to the balance, or sell the
              property.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Losing the collateral may not always eliminate the entire debt.
              If the amount recovered from the property is less than the total
              amount owed, an unpaid balance may remain depending on the
              agreement and applicable law.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Default may also result in fees, collection activity, negative
              credit reporting, or other consequences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What happens if an unsecured loan is not repaid?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              An unsecured lender does not begin with a contractual claim to a
              specifically pledged asset. However, the borrower still has a
              legal repayment obligation under the agreement.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Missed payments or default may lead to late fees, negative credit
              reporting, collection activity, account charge-off, or legal
              remedies as permitted by the agreement and applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Is an unsecured loan safer?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              An unsecured loan avoids pledging a specific asset, which removes
              the direct risk that the lender will take that particular asset
              under a collateral agreement.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              That does not make the debt risk-free. The payment must still fit
              the borrower&apos;s budget, and default can still create serious
              financial and credit consequences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              When a secured personal loan may be considered
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A secured loan may be considered when the borrower understands the
              collateral risk and the written offer provides a meaningful
              benefit compared with available unsecured options.
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>
                The secured offer has a meaningfully lower APR after fees.
              </li>
              <li>
                The collateral is not essential to daily transportation or
                housing.
              </li>
              <li>
                The required payment fits comfortably within the budget.
              </li>
              <li>
                The borrower understands when the lender can take the asset.
              </li>
              <li>
                The collateral terms are clearly explained in writing.
              </li>
              <li>
                The borrower has compared unsecured alternatives.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              When an unsecured personal loan may be considered
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              An unsecured loan may be considered when the borrower qualifies
              for manageable terms and does not want to pledge a specific asset.
            </p>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>The required payment fits the monthly budget.</li>
              <li>The APR and fees are competitive.</li>
              <li>The requested loan amount is limited to what is needed.</li>
              <li>The borrower prefers not to risk a vehicle or savings.</li>
              <li>The repayment term and total cost are reasonable.</li>
              <li>The lender provides clear official disclosures.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Compare more than the monthly payment
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              A smaller payment can result from a lower APR, a longer repayment
              term, or a different loan amount. A longer term may lower the
              monthly payment while increasing total interest.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Compare the APR, fees, monthly payment, number of payments, amount
              received, total repayment amount, and collateral risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Secured loan comparison example
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Suppose a borrower receives two possible $10,000 offers with the
              same 36-month repayment term.
            </p>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[780px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Comparison item
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Secured example
                    </th>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Unsecured example
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Loan amount
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $10,000
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      $10,000
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Example rate
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      10%
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      15%
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Example monthly payment
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      About $323
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      About $347
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-slate-950">
                      Collateral
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      Eligible asset is pledged.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      No specific asset is pledged.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      Main tradeoff
                    </td>
                    <td className="px-4 py-3">
                      Lower example payment, but collateral is at risk.
                    </td>
                    <td className="px-4 py-3">
                      Higher example payment, but no specific pledged asset.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              This is an educational example only. It does not represent
              available rates, approval, or a lender offer. Actual APRs, fees,
              payments, collateral requirements, and terms vary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Review the collateral description carefully
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              The agreement should identify what property secures the loan.
              Review whether the collateral description is limited to one asset
              or could include additional property or accounts held with the
              lender.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Ask for clarification when the agreement uses terms such as
              security interest, lien, pledge, cross-collateralization, setoff,
              or collateral securing other obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask about a secured offer
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>What exact asset will secure the loan?</li>
              <li>How was the collateral valued?</li>
              <li>Can the collateral value change the loan amount?</li>
              <li>Will a lien or hold be placed on the asset?</li>
              <li>Can I sell or transfer the asset during repayment?</li>
              <li>What happens after one missed payment?</li>
              <li>When can the lender take or apply the collateral?</li>
              <li>Will I receive notice before the lender takes action?</li>
              <li>Could I still owe money after the collateral is sold?</li>
              <li>When will the lien or account restriction be released?</li>
              <li>Does the collateral also secure any other debt?</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask about either loan type
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>What is the interest rate?</li>
              <li>What is the APR?</li>
              <li>What fees are included?</li>
              <li>How much money will I actually receive?</li>
              <li>What is the required monthly payment?</li>
              <li>How many scheduled payments will I make?</li>
              <li>What is the total amount expected to be repaid?</li>
              <li>Is the rate fixed or variable?</li>
              <li>Is there a prepayment penalty?</li>
              <li>What happens after a late or missed payment?</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Be cautious when essential property is required
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Think carefully before pledging property that is essential to
              housing, employment, transportation, medical needs, education, or
              family responsibilities.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Do not focus only on whether the loan can be approved. Consider
              what would happen to your household if the pledged property were
              no longer available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Warning signs to watch for
            </h2>

            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Guaranteed approval regardless of income or credit.</li>
              <li>Pressure to pledge an asset immediately.</li>
              <li>Unclear descriptions of the collateral.</li>
              <li>Fees that are not included in official disclosures.</li>
              <li>Requests for payment through gift cards or cryptocurrency.</li>
              <li>A lender that will not provide terms in writing.</li>
              <li>Blank documents or missing loan amounts and payment terms.</li>
              <li>Promises that the collateral can never be taken.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How to compare secured and unsecured offers
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Compare offers using the same amount of usable funds and a similar
              repayment term whenever possible. Then evaluate both the
              financial cost and the collateral risk.
            </p>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-semibold text-slate-950">
                Comparison checklist
              </h3>

              <ul className="mt-3 space-y-3 leading-7 text-slate-700">
                <li>Same desired amount received.</li>
                <li>Same or similar repayment term.</li>
                <li>APR and interest rate clearly identified.</li>
                <li>Origination and collateral-related fees included.</li>
                <li>Monthly payment compared.</li>
                <li>Total repayment amount compared.</li>
                <li>Collateral value and importance considered.</li>
                <li>Default consequences reviewed.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Helpful calculators
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Use these tools to preview possible payments, compare APRs, and
              review affordability before applying.
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
                href="/learning-center/how-to-compare-personal-loan-offers"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                How to Compare Personal Loan Offers
              </Link>

              <Link
                href="/learning-center/what-credit-score-do-you-need-for-a-personal-loan"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                What Credit Score Do You Need for a Personal Loan?
              </Link>

              <Link
                href="/learning-center/personal-loan-minimum-income"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Personal Loan Minimum Income: What to Know
              </Link>

              <Link
                href="/learning-center/what-is-an-origination-fee"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                What Is an Origination Fee?
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
              purposes only. Collateral requirements, liens, repossession
              rights, APRs, rates, fees, payments, approvals, and loan terms
              vary by lender, agreement, borrower profile, collateral,
              location, and applicable law. Review all official disclosures and
              consider qualified legal or financial guidance before pledging
              valuable property.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}