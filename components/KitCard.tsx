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
      className={`group grid overflow-hidden rounded-md border border-border bg-card transition hover:border-accent/45 ${
        featured ? "md:grid-cols-[1.15fr_1fr]" : ""
      }`}
    >
      <div
        className={`${
          featured ? "md:min-h-[16rem]" : ""
        }`}
      >
        <ProductImage
          slug={kit.slug}
          name={kit.name}
          className={
            featured
              ? "aspect-[16/10] rounded-none border-0 md:aspect-auto md:h-full md:min-h-[16rem]"
              : "aspect-[16/10] rounded-none border-0"
          }
        />
      </div>
      <div className="flex flex-col justify-center p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          Starter kit
        </p>
        <h3 className="font-display mt-2 text-2xl text-foreground group-hover:text-accent">
          {kit.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{kit.tagline}</p>
        {included.length > 0 && (
          <p className="mt-3 text-xs leading-relaxed text-muted">
            {included.map((p) => p.name).join(" · ")}
          </p>
        )}
        <p className="mt-4 text-sm font-semibold text-foreground">
          {formatUsd(kit.price)}
        </p>
      </div>
    </Link>
  );
}
