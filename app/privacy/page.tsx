import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for Trunk Crate.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl text-foreground sm:text-4xl">
        Privacy policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 9, 2026</p>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
        <p>
          Trunk Crate respects your privacy. This site may collect basic
          technical data (such as browser type and pages viewed) through hosting
          analytics when deployed. We do not sell personal information.
        </p>
        <p>
          When you check out, order details (name, email, shipping address, and
          payment confirmation) are handled securely at checkout by our payment
          processor and fulfillment partners under their respective privacy
          terms, plus this policy.
        </p>
        <p>
          If you contact us by email, we use that information only to respond to
          your message and improve customer support.
        </p>
        <p>
          For privacy questions, email{" "}
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
