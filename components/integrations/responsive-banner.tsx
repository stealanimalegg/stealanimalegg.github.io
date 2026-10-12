"use client";

import { useEffect, useRef } from "react";
import { adsterra } from "@/config/adsterra";

export function ResponsiveBanner() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.querySelector("iframe")) return;

    const device = window.matchMedia("(min-width: 768px)").matches ? "desktop" : "mobile";
    const { scriptUrl, ...options } = adsterra[device];
    host.dataset.adDevice = device;
    host.style.setProperty("--ad-width", `${options.width}px`);
    host.style.setProperty("--ad-height", `${options.height}px`);
    const fit = () => host.style.setProperty("--ad-scale", String(Math.min(1, host.clientWidth / options.width)));
    fit();
    new ResizeObserver(fit).observe(host);

    // A same-origin, unsandboxed parser document preserves the original synchronous
    // snippet, including document.write support, without replacing the main page.
    // Retain the first selection on resize/BFCache; CSS hides a mismatched size.
    const frame = document.createElement("iframe");
    frame.title = "Advertisement";
    frame.width = String(options.width);
    frame.height = String(options.height);
    frame.dataset.adsterraBannerAdapter = device;
    frame.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}body{width:${options.width}px;height:${options.height}px}</style></head><body><script>atOptions = ${JSON.stringify(options)};<\/script><script src="${scriptUrl}"><\/script></body></html>`;
    frame.addEventListener("load", () => {
      const doc = frame.contentDocument;
      if (!doc) return;
      const update = () => {
        const filled = Array.from(doc.body.querySelectorAll("iframe, img, video, object, embed, a")).some(creative => {
          const rect = creative.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        });
        host.dataset.adState = filled ? "filled" : "empty";
      };
      // An empty load collapses only the surrounding space; later provider DOM
      // changes can restore it. Never remove a pending script or its frame.
      new MutationObserver(update).observe(doc.body, { childList: true, subtree: true, attributes: true });
      new ResizeObserver(update).observe(doc.body);
      update();
    }, { once: true });
    host.appendChild(frame);
    // Do not destroy/reload third-party scripts during Strict Mode effect replay.
  }, []);

  return (
    <div ref={hostRef} className="ad-slot ad-slot--banner" data-banner-ad-slot data-ad-state="loading">
      <span className="ad-label">Advertisement</span>
    </div>
  );
}
