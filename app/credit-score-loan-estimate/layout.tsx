import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credit Score Loan Estimate Calculator",
  description:
    "Estimate illustrative APR and monthly payment ranges for personal or auto loan scenarios based on the credit-score range and loan details entered.",
  alternates: {
    canonical:
      "https://www.myloanpreview.com/credit-score-loan-estimate",
  },
};

export default function CreditScoreLoanEstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}