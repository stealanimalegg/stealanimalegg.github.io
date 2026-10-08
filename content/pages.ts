import type { SeoPageDefinition } from "@/config/types";
import rawPages from "./generated/pages.json";

import { withCodeTables } from "./codes";

export const corePages: SeoPageDefinition[] = (rawPages as SeoPageDefinition[]).map(page => ({ ...page, sections: withCodeTables(page.sections) }));
