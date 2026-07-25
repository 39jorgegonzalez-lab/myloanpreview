import Link from "next/link";

const calculatorLinks = [
  {
    label: "Personal Loan Calculator",
    href: "/personal-loan-calculator",
  },
  {
    label: "Auto Loan Calculator",
    href: "/auto-loan-calculator",
  },
  {
    label: "Mortgage Calculator",
    href: "/mortgage-calculator",
  },
  {
    label: "Car Affordability Calculator",
    href: "/car-affordability-calculator",
  },
  {
    label: "Debt-to-Income Calculator",
    href: "/debt-to-income-calculator",
  },
  {
    label: "Monthly Payment Calculator",
    href: "/monthly-payment-calculator",
  },
  {
    label: "Credit Score Loan Estimate",
    href: "/credit-score-loan-estimate",
  },
];

const resourceLinks = [
  {
    label: "Learning Center",
    href: "/learning-center",
  },
  {
    label: "Frequently Asked Questions",
    href: "/faq",
  },
  {
    label: "About MYLOANPREVIEW",
    href: "/about",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
  {
    label: "Affiliate Disclosure",
    href: "/affiliate-disclosure",
  },
];

const footerLinkClasses =
  "block rounded-md text-slate-200 transition hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 xl:grid-cols-[1.3fr_1.25fr_0.9fr_0.9fr_1.35fr]">
        <div>
          <h2 className="text-2xl font-bold text-white">
            MYLOANPREVIEW
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-slate-200">
            Free educational calculators and guides for
            exploring possible loan payments,
            affordability, credit-score-based planning
            ranges, and borrowing costs.
          </p>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            No application or hard credit check is
            required to use our calculators.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Calculators
          </h2>

          <nav
            aria-label="Footer calculator links"
            className="mt-5 grid gap-3"
          >
            {calculatorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={footerLinkClasses}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Resources
          </h2>

          <nav
            aria-label="Footer resource links"
            className="mt-5 grid gap-3"
          >
            {resourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={footerLinkClasses}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Legal
          </h2>

          <nav
            aria-label="Footer legal links"
            className="mt-5 grid gap-3"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={footerLinkClasses}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Contact &amp; Important Notice
          </h2>

          <p className="mt-5 text-sm leading-6 text-slate-200">
            Questions or feedback?
          </p>

          <a
            href="mailto:loanpreview@gmail.com"
            className="mt-2 inline-block rounded-md font-semibold text-cyan-300 transition hover:text-cyan-200 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            loanpreview@gmail.com
          </a>

          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <p className="font-bold text-white">
              Educational estimates only
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-200">
              MYLOANPREVIEW is not a lender, broker, bank,
              or financial advisor. Results are estimates
              based on the information entered and do not
              guarantee approval, qualification, rates,
              terms, or financing offers.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-slate-300">
          © 2026 MYLOANPREVIEW. All rights reserved.
        </div>
      </div>
    </footer>
  );
}