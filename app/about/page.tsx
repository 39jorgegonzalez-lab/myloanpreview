import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MYLOANPREVIEW",
  description:
    "Learn about MYLOANPREVIEW, its educational loan calculators, affordability tools, and responsible estimate practices.",
};

export default function AboutPage() {
  return (
    <>
    
      <main className="min-h-screen bg-slate-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 md:p-14">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
  About
  <br />
  MYLOANPREVIEW
</h1>

          <div className="space-y-10">

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Our Mission
              </h2>

              <p className="text-slate-600 leading-8">
                MYLOANPREVIEW was created to make loan estimates easier to
                understand through simple educational financial tools.
              </p>

              <p className="text-slate-600 leading-8 mt-4">
                Whether you are planning a vehicle purchase, personal loan,
                or mortgage, our calculators are designed to help you preview
                possible monthly payments and affordability scenarios before
                speaking with a lender.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Educational Purpose
              </h2>

              <p className="text-slate-600 leading-8">
                The calculators and content on this website are intended for
                educational and informational purposes only.
              </p>

              <p className="text-slate-600 leading-8 mt-4">
                Loan approvals, rates, and repayment terms vary by lender,
                credit profile, income, debt obligations, and other financial
                factors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                What We Offer
              </h2>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Auto loan calculators</li>
                <li>✓ Personal loan calculators</li>
                <li>✓ Mortgage payment calculators</li>
                <li>✓ Debt-to-income tools</li>
                <li>✓ Credit score estimate resources</li>
                <li>✓ Loan affordability tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Transparency
              </h2>

              <p className="text-slate-600 leading-8">
                MYLOANPREVIEW is not a lender, broker, bank, or financial
                advisor.
              </p>

              <p className="text-slate-600 leading-8 mt-4">
                We do not issue loans, make credit decisions, set lender rates
                or terms, or guarantee approval, qualification, or financing
                offers. All estimates are educational examples based on the
                information entered.
              </p>
            </section>

          </div>

        </div>
      </div>
   </main>

</>
);
}