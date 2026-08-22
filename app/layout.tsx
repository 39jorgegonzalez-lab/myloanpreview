import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export const metadata = {
  icons: {
  icon: "/icon.png",
},
  metadataBase: new URL("https://www.myloanpreview.com"),

  alternates: {
    canonical: "./",
  },

  title: {
    default: "My Loan Preview",
    template: "%s | My Loan Preview",
  },

  description:
    "Estimate auto loans, personal loans, and mortgage payments using free calculators and affordability tools from My Loan Preview.",

  verification: {
    google: "I0v4Hx6F_CxEVIvHdHZ3TUySdItRW6kxjrx6uJs-Fk0",
  },

  other: {
    "google-adsense-account": "ca-pub-9227755878163808",
  },

  keywords: [
    "loan calculator",
    "auto loan calculator",
    "personal loan calculator",
    "mortgage calculator",
    "loan payment estimator",
    "monthly payment calculator",
    "loan affordability calculator",
  ],

  openGraph: {
    title: "My Loan Preview",
    description:
      "Free calculators for auto loans, personal loans, and mortgages.",
    url: "https://www.myloanpreview.com",
    siteName: "My Loan Preview",
    locale: "en_US",
    type: "website",
  },


  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">

<Navbar />

{children}

<Footer />

<Script
  id="schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "My Loan Preview",
          url: "https://www.myloanpreview.com",
          logo: "https://www.myloanpreview.com/logo.png",
        },

              {
          "@type": "WebSite",
          name: "My Loan Preview",
          url: "https://www.myloanpreview.com",
        },

        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Are the loan calculators free to use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. My Loan Preview provides free educational loan calculators for auto loans, personal loans, and mortgage estimates.",
              },
            },

            {
              "@type": "Question",
              name: "Does using these calculators affect my credit score?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Using our calculators does not affect your credit score and does not require a credit check.",
              },
            },

            {
              "@type": "Question",
              name: "Are loan approvals guaranteed?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. My Loan Preview does not guarantee approvals, financing offers, or interest rates.",
              },
            },
          ],
        },
      ],
    }),
  }}
/>
<GoogleAnalytics gaId="G-V2BKLEXMX7" />
<Analytics />
</body>
    </html>
  );
}
