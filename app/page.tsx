import EmailSignupCTA from "./components/layout/EmailSignupCTA";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
          
            {/* HERO */}

      <section className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
        <p className="mb-4 font-semibold uppercase tracking-wide text-blue-700">
          Free Educational Loan Planning Tools
        </p>

        <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
          Preview Possible Loan Payments Before You Apply
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          Estimate payments, affordability, borrowing
          costs, and credit-score-based planning ranges
          using free calculators and practical loan
          education.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href="#calculators"
            className="rounded-xl bg-blue-700 px-7 py-4 text-center font-bold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Explore Loan Calculators
          </a>

          <a
            href="/learning-center"
            className="rounded-xl border-2 border-blue-700 bg-white px-7 py-4 text-center font-bold text-blue-700 shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Visit the Learning Center
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-slate-500">
          MYLOANPREVIEW is not a lender or financial
          advisor. Results are educational estimates,
          not applications, approvals, or financing
          offers.
        </p>
      </section>

      {/* CALCULATOR TOOLS SECTION */}

<section
  id="calculators"
  className="mx-auto max-w-7xl scroll-mt-28 px-6 py-8"
>
  <div className="text-center mb-14">
    <p className="text-xl text-blue-700 font-semibold uppercase tracking-wide mb-8">
      Financial Tools
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Explore Loan & Affordability Calculators
    </h2>

    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
      Estimate monthly payments, loan affordability, debt-to-income ratios,
      financing scenarios, and credit-score-based planning ranges using our free
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
        affordability and possible borrowing scenarios.
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
        Explore illustrative APR, payment, and borrowing-cost
        ranges influenced by the credit-score range entered.
      </p>
    </a>

  </div>
</section>

<section className="border-y border-blue-900 bg-blue-950">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-4 font-semibold uppercase tracking-wide text-blue-200">
        Loan Learning Center
      </p>

      <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
        Understand Credit, APR, Payments, and Borrowing Costs
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
        Explore practical, plain-language guides that
        explain how loans work, what lenders may review,
        and which costs borrowers should compare before
        applying.
      </p>

      <a
        href="/learning-center"
        className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 text-center font-bold text-blue-950 shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
      >
        Explore All Loan Guides →
      </a>

      <p className="mt-5 text-sm text-blue-200">
        Free educational guides. No signup required.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <a
        href="/learning-center/how-apr-works-on-a-loan"
        className="block rounded-3xl border border-blue-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700">
          APR Basics
        </p>

        <h3 className="text-2xl font-bold text-slate-950">
          How APR Works on a Loan
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Understand how APR differs from interest rate
          and why it can help reveal the broader cost of
          borrowing.
        </p>

        <span className="mt-6 inline-block font-bold text-blue-700">
          Read the Guide →
        </span>
      </a>

      <a
        href="/learning-center/loan-prequalification-vs-preapproval"
        className="block rounded-3xl border border-blue-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700">
          Application Terms
        </p>

        <h3 className="text-2xl font-bold text-slate-950">
          Prequalification vs. Preapproval
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Learn how these common terms differ and why
          neither one guarantees final loan approval.
        </p>

        <span className="mt-6 inline-block font-bold text-blue-700">
          Read the Guide →
        </span>
      </a>

      <a
        href="/learning-center/what-is-debt-to-income-ratio"
        className="block rounded-3xl border border-blue-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-700">
          Affordability
        </p>

        <h3 className="text-2xl font-bold text-slate-950">
          What Is Debt-to-Income Ratio?
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          See how monthly debts compare with gross income
          and why lenders may consider DTI when reviewing
          affordability.
        </p>

        <span className="mt-6 inline-block font-bold text-blue-700">
          Read the Guide →
        </span>
      </a>
    </div>
  </div>
</section>

<EmailSignupCTA />

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