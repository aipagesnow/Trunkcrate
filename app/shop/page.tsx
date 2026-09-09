import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { getShopProducts, groupLabels } from "@/lib/products";
import type { ProductGroup } from "@/lib/types";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse trunk organizers, crates, cargo nets, coolers, seat-back tidies, and packing cubes.",
};

const order: ProductGroup[] = [
  "crates",
  "nets",
  "cabin",
  "coolers",
  "packing",
];

export default function ShopPage() {
  const items = getShopProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
      <h1 className="font-display text-3xl text-foreground sm:text-4xl">
        Shop all
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Individual organizers if you already know the gap. Sizes, what fits, and
        what fails are on each product page — measure the cargo floor before you
        order.
      </p>

      {order.map((group) => {
        const groupItems = items.filter((p) => p.group === group);
        if (groupItems.length === 0) return null;
        return (
          <section key={group} className="mt-12">
            <h2 className="font-display text-2xl text-foreground">
              {groupLabels[group]}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groupItems.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
