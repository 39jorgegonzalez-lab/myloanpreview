export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      {/* NAVBAR */}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* LOGO */}

          <a
  href="/"
  className="flex items-center gap-3"
>
  <img
    src="/logo.png"
    alt="MYLOANPREVIEW Logo"
    className="w-22 h-22 object-contain"
  />

  <span className="text-3xl font-bold tracking-tight">
    MY LOAN PREVIEW
  </span>
</a>

          {/* NAVIGATION */}

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-m font-semibold">

            <a href="/" className="text-blue-700 hover:underline">
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
              className="text-blue-700 hover:underline"
            >
              About
            </a>

          </nav>


          {/* CTA BUTTON */}

         </div>

      </header>



      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      
        <h1 className="text-lg md:text-6xl font-bold leading-tight mb-3">
          Preview Your Possible Loan Payments Before You Apply
        </h1>
        
        {/* HERO BUTTONS */}

        

      </section>

      {/* CALCULATOR TOOLS SECTION */}

<section className="max-w-7xl mx-auto px-6 py-1">
  <div className="text-center mb-14">
    <p className="text-xl text-blue-700 font-semibold uppercase tracking-wide mb-8">
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
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
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

<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-12">

    <p className="text-xl text-blue-700 font-semibold uppercase tracking-wide mb-4">
      Loan Learning Center
    </p>

    <h2 className="text-4xl font-bold text-slate-900 mb-6">
      Learn Before You Borrow
    </h2>

    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
      Explore educational guides designed to help you understand credit scores,
      loan approvals, and financing requirements before applying.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <a
      href="/what-credit-score-do-you-need-for-a-car-loan"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
    >
      <h3 className="text-2xl font-bold mb-4">
        Auto Loan Guide
      </h3>

      <p className="text-slate-600">
        Learn how credit scores affect vehicle financing approvals.
      </p>
    </a>

    <a
      href="/personal-loan-credit-score-guide"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
    >
      <h3 className="text-2xl font-bold mb-4">
        Personal Loan Guide
      </h3>

      <p className="text-slate-600">
        Understand personal loan credit requirements and approval factors.
      </p>
    </a>

    <a
      href="/mortgage-credit-score-guide"
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(29,78,216,0.45)] transition-all duration-300 block"
    >
      <h3 className="text-2xl font-bold mb-4">
        Mortgage Guide
      </h3>

      <p className="text-slate-600">
        Discover common mortgage credit score benchmarks and lender expectations.
      </p>
    </a>

  </div>
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
    <h2 className="text-xl text-blue-700 font-semibold uppercase tracking-wide mb-4">
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

    </main>
  );
}