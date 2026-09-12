import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/media";
import { greatness } from "@/data/content";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export const Route = createFileRoute("/greatness")({
  head: () => ({
    meta: [
      { title: "Why Virat Kohli Is Different — Greatness" },
      {
        name: "description",
        content:
          "Six factual threads behind Virat Kohli's career: chasing, ODI batting, fitness, mentality, leadership and big-match performances.",
      },
      { property: "og:title", content: "Why Virat Kohli Is Different" },
      {
        property: "og:description",
        content: "The chase master, the fitness revolution, the captaincy — explained.",
      },
      { property: "og:url", content: "/greatness" },
    ],
    links: [{ rel: "canonical", href: "/greatness" }],
  }),
  component: Greatness,
});

function Greatness() {
  return (
    <>
      <PageHero
        eyebrow="Greatness"
        title="Why he is different"
        subtitle="Six qualities, each grounded in documented performances rather than mythology."
        photo={img.kohliShotWc2015}
      />

      <Section>
        <SectionHeading eyebrow="The six" title="What sets him apart" />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {greatness.map((c, i) => (
            <Reveal as="article" key={c.title} delay={i * 70}>
              <div className="glass card-lift h-full rounded-sm p-8 sm:p-10">
                <span className="text-4xl" aria-hidden="true">
                  {c.icon}
                </span>
                <h2 className="mt-6 text-3xl uppercase sm:text-4xl">{c.title}</h2>
                <div className="gold-rule mt-4 h-px w-16" aria-hidden="true" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-background">
        <SectionHeading
          eyebrow="In the field"
          title="Intensity, photographed"
          lead="Kohli in whites, in blue, batting, fielding and leading."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <PhotoFrame photo={img.kohliBattingTest} className="aspect-[3/4]" caption="Test cricket" />
          </Reveal>
          <Reveal delay={80}>
            <PhotoFrame photo={img.kohliBattingOdi} className="aspect-[3/4]" caption="ODI cricket" />
          </Reveal>
          <Reveal delay={160}>
            <PhotoFrame
              photo={img.kohliFieldingTrentBridge}
              className="aspect-[3/4]"
              caption="Fielding, Trent Bridge 2018"
            />
          </Reveal>
          <Reveal delay={240}>
            <PhotoFrame photo={img.kohliCaptain} className="aspect-[3/4]" caption="Captaincy" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
