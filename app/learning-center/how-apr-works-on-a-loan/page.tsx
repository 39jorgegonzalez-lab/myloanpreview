import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "How APR Works on a Loan | MYLOANPREVIEW",
  description:
    "Learn how APR works on a loan, how it differs from interest rate, and why APR can help borrowers compare loan costs before applying.",
};

export default function HowAprWorksOnALoanPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Loan Learning Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            How APR Works on a Loan
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            APR can help you understand the possible yearly cost of borrowing,
            especially when a loan includes fees in addition to interest. Knowing
            how APR works can make it easier to compare loan options before you
            apply.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">
            Quick answer
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            APR stands for annual percentage rate. It is a yearly percentage
            that can reflect both the interest rate and certain loan costs or
            fees. Because APR can include more than just interest, it may give
            borrowers a clearer way to compare loan offers.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              What does APR mean?
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              APR is a way to describe the cost of borrowing money over one
              year. For many loans, it includes the interest rate plus certain
              fees that are part of the loan cost. This makes APR different from
              the interest rate alone.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              For example, two loans may have the same interest rate, but one
              loan may charge a higher origination fee. In that situation, the
              loan with the higher fee may have a higher APR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              APR vs. interest rate
            </h2>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 font-semibold">
                      Term
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
                      Interest rate
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      The percentage a lender charges for borrowing the money.
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3">
                      It strongly affects your monthly payment and total
                      interest.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-950">
                      APR
                    </td>
                    <td className="px-4 py-3">
                      A broader yearly cost estimate that can include interest
                      and certain fees.
                    </td>
                    <td className="px-4 py-3">
                      It can make it easier to compare loan offers with
                      different fees.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Why APR matters when comparing loans
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              APR matters because the lowest monthly payment is not always the
              lowest-cost loan. A longer loan term may lower the monthly payment
              but increase the total interest paid over time. A loan with fees
              may also cost more than it appears from the interest rate alone.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              When comparing loan options, APR can help you look beyond the
              advertised rate and focus on the possible overall cost of
              borrowing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Simple APR comparison example
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">Loan A</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Loan amount: $10,000</li>
                  <li>Interest rate: 9.99%</li>
                  <li>Fees: $0</li>
                  <li>APR: 9.99%</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">Loan B</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Loan amount: $10,000</li>
                  <li>Interest rate: 9.49%</li>
                  <li>Fees: $400</li>
                  <li>APR: may be higher than the interest rate</li>
                </ul>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-700">
              Loan B has a lower interest rate, but the added fee may increase
              the APR. That is why APR can be helpful when comparing multiple
              loan offers side by side.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Does APR change your monthly payment?
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Your monthly payment is usually based on the loan amount, interest
              rate, and repayment term. APR can help show the broader cost of
              the loan, especially when fees are included. In some cases, fees
              may be deducted from the loan proceeds, financed into the loan, or
              paid separately.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Before comparing offers, check whether any fees are included in
              the loan balance or taken out before funds are sent to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions to ask before comparing APRs
            </h2>
            <ul className="mt-4 space-y-3 leading-7 text-slate-700">
              <li>Does the APR include an origination fee or other loan fees?</li>
              <li>Is the rate fixed or variable?</li>
              <li>What loan term is being used for the APR quote?</li>
              <li>Are there prepayment penalties?</li>
              <li>Will checking the rate affect my credit score?</li>
              <li>How much will I pay in total over the full loan term?</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Helpful calculators
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Use these free tools to preview possible payments and compare loan
              scenarios before applying.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="/monthly-payment-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Monthly Payment Calculator
              </Link>
              <Link
                href="/personal-loan-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Personal Loan Calculator
              </Link>
              <Link
                href="/auto-loan-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Auto Loan Calculator
              </Link>
              <Link
                href="/mortgage-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Mortgage Calculator
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
                href="/learning-center/does-checking-loan-rates-hurt-your-credit"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Does Checking Loan Rates Hurt Your Credit?
              </Link>
              <Link
                href="/learning-center/loan-prequalification-vs-preapproval"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                Loan Prequalification vs. Preapproval
              </Link>
              <Link
                href="/learning-center/what-credit-score-do-you-need-for-a-personal-loan"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                What Credit Score Do You Need for a Personal Loan?
              </Link>
              <Link
                href="/learning-center/what-is-debt-to-income-ratio"
                className="rounded-xl border border-slate-200 p-4 font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
              >
                What Is Debt-to-Income Ratio?
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
              Loan rates, APRs, fees, approvals, and terms vary by lender,
              borrower profile, credit history, income, debt, location, and
              other factors. Always review official loan disclosures before
              accepting any loan offer.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}