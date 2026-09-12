import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { img } from "@/data/media";
import { records } from "@/data/content";
import { STATS_AS_OF } from "@/data/stats";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export const Route = createFileRoute("/records")({
  head: () => ({
    meta: [
      { title: "Records & Achievements — Virat Kohli" },
      {
        name: "description",
        content:
          "Virat Kohli's major records: 54 ODI hundreds, 765 runs at the 2023 World Cup, 40 Test wins as captain and more, each with a year and source.",
      },
      { property: "og:title", content: "Records & Achievements — Virat Kohli" },
      {
        property: "og:description",
        content: "Documented records and honours, with sources — no exaggeration.",
      },
      { property: "og:url", content: "/records" },
    ],
    links: [{ rel: "canonical", href: "/records" }],
  }),
  component: Records,
});

function Records() {
  return (
    <>
      <PageHero
        eyebrow="Records"
        title="Records & Honours"
        subtitle="Only records that are publicly documented, each shown with the year it applies to and where it comes from."
        photo={img.kohliKhelRatna}
        objectPosition="center 18%"
      />

      <Section>
        <SectionHeading eyebrow="The ledger" title="Milestone records" />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {records.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 70}>
              <article className="glass card-lift flex h-full flex-col rounded-sm p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <p className="min-w-0 font-display text-6xl text-gold">{r.value}</p>
                  <Trophy className="mt-2 h-5 w-5 shrink-0 text-gold/70" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl uppercase">{r.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                <p className="mt-6 border-t border-border pt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {r.year} · Source: {r.source}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
        <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {STATS_AS_OF}
        </p>
      </Section>

      <Section className="border-t border-border bg-background">
        <SectionHeading
          eyebrow="Honours"
          title="Recognition"
          lead="State honours and awards presented to Kohli, photographed at the ceremonies themselves."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal>
            <PhotoFrame
              photo={img.kohliArjuna}
              className="aspect-[4/5]"
              caption="Arjuna Award (2013)"
            />
          </Reveal>
          <Reveal delay={90}>
            <PhotoFrame
              photo={img.kohliPadmaShri}
              className="aspect-[4/5]"
              caption="Padma Shri, presented March 2017"
            />
          </Reveal>
          <Reveal delay={180}>
            <PhotoFrame
              photo={img.kohliKhelRatna}
              className="aspect-[4/5]"
              caption="Rajiv Gandhi Khel Ratna, September 2018"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
