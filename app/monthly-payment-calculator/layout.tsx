import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Payment Calculator",
  description:
    "Estimate monthly loan payments using loan amount, interest rate, and repayment term information.",
};

export default function MonthlyPaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}