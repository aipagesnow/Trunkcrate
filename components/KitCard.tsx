import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { formatUsd } from "@/lib/format";
import { getIncludedProducts } from "@/lib/products";
import type { Kit } from "@/lib/types";

export function KitCard({
  kit,
  featured = false,
}: {
  kit: Kit;
  featured?: boolean;
}) {
  const included = getIncludedProducts(kit);

  return (
    <Link
      href={`/kits/${kit.slug}`}
      className={`group grid overflow-hidden rounded-xl border border-border/80 bg-card shadow-[0_1px_2px_rgba(26,28,30,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_10px_28px_rgba(26,28,30,0.08)] ${
        featured ? "md:grid-cols-[1.15fr_1fr]" : ""
      }`}
    >
      <div className={`${featured ? "md:min-h-[16rem]" : ""}`}>
        <ProductImage
          slug={kit.slug}
          name={kit.name}
          fit="contain"
          className={
            featured
              ? "aspect-[16/10] rounded-none border-0 md:aspect-auto md:h-full md:min-h-[16rem] [&_img]:transition [&_img]:duration-300 group-hover:[&_img]:scale-[1.03]"
              : "aspect-[16/10] rounded-none border-0 [&_img]:transition [&_img]:duration-300 group-hover:[&_img]:scale-[1.03]"
          }
        />
      </div>
      <div className="flex flex-col justify-center p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          Starter kit
        </p>
        <h3 className="font-display mt-2 text-2xl tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent">
          {kit.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{kit.tagline}</p>
        {included.length > 0 && (
          <p className="mt-3 text-xs leading-relaxed text-muted">
            {included.map((p) => p.name).join(" · ")}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/70 pt-3">
          <p className="text-base font-semibold tabular-nums text-foreground">
            {formatUsd(kit.price)}
          </p>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent opacity-80 transition group-hover:opacity-100">
            View kit
          </span>
        </div>
      </div>
    </Link>
  );
}
