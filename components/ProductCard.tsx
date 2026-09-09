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
      className="group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-[0_1px_2px_rgba(26,28,30,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_32px_rgba(26,28,30,0.09)]"
    >
      <div className="relative overflow-hidden bg-accent-soft">
        <ProductImage
          slug={product.slug}
          name={product.name}
          fit="cover"
          className="aspect-[4/3] rounded-none border-0 [&_img]:transition [&_img]:duration-300 group-hover:[&_img]:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          {groupLabels[product.group]}
        </p>
        <h3 className="font-display mt-1.5 text-lg leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent sm:text-xl">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/70 pt-3">
          <p className="text-base font-semibold tabular-nums text-foreground">
            {formatUsd(product.price)}
          </p>
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent transition group-hover:bg-accent group-hover:text-white">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
