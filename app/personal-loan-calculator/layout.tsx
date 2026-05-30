import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan Calculator | My Loan Preview",

  description:
    "Estimate monthly personal loan payments, interest costs, and repayment terms with the free Personal Loan Calculator from My Loan Preview.",
};

export default function PersonalLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}