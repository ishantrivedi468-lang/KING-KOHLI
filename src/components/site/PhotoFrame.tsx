import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

export function PhotoFrame({
  photo,
  caption,
  className,
  imgClassName,
  priority = false,
  showCredit = true,
  onClick,
}: {
  photo: Photo;
  caption?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  showCredit?: boolean;
  onClick?: () => void;
}) {
  const body = (
    <>
      <img
        src={photo.url}
        alt={caption ?? photo.title}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-14">
        {caption ? (
          <p className="text-sm font-medium text-foreground/90">{caption}</p>
        ) : null}
        {showCredit ? (
          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {photo.credit} · {photo.license} · Wikimedia Commons
          </p>
        ) : null}
      </div>
    </>
  );

  const base = cn(
    "photo-zoom card-lift relative block overflow-hidden rounded-sm border border-border bg-surface",
    className,
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cn(base, "text-left")}>
        {body}
      </button>
    );
  }
  return <figure className={base}>{body}</figure>;
}
