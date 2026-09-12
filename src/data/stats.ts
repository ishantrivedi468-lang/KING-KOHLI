/**
 * Career statistics.
 *
 * Sources: ESPNcricinfo / Wikipedia career-statistics tables for Virat Kohli.
 * Test and T20I figures are career-final (he retired from T20Is in June 2024
 * and from Test cricket in May 2025). ODI figures are as at 19 August 2026 (still active).
 */

export const STATS_AS_OF = "Last verified: 19 August 2026 (ESPNcricinfo Statsguru)";
export const STATS_NOTE =
  "Test and T20I totals are career-final. ODI totals are live and taken from ESPNcricinfo Statsguru — he is still active in the format, so the numbers keep moving.";

export type Format = "TEST" | "ODI" | "T20I";

export type FormatStats = {
  format: Format;
  label: string;
  status: string;
  matches: number;
  innings: number;
  runs: number;
  average: number;
  highest: string;
  hundreds: number;
  fifties: number;
  strikeRate: number;
};

export const formatStats: FormatStats[] = [
  {
    format: "TEST",
    label: "Test cricket",
    status: "Career-final — retired May 2025",
    matches: 123,
    innings: 210,
    runs: 9230,
    average: 46.85,
    highest: "254*",
    hundreds: 30,
    fifties: 31,
    strikeRate: 55.57,
  },
  {
    format: "ODI",
    label: "One Day Internationals",
    status: "Active — as at August 2026",
    matches: 314,
    innings: 302,
    runs: 14941,
    average: 58.59,
    highest: "183",
    hundreds: 54,
    fifties: 79,
    strikeRate: 93.95,
  },
  {
    format: "T20I",
    label: "Twenty20 Internationals",
    status: "Career-final — retired June 2024",
    matches: 125,
    innings: 117,
    runs: 4188,
    average: 48.69,
    highest: "122*",
    hundreds: 1,
    fifties: 38,
    strikeRate: 137.04,
  },
];

export type QuickStat = {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
  context: string;
};

export const quickStats: QuickStat[] = [
  { label: "International runs", value: 28359, context: "Tests + ODIs + T20Is combined" },
  { label: "International centuries", value: 85, context: "30 Test • 54 ODI • 1 T20I" },
  { label: "ODI runs", value: 14941, context: "In 314 matches" },
  { label: "ODI centuries", value: 54, context: "The most by any batter in ODI history" },
  { label: "Test runs", value: 9230, context: "In 123 matches" },
  { label: "Test centuries", value: 30, context: "Including 7 double hundreds" },
  { label: "T20I runs", value: 4188, context: "In 125 matches" },
  { label: "T20I centuries", value: 1, context: "122* v Afghanistan, 2024" },
  { label: "ODI average", value: 58.59, decimals: 2, context: "Among the highest in ODI history" },
  { label: "International matches", value: 562, context: "Across all three formats" },
];
