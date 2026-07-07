import type { MetadataRoute } from "next";

const baseUrl = "https://www.myloanpreview.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",

    // Main content hubs
    "/learning-center",

    // Calculators
    "/auto-loan-calculator",
    "/personal-loan-calculator",
    "/mortgage-calculator",
    "/monthly-payment-calculator",
    "/car-affordability-calculator",
    "/debt-to-income-calculator",
    "/credit-score-loan-estimate",

    // Loan Learning Center guides
    "/learning-center/what-credit-score-do-you-need-for-a-personal-loan",
    "/learning-center/how-apr-works-on-a-loan",
    "/learning-center/what-credit-score-do-you-need-for-a-car-loan",
    "/learning-center/what-credit-score-do-you-need-for-a-mortgage",
    "/learning-center/what-is-debt-to-income-ratio",
    "/learning-center/loan-prequalification-vs-preapproval",
    "/learning-center/does-checking-loan-rates-hurt-your-credit",
    "/learning-center/how-much-car-can-i-afford",

    // Company / trust pages
    "/about",
    "/privacy-policy",
    "/disclaimer",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}