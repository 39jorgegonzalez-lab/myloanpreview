import type { Metadata } from "next";
import Link from "next/link";

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
    title="What Credit Score Do You Need for a Car Loan?"
    description="Learn how credit scores, income, down payment, and vehicle details may affect auto loan approval."
    href="/learning-center/what-credit-score-do-you-need-for-a-car-loan"
  />

  <GuideCard
    title="Does Checking Loan Rates Hurt Your Credit?"
    description="Understand the difference between soft inquiries and hard inquiries before comparing loan offers."
    href="#"
  />

  <GuideCard
    title="How Much Car Can I Afford?"
    description="Estimate a realistic vehicle budget before visiting a dealership."
    href="#"
  />

  <GuideCard
    title="Loan Prequalification vs. Preapproval"
    description="Learn the differences and why they matter before applying for financing."
    href="#"
  />

  <GuideCard
  title="What Credit Score Do You Need for a Mortgage?"
  description="Learn how credit scores, income, debt-to-income ratio, and down payment may affect mortgage approval."
  href="/learning-center/what-credit-score-do-you-need-for-a-mortgage"
/>
</div>

        </section>

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