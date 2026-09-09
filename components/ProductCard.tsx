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
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition hover:border-accent/45"
    >
      <ProductImage slug={product.slug} name={product.name} />
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
          {groupLabels[product.group]}
        </p>
        <h3 className="font-display mt-1 text-lg leading-snug text-foreground group-hover:text-accent">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>
        <p className="mt-3 text-sm font-semibold text-foreground">
          {formatUsd(product.price)}
        </p>
      </div>
    </Link>
  );
}
