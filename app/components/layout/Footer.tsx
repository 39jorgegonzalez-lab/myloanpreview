import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-bold text-slate-950">MYLOANPREVIEW</h3>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Educational financial calculators designed to help users better
            understand possible payments, affordability, and borrowing scenarios.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-950">Calculators</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <Link href="/auto-loan-calculator" className="block hover:text-blue-600">
              Auto Loan Calculator
            </Link>
            <Link href="/personal-loan-calculator" className="block hover:text-blue-600">
              Personal Loan Calculator
            </Link>
            <Link href="/mortgage-calculator" className="block hover:text-blue-600">
              Mortgage Calculator
            </Link>
            <Link href="/debt-to-income-calculator" className="block hover:text-blue-600">
              DTI Calculator
            </Link>
            <Link href="/car-affordability-calculator" className="block hover:text-blue-600">
              Car Affordability Calculator
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-950">Resources</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <Link href="/what-credit-score-do-you-need-for-a-car-loan" className="block hover:text-blue-600">
              Credit Score Guide
            </Link>
            <Link href="/monthly-payment-calculator" className="block hover:text-blue-600">
              Monthly Payment Calculator
            </Link>
            <Link href="/credit-score-loan-estimate" className="block hover:text-blue-600">
              Credit Score Loan Estimate
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-950">Company</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <Link href="/about" className="block hover:text-blue-600">About</Link>
            <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
            <Link href="/privacy-policy" className="block hover:text-blue-600">Privacy Policy</Link>
            <Link href="/terms" className="block hover:text-blue-600">Terms</Link>
            <Link href="/disclaimer" className="block hover:text-blue-600">Disclaimer</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-6">
        <p className="mx-auto max-w-7xl text-xs leading-6 text-slate-500">
          MYLOANPREVIEW is not a lender, broker, or financial advisor. All loan
          estimates and calculations are for educational and informational
          purposes only. Actual rates, payments, and approval terms may vary by
          lender.
        </p>
      </div>
    </footer>
  );
}