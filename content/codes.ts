import rawCodes from "./generated/codes.json";
import type { DataTable, PageSection } from "@/config/types";

export const codeData = rawCodes;
export function codeTable(status: "working" | "expired"): DataTable {
  return {
    caption: `${status === "working" ? "Working" : "Expired"} codes · ${new Date(`${codeData.lastUpdated}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}`,
    columns: ["Code", "Reward", "Status"],
    rows: codeData.entries.filter(c => c.status === status).map(c => [c.code, c.reward, status === "working" ? "Working" : "Expired"]),
  };
}
export function withCodeTables(sections: PageSection[]): PageSection[] {
  return sections.map(s => s.codeStatus ? { ...s, table: codeTable(s.codeStatus) } : s);
}
