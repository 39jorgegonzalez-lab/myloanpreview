import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debt-to-Income Calculator",
  description:
    "Estimate your debt-to-income ratio using our free DTI calculator. Understand affordability and possible loan qualification ranges.",
};

export default function DTILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}