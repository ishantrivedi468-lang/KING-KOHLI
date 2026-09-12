```tsx
import { Link } from "@tanstack/react-router";
import { STATS_AS_OF } from "@/data/stats";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* About */}
          <div>
            <p className="font-display text-3xl uppercase">
              Virat Kohli — The King
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              An independent, non-commercial fan tribute. Not affiliated with
              Virat Kohli, the BCCI, the ICC or any team. All photographs are
              used from Wikimedia Commons under their stated licences, with
              creator and licence credited alongside each image.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow">Explore</p>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/career" className="hover:text-gold">
                  The Journey
                </Link>
              </li>

              <li>
                <Link to="/stats" className="hover:text-gold">
                  Stats Dashboard
                </Link>
              </li>

              <li>
                <Link to="/records" className="hover:text-gold">
                  Records
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-gold">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Sources */}
          <div>
            <p className="eyebrow">Sources</p>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.espncricinfo.com/cricketers/virat-kohli-253802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  ESPNcricinfo profile
                </a>
              </li>

              <li>
                <a
                  href="https://en.wikipedia.org/wiki/List_of_international_cricket_centuries_by_Virat_Kohli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Centuries list (Wikipedia)
                </a>
              </li>

              <li>
                <a
                  href="https://commons.wikimedia.org/wiki/Category:Virat_Kohli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Photographs (Wikimedia Commons)
                </a>
              </li>
            </ul>
          </div>

        </div>
```tsx
{/* Bottom Bar */}
<div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">

  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
    {STATS_AS_OF}
  </p>

  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">

    <span>Made by ISHAN TRIVEDI</span>

    <span className="text-muted-foreground">•</span>

    <a
      href="https://www.linkedin.com/in/ishan-trivedi-431896396/"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer hover:text-white transition-colors"
    >
      LinkedIn
    </a>

  </div>
</div>
```

    </footer>
  );
}
```
