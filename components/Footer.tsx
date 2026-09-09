import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { kits } from "@/lib/kits";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-accent-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2">
            <BrandMark className="h-7 w-7" />
            <span className="site-wordmark text-lg text-foreground">
              Trunk Crate
            </span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Starter kits and individual organizers for the hatch you actually
            drive — road trips, camp weekends, and the grocery run.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/kits" className="transition hover:text-accent">
                All kits
              </Link>
            </li>
            {kits.map((k) => (
              <li key={k.slug}>
                <Link
                  href={`/kits/${k.slug}`}
                  className="transition hover:text-accent"
                >
                  {k.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/shop" className="transition hover:text-accent">
                Shop all
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Help</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/shipping" className="transition hover:text-accent">
                Shipping & returns
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition hover:text-accent">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-accent">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Trunk Crate</p>
          <p>Ships from partner warehouses</p>
        </div>
      </div>
    </footer>
  );
}
