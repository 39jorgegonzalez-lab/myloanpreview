import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PersonalLoanGuide() {
  return (
    <>
  
      <main className="bg-slate-50 min-h-screen">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">

            <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
              Personal Loan Guide
            </p>

            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              What Credit Score Do You Need for a Personal Loan?
            </h1>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Personal loan lenders review your credit score, debt-to-income
              ratio, income, and payment history before making approval
              decisions. While every lender has different requirements,
              understanding common credit score ranges can help you estimate
              your chances.
            </p>

            <h2 className="text-black text-2xl font-bold mb-4">
              Typical Credit Score Ranges
            </h2>

            <ul className="space-y-3 text-slate-700 mb-10">
              <li><strong>720+:</strong> Best approval odds and lowest rates.</li>
              <li><strong>680–719:</strong> Strong approval potential.</li>
              <li><strong>620–679:</strong> May qualify with higher rates.</li>
              <li><strong>580–619:</strong> Limited lender options.</li>
              <li><strong>Below 580:</strong> Approval may be difficult.</li>
            </ul>

            <h2 className="text-black text-2xl font-bold mb-4">
              Other Factors Lenders Consider
            </h2>

            <ul className="space-y-3 text-slate-700 mb-10">
              <li>Income stability</li>
              <li>Employment history</li>
              <li>Debt-to-income ratio</li>
              <li>Payment history</li>
              <li>Existing loan obligations</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <p className="text-blue-900 font-bold">
                MYLOANPREVIEW provides educational estimates only and does not
                guarantee loan approval or financing terms.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}