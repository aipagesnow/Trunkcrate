import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      {/* Mobile: stacked photo then title. Desktop: split. */}
      <div className="mx-auto grid max-w-6xl md:grid-cols-2 md:items-stretch">
        <div className="relative min-h-[16.5rem] w-full sm:min-h-[20rem] md:min-h-[32rem] md:order-2">
          <Image
            src="/images/hero.jpg"
            alt="Open hatch with a collapsible trunk organizer, cooler tote, and cargo net holding a camp chair."
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[center_55%]"
          />
        </div>

        <div className="flex flex-col justify-center px-4 py-8 sm:px-6 sm:py-10 md:order-1 md:px-8 md:py-16 lg:px-10">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[0.75rem]">
            Starter kits for the hatch
          </p>
          <h1 className="font-display mt-3 text-balance text-[2.35rem] leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[3.1rem] md:text-[3.4rem] md:leading-[1.05]">
            Keep the boot usable for the trips you actually&nbsp;take
          </h1>
          <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-muted">
            Weekend bags, a cooler, and the stuff that lives in the car can
            share a hatch without turning into one pile. Start with a kit, or
            pick a single organizer if you already know the gap.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/kits"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-accent-hover"
            >
              See the kits
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                strokeWidth={2.25}
                aria-hidden
              />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-[15px] font-medium text-foreground transition hover:border-accent/50 hover:bg-accent-soft"
            >
              Shop individual pieces
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
