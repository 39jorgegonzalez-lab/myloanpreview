import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about MYLOANPREVIEW calculators, educational estimates, loan approvals, credit checks, and privacy.",
};

export default function FAQPage() {
  return (
  <>
  
    <main className="bg-slate-100 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-10 md:p-14">

        <h1 className="text-4xl font-bold text-slate-900 mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-10">

                    <div
            id="provides-loans"
            className="scroll-mt-28"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Does My Loan Preview provide loans?
            </h2>
            <p className="text-slate-700 leading-7">
              No. MYLOANPREVIEW is an educational website that provides loan
              estimate tools and affordability calculators. It is not a lender,
              broker, bank, or financial advisor and does not issue loans or
              financing offers.
            </p>
          </div>

                    <div
            id="guaranteed-approval"
            className="scroll-mt-28"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Are loan approvals guaranteed?
            </h2>
            <p className="text-slate-700 leading-7">
              No. MYLOANPREVIEW does not guarantee approval, qualification,
              rates, terms, or financing offers. Actual decisions depend on
              lender requirements, income, credit history, debt obligations,
              and other financial factors.
            </p>
          </div>

                    <div
            id="calculator-accuracy"
            className="scroll-mt-28"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Are the calculator results accurate?
            </h2>
            <p className="text-slate-700 leading-7">
              Calculator results are educational estimates based on the
              information entered and the assumptions explained on each
              calculator page. Actual lender offers may differ because of
              rates, fees, taxes, insurance, credit history, income, debt,
              collateral, and lender policies.
            </p>
          </div>

                    <div
            id="credit-score"
            className="scroll-mt-28"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Will using these calculators affect my credit score?
            </h2>
            <p className="text-slate-700 leading-7">
              No. Using MYLOANPREVIEW calculators does not submit a loan
              application, initiate a hard or soft credit inquiry, or affect
              your credit score. The calculators use only the information you
              enter to produce educational estimates.
            </p>
          </div>

        </div>

      </div>
      </main>
  
  </>
  );
}