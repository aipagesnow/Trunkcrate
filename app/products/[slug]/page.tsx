import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { formatUsd } from "@/lib/format";
import { kits } from "@/lib/kits";
import {
  getProduct,
  getRelatedProducts,
  getShopProducts,
  groupLabels,
} from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getShopProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  if (product.group === "kits") {
    notFound();
  }

  const related = getRelatedProducts(product);
  const inKits = kits.filter((k) => k.includes.includes(product.slug));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav className="text-sm text-muted">
        <Link href="/shop" className="hover:text-foreground">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
        <ProductImage
          slug={product.slug}
          name={product.name}
          className="border border-border"
          priority
        />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            {groupLabels[product.group]}
          </p>
          <h1 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-foreground">
            {formatUsd(product.price)}
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground">
            {product.scenario}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {product.description}
          </p>
          <ul className="mt-6 space-y-2">
            {product.features.map((f) => (
              <li
                key={f}
                className="flex gap-2 text-sm text-foreground/80 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-accent before:content-['']"
              >
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
          <p className="mt-4 text-sm text-muted">
            Usually arrives in about 5–12 days.{" "}
            <Link href="/shipping" className="font-medium text-accent hover:underline">
              Shipping & returns
            </Link>
          </p>
          {inKits.length > 0 && (
            <p className="mt-4 text-sm text-muted">
              Also in{" "}
              {inKits.map((k, i) => (
                <span key={k.slug}>
                  {i > 0 ? ", " : ""}
                  <Link
                    href={`/kits/${k.slug}`}
                    className="font-medium text-accent hover:underline"
                  >
                    {k.name}
                  </Link>
                </span>
              ))}
              .
            </p>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl text-foreground">
            More in {groupLabels[product.group].toLowerCase()}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
