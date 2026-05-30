import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculator | My Loan Preview",

  description:
    "Estimate mortgage payments, loan affordability, and home financing costs using the Mortgage Calculator from My Loan Preview.",
};

export default function MortgageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}