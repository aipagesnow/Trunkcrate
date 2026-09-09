import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { KitCard } from "@/components/KitCard";
import { ProductCard } from "@/components/ProductCard";
import { kits } from "@/lib/kits";
import { getFeaturedProducts } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trunk Crate | Kits for a usable car boot",
  description: site.description,
};

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Start with a kit
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Four loads we see most: a weekend overnight, a camp trailhead, a
              family road trip, and the hatch you use every week. Each kit is a
              set you can buy together, then add or skip pieces later.
            </p>
          </div>
          <Link
            href="/kits"
            className="text-sm font-semibold text-accent hover:underline"
          >
            All kits
          </Link>
        </div>
        <div className="mt-8 grid gap-4">
          {kits.slice(0, 2).map((kit) => (
            <KitCard key={kit.slug} kit={kit} featured />
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {kits.slice(2).map((kit) => (
            <KitCard key={kit.slug} kit={kit} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-accent-soft/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Measure the cargo floor first
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A hatch that looks large from the bumper is often narrower between
              the wheel wells. Each product lists open size, what actually fits,
              and what fails. If a crate needs a near-flat floor and yours
              slopes over a spare, skip it.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Orders usually arrive in about 5–12 days from partner warehouses.
              Some parcels ship from overseas. We will not claim same-day local
              stock we do not have.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Shop individual pieces
            </h2>
            <p className="mt-2 text-sm text-muted">
              Organizers, nets, coolers, and packing cubes if you already know
              the gap.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Shop all
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
