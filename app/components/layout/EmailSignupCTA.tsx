"use client";

import { trackEmailCtaClick } from "../../lib/analytics";

function getEmailCtaLocation(): string {
  if (typeof window === "undefined") {
    return "unknown";
  }

  const pathname = window.location.pathname;

  if (pathname === "/") {
    return "homepage";
  }

  if (pathname === "/learning-center") {
    return "learning_center";
  }

  if (pathname.startsWith("/learning-center/")) {
    return "guide";
  }

  return "other";
}
const brevoSignupUrl =
  "https://0b68c915.sibforms.com/serve/MUIFAAdIFOeO_oSMh69neOevHqt-YEkR_aSDCVnc2hMKYOhTkjNI85--WuRdQix2MXYsUUg9o9XFhVui63o8Bb6GEokamEncG3zaK1zZUBl_Ggp1C0WAy2IeF9zgRx0uCqmAkYLrrVzZVKHJgcg3tVRGabex_vydFN0ShXJM1xwW1jY8ke05OF4prZsn5SoeNKXSaG5ynkS5tiZkHg==";

export default function EmailSignupCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="rounded-3xl border border-blue-100 bg-white p-8 md:p-12 shadow-sm text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
          Free Loan Planning Tips
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Get Simple Loan Tips Before You Borrow
        </h2>

        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8 mb-8">
          Subscribe for educational loan planning tips, calculator updates, and
          new MYLOANPREVIEW guides. No spam. No guaranteed approvals. Just
          helpful information before you borrow.
        </p>

        <a
          href={brevoSignupUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEmailCtaClick(getEmailCtaLocation())}
          className="inline-block rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
        >
          Subscribe for Free Tips
        </a>

        <p className="mt-5 text-sm text-slate-500">
          MYLOANPREVIEW is not a lender. You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}