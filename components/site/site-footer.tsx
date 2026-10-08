import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { routePath } from "@/lib/urls";
export function SiteFooter({ coreLinks, legalLinks }: { coreLinks: InternalLink[]; legalLinks: InternalLink[] }) {
  return <footer className="guide-footer"><div className="guide-wrap guide-footer-grid"><div><strong>{siteConfig.siteName}</strong><p>{siteConfig.description}</p><p>Independent fan-made guide. Not affiliated with Roblox or Sillytung Studios.</p></div><div><strong>Explore</strong><ul><li><a href={routePath("")}>Home</a></li>{coreLinks.map(l => <li key={l.slug}><a href={routePath(l.slug)}>{l.label}</a></li>)}</ul></div><div><strong>About this site</strong><ul>{legalLinks.map(l => <li key={l.slug}><a href={routePath(l.slug)}>{l.label}</a></li>)}</ul></div></div></footer>;
}
