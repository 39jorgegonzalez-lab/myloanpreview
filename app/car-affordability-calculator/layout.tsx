import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Affordability Calculator",
  description:
    "Estimate how much car you may be able to afford using income, expenses, financing terms, and down payment information.",
};

export default function CarAffordabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}