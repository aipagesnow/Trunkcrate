import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { formatUsd } from "@/lib/format";
import { groupLabels } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const href =
    product.group === "kits"
      ? `/kits/${product.slug}`
      : `/products/${product.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-[0_1px_2px_rgba(26,28,30,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_10px_28px_rgba(26,28,30,0.08)]"
    >
      <div className="relative overflow-hidden bg-accent-soft">
        <ProductImage
          slug={product.slug}
          name={product.name}
          className="aspect-[5/4] rounded-none border-0 [&_img]:transition [&_img]:duration-300 group-hover:[&_img]:scale-[1.03]"
          fit="contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          {groupLabels[product.group]}
        </p>
        <h3 className="font-display text-xl leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent">
          {product.name}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center justify-between gap-3 border-t border-border/70 pt-3">
          <p className="text-base font-semibold tabular-nums text-foreground">
            {formatUsd(product.price)}
          </p>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent opacity-80 transition group-hover:opacity-100">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
