"use client";

import type {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

import { trackAffiliateClick } from "../../lib/analytics";

type AffiliateLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "onClick" | "children"
> & {
  href: string;
  partnerName: string;
  placement: string;
  children: ReactNode;
};

export default function AffiliateLink({
  href,
  partnerName,
  placement,
  children,
  ...anchorProps
}: AffiliateLinkProps) {
  function handleClick(): void {
    trackAffiliateClick(partnerName, placement);
  }

  return (
    <a
      {...anchorProps}
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
