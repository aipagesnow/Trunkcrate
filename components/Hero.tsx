import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Open hatch with a collapsible trunk organizer, cooler tote, and cargo net holding a camp chair."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="hero-wash absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent md:hidden" />
      </div>

      <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-4 py-14 sm:min-h-[32rem] sm:px-6 md:min-h-[36rem] md:justify-center md:py-24">
        <div className="max-w-xl rounded-md bg-background/80 p-5 backdrop-blur-sm sm:p-7 md:bg-background/75">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-accent">
            Starter kits for the hatch
          </p>
          <h1 className="font-display mt-3 text-balance text-[2.15rem] leading-[1.15] text-foreground sm:text-[3rem] md:text-[3.35rem]">
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
