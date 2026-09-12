import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/media";
import { formatStats, STATS_AS_OF, STATS_NOTE, type Format } from "@/data/stats";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Stats Dashboard — Virat Kohli in Tests, ODIs and T20Is" },
      {
        name: "description",
        content:
          "Virat Kohli's format-by-format batting record: matches, innings, runs, average, highest score, hundreds, fifties and strike rate.",
      },
      { property: "og:title", content: "Virat Kohli — Stats Dashboard" },
      {
        property: "og:description",
        content: "Test, ODI and T20I batting numbers with clear sourcing and dates.",
      },
      { property: "og:url", content: "/stats" },
    ],
    links: [{ rel: "canonical", href: "/stats" }],
  }),
  component: StatsPage,
});

function StatsPage() {
  const [active, setActive] = useState<Format>("ODI");
  const current = formatStats.find((f) => f.format === active)!;

  const rows = [
    { label: "Matches", value: current.matches },
    { label: "Innings", value: current.innings },
    { label: "Runs", value: current.runs },
    { label: "Average", value: current.average, decimals: 2 },
    { label: "Centuries", value: current.hundreds },
    { label: "Half-centuries", value: current.fifties },
    { label: "Strike rate", value: current.strikeRate, decimals: 2 },
  ];

  const maxRuns = Math.max(...formatStats.map((f) => f.runs));
  const maxHundreds = Math.max(...formatStats.map((f) => f.hundreds));

  return (
    <>
      <PageHero
        eyebrow="Stats"
        title="The Dashboard"
        subtitle="Format-by-format batting numbers. Every figure is taken from published career-statistics tables, not estimated."
        photo={img.kohliBattingTest}
      />

      <Section>
        <SectionHeading eyebrow="Select a format" title="Test · ODI · T20I" lead={STATS_NOTE} />

        <div
          role="tablist"
          aria-label="Cricket format"
          className="mt-12 inline-flex rounded-sm border border-border p-1"
        >
          {formatStats.map((f) => (
            <button
              key={f.format}
              role="tab"
              aria-selected={active === f.format}
              onClick={() => setActive(f.format)}
              className={cn(
                "px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] transition-colors",
                active === f.format ? "bg-gold text-ink" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {f.format}
            </button>
          ))}
        </div>

        <div className="mt-10 glass rounded-sm p-6 sm:p-10">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-3xl uppercase sm:text-4xl">{current.label}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">{current.status}</p>
            </div>
            <p className="shrink-0 font-display text-5xl text-gold sm:text-6xl">
              {current.highest}
              <span className="ml-2 align-middle text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Highest
              </span>
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
            {rows.map((r) => (
              <div key={r.label} className="bg-background p-5">
                <dd className="font-display text-3xl sm:text-4xl">
                  <Counter value={r.value} decimals={r.decimals ?? 0} key={`${active}-${r.label}`} />
                </dd>
                <dt className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {r.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Chart
            title="Runs by format"
            note="Career totals"
            data={formatStats.map((f) => ({
              label: f.format,
              value: f.runs,
              pct: (f.runs / maxRuns) * 100,
              display: f.runs.toLocaleString("en-IN"),
            }))}
          />
          <Chart
            title="Centuries by format"
            note="Career totals"
            data={formatStats.map((f) => ({
              label: f.format,
              value: f.hundreds,
              pct: (f.hundreds / maxHundreds) * 100,
              display: String(f.hundreds),
            }))}
          />
        </div>

        <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {STATS_AS_OF}
        </p>
      </Section>
    </>
  );
}

function Chart({
  title,
  note,
  data,
}: {
  title: string;
  note: string;
  data: { label: string; value: number; pct: number; display: string }[];
}) {
  return (
    <Reveal className="rounded-sm border border-border bg-background p-6 sm:p-8">
      <h3 className="text-xl uppercase">{title}</h3>
      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{note}</p>
      <ul className="mt-8 space-y-6">
        {data.map((d) => (
          <li key={d.label}>
            <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em]">
              <span>{d.label}</span>
              <span className="text-gold">{d.display}</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-gold transition-[width] duration-1000"
                style={{ width: `${Math.max(4, d.pct)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
