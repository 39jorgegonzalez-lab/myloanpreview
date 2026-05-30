import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Loan Calculator | My Loan Preview",
  description:
    "Estimate monthly car payments, total interest, and loan costs with the free Auto Loan Calculator from My Loan Preview.",
};

export default function AutoLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}