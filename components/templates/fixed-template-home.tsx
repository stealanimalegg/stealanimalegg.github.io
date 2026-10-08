import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/config/site";
import type { HomePageDefinition } from "@/config/types";
import { homeSchemas } from "@/lib/schema";
import { assetPath, routePath } from "@/lib/urls";
import { GuideDate, GuideFaq, GuideScreenshots, GuideSections, GuideToc } from "./fixed-template-content";
export function FixedTemplateHome({ home }: { home: HomePageDefinition }) {
  return <><JsonLd data={homeSchemas(home)} /><main className="guide-wrap">
    <div className="guide-hero"><div><p className="eyebrow">Roblox · Sillytung Studios</p><h1>{home.hero.heading}</h1><p>{home.hero.lead}</p><p>{home.hero.supportingText}</p>
    <div className="guide-actions"><a href={routePath("codes")}>Latest Codes</a><a href={routePath("beginner-guide")}>Beginner Guide</a><a href={siteConfig.game.officialUrl!} target="_blank" rel="noopener noreferrer">Play on Roblox ↗</a></div><GuideDate date={home.lastReviewed} /></div>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="guide-cover" src={assetPath(siteConfig.assets.cover)} alt="Steal Animal Egg banner showing a Roblox character carrying an egg" width="768" height="432" /></div>
    <div className="guide-content-grid"><GuideToc sections={home.sections} faq={!!home.faq.length} /><article className="guide-article"><GuideSections sections={home.sections} /><GuideScreenshots items={home.screenshots} /><GuideFaq items={home.faq} /><NativeAdSlot /></article></div>
  </main></>;
}
