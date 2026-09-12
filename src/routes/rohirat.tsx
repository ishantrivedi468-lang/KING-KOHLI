import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/media";
import { rohiratTimeline, comparison } from "@/data/content";
import { STATS_AS_OF } from "@/data/stats";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import {
  rokoHug as rokoHugAsset,
  rokoTrophy as rokoTrophyAsset,
  rokoStumps as rokoStumpsAsset,
} from "@/assets/local-images";

const rokoHug = {
  id: "roko-hug",
  url: rokoHugAsset,
  width: 602,
  height: 820,
  title: "Kohli and Rohit embrace",
  credit: "",
  license: "",
  source: "",
};

const rokoTrophy = {
  id: "roko-trophy",
  url: rokoTrophyAsset,
  width: 189,
  height: 267,
  title: "Kohli and Rohit lift the trophy",
  credit: "",
  license: "",
  source: "",
};

const rokoStumps = {
  id: "roko-stumps",
  url: rokoStumpsAsset,
  width: 503,
  height: 397,
  title: "Kohli and Rohit celebrate with stumps",
  credit: "",
  license: "",
  source: "",
};

export const Route = createFileRoute("/rohirat")({
  head: () => ({
    meta: [
      { title: "RO-KO — Virat Kohli & Rohit Sharma" },
      {
        name: "description",
        content:
          "RO-KO: the Kohli–Rohit era for India, with photographs of the pair together and a side-by-side statistical comparison across Tests, ODIs and T20Is.",
      },
      { property: "og:title", content: "RO-KO — Kohli & Rohit" },
      {
        property: "og:description",
        content: "Two batting greats, one era — compared honestly, format by format.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/rohirat" },
    ],
    links: [{ rel: "canonical", href: "/rohirat" }],
  }),
  component: Rohirat,
});

function Rohirat() {
  return (
    <>
      <PageHero
        eyebrow="RO-KO 🤝"
        title="RO-KO"
        subtitle="Two batting greats of the same generation — the partnership that carried India's top order."
        photo={img.kohliRohitPm}
        objectPosition="center 25%"
      />

      <Section>
        <SectionHeading
          eyebrow="Together"
          title="Side by side, in frame"
          lead="Freely licensed photographs that show the two of them in the same picture."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <PhotoFrame
              photo={img.kohliRohitPm}
              className="h-full min-h-[320px]"
              caption="Kohli and Rohit together at the Narendra Modi Stadium, March 2023"
            />
          </Reveal>
          <Reveal delay={120}>
            <PhotoFrame
              photo={img.indiaSquadPmo}
              className="h-full min-h-[320px]"
              caption="Both in the same India squad line-up at an official reception"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-background">
        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal>
            <PhotoFrame photo={img.kohliTest2023} className="aspect-[4/5]" caption="Virat Kohli, Ahmedabad Test, 2023" />
            <h2 className="mt-6 text-3xl uppercase">Virat Kohli</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The relentless chaser: highest ODI century-maker, Player of the Tournament at the 2023
              World Cup, and India's most successful Test captain by wins.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <PhotoFrame photo={img.rohitTest2023} className="aspect-[4/5]" caption="Rohit Sharma, Ahmedabad Test, 2023" />
            <h2 className="mt-6 text-3xl uppercase">Rohit Sharma</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The only batter with three ODI double-hundreds, including the record 264, and the
              captain who led India to the 2024 T20 World Cup and 2025 Champions Trophy.
            </p>
          </Reveal>
        </div>
      </Section>


      <Section className="border-y border-border bg-background">
        <SectionHeading
          eyebrow="Side by side"
          title="The comparison"
          lead="Career figures placed next to each other. Neither column is adjusted or rounded in anyone's favour."
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <caption className="sr-only">Career comparison of Virat Kohli and Rohit Sharma</caption>
            <thead>
              <tr className="border-b border-border text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <th scope="col" className="py-4 text-left font-semibold">Metric</th>
                <th scope="col" className="py-4 text-right font-semibold text-gold">Kohli</th>
                <th scope="col" className="py-4 text-right font-semibold">Rohit</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((r) => (
                <tr key={r.metric} className="border-b border-border/60">
                  <th scope="row" className="py-4 text-left font-normal text-muted-foreground">
                    {r.metric}
                  </th>
                  <td className="py-4 text-right font-display text-2xl text-gold">{r.kohli}</td>
                  <td className="py-4 text-right font-display text-2xl">{r.rohit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {STATS_AS_OF}
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="One era, two careers" />
        <ol className="mt-12 space-y-4">
          {rohiratTimeline.map((e, i) => (
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
              photo={rokoHug}
              className="aspect-[3/4]"
              caption="Brothers in blue — Kohli and Rohit share an embrace in victory"
              showCredit={false}
            />
          </Reveal>
          <Reveal delay={90}>
            <PhotoFrame
              photo={rokoTrophy}
              className="aspect-[3/4]"
              caption="Lifting the trophy together — a shared legacy for Indian cricket"
              showCredit={false}
            />
          </Reveal>
          <Reveal delay={180}>
            <PhotoFrame
              photo={rokoStumps}
              className="aspect-[3/4]"
              caption="Stumps as souvenirs — celebrating the 2013 Champions Trophy win"
              showCredit={false}
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
