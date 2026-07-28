import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Learn how MYLOANPREVIEW may earn compensation from affiliate links, referrals, sponsored placements, and other partnerships.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-14">
        <header className="border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-bold text-slate-950">
            Affiliate Disclosure
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated:{" "}
            <time dateTime="2026-07-28">July 28, 2026</time>
          </p>
        </header>

        <div className="mt-10 space-y-10 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Overview
            </h2>

            <p className="mt-4 leading-8">
              MYLOANPREVIEW may include links to third-party products,
              services, lenders, marketplaces, or other providers. Some of
              these may be affiliate, referral, sponsored, advertising, or
              other compensated links.
            </p>

            <p className="mt-4 leading-8">
              When a visitor clicks a compensated link or completes an action
              with a third party, MYLOANPREVIEW may receive compensation. The
              arrangement may include payment for clicks, applications,
              qualified leads, completed transactions, or other actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              How Compensation May Affect the Website
            </h2>

            <p className="mt-4 leading-8">
              Compensation may influence which providers, products, or offers
              appear on the website and where they are placed. MYLOANPREVIEW
              may not display every product, lender, or offer available in the
              market.
            </p>

            <p className="mt-4 leading-8">
              Compensation does not determine whether a visitor qualifies for
              a financial product. Eligibility, approval decisions, rates,
              fees, repayment terms, and other conditions are determined by
              the applicable third-party provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Editorial Approach
            </h2>

            <p className="mt-4 leading-8">
              MYLOANPREVIEW aims to provide useful educational information,
              responsible estimates, and clear explanations. A paid
              relationship does not mean that a product or provider is
              appropriate for every visitor.
            </p>

            <p className="mt-4 leading-8">
              Visitors should compare available options, review official
              disclosures, and consider their individual financial
              circumstances before applying for or accepting a financial
              product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Disclosures Near Compensated Links
            </h2>

            <p className="mt-4 leading-8">
              Pages containing compensated links, offers, or placements will
              include a disclosure close to the relevant content. Labels may
              include terms such as &quot;Sponsored,&quot;
              &quot;Advertisement,&quot; &quot;Partner Link,&quot; or
              &quot;We may receive compensation.&quot;
            </p>

            <p className="mt-4 leading-8">
              This page provides additional information about possible
              compensation relationships. It does not replace disclosures
              placed near individual compensated links or offers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              MYLOANPREVIEW Is Not a Lender
            </h2>

            <p className="mt-4 leading-8">
              MYLOANPREVIEW is not a lender, broker, bank, financial
              institution, or financial advisor. It does not make credit
              decisions, issue loans, set lender rates or terms, or guarantee
              approval, qualification, eligibility, or financing offers for
              any financial product.
            </p>

            <p className="mt-4 leading-8">
              Calculators, estimates, comparison information, and educational
              content are provided for informational purposes and may not
              reflect the terms a visitor ultimately receives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Third-Party Websites
            </h2>

            <p className="mt-4 leading-8">
              Third-party providers control their own products, applications,
              eligibility requirements, disclosures, terms, privacy practices,
              and website content. Visitors should review a provider&apos;s
              official terms and privacy policy before submitting information
              or accepting an offer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Advertising
            </h2>

            <p className="mt-4 leading-8">
              MYLOANPREVIEW may display advertisements or sponsored
              placements. The appearance of an advertisement does not
              necessarily mean MYLOANPREVIEW endorses the advertiser or its
              products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Questions
            </h2>

            <p className="mt-4 leading-8">
              Questions about this disclosure may be sent to{" "}
              <a
                href="mailto:loanpreview@gmail.com"
                className="font-semibold text-blue-700 hover:underline"
              >
                loanpreview@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">
              Important Notice
            </h2>

            <p className="mt-3 leading-8">
              This disclosure describes the website&apos;s intended
              compensation practices. It is not legal advice and does not
              replace guidance from a qualified professional regarding
              advertising, lending, privacy, or consumer-protection laws that
              may apply.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
