import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/media";
import { mahiratTimeline } from "@/data/content";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import type { Photo } from "@/data/photos";
import {
  mahiratCollage1 as collage1Asset,
  mahiratCollage2 as collage2Asset,
  mahiratCollage3 as collage3Asset,
  mahiratCollage4 as collage4Asset,
  mahiratFrame1 as frame1Asset,
  mahiratFrame2 as frame2Asset,
} from "@/assets/local-images";

export const Route = createFileRoute("/mahirat")({
  head: () => ({
    meta: [
      { title: "Mahirat — MS Dhoni & Virat Kohli" },
      {
        name: "description",
        content:
          "Mahirat: the captain and vice-captain years of MS Dhoni and Virat Kohli, from the 2011 World Cup to the 2019 semi-final.",
      },
      { property: "og:title", content: "Mahirat — MS Dhoni & Virat Kohli" },
      {
        property: "og:description",
        content: "Two generations. One bond. One unforgettable partnership.",
      },
      { property: "og:url", content: "/mahirat" },
    ],
    links: [{ rel: "canonical", href: "/mahirat" }],
  }),
  component: Mahirat,
});

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

const collage = [
  {
    photo: assetPhoto(frame2Asset, "Kohli and Dhoni IPL night", 1024, 768),
    caption: "RCB meets CSK — Kohli and Dhoni share a laugh under the IPL floodlights",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    photo: assetPhoto(collage2Asset, "Mahirat collage 2", 422, 473),
    caption: "An IPL embrace — RCB red meets CSK yellow",
    span: "",
  },
  {
    photo: assetPhoto(collage3Asset, "Mahirat collage 3", 399, 501),
    caption: "Pure joy on the pitch — a moment of celebration together",
    span: "",
  },
  {
    photo: assetPhoto(collage4Asset, "Mahirat collage 4", 400, 400),
    caption: "Side by side during a break in play",
    span: "",
  },
];

function Mahirat() {
  return (
    <>
      <PageHero
        eyebrow="Mahirat ❤️"
        title="Mahirat"
        subtitle="Two generations. One bond. One unforgettable partnership."
        photo={img.worldCup2011Trophy}
        objectPosition="center 30%"
      />

      <Section>
        <SectionHeading
          eyebrow="Together"
          title="In the same frame"
          lead="Two of the defining pictures of the Dhoni–Kohli bond — captain and heir, side by side in India blue and then as rival IPL legends."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <PhotoFrame
              photo={assetPhoto(collage1Asset, "Dhoni and Kohli tricolour", 1039, 1920)}
              showCredit={false}
              className="h-full min-h-[320px]"
              caption="Wrapped in the tricolour — Dhoni and Kohli, two captains of India"
            />
          </Reveal>
          <Reveal delay={120}>
            <PhotoFrame
              photo={assetPhoto(frame1Asset, "Kohli hand on Dhoni shoulder", 335, 597)}
              showCredit={false}
              className="h-full min-h-[320px]"
              caption="A captain and his successor — Kohli's hand on Dhoni's shoulder, India blue"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-background">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Captain & vice-captain</p>
            <h2 className="mt-4 text-4xl uppercase sm:text-5xl">The handover</h2>
            <div className="gold-rule mt-5 h-px w-24" aria-hidden="true" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Kohli's first years in international cricket were played entirely under MS Dhoni. He
              debuted in 2008 in a Dhoni-led ODI side, won the 2011 World Cup in it, and served as
              vice-captain across formats before inheriting the Test captaincy in Australia in
              2014-15 and the limited-overs job in 2017.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The two then swapped roles: the former captain kept wicket behind the new one, still
              calling reviews, until Dhoni's final international appearance in the 2019 World Cup
              semi-final at Old Trafford.
            </p>
            <p className="mt-8 rounded-sm border-l-2 border-gold bg-surface/40 p-5 text-xs leading-relaxed text-muted-foreground">
              No quotations are reproduced on this page. Only remarks with a verifiable published
              source belong here, and none are included rather than risk inventing one.
            </p>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <PhotoFrame photo={img.dhoni2016} className="aspect-[3/4]" caption="MS Dhoni, 2016" />
            <PhotoFrame photo={img.kohli2015} className="aspect-[3/4]" caption="Virat Kohli, 2015" />
          </Reveal>
        </div>
      </Section>

      <Section>

        <SectionHeading eyebrow="Together" title="The collage" lead="India team moments across the Dhoni–Kohli years." />
        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {collage.map((c, i) => (
            <Reveal key={c.caption} delay={i * 70} className={c.span}>
              <PhotoFrame photo={c.photo} className="h-full w-full" caption={c.caption} showCredit={false} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="Their cricket relationship" />
        <ol className="mt-12 space-y-4">
          {mahiratTimeline.map((e, i) => (
            <Reveal as="li" key={e.year + e.text} delay={i * 60}>
              <div className="glass grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 rounded-sm p-5 sm:gap-8 sm:p-6">
                <span className="shrink-0 font-display text-2xl text-gold sm:text-3xl">{e.year}</span>
                <p className="min-w-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {e.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
