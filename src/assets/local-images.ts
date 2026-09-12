/**
 * Local, Vercel-safe image paths.
 *
 * These used to be resolved via the Lovable-only `*.png.asset.json` metadata
 * files in this folder, whose `url` field points at
 * `/__l5e/assets-v1/<asset_id>/<filename>` — a route that only exists on
 * Lovable's own preview/build infrastructure. That route does not exist on
 * Vercel (or any other host), which is why these images loaded inside the
 * Lovable editor but broke after deployment.
 *
 * The fix: serve the binaries as plain static files from `public/images/`
 * and reference them with a root-relative path (`/images/<filename>`), which
 * works identically in dev, in `vite build` output, and on Vercel.
 *
 * IMPORTANT — action required:
 * The actual image binaries are NOT included in this project export (only
 * the `*.asset.json` metadata pointing at Lovable's private CDN was
 * exported). You must add each file below to `public/images/` using the
 * EXACT filename (including case and extension — note some are `.jpg`, not
 * `.png`) shown here, taken from each asset.json's `original_filename`
 * field. See IMAGE_REPORT.md in the project root for the full list and
 * where to get each file from Lovable.
 */

// --- Mahirat (Kohli & Dhoni) ---
export const mahiratCollage1 = "/images/mahirat-collage-1.jpg"; // from mahirat-collage-1.png.asset.json (original_filename is .jpg)
export const mahiratCollage2 = "/images/mahirat-collage-2.jpg"; // from mahirat-collage-2.png.asset.json (original_filename is .jpg)
export const mahiratCollage3 = "/images/mahirat-collage-3.jpg"; // from mahirat-collage-3.png.asset.json (original_filename is .jpg)
export const mahiratCollage4 = "/images/mahirat-collage-4.jpg"; // from mahirat-collage-4.png.asset.json (original_filename is .jpg)
export const mahiratFrame1 = "/images/mahirat-frame-1.png";
export const mahiratFrame2 = "/images/mahirat-frame-2.png";

// --- IPL ---
export const iplCelebration = "/images/ipl-kohli-trophy-1.png";
export const iplTrophy = "/images/ipl-kohli-trophy-2.png";
export const iplCentury = "/images/ipl-kohli-century.png";
export const iplTeamTrophy = "/images/ipl-rcb-team-trophy.png";
export const iplKohliAbd = "/images/ipl-kohli-abd.png";

// --- Virushka (Virat & Anushka) ---
export const virushkaEvent = "/images/virushka-event.png";
export const virushkaOutdoor = "/images/virushka-outdoor.png";
export const virushkaWedding = "/images/virushka-wedding.png";
export const virushkaStadium = "/images/virushka-stadium.png";

// --- RO-KO (Kohli & Rohit) ---
export const rokoHug = "/images/roko-hug.png";
export const rokoTrophy = "/images/roko-trophy.png";
export const rokoStumps = "/images/roko-stumps.png";

// --- Trophies / career milestones ---
export const worldCup2011Trophy = "/images/world-cup-2011-trophy.png";
export const worldCup2023Kohli = "/images/kohli-2023-world-cup.png";
export const worldCup2024T20 = "/images/kohli-2024-t20-world-cup.png";
export const championsTrophy2025 = "/images/kohli-2025-champions-trophy.png";
export const testFarewell = "/images/kohli-test-farewell.png";
export const kohli2016Wt20 = "/images/kohli-2016-wt20.png";
export const kohliU19Trophy2008 = "/images/kohli-2008-u19-trophy.png";
