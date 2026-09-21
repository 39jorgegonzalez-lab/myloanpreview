import "./globals.css";
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

<script
  id="schema"
  type="application/ld+json"
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
