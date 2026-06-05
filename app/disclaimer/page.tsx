import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-10">
              Disclaimer
            </h1>

            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  Educational Information Only
                </h2>

                <p className="text-slate-700 leading-8">
                  The information and calculators provided on MYLOANPREVIEW are
                  for educational and informational purposes only.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  No Financial Advice
                </h2>

                <p className="text-slate-700 leading-8">
                  MYLOANPREVIEW is not a financial advisor, lender, broker, or
                  credit counseling service. Nothing on this website should be
                  considered financial, legal, tax, or investment advice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  Estimate Accuracy
                </h2>

                <p className="text-slate-700 leading-8">
                  Loan calculations and affordability estimates are based on the
                  information entered and may not reflect actual lender offers,
                  interest rates, fees, taxes, insurance costs, or financing
                  terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  No Guarantee of Approval
                </h2>

                <p className="text-slate-700 leading-8">
                  Use of this website does not guarantee loan approval,
                  qualification, financing terms, or eligibility for any
                  financial product.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  Independent Verification
                </h2>

                <p className="text-slate-700 leading-8">
                  Users should independently verify financial information and
                  consult qualified professionals before making financial
                  decisions.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  Third-Party Information
                </h2>

                <p className="text-slate-700 leading-8">
                  MYLOANPREVIEW may reference information from third-party
                  sources. We do not guarantee the accuracy, completeness, or
                  timeliness of information provided by third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}