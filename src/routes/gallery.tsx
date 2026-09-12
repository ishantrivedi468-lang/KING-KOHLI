import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { gallery, img, type GalleryCategory } from "@/data/media";
import { PageHero, Section } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import { Lightbox } from "@/components/site/Lightbox";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Virat Kohli in Photographs" },
      {
        name: "description",
        content:
          "A filterable gallery of photographs of Virat Kohli, the India team, Mahirat, Virushka, RO-KO, IPL trophies and stadiums — licensed public photos plus fan photographs.",
      },
      { property: "og:title", content: "Virat Kohli — Gallery" },
      {
        property: "og:description",
        content: "Licensed photographs from public sources, each credited to its author.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const FILTERS: ("ALL" | GalleryCategory)[] = [
  "ALL",
  "VIRAT",
  "MAHIRAT",
  "VIRUSHKA",
  "ROHIRAT",
  "INDIA",
  "TROPHIES",
  "STADIUM",
];

const FILTER_LABELS: Record<string, string> = { ROHIRAT: "RO-KO" };


function GalleryPage() {
  const [filter, setFilter] = useState<"ALL" | GalleryCategory>("ALL");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "ALL" ? gallery : gallery.filter((g) => g.categories.includes(filter))),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The Archive"
        subtitle={`${gallery.length} photographs — freely licensed public images, each credited to its photographer, plus the fan archive used across the site.`}
        photo={img.wankhedePanorama}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setIndex(null);
              }}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-5 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-colors",
                filter === f
                  ? "border-gold bg-gold text-ink"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground",
              )}
            >
              {FILTER_LABELS[f] ?? f}

            </button>
          ))}
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Showing {items.length} {items.length === 1 ? "photograph" : "photographs"}
        </p>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {items.map((item, i) => (
            <Reveal key={item.photo.url + i} delay={(i % 8) * 50} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="block w-full text-left"
                aria-label={`Open photograph: ${item.caption}`}
              >
                <PhotoFrame photo={item.photo} caption={item.caption} showCredit={item.showCredit ?? true} />
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </>
  );
}
