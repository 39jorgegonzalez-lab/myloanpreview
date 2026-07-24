import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

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
            <p className="text-slate-700">
              No. My Loan Preview is an educational website that provides loan estimate tools and affordability calculators.
            </p>
          </div>

                    <div
            id="guaranteed-approval"
            className="scroll-mt-28"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Are loan approvals guaranteed?
            </h2>
            <p className="text-slate-700">
              No. Loan approvals depend on lender requirements, income, credit profile, debt obligations, and other financial factors.
            </p>
          </div>

                    <div
            id="calculator-accuracy"
            className="scroll-mt-28"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Are the calculator results accurate?
            </h2>
            <p className="text-slate-700">
              Calculator results are estimates based on the information entered and should be used for educational purposes only.
            </p>
          </div>

                    <div
            id="credit-score"
            className="scroll-mt-28"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              Will using these calculators affect my credit score?
            </h2>
            <p className="text-slate-700">
              No. Using the calculators on this website does not affect your credit score.
            </p>
          </div>

        </div>

      </div>
      </main>
  
  </>
  );
}