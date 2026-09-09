import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & returns",
  description:
    "How Trunk Crate orders ship, how long delivery usually takes, and how returns work.",
};

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl text-foreground sm:text-4xl">
        Shipping & returns
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted">
        A plain look at how an order gets to you — and what to do if something
        is not right.
      </p>
      <div className="mt-6 space-y-8 text-base leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Shipping</h2>
          <p className="mt-2">
            Orders ship from partner warehouses. When stock is available closer
            to you, we prefer that. Otherwise a parcel may ship from an overseas
            partner. That is why we quote a window instead of next-day promises.
          </p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "You order",
                body: "Pick a kit or a single organizer and check out.",
              },
              {
                step: "2",
                title: "Partner warehouse",
                body: "Closer warehouse when stock allows; overseas when it does not.",
              },
              {
                step: "3",
                title: "Your door",
                body: "Most parcels arrive in about 5–12 days.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-md border border-border bg-card p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Step {item.step}
                </p>
                <p className="mt-1 font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4">
            Most orders arrive in about{" "}
            <strong className="font-semibold text-foreground">5–12 days</strong>{" "}
            after they leave the warehouse. Timing can vary by carrier, weather,
            and warehouse location. We will not claim same-day local stock we
            do not have.
          </p>
          <p className="mt-3">
            Shipping rates and tracking appear at checkout once you enter your
            address.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Returns</h2>
          <p className="mt-2">
            Unused items in original packaging may be returned within 30 days of
            delivery. Who pays return postage, whether a restocking fee applies,
            and exceptions (opened hygiene items, damaged parcels) are confirmed
            when you contact us with your order number — we do not promise free
            returns by default.
          </p>
          <p className="mt-3">
            Questions about a shipment? Use the{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              contact page
            </Link>
            .
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Duties & taxes</h2>
          <p className="mt-2">
            Any applicable sales tax or import handling depends on where the
            order ships from and where it is going — those details show at
            checkout based on your shipping address.
          </p>
        </section>
      </div>
    </div>
  );
}
