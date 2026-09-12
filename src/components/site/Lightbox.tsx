import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { GalleryItem } from "@/data/media";

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onIndexChange]);

  if (index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
        <p className="truncate text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="rounded-sm border border-border p-2 text-foreground transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-3 sm:p-8">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => onIndexChange((index - 1 + items.length) % items.length)}
          className="absolute left-2 z-10 rounded-full border border-border bg-ink/70 p-3 transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <img
          src={item.photo.url}
          alt={item.caption}
          className="max-h-full max-w-full object-contain"
        />
        <button
          type="button"
          aria-label="Next image"
          onClick={() => onIndexChange((index + 1) % items.length)}
          className="absolute right-2 z-10 rounded-full border border-border bg-ink/70 p-3 transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="border-t border-border px-4 py-4 sm:px-8">
        <p className="text-sm text-foreground">{item.caption}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {item.photo.credit} · {item.photo.license}
        </p>
        <a
          href={item.photo.source}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-gold hover:underline"
        >
          Source on Wikimedia Commons <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
