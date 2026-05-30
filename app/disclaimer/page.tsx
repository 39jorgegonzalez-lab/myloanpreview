export default function DisclaimerPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-12">

        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            MYLOANPREVIEW
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950">
            Disclaimer
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Important information regarding estimates, calculators, and financial content.
          </p>
        </div>

        <div className="space-y-8 text-slate-700">

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Educational Information Only
            </h2>

            <p className="mt-3 leading-7">
              The information and calculators provided on MYLOANPREVIEW are for
              educational and informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              No Financial Advice
            </h2>

            <p className="mt-3 leading-7">
              MYLOANPREVIEW is not a financial advisor, lender, broker, or credit
              counseling service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Estimate Accuracy
            </h2>

            <p className="mt-3 leading-7">
              Loan calculations are estimates only and may not reflect actual lender
              offers, interest rates, taxes, insurance costs, or financing terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              No Guarantee of Approval
            </h2>

            <p className="mt-3 leading-7">
              Use of this website does not guarantee loan approval, financing terms,
              or qualification for any financial product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Independent Verification
            </h2>

            <p className="mt-3 leading-7">
              Users should independently verify financial information and consult
              qualified professionals before making financial decisions.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}