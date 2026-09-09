import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";
import { resolveCatalogImagePath } from "@/lib/product-images";

type Props = {
  slug: string;
  name?: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

export function ProductImage({
  slug,
  name,
  className = "",
  priority = false,
  fit = "cover",
}: Props) {
  const src = resolveCatalogImagePath(slug);
  const label = name || slug;
  const objectClass = fit === "contain" ? "object-contain object-center p-3" : "object-cover object-center";

  if (!src) {
    return (
      <div
        className={`relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-md border border-border bg-accent-soft px-4 text-center ${className}`}
        role="img"
        aria-label={label}
      >
        <BrandMark className="h-10 w-10 opacity-80" />
        <p className="font-display max-w-[14rem] text-sm leading-snug tracking-[-0.02em] text-foreground sm:text-base">
          {label}
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
          Photo coming soon
        </p>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-md bg-accent-soft ${className}`}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={objectClass}
        priority={priority}
      />
    </div>
  );
}
