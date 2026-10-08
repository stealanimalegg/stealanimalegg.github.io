import { GUIDEBOOK_CSS } from "./spec-html";

/** The fixed guidebook uses typed React components for escaped content. */
export function scopedTemplateCss(_skin: string, _accentColorId?: string | null): string {
  return GUIDEBOOK_CSS;
}
