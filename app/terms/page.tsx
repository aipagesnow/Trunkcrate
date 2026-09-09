import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms of service for shopping at Trunk Crate.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl text-foreground sm:text-4xl">
        Terms of service
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 9, 2026</p>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
        <p>
          These terms apply when you browse Trunk Crate or place an order for
          trunk and travel organizers. By using the site or checking out, you
          agree to them.
        </p>
        <p>
          Product listings, prices, and availability are offers to sell subject
          to stock and confirmation at checkout. Orders and payments are
          processed securely at checkout.
        </p>
        <p>
          All content on this site — including product names, descriptions, and
          branding — belongs to Trunk Crate. Do not scrape or republish the
          catalog without permission.
        </p>
        <p>
          To the fullest extent allowed by law, Trunk Crate is not liable for
          indirect or consequential damages arising from use of the site or
          products. Order-specific terms (shipping, returns, refunds) apply as
          described at checkout and on our shipping page.
        </p>
        <p>
          Questions about these terms:{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
