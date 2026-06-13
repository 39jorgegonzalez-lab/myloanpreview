export default function Footer() {
  return (

      <footer className="bg-slate-900 text-slate-300">

        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

          <div>

            <h3 className="text-white text-2xl font-bold mb-4">
              MYLOANPREVIEW
            </h3>

            <p className="leading-relaxed text-white">
              Educational loan calculators and estimate tools
              for auto loans, personal loans, and mortgages.
            </p>

          </div>


          <div>

            <h4 className="text-lg text-white font-semibold mb-4">
              Calculators
            </h4>

            <div className="space-y-3">

              <a href="/auto-loan-calculator" className="block hover:underline text-white">
                Auto Loan Calculator
              </a>

              <a href="/personal-loan-calculator" className="block hover:underline text-white">
                Personal Loan Calculator
              </a>

              <a href="/mortgage-calculator" className="block hover:underline text-white">
                Mortgage Calculator
              </a>

            </div>

          </div>


          <div>

            <h4 className="text-lg text-white font-semibold mb-4">
              Company
            </h4>

            <div className="space-y-3">

              <a href="/about" className="block hover:underline text-white">
                About
              </a>

              <a href="/privacy-policy" className="block hover:underline text-white">
                Privacy Policy
              </a>

              <a href="/disclaimer" className="block hover:underline text-white">
                Disclaimer
              </a>

<a href="/faq" className="block hover:underline text-white">
  FAQ
</a>

            </div>

          </div>

<div>
  <h4 className="text-lg text-white font-semibold mb-4">
    Contact Us
  </h4>

  <p className="text-white leading-relaxed text-sm">
    Questions or feedback?                    
    We'd love to hear from you.          
    Email us at:
  </p>

  <a
    href="mailto:loanpreview@gmail.com"
    className="block hover:underline text-cyan-300 mt-2"
  >
    loanpreview@gmail.com
  </a>
</div>

<div>
  <h4 className="text-lg text-white font-semibold mb-4">
    Important Notice
  </h4>

            <p className="text-white leading-relaxed text-sm">
              MYLOANPREVIEW is not a lender, financial institution,
              or financial advisor. All loan estimates are educational only
              and may not reflect actual loan terms or approvals.
            </p>

          </div>

        </div>


        <div className="border-t border-slate-800">

          <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-500 text-center">

            © 2026 MYLOANPREVIEW — All Rights Reserved.

          </div>

        </div>

      </footer>
  );
}