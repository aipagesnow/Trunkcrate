import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { formatUsd } from "@/lib/format";
import { getAllKitSlugs, getKit } from "@/lib/kits";
import { getIncludedProducts, getProduct } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllKitSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const kit = getKit(slug);
  if (!kit) return { title: "Kit" };
  return {
    title: kit.name,
    description: kit.tagline,
  };
}

export default async function KitPage({ params }: Props) {
  const { slug } = await params;
  const kit = getKit(slug);
  if (!kit) notFound();

  const product = getProduct(kit.slug);
  const included = getIncludedProducts(kit);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav className="text-sm text-muted">
        <Link href="/kits" className="hover:text-foreground">
          Kits
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{kit.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-start">
        <ProductImage
          slug={kit.slug}
          name={kit.name}
          className="aspect-[16/10]"
          priority
        />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            Starter kit
          </p>
          <h1 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
            {kit.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold text-foreground">
            {formatUsd(kit.price)}
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground">
            {kit.scenario}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {kit.description}
          </p>
          <ul className="mt-6 space-y-2">
            {kit.features.map((f) => (
              <li
                key={f}
                className="flex gap-2 text-sm text-foreground/80 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:bg-accent before:content-['']"
              >
                {f}
              </li>
            ))}
          </ul>
          {product && (
            <div className="mt-8">
              <AddToCartButton product={product} />
            </div>
          )}
          <p className="mt-4 text-sm text-muted">
            Usually arrives in about 5–12 days.{" "}
            <Link href="/shipping" className="font-medium text-accent hover:underline">
              Shipping & returns
            </Link>
          </p>
        </div>
      </div>

      {included.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl text-foreground">In this kit</h2>
          <p className="mt-2 text-sm text-muted">
            Each piece is also sold on its own if you already have part of the
            set.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
