import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Trunk Crate sells starter kits and organizers for car trunks and hatch boots — and how orders ship.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
      <h1 className="font-display text-3xl text-foreground sm:text-4xl md:text-5xl md:leading-[1.1]">
        About Trunk Crate
      </h1>

      <figure className="mt-8">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-accent-soft">
          <Image
            src="/images/about.jpg"
            alt="Open SUV hatch in a driveway with a fabric trunk organizer, a cargo net holding a hose, and a folding crate on the floor."
            fill
            priority
            sizes="(max-width: 768px) 100vw, 48rem"
            className="object-cover object-center"
          />
        </div>
      </figure>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:mt-10 md:space-y-6">
        <p>
          A hatch is a room you only notice when it stops working. One bag tips,
          the jumper cables migrate under a suitcase, and the next stop is a
          rummage with the tailgate up in the rain.
        </p>
        <p>
          We sell starter kits and individual organizers for that space:
          collapsible crates, cargo nets, coolers, seat-back tidies, and packing
          cubes that actually share a compact cargo floor. The catalog is for
          road trips, camping weekends, family cars, and the grocery run — not
          a truck-bed overhaul and not a magazine of packing essays.
        </p>
        <p>
          Product pages start with a real load, then say what fits, what fails,
          and what to measure. If a net needs factory hooks you do not have, or
          a crate needs a flatter floor than your sedan, we would rather you
          skip it.
        </p>
        <p>
          Orders ship from partner warehouses. Typical delivery is about 5–12
          days. Some parcels come from overseas partners when that is the stock
          we can map. Unused items in original packaging may be returned within
          the window on our shipping page. Email us if you need help with an
          order.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/kits"
          className="inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          See the kits
        </Link>
        <Link
          href="/shipping"
          className="inline-flex rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/50"
        >
          Shipping details
        </Link>
        <Link
          href="/contact"
          className="inline-flex rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/50"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
