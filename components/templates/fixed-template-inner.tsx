import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import { ResponsiveBanner } from "@/components/integrations/responsive-banner";
import { JsonLd } from "@/components/site/json-ld";
import type { SeoPageDefinition } from "@/config/types";
import { getRelatedPages } from "@/content/registry";
import { pageSchemas } from "@/lib/schema";
import { routePath } from "@/lib/urls";
import { GuideDate, GuideFaq, GuideScreenshots, GuideSections, GuideToc } from "./fixed-template-content";
export function FixedTemplateInner({ page }: { page: SeoPageDefinition }) {
  const related = getRelatedPages(page);
  return <><JsonLd data={pageSchemas(page)} /><main className="guide-wrap">
    <nav className="guide-crumbs" aria-label="Breadcrumb"><a href={routePath("")}>Home</a><span aria-hidden="true">›</span><span aria-current="page">{page.navLabel}</span></nav>
    <div className="guide-content-grid"><GuideToc sections={page.sections} faq={!!page.faq?.length} /><article className="guide-article"><h1>{page.hero.heading}</h1><p>{page.hero.lead}</p><GuideDate date={page.lastReviewed} /><ResponsiveBanner /><GuideSections sections={page.sections.slice(0, 1)} /><NativeAdSlot /><GuideSections sections={page.sections.slice(1)} /><GuideScreenshots items={page.screenshots ?? []} /><GuideFaq items={page.faq ?? []} />
    {related.length ? <section className="guide-section" id="related"><h2>Related Guides</h2><div className="guide-links">{related.map(p => <a className="guide-link" href={routePath(p.slug)} key={p.slug}><strong>{p.navLabel} →</strong><span>{p.description}</span></a>)}</div></section> : null}</article></div>
  </main></>;
}
