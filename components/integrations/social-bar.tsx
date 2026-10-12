"use client";

import { useEffect } from "react";
import { adsterra } from "@/config/adsterra";

export function SocialBar() {
  useEffect(() => {
    if (document.querySelector("script[data-adsterra-social-bar]")) return;
    const script = document.createElement("script");
    script.src = adsterra.social.scriptUrl;
    script.async = false;
    script.dataset.cfasync = "false";
    script.dataset.adsterraSocialBar = "";
    document.body.appendChild(script);
    // Global document lifetime, including Strict Mode and client-side navigation.
  }, []);
  return null;
}
