import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3 } from "lucide-react";
import { img } from "@/data/media";
import { quickStats, STATS_AS_OF, STATS_NOTE } from "@/data/stats";
import { greatness, timeline } from "@/data/content";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import { Particles, Section, SectionHeading } from "@/components/site/Bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virat Kohli — The King | Career, Stats & Records" },
      {
        name: "description",
        content:
          "A cinematic tribute to Virat Kohli: 27,000+ international runs, 82 hundreds, the chases, the captaincy and the photography behind the legend.",
      },
      { property: "og:title", content: "Virat Kohli — The King" },
      {
        property: "og:description",
        content:
          "The King. The Chase Master. The Legend. Career timeline, verified statistics and records.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <QuickStats />
      <JourneyPreview />
      <GreatnessPreview />
      <Legacy />
      <Closing />
    </>
  );
}

function Hero() {
  const hero = img.kohliDriveWc2015;
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={hero.url}
        alt="Virat Kohli batting for India at the 2015 Cricket World Cup"
        width={hero.width}
        height={hero.height}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_28%] opacity-55"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      <div className="stadium-glow absolute inset-0 -z-10" aria-hidden="true" />
      <Particles />

      <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow">Fan tribute · India · No. 18</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="display-xl mt-5 text-[17vw] leading-[0.82] sm:text-[12vw] lg:text-[10rem]">
            Virat
            <br />
            <span className="text-gold">Kohli</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-sm uppercase tracking-[0.34em] text-muted-foreground sm:text-base">
            The King. The Chase Master. The Legend.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/career"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ink transition-colors hover:bg-gold-muted"
            >
              Explore his legacy
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/stats"
              className="inline-flex items-center gap-2 rounded-sm border border-foreground/25 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] transition-colors hover:border-gold hover:text-gold"
            >
              <BarChart3 className="h-4 w-4" />
              View stats
            </Link>
          </div>
        </Reveal>
        <p className="mt-14 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Photo: {hero.credit} · {hero.license} · Wikimedia Commons
        </p>
        <p className="mt-3 font-display text-lg uppercase tracking-[0.3em] text-gold">
          Made by ISHAN TRIVEDI
        </p>
      </div>
    </section>
  );
}

function QuickStats() {
  return (
    <Section className="border-y border-border bg-background">
      <SectionHeading
        eyebrow="By the numbers"
        title="A career in figures"
        lead={STATS_NOTE}
      />
      <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3 xl:grid-cols-5">
        {quickStats.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 60} className="bg-background p-6">
            <p className="font-display text-4xl text-gold sm:text-5xl">
              <Counter value={s.value} decimals={s.decimals ?? 0} />
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em]">{s.label}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.context}</p>
          </Reveal>
        ))}
      </ul>
      <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {STATS_AS_OF}
      </p>
    </Section>
  );
}

function JourneyPreview() {
  const picks = timeline.filter((_, i) => [2, 7, 8, 9].includes(i));
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="The Journey"
          title="Milestones"
          lead="From an Under-19 captain in Kuala Lumpur to a world champion in Barbados."
        />
        <Reveal>
          <Link
            to="/career"
            className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] font-bold uppercase tracking-[0.24em] text-gold"
          >
            Full timeline <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {picks.map((e, i) => (
          <Reveal key={e.title} delay={i * 90}>
            <PhotoFrame photo={e.photo} className="aspect-[3/4]" caption={e.title} />
            <p className="mt-4 font-display text-2xl text-gold">{e.year}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function GreatnessPreview() {
  return (
    <Section className="border-y border-border bg-background">
      <SectionHeading
        eyebrow="Why he is different"
        title="Six reasons"
        lead="Six threads that run through nearly two decades of international cricket."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {greatness.map((c, i) => (
          <Reveal as="article" key={c.title} delay={i * 80}>
            <div className="glass card-lift h-full rounded-sm p-7">
              <span className="text-3xl" aria-hidden="true">
                {c.icon}
              </span>
              <h3 className="mt-5 text-2xl uppercase">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Legacy() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-28 sm:px-6 lg:py-36">
      <img
        src={img.edenGardens.url}
        alt="Eden Gardens under lights"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">The Legacy</p>
          <h2 className="mt-5 text-5xl uppercase sm:text-7xl">More than numbers.</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kohli changed what an Indian cricketer was expected to look like and how hard they were
            expected to run. He made fitness a selection standard, made chasing a discipline rather
            than a gamble, and made the third-day session of a Test match feel like a contest worth
            shouting about.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A generation of young batters grew up copying the cover drive, the training regime and
            the intensity. Whatever the numbers finally say, the influence on modern batting, on
            Indian cricket's global reach, and on how the game is played in front of full houses is
            already written.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden border-t border-border">
      <img
        src={img.kohliCenturyTrentBridge.url}
        alt="Virat Kohli celebrating a century at Trent Bridge in 2018"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_25%] opacity-40"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
      <Particles count={12} />
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="display-xl text-[9vw] sm:text-6xl lg:text-7xl">
            The story is still being written.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-10 font-display text-[16vw] leading-none text-gold sm:text-[8rem]">
            Virat Kohli
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            18 · Virat Kohli · The King
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            One of cricket's greatest modern icons.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
