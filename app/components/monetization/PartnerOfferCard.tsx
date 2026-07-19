import AffiliateLink from "./AffiliateLink";

type PartnerOfferCardProps = {
  partnerDisplayName: string;
  partnerName: string;
  placement: string;
  href: string;
  description: string;
  highlights: string[];
  ctaLabel?: string;
  className?: string;
};

export default function PartnerOfferCard({
  partnerDisplayName,
  partnerName,
  placement,
  href,
  description,
  highlights,
  ctaLabel = "View Partner Details",
  className = "",
}: PartnerOfferCardProps) {
  return (
    <article
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Partner Offer
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-950">
            {partnerDisplayName}
          </h3>
        </div>

        <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
          Sponsored
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-700">
        {description}
      </p>

      <ul className="mt-5 space-y-3 text-slate-700">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span aria-hidden="true" className="font-bold text-blue-600">
              ✓
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <AffiliateLink
          href={href}
          partnerName={partnerName}
          placement={placement}
          aria-label={`${ctaLabel} with ${partnerDisplayName}`}
          className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          {ctaLabel}
        </AffiliateLink>
      </div>

      <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
        Partner link. MYLOANPREVIEW may receive compensation. MYLOANPREVIEW is
        not a lender and does not guarantee approval, rates, eligibility, or
        loan terms.
      </p>
    </article>
  );
}
