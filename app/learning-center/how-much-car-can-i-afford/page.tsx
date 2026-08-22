import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "How Much Car Can I Afford? | MYLOANPREVIEW",
  description:
    "Learn how to estimate how much car you may be able to afford by reviewing monthly payment, income, debt, down payment, insurance, fees, and total vehicle cost.",
};

export default function HowMuchCarCanIAffordArticle() {
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
            Auto Loans
          </p>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How Much Car Can I Afford?
          </h1>

          <p className="text-lg leading-8 text-slate-700">
            Before shopping for a vehicle, it helps to estimate what car payment
            may fit your budget. The right amount depends on more than the
            sticker price or monthly payment.
          </p>
        </header>

        <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Quick Answer
          </h2>

          <p className="leading-8 text-slate-700">
            A car may be more affordable when the monthly payment fits
            comfortably within your budget after accounting for income, existing
            debts, insurance, fuel, maintenance, taxes, fees, down payment, and
            other regular expenses. The lowest monthly payment is not always the
            best deal if it creates a higher total cost over time.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Start With Your Monthly Budget
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            The first step is understanding how much room you have in your
            monthly budget. Look at your take-home pay, current bills, debt
            payments, savings goals, and emergency expenses before deciding what
            car payment feels realistic.
          </p>

          <p className="leading-8 text-slate-700">
            A payment that looks affordable on paper may still feel stressful if
            it leaves little room for insurance, repairs, registration, fuel, or
            unexpected costs.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Car Affordability Is More Than the Loan Payment
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            When estimating how much car you can afford, include the full cost of
            ownership. A vehicle can come with several costs beyond the monthly
            auto loan payment.
          </p>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>
              <strong>Loan payment:</strong> Principal and interest based on the
              amount financed, APR, and loan term.
            </li>
            <li>
              <strong>Auto insurance:</strong> Insurance costs can vary based on
              vehicle type, location, coverage, driving history, and insurer.
            </li>
            <li>
              <strong>Fuel or charging:</strong> Gas, diesel, hybrid, or EV
              charging costs should be included in the monthly budget.
            </li>
            <li>
              <strong>Maintenance and repairs:</strong> Tires, brakes, oil
              changes, inspections, and unexpected repairs can add up.
            </li>
            <li>
              <strong>Taxes and fees:</strong> Sales tax, registration, title
              fees, dealer fees, and other costs may increase the total amount
              needed.
            </li>
            <li>
              <strong>Optional add-ons:</strong> Warranties, protection plans,
              service contracts, and other add-ons may increase the total cost.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Key Numbers That Affect How Much Car You Can Afford
          </h2>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="p-5">
                <h3 className="font-bold text-slate-900">Vehicle Price</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  A higher price usually means a higher loan amount unless you
                  make a larger down payment or trade-in.
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900">APR and Term</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  The interest rate and repayment length affect both the monthly
                  payment and total interest paid.
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900">Down Payment</h3>
                <p className="mt-2 leading-7 text-slate-700">
                  A larger down payment may reduce the amount financed and may
                  lower the monthly payment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Why the Lowest Monthly Payment Can Be Misleading
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            A longer loan term can lower the monthly payment, but it may also
            increase the total interest paid over the life of the loan. That can
            make the vehicle more expensive overall.
          </p>

          <p className="leading-8 text-slate-700">
            Before choosing a loan, compare the vehicle price, amount financed,
            APR, repayment term, estimated monthly payment, total interest, and
            total amount repaid.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Questions to Ask Before Buying a Car
          </h2>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>What is the total out-the-door price?</li>
            <li>How much will I need for a down payment?</li>
            <li>What APR may I qualify for?</li>
            <li>How long is the loan term?</li>
            <li>What will the total interest cost be?</li>
            <li>How much will insurance cost each month?</li>
            <li>Can I still save money after this payment?</li>
            <li>Would a less expensive vehicle give me more financial breathing room?</li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            How to Improve Car Affordability
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            You may be able to improve affordability by choosing a lower-priced
            vehicle, making a larger down payment,{" "}
            <Link
              href="/learning-center/what-credit-score-do-you-need-for-a-car-loan"
              className="font-medium text-blue-700 hover:underline"
            >
              improving your credit profile
            </Link>
            {", "}comparing financing options, avoiding unnecessary add-ons, or
            selecting a payment that leaves room for insurance and maintenance.
          </p>

          <p className="leading-8 text-slate-700">
            The goal is not just to get approved for a vehicle. The goal is to
            choose a vehicle payment that works with your real monthly budget.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-blue-200 bg-blue-600 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">
            Estimate How Much Car You Can Afford
          </h2>

          <p className="mb-6 leading-8 text-blue-50">
            Use our free car affordability calculator to estimate a realistic
            vehicle budget based on income, debt, down payment, interest rate,
            and repayment term.
          </p>

          <Link
            href="/car-affordability-calculator"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Try the Car Affordability Calculator
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900">
                Should I focus on monthly payment or total cost?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                You should look at both. The monthly payment helps show whether
                the car may fit your budget, while the total cost helps show how
                expensive the loan may be over time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Does a longer auto loan term make a car more affordable?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                A longer term may lower the monthly payment, but it can increase
                the total interest paid. It may also keep you in debt longer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Does a down payment help?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                A down payment may reduce the amount financed, lower the monthly
                payment, and reduce the risk of owing more than the car is worth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Should I include insurance before buying?
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                Yes. Insurance can be a major part of vehicle affordability, and
                costs can vary depending on the car, coverage, driver, insurer,
                and location.
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
            MYLOANPREVIEW is not a lender, bank, auto dealer, insurance company,
            credit repair company, or financial advisor. The information in this
            guide is for educational purposes only and should not be considered
            financial, legal, tax, insurance, or credit advice. Vehicle
            affordability, loan approval, APR, fees, taxes, insurance costs,
            repayment terms, and loan availability vary by lender and individual
            financial situation.
          </p>
        </section>
      </article>
    </main>
  );
}