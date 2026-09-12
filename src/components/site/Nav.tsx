import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/career", label: "Career" },
  { to: "/stats", label: "Stats" },
  { to: "/trophies", label: "Trophies" },
  { to: "/records", label: "Records" },
  { to: "/greatness", label: "Greatness" },
  { to: "/mahirat", label: "Mahirat" },
  { to: "/virushka", label: "Virushka" },
  { to: "/rohirat", label: "RO-KO" },
  { to: "/ipl", label: "IPL" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4"
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-gold/60 font-display text-sm text-gold">
            18
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base uppercase tracking-wide sm:text-lg">
              Virat Kohli
            </span>
            <span className="block text-[9px] uppercase tracking-[0.4em] text-gold">The King</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-gold" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-sm px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="justify-self-end rounded-sm border border-border p-2 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="glass border-t border-border lg:hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-gold border-gold/50" }}
                  className="block rounded-sm border border-border/60 px-3 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
