"use client";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { assetPath, routePath } from "@/lib/urls";

export function FixedTemplateHeader({ links }: { links: InternalLink[] }) {
  const pathname = usePathname() || "/";
  const nav = (mobile: boolean) => <nav className="guide-nav" aria-label={mobile ? "Mobile navigation" : "Primary navigation"}>{links.map(link => <a key={link.slug} href={routePath(link.slug)} aria-current={pathname === routePath(link.slug) ? "page" : undefined}>{link.label}</a>)}</nav>;
  return <header className="guide-header"><div className="guide-wrap guide-header-row">
    <a className="guide-brand" href={routePath("")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={assetPath(siteConfig.assets.logo)} alt="" width="38" height="38" />
      <span>{siteConfig.siteName}</span>
    </a>
    <div className="guide-desktop-nav">{nav(false)}</div>
    <details className="guide-menu" onToggle={event => { const details = event.currentTarget; details.querySelector("summary")?.setAttribute("aria-expanded", String(details.open)); }}>
      <summary aria-expanded="false">Menu</summary>{nav(true)}
    </details>
  </div></header>;
}
