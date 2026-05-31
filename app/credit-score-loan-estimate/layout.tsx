import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MYLOANPREVIEW | Loan Calculators & Payment Estimate Tools",
    template: "%s | MYLOANPREVIEW",
  },
  description:
    "Use free loan calculators and estimate tools to preview possible monthly payments, affordability, debt-to-income ratios, and credit-score-based loan scenarios.",
  metadataBase: new URL("https://myloanpreview.com"),
  alternates: {
    canonical: "https://myloanpreview.com",
  },
  openGraph: {
    title: "MYLOANPREVIEW | Loan Calculators & Payment Estimate Tools",
    description:
      "Preview possible loan payments, affordability ranges, and borrowing scenarios with free educational calculators.",
    url: "https://myloanpreview.com",
    siteName: "MYLOANPREVIEW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MYLOANPREVIEW",
    description:
      "Free educational loan calculators and payment estimate tools.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MYLOANPREVIEW",
    url: "https://myloanpreview.com",
    description:
      "Educational loan calculators and financial estimate tools.",
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}