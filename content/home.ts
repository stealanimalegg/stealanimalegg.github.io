import type { HomePageDefinition } from "@/config/types";
import rawHomePage from "./generated/home.json";

import { withCodeTables } from "./codes";

export const homePage: HomePageDefinition = { ...(rawHomePage as HomePageDefinition), sections: withCodeTables((rawHomePage as HomePageDefinition).sections) };
