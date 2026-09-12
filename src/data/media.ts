import { photos, type Photo } from "./photos";
import {
  mahiratCollage1,
  mahiratCollage2,
  mahiratCollage3,
  mahiratCollage4,
  mahiratFrame1,
  mahiratFrame2,
  iplCelebration,
  iplTrophy,
  iplCentury,
  iplTeamTrophy,
  iplKohliAbd,
  virushkaEvent,
  virushkaOutdoor,
  virushkaWedding,
  virushkaStadium,
  rokoHug,
  rokoTrophy,
  rokoStumps,
  worldCup2011Trophy,
  worldCup2023Kohli,
  worldCup2024T20,
  championsTrophy2025,
  testFarewell,
  kohli2016Wt20,
  kohliU19Trophy2008,
} from "@/assets/local-images";

/** Build a credit-less Photo object for a fan-uploaded image (CDN asset). */
const fanPhotoAlias = (url: string, title: string, width: number, height: number): Photo => ({
  id: title,
  url,
  width,
  height,
  title,
  credit: "",
  license: "",
  source: "",
});

/** Friendly aliases over the generated Wikimedia Commons manifest. */
export const img = {
  kohliDriveWc2015: photos.p2015CwcIVUae0228Kohli03,
  kohliPullWc2015: photos.p2015CwcIVUae0228Kohli12,
  kohliStanceWc2015: photos.p2015CwcIVUae0228Kohli05,
  kohliShotWc2015: photos.p2015CwcIVUae0228Kohli08,
  kohliBattingOdi: photos.viratKohliBatting,
  kohliBatting2013: photos.viratKohliBatting2013,
  kohliBattingTest: photos.viratKohliBattingTest,
  kohliCaptain: photos.captainKohli51821389332,
  kohliCenturyTrentBridge: photos.viratKohliAfterHisCenturyAtTrentBridge,
  kohliFieldingTrentBridge: photos.viratKohliFieldingAtTrentBridge2018Cropped,
  kohli2015Portrait: photos.viratKohliJan2015Cropped,
  kohli2012: photos.viratKohli26Feb2012,
  kohli2015: photos.viratKohliJanuary2015,
  kohli2016: photos.viratKohliJune2016,
  kohliPortrait: photos.viratKohliPortrait,
  kohliAndUmesh: photos.kohliAndUmesh,
  kohliKhelRatna: photos.shriViratKohliForCricketInAGlitteringCeremonyA,
  kohliPadmaShri: photos.thePresidentShriPranabMukherjeePresentingThePa,
  kohliArjuna: photos.viratKohliArjunaAward,
  kohliTest2023: photos.viratKohliDuringTheIndiaVsAus4thTestMatchAtNar,
  kohliIpl2015: photos.viratKohliAtThe2015IplOpeningCeremony,
  dhoni: photos.msDhoni,
  dhoniLate2010s: photos.msDhoniLate2010s,
  dhoni2016: photos.msDhoni2016,
  dhoniBatting: photos.mahendraSinghDhoniBatting,
  dhoniPadmaBhushan: photos.thePresidentShriRamNathKovindPresentingThePadm,
  india2011WorldCupTeam: photos.thePresidentSmtPratibhaDevisinghPatilGreetingT,
  /** Kohli and Suresh Raina lift the 2011 World Cup trophy (fan photo, CDN asset). */
  worldCup2011Trophy: {
    id: "Kohli and Raina lift the 2011 World Cup trophy",
    url: worldCup2011Trophy,
    width: 480,
    height: 640,
    title: "Kohli and Raina lift the 2011 World Cup trophy",
    credit: "",
    license: "",
    source: "",
  },
  /** Kohli walks past the ICC Men's Cricket World Cup trophy, India 2023 (fan photo, CDN asset). */
  worldCup2023: {
    id: "Kohli walks past the 2023 World Cup trophy",
    url: worldCup2023Kohli,
    width: 600,
    height: 440,
    title: "Kohli walks past the 2023 World Cup trophy",
    credit: "",
    license: "",
    source: "",
  },
  /** Kohli kisses the ICC Men's T20 World Cup trophy, Barbados 2024 (fan photo, CDN asset). */
  worldCup2024T20: {
    id: "Kohli kisses the 2024 T20 World Cup trophy",
    url: worldCup2024T20,
    width: 416,
    height: 416,
    title: "Kohli kisses the 2024 T20 World Cup trophy",
    credit: "",
    license: "",
    source: "",
  },
  /** Kohli kisses the ICC Champions Trophy after India's 2025 win (fan photo, CDN asset). */
  championsTrophy2025: {
    id: "Kohli kisses the 2025 Champions Trophy",
    url: championsTrophy2025,
    width: 638,
    height: 480,
    title: "Kohli kisses the 2025 Champions Trophy",
    credit: "",
    license: "",
    source: "",
  },
  /** Kohli in Test whites, his farewell red-ball chapter (fan photo, CDN asset). */
  testFarewell: {
    id: "Kohli in Test whites — farewell to Tests",
    url: testFarewell,
    width: 554,
    height: 554,
    title: "Kohli in Test whites — farewell to Tests",
    credit: "",
    license: "",
    source: "",
  },
  /** Kohli with the Player of the Tournament award at the 2016 ICC World Twenty20, India (fan photo, CDN asset). */
  kohli2016Wt20: {
    id: "Kohli with the 2016 World T20 Player of the Tournament award",
    url: kohli2016Wt20,
    width: 594,
    height: 405,
    title: "Kohli with the 2016 World T20 Player of the Tournament award",
    credit: "",
    license: "",
    source: "",
  },
  /** Kohli lifts the ICC Under-19 World Cup trophy, Malaysia 2008 (fan photo, CDN asset). */
  kohliU19Trophy2008: {
    id: "Kohli lifts the 2008 Under-19 World Cup trophy",
    url: kohliU19Trophy2008,
    width: 393,
    height: 508,
    title: "Kohli lifts the 2008 Under-19 World Cup trophy",
    credit: "",
    license: "",
    source: "",
  },
  /** Kohli lifts the 2025 IPL trophy (fan photo, CDN asset). */
  iplCelebrationPhoto: fanPhotoAlias(iplCelebration, "Kohli lifts the 2025 IPL trophy", 1600, 1008),
  /** Kohli and Rohit celebrate with stumps, 2013 Champions Trophy (fan photo, CDN asset). */
  rokoStumps: fanPhotoAlias(rokoStumps, "Kohli and Rohit celebrate with stumps, 2013 Champions Trophy", 503, 397),
  indiaMohali2011: photos.manmohanSinghAndThePrimeMinisterOfPakistanMrYo,
  virushkaVogue: photos.anushkaSharmaAndViratKohliAtVogueBeautyAwards,
  virushkaReception: photos.viratKohliAndAnushkaSharmaAtMumbaiReception,
  virushkaPmo: photos.theCaptainOfTheIndianCricketTeamViratKohliAndN,
  anushka2015: photos.anushkaSharma2015,
  anushkaLux: photos.anushkaSharmaAtTheLuxGoldenRoseAwards,
  rohit: photos.rohitSharma,
  rohitBatting: photos.rohitSharmaBatting,
  rohit2015: photos.rohitSharma2015,
  rohitTest2023: photos.rohitSharmaDuringTheIndiaVsAustralia4thTestMat,
  rohitFielding: photos.rohitSharmaFielding,
  kohliRohitPm: photos.pmWithViratKohliAndRohitSharmaDuringTheIndiaVs,
  indiaSquadPmo: photos.ictPlayersWithPmoIndia,
  indiaVsNz2010: photos.indiaVsNewZealandOneDayInternational10December,
  floodlights: photos.aFloodLightAtTheDYPatilStadium5739171528,
  edenGardens: photos.edengarden2022febIndiaVsWi,
  wankhedePanorama: photos.wankhedePanoramicIccWcf,
  wankhede2011: photos.wankhedeStadiumWorldCup2011,
  dyPatil: photos.dyPatilIpl,
  cwc11Celebration: photos.peopleCelebratingIndiaSCwc11Win8310811320,
  teamHuddle: photos.teamHuddle,
} satisfies Record<string, Photo>;

export type GalleryCategory =
  | "VIRAT"
  | "MAHIRAT"
  | "VIRUSHKA"
  | "ROHIRAT"
  | "INDIA"
  | "TROPHIES"
  | "STADIUM";

export type GalleryItem = {
  photo: Photo;
  caption: string;
  categories: GalleryCategory[];
  /** False for fan photographs that carry no Wikimedia credit. Defaults to true. */
  showCredit?: boolean;
};

/** Build a credit-less Photo object for a fan-uploaded image (CDN asset). */
const fanPhoto = (url: string, title: string, width: number, height: number): Photo => ({
  id: title,
  url,
  width,
  height,
  title,
  credit: "",
  license: "",
  source: "",
});

export const gallery: GalleryItem[] = [
  { photo: img.kohliDriveWc2015, caption: "Kohli drives during the 2015 World Cup match against UAE", categories: ["VIRAT"] },
  { photo: img.kohliPullWc2015, caption: "Kohli at the crease, 2015 World Cup, Perth", categories: ["VIRAT"] },
  { photo: img.kohliStanceWc2015, caption: "In his stance during the 2015 World Cup", categories: ["VIRAT"] },
  { photo: img.kohliShotWc2015, caption: "Playing a shot at the 2015 World Cup", categories: ["VIRAT"] },
  { photo: img.kohliBattingOdi, caption: "Kohli batting in ODI colours", categories: ["VIRAT", "INDIA"] },
  { photo: img.kohliBatting2013, caption: "Kohli batting in 2013", categories: ["VIRAT"] },
  { photo: img.kohliBattingTest, caption: "Kohli batting in Test whites", categories: ["VIRAT"] },
  { photo: img.kohliCaptain, caption: "Kohli in the field as India captain", categories: ["VIRAT", "INDIA"] },
  { photo: img.worldCup2024T20, caption: "Kohli kisses the ICC Men's T20 World Cup trophy after the final in Barbados, 2024", categories: ["VIRAT", "INDIA", "TROPHIES"], showCredit: false },
  { photo: img.championsTrophy2025, caption: "Kohli kisses the ICC Champions Trophy after India's 2025 triumph in Dubai", categories: ["VIRAT", "INDIA", "TROPHIES"], showCredit: false },
  { photo: img.testFarewell, caption: "Kohli in Test whites — a fourteen-year red-ball career comes to a close, 2025", categories: ["VIRAT", "INDIA"], showCredit: false },
  { photo: img.kohli2016Wt20, caption: "Kohli with the Player of the Tournament award at the 2016 ICC World Twenty20, India", categories: ["VIRAT", "INDIA", "TROPHIES"], showCredit: false },
  { photo: img.kohliU19Trophy2008, caption: "Kohli lifts the ICC Under-19 World Cup trophy after India's win in Malaysia, 2008", categories: ["VIRAT", "INDIA", "TROPHIES"], showCredit: false },
  { photo: img.kohliCenturyTrentBridge, caption: "After his century at Trent Bridge, 2018", categories: ["VIRAT"] },
  { photo: img.kohliFieldingTrentBridge, caption: "Fielding at Trent Bridge, 2018", categories: ["VIRAT"] },
  { photo: img.worldCup2023, caption: "Kohli walks past the ICC Men's Cricket World Cup trophy, India 2023", categories: ["VIRAT", "INDIA", "TROPHIES"], showCredit: false },
  { photo: img.kohliAndUmesh, caption: "Kohli with Umesh Yadav on India duty", categories: ["INDIA"] },
  { photo: img.kohliKhelRatna, caption: "Receiving the Rajiv Gandhi Khel Ratna, September 2018", categories: ["TROPHIES"] },
  { photo: img.kohliPadmaShri, caption: "Receiving the Padma Shri from President Pranab Mukherjee, March 2017", categories: ["TROPHIES"] },
  { photo: img.kohliArjuna, caption: "Kohli with the Arjuna Award", categories: ["TROPHIES"] },
  { photo: img.kohliPortrait, caption: "Portrait of Virat Kohli", categories: ["VIRAT"] },
  { photo: img.kohli2016, caption: "Kohli at a public appearance, June 2016", categories: ["VIRAT"] },
  { photo: img.dhoni, caption: "MS Dhoni keeping wicket for India", categories: ["MAHIRAT", "INDIA"] },
  { photo: img.dhoniBatting, caption: "Dhoni batting for India", categories: ["MAHIRAT"] },
  { photo: img.dhoni2016, caption: "MS Dhoni in 2016", categories: ["MAHIRAT"] },
  { photo: img.dhoniLate2010s, caption: "Dhoni in the late 2010s", categories: ["MAHIRAT"] },
  { photo: img.dhoniPadmaBhushan, caption: "Dhoni receiving the Padma Bhushan, April 2018", categories: ["MAHIRAT", "TROPHIES"] },
  { photo: img.worldCup2011Trophy, caption: "Kohli lifts the 2011 World Cup trophy with Suresh Raina", categories: ["MAHIRAT", "INDIA", "TROPHIES"], showCredit: false },
  { photo: img.indiaMohali2011, caption: "The India squad at the 2011 World Cup semi-final in Mohali", categories: ["MAHIRAT", "INDIA"] },
  { photo: img.virushkaVogue, caption: "Virat and Anushka at the Vogue Beauty Awards", categories: ["VIRUSHKA"] },
  { photo: img.virushkaReception, caption: "Virat and Anushka at their Mumbai wedding reception, December 2017", categories: ["VIRUSHKA"] },
  { photo: img.virushkaPmo, caption: "The couple calling on the Prime Minister, New Delhi, December 2017", categories: ["VIRUSHKA"] },
  { photo: img.anushka2015, caption: "Anushka Sharma at a public event, 2015", categories: ["VIRUSHKA"] },
  { photo: img.anushkaLux, caption: "Anushka Sharma at the Lux Golden Rose Awards", categories: ["VIRUSHKA"] },
  { photo: img.rohit, caption: "Rohit Sharma fielding for India", categories: ["ROHIRAT"] },
  { photo: img.rohitBatting, caption: "Rohit Sharma batting", categories: ["ROHIRAT"] },
  { photo: img.rohitTest2023, caption: "Rohit Sharma during the 4th Test v Australia, March 2023", categories: ["ROHIRAT", "INDIA"] },
  { photo: img.rohitFielding, caption: "Rohit Sharma in the field", categories: ["ROHIRAT"] },
  { photo: img.kohliRohitPm, caption: "Kohli and Rohit together at the Narendra Modi Stadium, March 2023", categories: ["ROHIRAT", "INDIA"] },
  { photo: img.indiaSquadPmo, caption: "India players at the Prime Minister's Office", categories: ["INDIA", "ROHIRAT"] },
  { photo: img.indiaVsNz2010, caption: "India v New Zealand ODI, December 2010", categories: ["INDIA"] },
  { photo: img.teamHuddle, caption: "A team huddle before play", categories: ["INDIA"] },
  { photo: img.cwc11Celebration, caption: "Fans celebrating India's 2011 World Cup win", categories: ["TROPHIES", "INDIA"] },
  { photo: img.wankhedePanorama, caption: "Panorama of the Wankhede Stadium, Mumbai", categories: ["STADIUM"] },
  { photo: img.wankhede2011, caption: "Wankhede Stadium during the 2011 World Cup", categories: ["STADIUM"] },
  { photo: img.edenGardens, caption: "Eden Gardens, India v West Indies, February 2022", categories: ["STADIUM"] },
  { photo: img.floodlights, caption: "Floodlights at the D Y Patil Stadium", categories: ["STADIUM"] },
  { photo: img.dyPatil, caption: "A packed D Y Patil Stadium", categories: ["STADIUM"] },

  // --- Fan / uploaded photographs actually displayed across the site ---
  // Mahirat — "In the same frame" + "The collage" (mahirat.tsx)
  { photo: fanPhoto(mahiratCollage1, "Dhoni and Kohli tricolour", 1039, 1920), caption: "Wrapped in the tricolour — Dhoni and Kohli, two captains of India", categories: ["MAHIRAT"], showCredit: false },
  { photo: fanPhoto(mahiratFrame1, "Kohli hand on Dhoni shoulder", 335, 597), caption: "A captain and his successor — Kohli's hand on Dhoni's shoulder, India blue", categories: ["MAHIRAT"], showCredit: false },
  { photo: fanPhoto(mahiratFrame2, "Kohli and Dhoni IPL night", 1024, 768), caption: "RCB meets CSK — Kohli and Dhoni share a laugh under the IPL floodlights", categories: ["MAHIRAT", "INDIA"], showCredit: false },
  { photo: fanPhoto(mahiratCollage2, "Mahirat IPL embrace", 422, 473), caption: "An IPL embrace — RCB red meets CSK yellow", categories: ["MAHIRAT"], showCredit: false },
  { photo: fanPhoto(mahiratCollage3, "Mahirat celebration", 399, 501), caption: "Pure joy on the pitch — a moment of celebration together", categories: ["MAHIRAT", "INDIA"], showCredit: false },
  { photo: fanPhoto(mahiratCollage4, "Mahirat side by side", 400, 400), caption: "Side by side during a break in play", categories: ["MAHIRAT"], showCredit: false },

  // IPL — "Champions at last" + season gallery (ipl.tsx)
  { photo: fanPhoto(iplCelebration, "Kohli lifts IPL trophy", 1600, 1008), caption: "The night the wait ended — Kohli lifts the 2025 IPL trophy", categories: ["VIRAT", "TROPHIES"], showCredit: false },
  { photo: fanPhoto(iplTrophy, "Kohli kisses IPL trophy", 1600, 1008), caption: "The trophy in his hands at last", categories: ["VIRAT", "TROPHIES"], showCredit: false },
  { photo: fanPhoto(iplCentury, "Kohli IPL century", 736, 1308), caption: "Bat raised, helmet off — another IPL hundred for RCB", categories: ["VIRAT", "TROPHIES"], showCredit: false },
  { photo: fanPhoto(iplTeamTrophy, "RCB team with IPL trophy", 678, 452), caption: "One team, one dream — RCB celebrate the 2025 title", categories: ["TROPHIES", "INDIA"], showCredit: false },
  { photo: fanPhoto(iplKohliAbd, "Kohli and AB de Villiers", 397, 500), caption: "Brothers in red — Kohli and AB de Villiers", categories: ["VIRAT"], showCredit: false },

  // Virushka — "Public appearances" (virushka.tsx)
  { photo: fanPhoto(virushkaEvent, "Virushka laughing", 236, 419), caption: "Caught laughing together under the stadium lights", categories: ["VIRUSHKA"], showCredit: false },
  { photo: fanPhoto(virushkaOutdoor, "Virushka outdoors", 813, 701), caption: "A quiet moment together, away from the spotlight", categories: ["VIRUSHKA"], showCredit: false },
  { photo: fanPhoto(virushkaWedding, "Virushka wedding", 495, 620), caption: "On their wedding day, Tuscany, December 2017", categories: ["VIRUSHKA"], showCredit: false },
  { photo: fanPhoto(virushkaStadium, "Virushka at the ground", 542, 566), caption: "Together at the ground, soaking in the atmosphere", categories: ["VIRUSHKA"], showCredit: false },

  // RO-KO — photographs displayed on the RO-KO page (rohirat.tsx)
  { photo: fanPhoto(rokoHug, "Kohli and Rohit embrace", 602, 820), caption: "Brothers in blue — Kohli and Rohit share an embrace in victory", categories: ["ROHIRAT", "INDIA"], showCredit: false },
  { photo: fanPhoto(rokoTrophy, "Kohli and Rohit lift the trophy", 189, 267), caption: "Lifting the trophy together — a shared legacy for Indian cricket", categories: ["ROHIRAT", "INDIA", "TROPHIES"], showCredit: false },
  { photo: fanPhoto(rokoStumps, "Kohli and Rohit celebrate with stumps", 503, 397), caption: "Stumps as souvenirs — celebrating the 2013 Champions Trophy win", categories: ["ROHIRAT", "INDIA", "TROPHIES"], showCredit: false },
];
