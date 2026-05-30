import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-slate-900 py-16 text-white md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Estimate Your Monthly Loan Payment
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          Use our free calculators to preview possible monthly payments,
          affordability ranges, and estimated borrowing scenarios.
        </p>
        <div className="mt-8">
          <Link
            href="/auto-loan-calculator"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Start Calculating
          </Link>
        </div>
      </div>
    </section>
  );
}