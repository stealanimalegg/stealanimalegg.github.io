import type { DataTable, FaqItem, PageSection, ScreenshotItem } from "@/config/types";
import { assetPath, routePath } from "@/lib/urls";

export function GuideTable({ table }: { table: DataTable }) {
  return <div className="guide-table-wrap" tabIndex={0} role="region" aria-label={table.caption}><table className="guide-table"><caption>{table.caption}</caption><thead><tr>{table.columns.map(c => <th scope="col" key={c}>{c}</th>)}</tr></thead><tbody>{table.rows.map((r,i) => <tr key={i}>{r.map((c,j) => <td key={j}>{c}</td>)}</tr>)}</tbody></table></div>;
}
export function GuideSections({ sections }: { sections: PageSection[] }) {
  return <>{sections.map(s => <section className="guide-section" id={s.id} key={s.id}>
    <h2>{s.heading}</h2>{s.intro && <p>{s.intro}</p>}{s.table && <GuideTable table={s.table} />}
    {s.paragraphs?.map(p => <p key={p}>{p}</p>)}
    {s.externalLinks?.length ? <p className="guide-source">{s.externalLinks.map((link, i) => <span key={link.url}>{i > 0 ? " · " : ""}<a href={link.url} target="_blank" rel="noopener noreferrer">{link.label} ↗</a></span>)}</p> : null}
    {s.bullets?.length ? <ul>{s.bullets.map(b => <li key={b}>{b}</li>)}</ul> : null}
    {s.subsections?.map(sub => <div key={sub.heading}><h3>{sub.heading}</h3>{sub.paragraphs.map(p => <p key={p}>{p}</p>)}{sub.bullets?.length ? <ul>{sub.bullets.map(b => <li key={b}>{b}</li>)}</ul> : null}{sub.table && <GuideTable table={sub.table} />}</div>)}
    {s.steps?.length ? <ol className="guide-steps">{s.steps.map(step => <li key={step.heading}><h3>{step.heading}</h3><p>{step.description}</p></li>)}</ol> : null}
    {s.links?.length ? <div className="guide-links">{s.links.map(l => <a className="guide-link" key={l.slug+l.label} href={routePath(l.slug)}><strong>{l.label} →</strong>{l.description && <span>{l.description}</span>}</a>)}</div> : null}
  </section>)}</>;
}
export function GuideFaq({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;
  return <section className="guide-section guide-faq" id="faq"><h2>Frequently Asked Questions</h2>{items.map(i => <article key={i.question}><h3>{i.question}</h3><p>{i.answer}</p></article>)}</section>;
}
export function GuideScreenshots({ items }: { items: ScreenshotItem[] }) {
  return <div className="guide-screenshots">{items.map(i => <figure key={i.src}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={assetPath(i.src)} alt={i.alt} loading="lazy" />{i.caption && <figcaption>{i.caption}</figcaption>}
  </figure>)}</div>;
}
export function GuideToc({ sections, faq }: { sections: PageSection[]; faq?: boolean }) {
  const navigation = () => <nav aria-label="On this page">{sections.map(s => <a href={`#${s.id}`} key={s.id}>{s.heading}</a>)}{faq && <a href="#faq">Frequently Asked Questions</a>}</nav>;
  return <aside className="guide-toc"><p>On this page</p>{navigation()}<details className="guide-toc-disclosure"><summary>On this page</summary>{navigation()}</details></aside>;
}
export function GuideDate({ date }: { date: string }) {
  return <p className="guide-date">Last updated: <time dateTime={date}>{new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></p>;
}
