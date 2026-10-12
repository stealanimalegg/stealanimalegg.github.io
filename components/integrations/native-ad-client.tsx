"use client";

import { useEffect, useRef } from "react";

export function NativeAdClient({ scriptUrl, containerId }: { scriptUrl: string; containerId: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let container = host.querySelector<HTMLDivElement>(`[id="${containerId}"]`);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      const label = document.createElement("span");
      label.className = "ad-label";
      label.textContent = "Advertisement";
      host.append(label, container);

      const script = document.createElement("script");
      script.setAttribute("async", "async");
      script.src = scriptUrl;
      script.dataset.cfasync = "false";
      script.dataset.gameWikiNativeAd = containerId;
      script.addEventListener("error", () => { host.dataset.adState = "error"; }, { once: true });
      // Mount the exact target ID before executing the official loader.
      host.appendChild(script);
    }

    const update = () => {
      const filled = Array.from(container.querySelectorAll("iframe, img, video, object, embed, a")).some(creative => {
        const rect = creative.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });
      host.dataset.adState = filled ? "filled" : "empty";
    };
    const mutations = new MutationObserver(update);
    mutations.observe(container, { childList: true, subtree: true, attributes: true });
    const size = new ResizeObserver(update);
    size.observe(container);
    update();

    return () => {
      mutations.disconnect();
      size.disconnect();
    };
  }, [containerId, scriptUrl]);

  return <div ref={hostRef} className="ad-slot ad-slot--native" data-native-ad-slot data-ad-state="loading" />;
}
