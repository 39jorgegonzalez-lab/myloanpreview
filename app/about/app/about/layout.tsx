import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | My Loan Preview",

  description:
    "Learn about My Loan Preview and our mission to provide simple, educational loan calculators and payment estimate tools.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}