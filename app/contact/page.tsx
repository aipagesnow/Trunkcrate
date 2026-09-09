import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, Package } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email Trunk Crate about an order, shipping, or whether a kit will fit your hatch.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
      <h1 className="font-display text-3xl text-foreground sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Order questions, a shipping update, or a fit check — email is the
        fastest way to reach us. Include the order number if you have one, or
        the make of car and a rough cargo measurement if you are asking whether
        a kit will sit between the wheel wells.
      </p>

      <div className="mt-10 overflow-hidden rounded-md border border-border bg-card">
        <div className="border-b border-border bg-accent-soft/70 px-6 py-5 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-accent text-white">
              <Mail className="size-5" strokeWidth={2.1} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-block break-all font-display text-xl tracking-[-0.02em] text-accent transition hover:text-accent-hover sm:text-2xl"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-muted">
                Best for orders, shipping, and product fit.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-0 sm:grid-cols-2">
          <div className="flex gap-3 border-b border-border px-6 py-5 sm:border-b-0 sm:border-r sm:px-8">
            <Package
              className="mt-0.5 size-4 shrink-0 text-accent"
              strokeWidth={2.1}
              aria-hidden
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Writing about an order?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Include your order number and the email used at checkout so we
                can find it quickly.
              </p>
            </div>
          </div>
          <div className="flex gap-3 px-6 py-5 sm:px-8">
            <Clock
              className="mt-0.5 size-4 shrink-0 text-accent"
              strokeWidth={2.1}
              aria-hidden
            />
            <div>
              <p className="text-sm font-semibold text-foreground">Reply time</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We typically reply within 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Open email
        </a>
        <Link
          href="/shipping"
          className="inline-flex rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/50"
        >
          Shipping & returns
        </Link>
      </div>
    </div>
  );
}
