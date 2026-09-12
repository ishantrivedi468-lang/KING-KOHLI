import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal, Star } from "lucide-react";
import { img } from "@/data/media";
import type { Photo } from "@/data/photos";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export const Route = createFileRoute("/trophies")({
  head: () => ({
    meta: [
      { title: "The Trophy Cabinet — Virat Kohli" },
      {
        name: "description",
        content:
          "Every major trophy Virat Kohli has won: 2008 U-19 World Cup, 2011 World Cup, 2013 & 2025 Champions Trophy, 2024 T20 World Cup, ICC Test maces and the 2025 IPL title — plus his Player of the Tournament and final-match awards.",
      },
      { property: "og:title", content: "The Trophy Cabinet — Virat Kohli" },
      {
        property: "og:description",
        content:
          "World Cups, Champions Trophies, Test maces, the IPL title — and the individual awards collected along the way.",
      },
      { property: "og:url", content: "/trophies" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/trophies" }],
  }),
  component: Trophies,
});

type TeamTrophy = {
  year: string;
  title: string;
  text: string;
  photo: Photo;
  objectPosition?: string;
  aspect?: string;
  showCredit?: boolean;
};

const teamTrophies: TeamTrophy[] = [
  {
    year: "2008",
    title: "ICC Under-19 World Cup",
    text: "Kohli captained India to the U-19 title in Malaysia — his first taste of lifting a World Cup.",
    photo: img.kohliU19Trophy2008,
    objectPosition: "center 20%",
    showCredit: false,
  },
  {
    year: "2011",
    title: "ICC Cricket World Cup",
    text: "A century on World Cup debut against Bangladesh and a crucial 35 in the final at the Wankhede — champions at home.",
    photo: img.worldCup2011Trophy,
    objectPosition: "center 30%",
    showCredit: false,
  },
  {
    year: "2013",
    title: "ICC Champions Trophy",
    text: "India beat England in a rain-hit final at Edgbaston — Kohli top-scored with 43 in the decider.",
    photo: img.rokoStumps,
    objectPosition: "center 30%",
    showCredit: false,
  },
  {
    year: "2017–2019",
    title: "ICC Test Championship Mace",
    text: "Under Kohli's captaincy India held the ICC Test mace three years running, finishing No. 1 in 2017, 2018 and 2019.",
    photo: img.kohliTest2023,
    objectPosition: "center 20%",
  },
  {
    year: "2024",
    title: "ICC Men's T20 World Cup",
    text: "Player of the Match in the final against South Africa in Barbados — Kohli kisses the trophy he had chased his whole career.",
    photo: img.worldCup2024T20,
    showCredit: false,
  },
  {
    year: "2025",
    title: "ICC Champions Trophy",
    text: "A second Champions Trophy, twelve years on — India lift it in Dubai, and Kohli seals it with a hundred against Pakistan on the way.",
    photo: img.championsTrophy2025,
    showCredit: false,
  },
  {
    year: "2025",
    title: "IPL Title — Royal Challengers Bengaluru",
    text: "Eighteen seasons of waiting ended at Ahmedabad: RCB beat Punjab Kings in the final, and Kohli finally lifted the IPL trophy.",
    photo: img.iplCelebrationPhoto,
    objectPosition: "center 25%",
    showCredit: false,
  },
];

type Honour = {
  icon: typeof Star;
  value: string;
  title: string;
  text: string;
  year: string;
};

const honours: Honour[] = [
  {
    icon: Star,
    value: "2×",
    title: "Player of the Tournament — T20 World Cup",
    text: "2014 (319 runs, average 106.33) and 2016 (273 runs, average 136.50) — the only man to win it twice.",
    year: "2014 · 2016",
  },
  {
    icon: Star,
    value: "765",
    title: "Player of the Tournament — 2023 ODI World Cup",
    text: "A record 765 runs in a single World Cup edition, with three hundreds.",
    year: "2023",
  },
  {
    icon: Medal,
    value: "POTM",
    title: "Player of the Match — 2024 T20 WC Final",
    text: "76 off 59 against South Africa in Barbados, anchoring the title win.",
    year: "2024",
  },
  {
    icon: Medal,
    value: "POTM",
    title: "Player of the Match — 2011 WC semi & more",
    text: "Big-match awards across ICC knockouts, including the 2016 WT20 semi-final (89* v West Indies).",
    year: "2011–2025",
  },
];

function Trophies() {
  return (
    <>
      <PageHero
        eyebrow="The Cabinet"
        title="Every Trophy He Has Lifted"
        subtitle="From the U-19 World Cup in 2008 to the IPL title in 2025 — the silverware of a generation, plus the Test maces and big-match awards."
        photo={img.worldCup2024T20}
        objectPosition="center 25%"
      />

      <Section>
        <SectionHeading
          eyebrow="Team silverware"
          title="The trophy case"
          lead="Seven major team trophies across seventeen years — every one photographed in his hands."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamTrophies.map((t, i) => (
            <Reveal as="li" key={`${t.year}-${t.title}`} delay={i * 70}>
              <article className="card-lift flex h-full flex-col">
                <PhotoFrame
                  photo={t.photo}
                  caption={t.title}
                  className={t.aspect ?? "aspect-[4/5]"}
                  imgClassName={`[object-position:${t.objectPosition ?? "center 30%"}]`}
                  showCredit={t.showCredit ?? true}
                />
                <div className="glass mt-4 flex-1 rounded-sm p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{t.year}</p>
                  <h3 className="mt-2 text-lg uppercase">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border bg-background">
        <SectionHeading
          eyebrow="Individual awards"
          title="Player of the Tournament & Finals"
          lead="The personal honours collected on the biggest stages — tournament MVPs and final-day match awards."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {honours.map((h, i) => (
            <Reveal as="li" key={h.title} delay={i * 70}>
              <article className="glass card-lift flex h-full flex-col rounded-sm p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <p className="min-w-0 font-display text-5xl text-gold">{h.value}</p>
                  <h.icon className="mt-2 h-5 w-5 shrink-0 text-gold/70" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg uppercase">{h.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                <p className="mt-6 border-t border-border pt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {h.year}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
        <div className="mt-12 flex items-center justify-center gap-3 text-muted-foreground">
          <Trophy className="h-4 w-4 text-gold/70" aria-hidden="true" />
          <p className="text-[11px] uppercase tracking-[0.25em]">
            7 team trophies · 3× ICC Player of the Tournament · Countless match awards
          </p>
        </div>
      </Section>
    </>
  );
}
