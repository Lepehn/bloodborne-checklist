import { GAME_CONFIG } from "./config.js";
import { STATUSES, COMPLETED_STATUSES } from "./statuses.js";
import { CATEGORIES } from "./categories.js";

import { bosses } from "./data/bosses.js";
import { trickWeapons } from "./data/trickWeapons.js";
import { sideArms } from "./data/sideArms.js";
import { pthumeruChalices } from "./data/pthumeruChalices.js";
import { hunterTools } from "./data/hunterTools.js";
import { dlcTrickWeapons } from "./data/dlcTrickWeapons.js";
import { dlcSideArms } from "./data/dlcSideArms.js";
import { dlcHunterTools } from "./data/dlcHunterTools.js";


console.log("GAME index loaded");

export const GAME = {
  ...GAME_CONFIG,
  statuses: STATUSES,
  completedStatuses: COMPLETED_STATUSES,
  categories: CATEGORIES,
  data: {
    bosses,
    trickWeapons,
    sideArms,
    pthumeruChalices,
    hunterTools,
    dlcTrickWeapons,
    dlcSideArms,
    dlcHunterTools
  }
};