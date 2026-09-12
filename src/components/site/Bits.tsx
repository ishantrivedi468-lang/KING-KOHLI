import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import type { Photo } from "@/data/photos";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-4xl uppercase sm:text-5xl lg:text-6xl">{title}</h2>
      <div
        className={cn("gold-rule mt-5 h-px w-24", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      {lead ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-20 sm:px-6 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

/** Full-bleed page banner used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  photo,
  objectPosition = "center 22%",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  photo: Photo;
  objectPosition?: string;
}) {
  return (
    <header className="relative isolate flex min-h-[62vh] items-end overflow-hidden border-b border-border pt-24">
      <img
        src={photo.url}
        alt={photo.title}
        width={photo.width}
        height={photo.height}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        style={{ objectPosition }}
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-xl mt-4 text-[13vw] leading-[0.85] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Photo: {photo.credit} · {photo.license}
        </p>
      </div>
    </header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "glass fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full text-gold transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

/** Subtle floating light motes — decorative only. */
export function Particles({ count = 18 }: { count?: number }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-gold/60"
          style={{
            left: `${(i * 37) % 100}%`,
            bottom: `${(i * 17) % 60}%`,
            animation: `drift ${9 + (i % 7)}s linear ${i * 0.7}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
