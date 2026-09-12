import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/media";
import { iplTimeline, iplHighlights } from "@/data/content";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import {
  iplTrophy as trophyAsset,
  iplCelebration as celebrationAsset,
  iplCentury as centuryAsset,
  iplTeamTrophy as teamTrophyAsset,
  iplKohliAbd as kohliAbdAsset,
} from "@/assets/local-images";
const trophyImg = trophyAsset;
const celebrationImg = celebrationAsset;

const fanPhoto = (url: string, title: string, width: number, height: number) => ({
  id: title,
  url,
  width,
  height,
  title,
  credit: "Fan archive",
  license: "",
  source: "",
});

export const Route = createFileRoute("/ipl")({
  head: () => ({
    meta: [
      { title: "IPL Journey — Virat Kohli & RCB" },
      {
        name: "description",
        content:
          "Virat Kohli's IPL journey with Royal Challengers Bangalore: 2008 debut, the record 973-run season of 2016, the captaincy years and the 2025 title.",
      },
      { property: "og:title", content: "IPL Journey — Virat Kohli & RCB" },
      {
        property: "og:description",
        content: "One franchise, eighteen seasons, and a trophy that finally came home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/ipl" },
    ],
    links: [{ rel: "canonical", href: "/ipl" }],
  }),
  component: IplPage,
});

function IplPage() {
  return (
    <>
      <PageHero
        eyebrow="IPL Journey 🏆"
        title="IPL Journey"
        subtitle="One franchise. Eighteen seasons. The longest loyalty story in the league — and the trophy that finally arrived."
        photo={img.kohliIpl2015}
        objectPosition="center 25%"
      />

      <Section>
        <SectionHeading
          eyebrow="Royal Challengers"
          title="One badge, start to finish"
          lead="From the inaugural 2008 auction to a title-winning night, Kohli never played for another IPL side."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {iplHighlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 80}>
              <div className="glass h-full rounded-sm border-t-2 border-gold/70 p-6">
                <p className="font-display text-4xl text-gold sm:text-5xl">{h.value}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em]">{h.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-background">
        <SectionHeading
          eyebrow="The trophy"
          title="Champions at last"
          lead="Royal Challengers Bengaluru lifted their first IPL title in 2025, in Kohli's eighteenth season with the club."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="card-lift relative overflow-hidden rounded-sm border border-border bg-surface">
            <img
              src={celebrationImg}
              alt="Virat Kohli lifting the IPL championship trophy above his head in his RCB jersey"
              width={1600}
              height={1008}
              loading="lazy"
              decoding="async"
              className="h-full max-h-[520px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16">
              <p className="text-sm font-medium">The night the wait ended — Kohli lifts the 2025 IPL trophy</p>
            </div>
          </Reveal>
          <Reveal delay={120} className="card-lift relative overflow-hidden rounded-sm border border-border bg-surface">
            <img
              src={trophyImg}
              alt="Virat Kohli kissing the IPL championship trophy in his RCB jersey"
              width={1600}
              height={1008}
              loading="lazy"
              decoding="async"
              className="h-full max-h-[520px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16">
              <p className="text-sm font-medium">The trophy in his hands at last</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="Season by season" />
        <ol className="mt-12 space-y-4">
          {iplTimeline.map((e, i) => (
            <Reveal as="li" key={e.year} delay={i * 60}>
              <div className="glass grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 rounded-sm p-5 sm:gap-8 sm:p-6">
                <span className="shrink-0 font-display text-2xl text-gold sm:text-3xl">{e.year}</span>
                <p className="min-w-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {e.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          <Reveal>
            <PhotoFrame
              photo={fanPhoto(centuryAsset, "Kohli century celebration", 736, 1308)}
              className="aspect-[3/4]"
              imgClassName="object-top"
              caption="Bat raised, helmet off — another IPL hundred for RCB"
              showCredit={false}
            />
          </Reveal>
          <Reveal delay={90}>
            <PhotoFrame
              photo={fanPhoto(teamTrophyAsset, "RCB team with the IPL trophy", 678, 452)}
              className="aspect-[3/4]"
              caption="One team, one dream — RCB celebrate the 2025 title"
              showCredit={false}
            />
          </Reveal>
          <Reveal delay={180}>
            <PhotoFrame
              photo={fanPhoto(kohliAbdAsset, "Kohli and AB de Villiers", 397, 500)}
              className="aspect-[3/4]"
              caption="Brothers in red — Kohli and AB de Villiers"
              showCredit={false}
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
