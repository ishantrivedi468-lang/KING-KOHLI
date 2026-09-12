import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/media";
import { virushkaTimeline } from "@/data/content";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import type { Photo } from "@/data/photos";
import {
  virushkaEvent as eventAsset,
  virushkaOutdoor as outdoorAsset,
  virushkaWedding as weddingAsset,
  virushkaStadium as stadiumAsset,
} from "@/assets/local-images";

const assetPhoto = (url: string, title: string, width: number, height: number): Photo => ({
  id: title,
  url,
  width,
  height,
  title,
  credit: "",
  license: "",
  source: "",
});

export const Route = createFileRoute("/virushka")({
  head: () => ({
    meta: [
      { title: "Virushka — Virat Kohli & Anushka Sharma" },
      {
        name: "description",
        content:
          "Virushka: public appearances and publicly known milestones of Virat Kohli and Anushka Sharma, told respectfully with licensed photography.",
      },
      { property: "og:title", content: "Virushka — Virat & Anushka" },
      {
        property: "og:description",
        content: "Public moments, public events, and a short relationship timeline.",
      },
      { property: "og:url", content: "/virushka" },
    ],
    links: [{ rel: "canonical", href: "/virushka" }],
  }),
  component: Virushka,
});

function Virushka() {
  return (
    <>
      <PageHero
        eyebrow="Virushka ❤️"
        title="Virushka"
        subtitle="Virat & Anushka — public appearances and publicly announced milestones only."
        photo={img.virushkaReception}
        objectPosition="center 20%"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal className="grid grid-cols-2 gap-4">
            <PhotoFrame
              photo={img.virushkaVogue}
              className="aspect-[3/4]"
              caption="At the Vogue Beauty Awards"
            />
            <PhotoFrame
              photo={img.virushkaReception}
              className="mt-8 aspect-[3/4]"
              caption="Mumbai wedding reception, December 2017"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Two public careers</p>
            <h2 className="mt-4 text-4xl uppercase sm:text-5xl">Side by side</h2>
            <div className="gold-rule mt-5 h-px w-24" aria-hidden="true" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Virat Kohli and Anushka Sharma married in Tuscany in December 2017. Since then they
              have appeared together at award ceremonies, brand events and official functions, and
              have supported each other's work publicly — she at grounds during major tournaments,
              he at premieres and campaigns.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Both have also asked, repeatedly and publicly, for their children's privacy to be
              respected. This page therefore uses only photographs taken at public events and
              published under open licences.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-background">
        <SectionHeading eyebrow="Gallery" title="Public appearances" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { p: assetPhoto(eventAsset, "Virushka at a match", 236, 419), c: "Caught laughing together under the stadium lights" },
            { p: assetPhoto(outdoorAsset, "Virushka outdoors", 813, 701), c: "A quiet moment together, away from the spotlight" },
            { p: assetPhoto(weddingAsset, "Virushka wedding", 495, 620), c: "On their wedding day, Tuscany, December 2017" },
            { p: assetPhoto(stadiumAsset, "Virushka at the ground", 542, 566), c: "Together at the ground, soaking in the atmosphere" },
          ].map((x, i) => (
            <Reveal key={x.c} delay={i * 80}>
              <PhotoFrame photo={x.p} className="aspect-[3/4]" caption={x.c} showCredit={false} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="Publicly known moments" />
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {virushkaTimeline.map((e, i) => (
            <Reveal as="li" key={e.year + e.text} delay={i * 70}>
              <div className="glass card-lift h-full rounded-sm p-6">
                <p className="font-display text-2xl text-gold">{e.year}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
