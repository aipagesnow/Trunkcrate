import type { Metadata } from "next";
import { KitCard } from "@/components/KitCard";
import { kits } from "@/lib/kits";

export const metadata: Metadata = {
  title: "Kits",
  description:
    "Starter kits for weekend trips, camping loads, family road trips, and the everyday hatch.",
};

export default function KitsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
      <h1 className="font-display text-3xl text-foreground sm:text-4xl">
        Starter kits
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        A kit is a set we would actually put in one hatch: the pieces that share
        a load, not a random bundle. Open sizes and what fails are on each kit
        page. You can still buy every piece on its own from the shop.
      </p>
      <div className="mt-10 grid gap-5">
        {kits.map((kit) => (
          <KitCard key={kit.slug} kit={kit} featured />
        ))}
      </div>
    </div>
  );
}
