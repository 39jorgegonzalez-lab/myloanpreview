export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      {/* NAVBAR */}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* LOGO */}

          <a
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            MY LOAN PREVIEW
          </a>


          {/* NAVIGATION */}

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-semibold">

            <a href="/" className="hover:text-blue-700 transition">
              Home
            </a>

            <a
  href="/auto-loan-calculator"
  className="text-blue-700 hover:underline"
>
  Auto Loan Calculator
</a>

            <a
              href="/personal-loan-calculator"
              className="text-blue-700 hover:underline"
            >
              Personal Loan Calculator
            </a>

            <a
              href="/mortgage-calculator"
              className="text-blue-700 hover:underline"
            >
              Mortgage Calculator
            </a>

            <a
              href="/about"
              className="hover:text-blue-700 transition"
            >
              About
            </a>

          </nav>


          {/* CTA BUTTON */}

          <a
            href="/auto-loan-calculator"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition"
          >
            Get Estimate
          </a>

        </div>

      </header>



      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Preview Your Possible Loan Payments Before You Apply
        </h1>
        
        {/* HERO BUTTONS */}

        

      </section>

      {/* CALCULATOR TOOLS SECTION */}

<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="text-center mb-14">
    <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
      Financial Tools
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Explore Loan & Affordability Calculators
    </h2>

    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
      Estimate monthly payments, loan affordability, debt-to-income ratios,
      financing scenarios, and possible approval ranges using our free
      educational financial calculators.
    </p>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    {/* AUTO LOAN */}

    <a
      href="/auto-loan-calculator"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition block"
    >
      <div className="text-5xl mb-6">🚗</div>

      <h3 className="text-2xl font-bold mb-4">
        Auto Loan Calculator
      </h3>

      <p className="text-slate-600 leading-8">
        Estimate monthly car payments, vehicle financing costs,
        and total interest paid over time.
      </p>
    </a>

    {/* PERSONAL LOAN */}

    <a
      href="/personal-loan-calculator"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition block"
    >
      <div className="text-5xl mb-6">💳</div>

      <h3 className="text-2xl font-bold mb-4">
        Personal Loan Calculator
      </h3>

      <p className="text-slate-600 leading-8">
        Preview personal loan payments and estimate repayment costs
        based on interest rates and loan terms.
      </p>
    </a>

    {/* MORTGAGE */}

    <a
      href="/mortgage-calculator"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition block"
    >
      <div className="text-5xl mb-6">🏠</div>

      <h3 className="text-2xl font-bold mb-4">
        Mortgage Calculator
      </h3>

      <p className="text-slate-600 leading-8">
        Estimate mortgage payments, home financing costs,
        and long-term housing affordability.
      </p>
    </a>

    {/* DTI */}

    <a
      href="/debt-to-income-calculator"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition block"
    >
      <div className="text-5xl mb-6">📊</div>

      <h3 className="text-2xl font-bold mb-4">
        Debt-to-Income Calculator
      </h3>

      <p className="text-slate-600 leading-8">
        Calculate your debt-to-income ratio to better understand
        affordability and loan qualification scenarios.
      </p>
    </a>

    {/* CAR AFFORDABILITY */}

    <a
      href="/car-affordability-calculator"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition block"
    >
      <div className="text-5xl mb-6">🚘</div>

      <h3 className="text-2xl font-bold mb-4">
        Car Affordability Calculator
      </h3>

      <p className="text-slate-600 leading-8">
        Estimate how much vehicle you may be able to afford
        based on income, debt, and estimated monthly budget.
      </p>
    </a>

    {/* MONTHLY PAYMENT */}

    <a
      href="/monthly-payment-calculator"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition block"
    >
      <div className="text-5xl mb-6">📅</div>

      <h3 className="text-2xl font-bold mb-4">
        Monthly Payment Calculator
      </h3>

      <p className="text-slate-600 leading-8">
        Estimate loan payments using loan amount,
        interest rate, and repayment term information.
      </p>
    </a>

    {/* CREDIT SCORE */}

    <a
      href="/credit-score-loan-estimate"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition block md:col-span-2 xl:col-span-1"
    >
      <div className="text-5xl mb-6">📈</div>

      <h3 className="text-2xl font-bold mb-4">
        Credit Score Loan Estimate
      </h3>

      <p className="text-slate-600 leading-8">
        Explore possible loan estimate ranges and estimated
        financing scenarios based on credit score ranges.
      </p>
    </a>

  </div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-20">

  <a
    href="/what-credit-score-do-you-need-for-a-car-loan"
    className="block bg-white border border-slate-200 rounded-3xl p-10 shadow-sm hover:shadow-md hover:border-blue-300 transition"
  >

    <div className="text-center">

      <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
        Latest Auto Loan Guide
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        What Credit Score Do You Need for a Car Loan?
      </h2>

      <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8 mb-6">
        Learn how lenders evaluate credit scores, debt-to-income ratio,
        down payments, and other factors that may affect auto loan approval
        and financing terms.
      </p>

      <span className="text-blue-700 font-semibold">
        Read Guide →
      </span>

    </div>

  </a>

</section>

      {/* TRUST SECTION */}

      <section className="bg-white border-y border-slate-200">

        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10 text-center">

          <div>

            <h3 className="text-xl font-bold mb-3">
              Free Tools
            </h3>

            <p className="text-slate-600">
              Educational calculators with no signup required.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-3">
              No Hard Credit Check
            </h3>

            <p className="text-slate-600">
              Estimates only — no lender application required.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-3">
              Fast Estimates
            </h3>

            <p className="text-slate-600">
              Quickly preview possible monthly payment ranges.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-3">
              Educational Use
            </h3>

            <p className="text-slate-600">
              Designed to help users better understand loans.
            </p>

          </div>

        </div>

      </section>

<section className="max-w-6xl mx-auto px-6 py-20">
  
  <div className="max-w-4xl mx-auto text-center mb-14">
    <h2 className="text-4xl font-bold text-slate-900 mb-6">
      Free Loan Payment Calculators and Affordability Tools
    </h2>

    <p className="text-lg text-slate-600 leading-8">
      My Loan Preview helps users estimate monthly loan payments, compare financing options, 
      and better understand borrowing costs before applying for a loan. Our free online tools 
      are designed to simplify loan planning for auto loans, personal loans, and mortgages.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10 text-slate-700 leading-8">

    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">
        Estimate Monthly Loan Payments
      </h3>

      <p className="mb-4">
        Use our loan calculators to preview estimated monthly payments based on loan amount, 
        interest rate, repayment term, and down payment. Whether you are financing a vehicle, 
        consolidating debt, or planning a home purchase, understanding your estimated payment 
        can help you make smarter financial decisions.
      </p>

      <p>
        Our calculators are educational tools intended to provide realistic payment estimates 
        based on the information you provide. Results may vary depending on lender requirements, 
        credit profile, income, debt-to-income ratio, and other financial factors.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">
        Auto Loans, Personal Loans, and Mortgage Estimates
      </h3>

      <p className="mb-4">
        Explore different financing scenarios using our Auto Loan Calculator, Personal Loan 
        Calculator, and Mortgage Calculator. Quickly compare estimated borrowing costs, 
        interest payments, affordability ranges, and long-term repayment totals.
      </p>

      <p>
        My Loan Preview does not provide loans or guaranteed approvals. We provide educational 
        loan estimate tools to help users better understand possible financing outcomes before 
        speaking with lenders or submitting applications.
      </p>
    </div>

  </div>

  <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center">
    <h3 className="text-3xl font-bold text-slate-900 mb-4">
      Plan Before You Apply
    </h3>

    <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-8">
      Understanding your estimated monthly payment, total interest costs, and affordability 
      can help you compare options with greater confidence. Use My Loan Preview to estimate 
      possible loan scenarios and make more informed financial decisions before applying.
    </p>
  </div>

</section>
<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10 md:p-14">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Transparent Educational Loan Estimate Tools
      </h2>

      <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
        My Loan Preview was created to help users better understand possible loan payments,
        financing costs, and affordability before speaking with lenders or submitting applications.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <div className="text-4xl mb-4">🔒</div>

        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Educational Estimates
        </h3>

        <p className="text-slate-600 leading-7">
          Our calculators provide estimated payment examples based on the information entered.
          Results are for educational purposes only and may vary by lender, credit profile,
          income, and financial history.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <div className="text-4xl mb-4">📊</div>

        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          No Guaranteed Approval
        </h3>

        <p className="text-slate-600 leading-7">
          My Loan Preview is not a lender, bank, credit repair company, or financial advisor.
          We do not guarantee loan approval, interest rates, or financing offers from lenders.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <div className="text-4xl mb-4">✅</div>

        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Simple Financial Planning
        </h3>

        <p className="text-slate-600 leading-7">
          Our goal is to help users compare loan scenarios, estimate affordability,
          and make more informed borrowing decisions using free online loan tools.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Loan Calculators for Smarter Financial Planning
      </h2>

      <p className="text-lg text-slate-600 leading-8">
        Compare estimated monthly payments, explore affordability, and preview possible financing
        scenarios using free online loan calculators from My Loan Preview.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      <div className="space-y-6 text-slate-700 leading-8">

        <p>
          Our Auto Loan Calculator helps users estimate car payments, financing costs,
          interest charges, loan terms, and vehicle affordability before applying for
          an auto loan. Adjust down payment amounts, repayment terms, and interest rates
          to compare different financing scenarios.
        </p>

        <p>
          The Personal Loan Calculator can help estimate monthly loan payments for debt
          consolidation, emergency expenses, home improvements, medical bills, or other
          personal financing needs. Explore estimated repayment costs and total interest
          over time using different loan amounts and repayment periods.
        </p>

        <p>
          Use our Mortgage Calculator to estimate monthly mortgage payments, long-term
          borrowing costs, home affordability, interest expenses, and estimated loan totals.
          Compare different home financing options before speaking with lenders.
        </p>

      </div>

      <div className="space-y-6 text-slate-700 leading-8">

        <p>
          My Loan Preview provides free educational loan estimate tools designed to help
          users better understand borrowing costs and possible monthly payment ranges.
          Our calculators are intended for informational and planning purposes only.
        </p>

        <p>
          Estimated loan payments may vary based on credit score, income, debt-to-income
          ratio, lender requirements, loan term, APR, down payment, taxes, insurance,
          and other financial factors.
        </p>

        <p>
          Whether you are researching auto financing, comparing personal loan options,
          or planning for a future mortgage, My Loan Preview provides simple loan payment
          estimate tools to support smarter financial decisions before applying.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="max-w-4xl mx-auto">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Frequently Asked Questions
      </h2>

      <p className="text-lg text-slate-600 leading-8">
        Learn more about how My Loan Preview calculators and loan estimate tools work.
      </p>
    </div>

    <div className="space-y-6">

      {/* FAQ 1 */}

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          Are the loan calculators free to use?
        </h3>

        <p className="text-slate-700 leading-8">
          Yes. My Loan Preview provides free educational loan calculators for auto loans,
          personal loans, and mortgage estimates. Users can explore different financing
          scenarios without creating an account or submitting a loan application.
        </p>
      </div>

      {/* FAQ 2 */}

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          Does using these calculators affect my credit score?
        </h3>

        <p className="text-slate-700 leading-8">
          No. Using our calculators does not require a credit check and does not impact
          your credit score. My Loan Preview provides educational payment estimates only.
        </p>
      </div>

      {/* FAQ 3 */}

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          Are loan approvals guaranteed?
        </h3>

        <p className="text-slate-700 leading-8">
          No. My Loan Preview is not a lender and does not guarantee loan approvals,
          financing offers, interest rates, or repayment terms. Actual loan decisions
          vary based on lender requirements, credit profile, income, debt-to-income ratio,
          and other financial factors.
        </p>
      </div>

      {/* FAQ 4 */}

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          How accurate are the payment estimates?
        </h3>

        <p className="text-slate-700 leading-8">
          Our loan calculators provide estimated payment examples based on the information
          entered by the user. Actual monthly payments may differ depending on taxes,
          insurance, lender fees, APR, credit score, loan structure, and other variables.
        </p>
      </div>

      {/* FAQ 5 */}

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          What types of loan calculators are available?
        </h3>

        <p className="text-slate-700 leading-8">
          My Loan Preview currently offers Auto Loan Calculators, Personal Loan Calculators,
          and Mortgage Calculators designed to help users estimate monthly payments,
          borrowing costs, affordability, and repayment scenarios.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* FOOTER */}

      <footer className="bg-slate-900 text-slate-300">

        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

          <div>

            <h3 className="text-white text-2xl font-bold mb-4">
              MYLOANPREVIEW
            </h3>

            <p className="leading-relaxed text-slate-400">
              Educational loan calculators and estimate tools
              for auto loans, personal loans, and mortgages.
            </p>

          </div>


          <div>

            <h4 className="text-white font-semibold mb-4">
              Calculators
            </h4>

            <div className="space-y-3">

              <a href="/auto-loan-calculator" className="block hover:text-white">
                Auto Loan Calculator
              </a>

              <a href="/personal-loan-calculator" className="block hover:text-white">
                Personal Loan Calculator
              </a>

              <a href="/mortgage-calculator" className="block hover:text-white">
                Mortgage Calculator
              </a>

            </div>

          </div>


          <div>

            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>

            <div className="space-y-3">

              <a href="/about" className="block hover:text-white">
                About
              </a>

              <a href="/privacy-policy" className="block hover:text-white">
                Privacy Policy
              </a>

              <a href="/disclaimer" className="block hover:text-white">
                Disclaimer
              </a>

            </div>

          </div>


          <div>

            <h4 className="text-white font-semibold mb-4">
              Important Notice
            </h4>

            <p className="text-slate-400 leading-relaxed text-sm">
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

    </main>
  );
}