import type { Metadata } from "next";
import Link from "next/link";
import EmailSignupCTA from "../components/layout/EmailSignupCTA";

export const metadata: Metadata = {
  title: "Learning Center | MYLOANPREVIEW",
  description:
    "Learn about personal loans, credit scores, mortgages, auto loans, and financial basics with free educational guides from MYLOANPREVIEW.",
};

export default function LearningCenterPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Hero */}

        <div className="text-center max-w-3xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Learning Center
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Learn about loans, credit scores, mortgages, auto financing,
            affordability, and financial basics with free educational guides
            designed to help you make informed borrowing decisions.
          </p>

        </div>

        {/* Featured Guides */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Featured Guides
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
  <GuideCard
    title="What Credit Score Do You Need for a Personal Loan?"
    description="Learn how lenders evaluate credit scores and what factors may affect personal loan approval."
    href="/learning-center/what-credit-score-do-you-need-for-a-personal-loan"
  />

<GuideCard
  title="How APR Works on a Loan"
  description="Learn how APR works, how it differs from interest rate, and why APR can help you compare loan costs before applying."
  href="/learning-center/how-apr-works-on-a-loan"
/>

<GuideCard
  title="What Is a Good APR for a Personal Loan?"
  description="Learn what may be considered a good APR, why APR varies by borrower, and how to compare personal loan offers."
  href="/learning-center/what-is-a-good-apr-for-a-personal-loan"
/>

<GuideCard
  title="How to Compare Personal Loan Offers"
  description="Learn how to compare APR, monthly payment, fees, loan term, and total repayment cost before choosing a personal loan."
  href="/learning-center/how-to-compare-personal-loan-offers"
/>

<GuideCard
  title="Personal Loan Fees Explained"
  description="Learn about common personal loan fees, including origination fees, late fees, prepayment penalties, and how fees can affect total cost."
  href="/learning-center/personal-loan-fees-explained"
/>

<GuideCard
  title="Fixed vs. Variable APR: What Borrowers Should Know"
  description="Learn how fixed and variable APRs work, how rate changes may affect payments and loan costs, and what to compare before choosing a loan."
  href="/learning-center/fixed-vs-variable-apr"
/>

<GuideCard
  title="How Loan Terms Affect Monthly Payments"
  description="Learn how shorter and longer loan terms affect monthly payments, total interest, repayment time, and overall borrowing cost."
  href="/learning-center/how-loan-terms-affect-monthly-payments"
/>

  <GuideCard
    title="What Credit Score Do You Need for a Car Loan?"
    description="Learn how credit scores, income, down payment, and vehicle details may affect auto loan approval."
    href="/learning-center/what-credit-score-do-you-need-for-a-car-loan"
  />

  <GuideCard
  title="Does Checking Loan Rates Hurt Your Credit?"
  description="Understand the difference between soft inquiries and hard inquiries before comparing loan offers."
  href="/learning-center/does-checking-loan-rates-hurt-your-credit"
/>

  <GuideCard
  title="How Much Car Can I Afford?"
  description="Estimate a realistic vehicle budget by reviewing income, debt, down payment, insurance, and total vehicle cost."
  href="/learning-center/how-much-car-can-i-afford"
/>

<GuideCard
  title="What Is Debt-to-Income Ratio?"
  description="Learn how lenders may use DTI to evaluate affordability before approving a loan."
  href="/learning-center/what-is-debt-to-income-ratio"
/>

  <GuideCard
  title="Loan Prequalification vs. Preapproval"
  description="Learn the difference between prequalification and preapproval, and why neither one guarantees final loan approval."
  href="/learning-center/loan-prequalification-vs-preapproval"
/>

  <GuideCard
  title="What Credit Score Do You Need for a Mortgage?"
  description="Learn how credit scores, income, debt-to-income ratio, and down payment may affect mortgage approval."
  href="/learning-center/what-credit-score-do-you-need-for-a-mortgage"
/>
</div>

        </section>

<EmailSignupCTA />

        {/* Free Calculators */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Free Calculators
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <CalculatorCard
              title="Personal Loan Calculator"
              href="/personal-loan-calculator"
            />

            <CalculatorCard
              title="Auto Loan Calculator"
              href="/auto-loan-calculator"
            />

            <CalculatorCard
              title="Mortgage Calculator"
              href="/mortgage-calculator"
            />

            <CalculatorCard
              title="Car Affordability Calculator"
              href="/car-affordability-calculator"
            />

            <CalculatorCard
              title="Debt-to-Income Calculator"
              href="/debt-to-income-calculator"
            />

            <CalculatorCard
              title="Credit Score Loan Estimate"
              href="/credit-score-loan-estimate"
            />

          </div>

        </section>

      </section>
    </main>
  );
}

function GuideCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>

      <span className="inline-block mt-6 font-semibold text-blue-600">
        Read Guide →
      </span>
    </Link>
  );
}

function CalculatorCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
    >
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-blue-600 font-medium">
        Open Calculator →
      </p>
    </Link>
  );
}