export type SiteSearchCategory =
  | "Calculator"
  | "Learning Center"
  | "FAQ"
  | "About"
  | "Legal";

export type SiteSearchItem = {
  id: string;
  title: string;
  category: SiteSearchCategory;
  description: string;
  href: string;
  keywords: readonly string[];
  featured?: boolean;
};

export const SITE_SEARCH_ITEMS: readonly SiteSearchItem[] = [
  {
    id: "personal-loan-calculator",
    title: "Personal Loan Calculator",
    category: "Calculator",
    description:
      "Preview possible personal loan payments, total repayment, and interest costs.",
    href: "/personal-loan-calculator",
    keywords: [
      "personal loan",
      "unsecured loan",
      "monthly payment",
      "interest",
      "repayment",
      "borrowing cost",
    ],
    featured: true,
  },
  {
    id: "auto-loan-calculator",
    title: "Auto Loan Calculator",
    category: "Calculator",
    description:
      "Estimate possible car payments, vehicle financing costs, and total interest.",
    href: "/auto-loan-calculator",
    keywords: [
      "auto loan",
      "car loan",
      "vehicle financing",
      "car payment",
      "down payment",
      "trade in",
    ],
    featured: true,
  },
  {
    id: "mortgage-calculator",
    title: "Mortgage Calculator",
    category: "Calculator",
    description:
      "Estimate mortgage payments, home financing costs, and housing affordability.",
    href: "/mortgage-calculator",
    keywords: [
      "mortgage",
      "home loan",
      "house payment",
      "property tax",
      "home insurance",
      "housing affordability",
    ],
    featured: true,
  },
  {
    id: "debt-to-income-calculator",
    title: "Debt-to-Income Calculator",
    category: "Calculator",
    description:
      "Calculate your debt-to-income ratio and review possible affordability scenarios.",
    href: "/debt-to-income-calculator",
    keywords: [
      "debt to income",
      "dti",
      "income",
      "monthly debts",
      "affordability",
      "debt ratio",
    ],
    featured: true,
  },
  {
    id: "car-affordability-calculator",
    title: "Car Affordability Calculator",
    category: "Calculator",
    description:
      "Estimate a possible vehicle budget based on income, debt, and monthly costs.",
    href: "/car-affordability-calculator",
    keywords: [
      "car affordability",
      "vehicle budget",
      "how much car",
      "auto budget",
      "income",
      "monthly car cost",
    ],
  },
  {
    id: "monthly-payment-calculator",
    title: "Monthly Payment Calculator",
    category: "Calculator",
    description:
      "Estimate a loan payment using the amount, interest rate, and repayment term.",
    href: "/monthly-payment-calculator",
    keywords: [
      "monthly payment",
      "loan payment",
      "payment estimate",
      "interest rate",
      "loan term",
      "amortization",
    ],
  },
  {
    id: "credit-score-loan-estimate",
    title: "Credit Score Loan Estimate",
    category: "Calculator",
    description:
      "Explore illustrative APR, payment, and borrowing-cost ranges influenced by credit score.",
    href: "/credit-score-loan-estimate",
    keywords: [
      "credit score",
      "loan estimate",
      "apr range",
      "approval estimate",
      "personal loan rate",
      "auto loan rate",
    ],
    featured: true,
  },
  {
    id: "learning-center",
    title: "Learning Center",
    category: "Learning Center",
    description:
      "Browse educational guides about loans, APR, credit scores, affordability, and borrowing.",
    href: "/learning-center",
    keywords: [
      "guides",
      "education",
      "loan information",
      "financial basics",
      "articles",
      "learn",
    ],
  },
  {
    id: "personal-loan-credit-score",
    title: "What Credit Score Do You Need for a Personal Loan?",
    category: "Learning Center",
    description:
      "Learn how lenders may evaluate credit scores and other personal loan factors.",
    href: "/learning-center/what-credit-score-do-you-need-for-a-personal-loan",
    keywords: [
      "personal loan credit score",
      "credit requirements",
      "loan eligibility",
      "approval factors",
    ],
  },
  {
    id: "how-apr-works",
    title: "How APR Works on a Loan",
    category: "Learning Center",
    description:
      "Learn how APR differs from interest rate and helps compare possible borrowing costs.",
    href: "/learning-center/how-apr-works-on-a-loan",
    keywords: [
      "apr",
      "annual percentage rate",
      "interest rate",
      "loan cost",
      "compare rates",
    ],
    featured: true,
  },
  {
    id: "good-personal-loan-apr",
    title: "What Is a Good APR for a Personal Loan?",
    category: "Learning Center",
    description:
      "Learn why personal loan APRs vary and what borrowers should compare.",
    href: "/learning-center/what-is-a-good-apr-for-a-personal-loan",
    keywords: [
      "good apr",
      "personal loan rate",
      "interest rate",
      "compare apr",
      "borrowing cost",
    ],
  },
  {
    id: "compare-personal-loan-offers",
    title: "How to Compare Personal Loan Offers",
    category: "Learning Center",
    description:
      "Compare APR, monthly payment, fees, loan term, and total repayment cost.",
    href: "/learning-center/how-to-compare-personal-loan-offers",
    keywords: [
      "compare loans",
      "loan offers",
      "apr",
      "fees",
      "monthly payment",
      "loan term",
    ],
  },
  {
    id: "personal-loan-fees",
    title: "Personal Loan Fees Explained",
    category: "Learning Center",
    description:
      "Review origination fees, late fees, prepayment penalties, and other possible costs.",
    href: "/learning-center/personal-loan-fees-explained",
    keywords: [
      "loan fees",
      "late fee",
      "origination fee",
      "prepayment penalty",
      "personal loan cost",
    ],
  },
  {
    id: "origination-fee",
    title: "What Is an Origination Fee?",
    category: "Learning Center",
    description:
      "Learn how origination fees may affect loan proceeds, APR, and total cost.",
    href: "/learning-center/what-is-an-origination-fee",
    keywords: [
      "origination fee",
      "loan proceeds",
      "upfront fee",
      "apr",
      "loan charge",
    ],
  },
  {
    id: "fixed-variable-apr",
    title: "Fixed vs. Variable APR: What Borrowers Should Know",
    category: "Learning Center",
    description:
      "Compare fixed and variable APRs and how possible rate changes may affect costs.",
    href: "/learning-center/fixed-vs-variable-apr",
    keywords: [
      "fixed apr",
      "variable apr",
      "fixed rate",
      "variable rate",
      "rate changes",
    ],
  },
  {
    id: "loan-terms-monthly-payments",
    title: "How Loan Terms Affect Monthly Payments",
    category: "Learning Center",
    description:
      "Learn how shorter and longer terms affect payments, interest, and repayment time.",
    href: "/learning-center/how-loan-terms-affect-monthly-payments",
    keywords: [
      "loan term",
      "monthly payment",
      "short term",
      "long term",
      "repayment period",
    ],
  },
  {
    id: "lower-personal-loan-payment",
    title: "How to Lower Your Personal Loan Payment",
    category: "Learning Center",
    description:
      "Review refinancing, longer terms, lender assistance, and other possible options.",
    href: "/learning-center/how-to-lower-your-personal-loan-payment",
    keywords: [
      "lower payment",
      "refinance",
      "personal loan payment",
      "longer loan term",
      "lender assistance",
    ],
  },
  {
    id: "personal-loan-minimum-income",
    title: "Personal Loan Minimum Income: What to Know",
    category: "Learning Center",
    description:
      "Learn how income, debt, credit history, and loan size may affect eligibility.",
    href: "/learning-center/personal-loan-minimum-income",
    keywords: [
      "minimum income",
      "personal loan income",
      "loan eligibility",
      "debt to income",
      "approval factors",
    ],
  },
  {
    id: "loan-estimate-higher-than-expected",
    title: "Why Was My Personal Loan Estimate Higher Than Expected?",
    category: "Learning Center",
    description:
      "Review factors that may raise an estimated APR, payment, or borrowing cost.",
    href: "/learning-center/why-was-my-personal-loan-estimate-higher-than-expected",
    keywords: [
      "high payment",
      "high apr",
      "loan estimate",
      "credit",
      "income",
      "fees",
    ],
  },
  {
    id: "secured-unsecured-personal-loans",
    title: "Secured vs. Unsecured Personal Loans",
    category: "Learning Center",
    description:
      "Compare collateral, possible APRs, approval factors, and borrower risks.",
    href: "/learning-center/secured-vs-unsecured-personal-loans",
    keywords: [
      "secured loan",
      "unsecured loan",
      "collateral",
      "personal loan",
      "loan risk",
    ],
  },
  {
    id: "personal-loan-affordability",
    title: "How Much Personal Loan Can I Afford?",
    category: "Learning Center",
    description:
      "Review income, debts, expenses, APR, term, fees, and savings before borrowing.",
    href: "/learning-center/how-much-personal-loan-can-i-afford",
    keywords: [
      "personal loan affordability",
      "how much can i borrow",
      "loan budget",
      "income",
      "expenses",
    ],
  },
  {
    id: "car-loan-credit-score",
    title: "What Credit Score Do You Need for a Car Loan?",
    category: "Learning Center",
    description:
      "Learn how credit, income, down payment, and vehicle details may affect financing.",
    href: "/learning-center/what-credit-score-do-you-need-for-a-car-loan",
    keywords: [
      "car loan credit score",
      "auto loan credit",
      "vehicle financing",
      "down payment",
      "approval factors",
    ],
  },
  {
    id: "checking-rates-credit",
    title: "Does Checking Loan Rates Hurt Your Credit?",
    category: "Learning Center",
    description:
      "Understand the difference between soft inquiries and hard inquiries.",
    href: "/learning-center/does-checking-loan-rates-hurt-your-credit",
    keywords: [
      "credit inquiry",
      "soft inquiry",
      "hard inquiry",
      "rate check",
      "credit score",
    ],
  },
  {
    id: "car-affordability-guide",
    title: "How Much Car Can I Afford?",
    category: "Learning Center",
    description:
      "Review income, debt, down payment, insurance, and total vehicle costs.",
    href: "/learning-center/how-much-car-can-i-afford",
    keywords: [
      "car affordability",
      "vehicle budget",
      "how much car",
      "insurance",
      "down payment",
    ],
  },
  {
    id: "debt-to-income-guide",
    title: "What Is Debt-to-Income Ratio?",
    category: "Learning Center",
    description:
      "Learn how monthly debts compare with gross income and why lenders may review DTI.",
    href: "/learning-center/what-is-debt-to-income-ratio",
    keywords: [
      "debt to income",
      "dti",
      "gross income",
      "monthly debt",
      "affordability",
    ],
    featured: true,
  },
  {
    id: "prequalification-preapproval",
    title: "Loan Prequalification vs. Preapproval",
    category: "Learning Center",
    description:
      "Learn how prequalification and preapproval differ and why neither guarantees approval.",
    href: "/learning-center/loan-prequalification-vs-preapproval",
    keywords: [
      "prequalification",
      "preapproval",
      "loan approval",
      "credit check",
      "application",
    ],
  },
  {
    id: "mortgage-credit-score",
    title: "What Credit Score Do You Need for a Mortgage?",
    category: "Learning Center",
    description:
      "Learn how credit, income, DTI, and down payment may affect mortgage approval.",
    href: "/learning-center/what-credit-score-do-you-need-for-a-mortgage",
    keywords: [
      "mortgage credit score",
      "home loan credit",
      "down payment",
      "dti",
      "mortgage approval",
    ],
  },
  {
    id: "faq-provides-loans",
    title: "Does MYLOANPREVIEW Provide Loans?",
    category: "FAQ",
    description:
      "MYLOANPREVIEW provides educational tools and estimates but does not issue loans.",
    href: "/faq#provides-loans",
    keywords: [
      "lender",
      "provide loans",
      "issue loans",
      "loan company",
      "educational website",
    ],
  },
  {
    id: "faq-guaranteed-approval",
    title: "Are Loan Approvals Guaranteed?",
    category: "FAQ",
    description:
      "No. Approval depends on lender requirements and the borrower’s financial profile.",
    href: "/faq#guaranteed-approval",
    keywords: [
      "guaranteed approval",
      "loan approval",
      "qualification",
      "eligibility",
      "lender requirements",
    ],
  },
  {
    id: "faq-calculator-accuracy",
    title: "Are the Calculator Results Accurate?",
    category: "FAQ",
    description:
      "Results are educational estimates based on the information entered.",
    href: "/faq#calculator-accuracy",
    keywords: [
      "calculator accuracy",
      "accurate estimate",
      "loan results",
      "payment estimate",
      "educational estimate",
    ],
  },
  {
    id: "faq-credit-score",
    title: "Will Using These Calculators Affect My Credit Score?",
    category: "FAQ",
    description:
      "Using MYLOANPREVIEW calculators does not affect your credit score.",
    href: "/faq#credit-score",
    keywords: [
      "credit score",
      "hard credit check",
      "soft inquiry",
      "calculator credit check",
      "affect credit",
    ],
  },
  {
    id: "about",
    title: "About MYLOANPREVIEW",
    category: "About",
    description:
      "Learn about the site’s mission, educational tools, and transparency standards.",
    href: "/about",
    keywords: [
      "about",
      "mission",
      "educational purpose",
      "what we offer",
      "transparency",
    ],
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    category: "Legal",
    description:
      "Learn how analytics, calculator interactions, cookies, and email services are handled.",
    href: "/privacy-policy",
    keywords: [
      "privacy",
      "personal information",
      "calculator data",
      "google analytics",
      "vercel analytics",
      "cookies",
      "brevo",
      "email",
      "data retention",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    category: "Legal",
    description:
      "Review educational-use limits, estimate accuracy, and the no-guarantee disclosure.",
    href: "/disclaimer",
    keywords: [
      "disclaimer",
      "financial advice",
      "estimate accuracy",
      "approval guarantee",
      "not a lender",
      "legal",
    ],
  },
  {
    id: "affiliate-disclosure",
    title: "Affiliate Disclosure",
    category: "Legal",
    description:
      "Learn about possible affiliate links, referrals, advertisements, and compensation.",
    href: "/affiliate-disclosure",
    keywords: [
      "affiliate",
      "referral",
      "sponsored",
      "advertisement",
      "compensation",
      "partner link",
    ],
  },
];

function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getSearchableText(item: SiteSearchItem): string {
  return normalizeSearchText(
    [
      item.title,
      item.category,
      item.description,
      ...item.keywords,
    ].join(" "),
  );
}

function calculateSearchScore(
  item: SiteSearchItem,
  normalizedQuery: string,
  queryTerms: readonly string[],
): number {
  const title = normalizeSearchText(item.title);
  const category = normalizeSearchText(item.category);
  const description = normalizeSearchText(item.description);
  const keywords = item.keywords.map(normalizeSearchText);
  const searchableText = getSearchableText(item);

  if (
    !queryTerms.every((term) =>
      searchableText.includes(term),
    )
  ) {
    return 0;
  }

  let score = 1;

  if (title === normalizedQuery) {
    score += 200;
  } else if (title.startsWith(normalizedQuery)) {
    score += 120;
  } else if (title.includes(normalizedQuery)) {
    score += 80;
  }

  if (
    keywords.some(
      (keyword) => keyword === normalizedQuery,
    )
  ) {
    score += 90;
  } else if (
    keywords.some((keyword) =>
      keyword.includes(normalizedQuery),
    )
  ) {
    score += 50;
  }

  for (const term of queryTerms) {
    if (title.includes(term)) {
      score += 30;
    }

    if (
      keywords.some((keyword) =>
        keyword.includes(term),
      )
    ) {
      score += 18;
    }

    if (description.includes(term)) {
      score += 8;
    }

    if (category.includes(term)) {
      score += 5;
    }
  }

  return score;
}

export function searchSite(
  query: string,
  limit = 8,
): SiteSearchItem[] {
  const normalizedQuery = normalizeSearchText(query);
  const safeLimit = Math.max(1, limit);

  if (!normalizedQuery) {
    return SITE_SEARCH_ITEMS.filter(
      (item) => item.featured,
    ).slice(0, safeLimit);
  }

  const queryTerms = normalizedQuery
    .split(" ")
    .filter(Boolean);

  return SITE_SEARCH_ITEMS.map((item) => ({
    item,
    score: calculateSearchScore(
      item,
      normalizedQuery,
      queryTerms,
    ),
  }))
    .filter((result) => result.score > 0)
    .sort(
      (first, second) =>
        second.score - first.score ||
        first.item.title.localeCompare(
          second.item.title,
        ),
    )
    .slice(0, safeLimit)
    .map((result) => result.item);
}