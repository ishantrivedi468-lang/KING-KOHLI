import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/media";
import { timeline } from "@/data/content";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "The Journey — Virat Kohli's Career Timeline" },
      {
        name: "description",
        content:
          "Virat Kohli's career milestones from the 2008 Under-19 World Cup to the 2024 T20 World Cup and his 2025 Test retirement.",
      },
      { property: "og:title", content: "The Journey — Virat Kohli's Career Timeline" },
      {
        property: "og:description",
        content: "Every major milestone, year by year, with photographs and context.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/career" },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: Career,
});

function Career() {
  return (
    <>
      <PageHero
        eyebrow="The Journey"
        title="The Journey"
        subtitle="Seventeen years of Indian cricket, told through the moments that changed its direction."
        photo={img.kohliBatting2013}
      />
      <Section>
        <SectionHeading
          eyebrow="2008 — 2025"
          title="Milestones"
          lead="Each entry is drawn from publicly documented matches, tournaments and announcements."
        />

        <ol className="relative mt-16 space-y-16 border-l border-border pl-6 sm:pl-10">
          {timeline.map((e, i) => (
            <Reveal as="li" key={`${e.year}-${e.title}`} delay={40}>
              <span
                aria-hidden="true"
                className="absolute -left-[7px] mt-3 block h-3.5 w-3.5 rounded-full border border-gold bg-ink"
              />
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                }`}
              >
                <PhotoFrame
                  photo={e.photo}
                  className="aspect-[4/3]"
                  caption={e.title}
                />
                <div>
                  <p className="font-display text-5xl text-gold sm:text-6xl">{e.year}</p>
                  <h3 className="mt-3 text-2xl uppercase sm:text-3xl">{e.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {e.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
