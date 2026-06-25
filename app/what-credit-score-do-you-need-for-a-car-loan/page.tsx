import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata = {
  title: "What Credit Score Do You Need for a Car Loan? | MYLOANPREVIEW",
  description:
    "Learn what credit score may be needed for a car loan, how lenders evaluate borrowers, and how credit scores affect interest rates and monthly payments.",
};

export default function CreditScoreCarLoanPage() {
  return (
    <>
    
      <main className="min-h-screen bg-slate-100 text-slate-900">

        {/* Hero */}
        <section className="py-16 px-6 text-center">
          <p className="text-lg text-blue-700 font-semibold uppercase tracking-wide mb-4">
            Auto Loan GUIDE
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            What Credit Score Do You Need for a Car Loan?
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Credit score requirements for auto loans may vary by lender, vehicle type,
            income, debt-to-income ratio, and financing terms.
          </p>
        </section>

        {/* Quick Answer */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">
              Quick Answer
            </h2>

            <div className="space-y-4 text-lg text-slate-700 leading-8">
              <p>
                Many lenders prefer borrowers with credit scores of:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>720+</strong> — Typically considered excellent credit
                </li>

                <li>
                  <strong>660–719</strong> — Generally considered good credit
                </li>

                <li>
                  <strong>620–659</strong> — Fair credit with possible higher rates
                </li>

                <li>
                  <strong>Below 620</strong> — Approval may still be possible,
                  but interest rates are often significantly higher
                </li>
              </ul>

              <p>
                Actual approval decisions depend on income, debt obligations,
                employment history, and down payment amount.
              </p>
            </div>
          </div>
        </section>

        {/* Credit Score Table */}
        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm overflow-x-auto">

            <h2 className="text-3xl font-bold mb-8">
              Typical Auto Loan Credit Score Ranges
            </h2>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 pr-4 text-lg">Credit Score</th>
                  <th className="py-4 pr-4 text-lg">General Category</th>
                  <th className="py-4 text-lg">Possible Impact</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="py-5 pr-4 font-semibold">720+</td>
                  <td className="py-5 pr-4">Excellent</td>
                  <td className="py-5">
                    May qualify for lower interest rates
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-5 pr-4 font-semibold">660–719</td>
                  <td className="py-5 pr-4">Good</td>
                  <td className="py-5">
                    Often considered strong borrowing range
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-5 pr-4 font-semibold">620–659</td>
                  <td className="py-5 pr-4">Fair</td>
                  <td className="py-5">
                    Approval may still be possible with higher APR
                  </td>
                </tr>

                <tr>
                  <td className="py-5 pr-4 font-semibold">Below 620</td>
                  <td className="py-5 pr-4">Subprime</td>
                  <td className="py-5">
                    Fewer financing options and higher borrowing costs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
         </section>

  <section className="max-w-5xl mx-auto px-6 pb-12">
  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

    <h2 className="text-3xl font-bold mb-6">
      How Lenders Evaluate Auto Loan Applications
    </h2>

    <div className="space-y-6 text-lg text-slate-700 leading-8">

      <p>
        Credit score is only one factor lenders may evaluate during the
        financing process.
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>Monthly income</li>
        <li>Debt-to-income ratio</li>
        <li>Employment history</li>
        <li>Down payment amount</li>
        <li>Vehicle age and mileage</li>
        <li>Loan term length</li>
      </ul>

      <p>
        Borrowers with larger down payments or lower debt levels may
        receive better financing terms even with average credit scores.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
        <p className="text-blue-900 font-bold">
          MYLOANPREVIEW provides educational estimates only and does not
          guarantee loan approval or financing terms.
        </p>
      </div>

</div>
</div>
</section>

</main>

<Footer />

</>
);
}