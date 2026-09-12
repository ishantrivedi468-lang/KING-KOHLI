import { img } from "./media";
import type { Photo } from "./photos";

export type TimelineEvent = {
  year: string;
  title: string;
  text: string;
  photo: Photo;
};

export const timeline: TimelineEvent[] = [
  {
    year: "2008",
    title: "Under-19 World Cup triumph",
    text: "Kohli captained India to the ICC Under-19 World Cup title in Malaysia — the first time most of the country heard his name.",
    photo: img.kohliU19Trophy2008,
  },
  {
    year: "2008",
    title: "International debut",
    text: "He made his ODI debut against Sri Lanka at Dambulla in August 2008, opening the batting as a teenager.",
    photo: img.kohliBattingOdi,
  },
  {
    year: "2011",
    title: "World Cup winner",
    text: "Part of MS Dhoni's squad that won the ICC Cricket World Cup at home — Kohli lifts the trophy alongside Suresh Raina. He scored a century on his World Cup debut against Bangladesh and made a crucial 35 in the final.",
    photo: img.worldCup2011Trophy,
  },
  {
    year: "2011",
    title: "Test debut",
    text: "He was handed the Test cap in the West Indies in June 2011, beginning a red-ball career that would run for fourteen years.",
    photo: img.kohliBattingTest,
  },
  {
    year: "2013",
    title: "Rise as India's premier batsman",
    text: "The 52-ball hundred against Australia in Jaipur while chasing 360 defined the year, and he reached the top of the ICC ODI batting rankings for the first time.",
    photo: img.kohliBatting2013,
  },
  {
    year: "2014–2016",
    title: "Among the very best in the world",
    text: "Player of the Tournament at both the 2014 and 2016 ICC World T20s, Test captaincy from 2014-15, and a record 973 runs in the 2016 IPL season.",
    photo: img.kohli2016Wt20,
  },
  {
    year: "2017",
    title: "Marriage to Anushka Sharma",
    text: "Kohli married the actor Anushka Sharma in Tuscany, Italy, in December 2017, followed by receptions in Delhi and Mumbai.",
    photo: img.virushkaReception,
  },
  {
    year: "2018",
    title: "Historic Test batting peak",
    text: "He scored 1,322 Test runs in the calendar year and swept the ICC awards — the Sir Garfield Sobers Trophy plus Test and ODI Cricketer of the Year.",
    photo: img.kohliCenturyTrentBridge,
  },
  {
    year: "2023",
    title: "A World Cup for the ages",
    text: "At the home ODI World Cup he made 765 runs, the most by any batter in a single edition, and brought up his 50th ODI hundred in the semi-final against New Zealand.",
    photo: img.worldCup2023,
  },
  {
    year: "2024",
    title: "T20 World Cup triumph",
    text: "Kohli made 76 in the final against South Africa in Barbados, was named Player of the Match, and retired from T20 Internationals as a world champion.",
    photo: img.worldCup2024T20,
  },
  {
    year: "2025",
    title: "Champions Trophy triumph",
    text: "He was part of India's 2025 ICC Champions Trophy-winning squad in March, lifting the trophy in Dubai.",
    photo: img.championsTrophy2025,
  },
  {
    year: "12 May 2025",
    title: "Farewell to Tests",
    text: "In May 2025 he announced his retirement from Test cricket, closing a fourteen-year red-ball career with 9,230 runs and 30 hundreds across 123 matches.",
    photo: img.testFarewell,
  },
];

export type RecordItem = {
  value: string;
  title: string;
  text: string;
  year: string;
  source: string;
};

export const records: RecordItem[] = [
  {
    value: "54",
    title: "ODI centuries",
    text: "The most hundreds by any batter in one-day international cricket, passing Sachin Tendulkar's 49 in November 2023.",
    year: "2023–",
    source: "ESPNcricinfo records",
  },
  {
    value: "765",
    title: "Runs in a single World Cup",
    text: "His tally at the 2023 ODI World Cup is the highest by any player in one edition of the tournament.",
    year: "2023",
    source: "ICC / ESPNcricinfo",
  },
  {
    value: "85",
    title: "International centuries",
    text: "30 in Tests, 54 in ODIs and one in T20Is — second only to Sachin Tendulkar's 100 in all international cricket.",
    year: "as at August 2026",
    source: "Wikipedia centuries list",
  },
  {
    value: "3×",
    title: "ICC Player of the Tournament",
    text: "Named Player of the Tournament at the 2014 World T20, the 2016 World T20 and the 2023 ODI World Cup.",
    year: "2014, 2016, 2023",
    source: "ICC",
  },
  {
    value: "40",
    title: "Test wins as captain",
    text: "India's most successful Test captain by wins, leading the side in 68 Tests between 2014 and 2022.",
    year: "2014–2022",
    source: "ESPNcricinfo captaincy records",
  },
  {
    value: "1,322",
    title: "Test runs in a calendar year",
    text: "His 2018 return remains one of the outstanding calendar years by an Indian batter in Test cricket.",
    year: "2018",
    source: "ESPNcricinfo",
  },
  {
    value: "2",
    title: "World titles as a player",
    text: "The 2011 ODI World Cup and the 2024 T20 World Cup, plus the 2025 ICC Champions Trophy.",
    year: "2011, 2024, 2025",
    source: "ICC",
  },
  {
    value: "7",
    title: "Test double centuries",
    text: "Seven scores of 200 or more, including a best of 254 not out against South Africa in Pune.",
    year: "2016–2019",
    source: "ESPNcricinfo",
  },
  {
    value: "4",
    title: "Sir Garfield Sobers Trophy & major honours",
    text: "ICC Cricketer of the Decade (2011–2020), the 2018 Sir Garfield Sobers Trophy, the Khel Ratna (2018) and the Padma Shri (2017).",
    year: "2017–2020",
    source: "ICC / Government of India",
  },
];

export type GreatnessCard = {
  icon: string;
  title: string;
  text: string;
};

export const greatness: GreatnessCard[] = [
  {
    icon: "🔥",
    title: "The Chase Master",
    text: "Kohli built his reputation batting second: a large share of his ODI hundreds have come in successful run chases, and his average when batting second is among the highest in the format's history. The 52-ball hundred at Jaipur in 2013 and the chase against Pakistan at the MCG in 2022 are the reference points.",
  },
  {
    icon: "👑",
    title: "King of ODI batting",
    text: "54 ODI hundreds — more than anyone else — at an average near 59 across more than 310 matches. He held the No. 1 ICC ODI batting ranking for long stretches between 2013 and 2020.",
  },
  {
    icon: "💪",
    title: "Fitness revolution",
    text: "After 2012 Kohli overhauled his diet and training, and as captain pushed fitness benchmarks such as the yo-yo test into India's selection process. Team-mates and coaches have repeatedly credited him with shifting the dressing-room standard.",
  },
  {
    icon: "🧠",
    title: "Mentality",
    text: "Visible intensity, relentless running between the wickets and a refusal to settle. He has also spoken publicly about mental health and the 2014 England tour slump, and about the work it took to rebuild his game afterwards.",
  },
  {
    icon: "🇮🇳",
    title: "Leadership",
    text: "India's most successful Test captain by wins, with 40 victories in 68 Tests. Under him India held the No. 1 Test ranking for a sustained period and won a Test series in Australia in 2018-19.",
  },
  {
    icon: "🏆",
    title: "Big-match player",
    text: "Player of the Tournament at two World T20s and the 2023 ODI World Cup, Player of the Match in the 2024 T20 World Cup final, and a central figure in the 2025 Champions Trophy campaign.",
  },
];

export type MiniEvent = { year: string; text: string };

export const mahiratTimeline: MiniEvent[] = [
  { year: "2008", text: "Kohli makes his ODI debut in a side captained by MS Dhoni." },
  { year: "2011", text: "Both are part of the World Cup-winning squad; Kohli makes 35 in the final at the Wankhede." },
  { year: "2012–2016", text: "Kohli serves as vice-captain under Dhoni across formats." },
  { year: "2014–2015", text: "Dhoni retires from Tests mid-series in Australia; Kohli takes over as Test captain." },
  { year: "2017", text: "Dhoni hands over the limited-overs captaincy; Kohli leads, Dhoni plays on as senior keeper-batter." },
  { year: "2019", text: "Their last World Cup together, in England; Dhoni plays his final international match in the semi-final." },
];

export const virushkaTimeline: MiniEvent[] = [
  { year: "2013", text: "The two meet on the shoot of a television commercial." },
  { year: "2016–2017", text: "They appear together at public events and award ceremonies." },
  { year: "Dec 2017", text: "They marry in Tuscany, Italy, followed by receptions in Delhi and Mumbai." },
  { year: "2020", text: "Announce the birth of their daughter, Vamika." },
  { year: "2024", text: "Announce the birth of their son, Akaay." },
];

export const rohiratTimeline: MiniEvent[] = [
  { year: "2008", text: "Both are in the India setup within a year of each other, and grow up in the same generation of Indian batting." },
  { year: "2011–2019", text: "They build one of India's most productive top-order pairings across ODIs." },
  { year: "2014–2022", text: "Kohli captains; Rohit leads in his absence and takes over across formats from 2021-22." },
  { year: "2023", text: "Rohit leads India to the ODI World Cup final at home; Kohli is Player of the Tournament." },
  { year: "2024", text: "Both win the T20 World Cup in Barbados and retire from T20 Internationals on the same night." },
  { year: "2025", text: "Both are part of the Champions Trophy-winning squad in Dubai; both retire from Test cricket in May." },
];

export type CompareRow = {
  metric: string;
  kohli: string;
  rohit: string;
};

export const comparison: CompareRow[] = [
  { metric: "ODI matches", kohli: "314", rohit: "273" },
  { metric: "ODI runs", kohli: "14,941", rohit: "11,168" },
  { metric: "ODI average", kohli: "58.59", rohit: "48.76" },
  { metric: "ODI hundreds", kohli: "54", rohit: "32" },
  { metric: "ODI highest score", kohli: "183", rohit: "264" },
  { metric: "Test matches", kohli: "123", rohit: "67" },
  { metric: "Test runs", kohli: "9,230", rohit: "4,301" },
  { metric: "Test hundreds", kohli: "30", rohit: "12" },
  { metric: "T20I runs", kohli: "4,188", rohit: "4,231" },
  { metric: "T20I hundreds", kohli: "1", rohit: "5" },
];

export const iplTimeline: MiniEvent[] = [
  { year: "2008", text: "Picked by Royal Challengers Bangalore in the inaugural under-19 draft — the only player to stay with one franchise for his entire IPL career." },
  { year: "2011", text: "RCB reach the final at Chennai; Kohli finishes as the team's leading run-scorer of the season." },
  { year: "2013", text: "Takes over the RCB captaincy, a role he holds through the 2021 season." },
  { year: "2016", text: "The greatest season by any batter in IPL history: 973 runs at 81.08 with four hundreds, the Orange Cap, and a run to the final." },
  { year: "2023", text: "Becomes the first batter to pass 7,000 IPL runs." },
  { year: "2024", text: "Wins the Orange Cap again with 741 runs at a strike rate above 154." },
  { year: "2025", text: "Royal Challengers Bengaluru win their maiden IPL title — Kohli's first trophy in eighteen seasons with the club." },
];

export const iplHighlights = [
  { value: "18", label: "Seasons", note: "One franchise, start to finish" },
  { value: "973", label: "Runs in 2016", note: "The highest tally in a single IPL season" },
  { value: "8,000+", label: "Career IPL runs", note: "First batter to reach the mark" },
  { value: "2025", label: "Maiden title", note: "RCB champions at last" },
];
