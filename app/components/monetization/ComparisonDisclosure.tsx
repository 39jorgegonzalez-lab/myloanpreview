import Link from "next/link";

type ComparisonDisclosureProps = {
  className?: string;
};

export default function ComparisonDisclosure({
  className = "",
}: ComparisonDisclosureProps) {
  return (
    <aside
      aria-label="Compensation disclosure"
      className={`rounded-2xl border border-amber-200 bg-amber-50 p-6 ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">
        Compensation Disclosure
      </p>

      <p className="mt-3 leading-7 text-slate-700">
        MYLOANPREVIEW may receive compensation when you click certain partner
        links or complete an action with a third-party provider. Compensation
        may affect which providers appear and where they are placed.
      </p>

      <p className="mt-3 leading-7 text-slate-700">
        We may not include every lender, marketplace, or financial product
        available. Compensation does not affect a provider&apos;s approval
        decision, rates, fees, eligibility requirements, or loan terms.
      </p>

      <p className="mt-3 text-sm text-slate-600">
        MYLOANPREVIEW is not a lender and does not guarantee approval.{" "}
        <Link
          href="/affiliate-disclosure"
          className="font-semibold text-blue-700 hover:underline"
        >
          Read our Affiliate Disclosure
        </Link>
        .
      </p>
    </aside>
  );
}
