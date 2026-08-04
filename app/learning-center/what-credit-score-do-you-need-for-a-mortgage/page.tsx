import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "What Credit Score Do You Need for a Mortgage? | MYLOANPREVIEW",
  description:
    "Learn what credit score you may need for a mortgage, how lenders review home loan applications, and how to estimate a possible monthly mortgage payment.",
};

export default function MortgageCreditScoreArticle() {
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
            Mortgages
          </p>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Credit Score Do You Need for a Mortgage?
          </h1>

          <p className="text-lg leading-8 text-slate-700">
            If you&apos;re planning to buy a home, your credit score can affect
            whether you qualify for a mortgage, what interest rate you may
            receive, and how much your monthly payment could be.
          </p>
        </header>

        <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Quick Answer
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            There is no single credit score required for every mortgage. A score
            near 620 remains a common lender benchmark and still applies in some
            underwriting scenarios, but it is not a universal cutoff.
          </p>

          <p className="leading-8 text-slate-700">
            Requirements vary by loan program, lender, automated or manual
            underwriting, down payment, income, debt-to-income ratio, property,
            and overall financial profile. Some programs may allow lower scores,
            while stronger scores may help with pricing and available options.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Why Credit Scores Matter for Mortgages
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            Your credit score helps mortgage lenders evaluate risk. A higher
            credit score may improve your chances of qualifying and may help you
            receive a lower interest rate, which can make a major difference in
            your monthly payment and total interest over time.
          </p>

          <p className="leading-8 text-slate-700">
            A lower credit score does not always mean you cannot buy a home, but
            it may limit your loan options, increase your rate, require a larger
            down payment, or make the approval process more difficult.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            General Credit Score Ranges for Mortgages
          </h2>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="p-5">
                <h3 className="font-bold text-slate-900">740 and above</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  May improve your chances of qualifying for stronger mortgage
                  pricing, depending on the loan program and lender.
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900">620 to 739</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  A common planning range at many lenders, but not a universal
                  mortgage cutoff. Program rules and underwriting methods can
                  produce different outcomes.
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900">Below 620</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  Some mortgage options may still be possible. FHA, VA, automated
                  underwriting, and individual lender standards may differ, and
                  lenders may impose stricter requirements or higher costs.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            These ranges are general educational examples. Mortgage approval,
            interest rates, down payment requirements, loan programs, and loan
            availability vary by lender, state, property type, credit model, and
            individual financial situation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Can You Get a Mortgage With Fair or Lower Credit?
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            It may be possible to get a mortgage with fair or lower credit,
            especially through certain loan programs. However, borrowers with
            lower scores may face higher rates, stricter documentation, larger
            down payment requirements, or fewer lender options.
          </p>

          <p className="leading-8 text-slate-700">
            Because mortgages are large long-term loans, even a small difference
            in interest rate can affect your monthly payment and total cost.
            That makes it important to estimate your payment before shopping for
            homes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Other Factors Mortgage Lenders May Consider
          </h2>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>
              <strong>Income:</strong> Lenders may review whether your income is
              stable enough to support the mortgage payment.
            </li>
            <li>
              <strong>Debt-to-income ratio:</strong> Your existing monthly debt
              payments can affect how much home you may be able to afford.
            </li>
            <li>
              <strong>Down payment:</strong> A larger down payment may reduce
              the loan amount and may improve your overall mortgage profile.
            </li>
            <li>
              <strong>Employment history:</strong> Lenders may look for stable
              income and consistent employment or self-employment documentation.
            </li>
            <li>
              <strong>Property type:</strong> Requirements may vary for primary
              residences, investment properties, condos, manufactured homes, or
              multi-unit properties.
            </li>
            <li>
              <strong>Loan program:</strong> Conventional, FHA, VA, USDA, and
              jumbo loans may each have different requirements.
            </li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            How to Improve Your Chances Before Applying
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            Before applying for a mortgage, consider reviewing your credit
            report, paying down revolving balances where possible, saving for a
            down payment, avoiding unnecessary new credit applications, and
            estimating a realistic home payment.
          </p>

          <p className="leading-8 text-slate-700">
            It is also important to compare more than the monthly payment. Look
            at the interest rate, APR, loan term, closing costs, property taxes,
            homeowners insurance, mortgage insurance, and total estimated cost.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-blue-200 bg-blue-600 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">
            Estimate Your Mortgage Payment
          </h2>

          <p className="mb-6 leading-8 text-blue-50">
            Before shopping for a home, use our free mortgage calculator to
            preview a possible monthly payment based on home price, down
            payment, interest rate, loan term, taxes, insurance, and other
            common costs.
          </p>

          <Link
            href="/mortgage-calculator"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Try the Mortgage Calculator
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900">
                What is a good credit score for a mortgage?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                There is no single good score for every mortgage. Scores near 620
                remain common planning benchmarks at many lenders, while stronger
                scores may help with pricing and available options. Some programs
                and underwriting paths may apply different standards.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Can I get a mortgage with a 580 credit score?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                It may be possible. FHA policy generally permits maximum FHA
                financing with a qualifying score of 580 or above, while scores
                from 500 through 579 are generally limited to 90% loan-to-value.
                Lenders may set higher minimums, and approval is not guaranteed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Does my credit score affect my mortgage rate?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                Yes. Credit scores can affect mortgage eligibility and the rate
                a borrower may receive. A lower rate can reduce both monthly
                payment and long-term interest cost.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Is the mortgage payment the only cost to consider?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                No. Homebuyers should also consider property taxes, homeowners
                insurance, mortgage insurance, HOA dues, closing costs,
                maintenance, utilities, and emergency savings.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Official Mortgage Program Sources
          </h2>

          <p className="mb-5 leading-8 text-slate-700">
            Mortgage credit requirements can change, and individual lenders may
            apply stricter standards. These official resources explain important
            program-level rules and underwriting updates.
          </p>

          <ul className="space-y-3 leading-7">
            <li>
              <a
                href="https://singlefamily.fanniemae.com/applications-technology/desktop-underwriter-desktop-originator/desktop-underwriter-credit-risk-assessment-updates"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
              >
                Fannie Mae: Desktop Underwriter Credit Risk Assessment Updates
              </a>
            </li>

            <li>
              <a
                href="https://answers.hud.gov/FHA/s/article/Does-FHA-require-a-minimum-credit-score-and-how-is-it-determined"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
              >
                HUD: FHA Minimum Credit Score Guidance
              </a>
            </li>

            <li>
              <a
                href="https://benefits.va.gov/homeloans/documents/docs/lgy-eligibility-for-va-home-loan-toolkit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
              >
                U.S. Department of Veterans Affairs: Home Loan Eligibility Toolkit
              </a>
            </li>
          </ul>
        </section>
        <EmailSignupCTA />

        <section className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-slate-900">
            Important Disclaimer
          </h2>

          <p className="leading-8 text-slate-700">
            MYLOANPREVIEW is not a lender, bank, mortgage broker, real estate
            company, credit repair company, or financial advisor. The
            information in this guide is for educational purposes only and should
            not be considered financial, legal, tax, mortgage, or credit advice.
            Mortgage approval, rates, APR, fees, closing costs, down payment
            requirements, loan programs, and loan availability vary by lender and
            individual financial situation.
          </p>
        </section>
      </article>
    </main>
  );
}