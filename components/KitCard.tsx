import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { formatUsd } from "@/lib/format";
import { getIncludedProducts, getKitPiecesTotal } from "@/lib/products";
import type { Kit } from "@/lib/types";

export function KitCard({
  kit,
  featured = false,
}: {
  kit: Kit;
  featured?: boolean;
}) {
  const included = getIncludedProducts(kit);
  const price = getKitPiecesTotal(kit) || kit.price;

  return (
    <Link
      href={`/kits/${kit.slug}`}
      className={`group grid overflow-hidden rounded-xl border border-border/80 bg-card shadow-[0_1px_2px_rgba(26,28,30,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_32px_rgba(26,28,30,0.09)] ${
        featured
          ? "md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
          : "sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
      }`}
    >
      <div className="relative min-h-[12rem] overflow-hidden bg-accent-soft sm:min-h-[14rem] md:min-h-full">
        <ProductImage
          slug={kit.slug}
          name={kit.name}
          fit="cover"
          className="absolute inset-0 h-full min-h-[12rem] rounded-none border-0 aspect-auto sm:min-h-[14rem] [&_img]:transition [&_img]:duration-300 group-hover:[&_img]:scale-[1.04]"
        />
      </div>

      <div className="flex flex-col justify-between gap-5 p-5 sm:p-6 lg:p-7">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            Starter kit
          </p>
          <h3 className="font-display mt-1.5 text-2xl leading-tight tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent sm:text-[1.65rem]">
            {kit.name}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            {kit.tagline}
          </p>

          {included.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-border/70 pt-4">
              {included.map((p) => (
                <li
                  key={p.slug}
                  className="flex items-start gap-2 text-sm leading-snug text-foreground/85"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                    aria-hidden
                  />
                  <span>{p.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold tabular-nums tracking-tight text-foreground">
            {formatUsd(price)}
          </p>
          <span className="inline-flex items-center rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white transition group-hover:bg-accent-hover">
            View kit
          </span>
        </div>
      </div>
    </Link>
  );
}
