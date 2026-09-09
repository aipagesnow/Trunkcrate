"use client";

import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { ProductImage } from "@/components/ProductImage";
import { useCart } from "@/components/cart/CartProvider";
import { formatUsd } from "@/lib/format";
import { buildShopifyCheckoutUrl } from "@/lib/shopify";
import { getKit } from "@/lib/kits";

function QtyStepper({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (next: number) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-md border border-border bg-background">
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        className="inline-flex size-8 items-center justify-center rounded-l-md text-foreground transition hover:bg-accent-soft disabled:opacity-40"
        aria-label="Decrease quantity"
        disabled={quantity <= 1}
      >
        <Minus className="size-3.5" strokeWidth={2.25} aria-hidden />
      </button>
      <span
        className="min-w-8 px-1 text-center text-sm font-semibold tabular-nums text-foreground"
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(20, quantity + 1))}
        className="inline-flex size-8 items-center justify-center rounded-r-md text-foreground transition hover:bg-accent-soft disabled:opacity-40"
        aria-label="Increase quantity"
        disabled={quantity >= 20}
      >
        <Plus className="size-3.5" strokeWidth={2.25} aria-hidden />
      </button>
    </div>
  );
}

function itemHref(slug: string) {
  return getKit(slug) ? `/kits/${slug}` : `/products/${slug}`;
}

export function CartPanel({
  compact = false,
  onContinue,
}: {
  compact?: boolean;
  onContinue?: () => void;
}) {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div
        className={`rounded-md border border-dashed border-border bg-card text-center ${
          compact ? "p-6" : "p-8"
        }`}
      >
        <p className="text-base text-foreground">Your cart is empty.</p>
        <Link
          href="/kits"
          onClick={onContinue}
          className="mt-4 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Browse kits
        </Link>
      </div>
    );
  }

  const checkout = buildShopifyCheckoutUrl(
    items.map((item) => ({ slug: item.slug, quantity: item.quantity })),
  );

  return (
    <div className={compact ? "space-y-4" : "space-y-6"}>
      <ul className="divide-y divide-border overflow-hidden rounded-md border border-border bg-card">
        {items.map((item) => (
          <li
            key={item.productId}
            className={`flex gap-3 ${compact ? "p-3" : "flex-col gap-4 p-4 sm:flex-row sm:items-center"}`}
          >
            <div className={compact ? "w-16 shrink-0" : "w-full sm:w-24"}>
              <ProductImage
                slug={item.slug}
                name={item.name}
                className="!rounded-sm"
              />
            </div>
            <div className="min-w-0 flex-1">
              <Link
                href={itemHref(item.slug)}
                onClick={onContinue}
                className="font-semibold text-foreground hover:underline"
              >
                {item.name}
              </Link>
              <p className="mt-1 text-sm text-muted">
                {formatUsd(item.price)} each
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-3">
                <QtyStepper
                  quantity={item.quantity}
                  onChange={(next) => updateQuantity(item.productId, next)}
                />
                <button
                  type="button"
                  onClick={() => removeItem(item.productId)}
                  className="text-sm font-medium text-muted transition hover:text-accent hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            <p
              className={`shrink-0 text-sm font-semibold text-foreground ${
                compact ? "pt-1" : "sm:text-right"
              }`}
            >
              {formatUsd(item.price * item.quantity)}
            </p>
          </li>
        ))}
      </ul>

      <div className="rounded-md border border-border bg-accent-soft p-4 sm:p-5">
        <div className="flex items-center justify-between text-base">
          <span className="font-medium text-foreground">Subtotal</span>
          <span className="text-lg font-semibold text-foreground">
            {formatUsd(subtotal)}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Taxes and shipping calculated at checkout.
        </p>
        {checkout.ok ? (
          <a
            href={checkout.url}
            className="mt-4 flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            Secure checkout
          </a>
        ) : (
          <div className="mt-4 space-y-2">
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-md bg-muted px-5 py-3 text-sm font-semibold text-white"
            >
              Checkout unavailable
            </button>
            <p className="text-sm leading-relaxed text-[#8a4b3a]" role="alert">
              Checkout unavailable for one or more items. Please try another
              item or contact us.
            </p>
          </div>
        )}
        <Link
          href="/shop"
          onClick={onContinue}
          className="mt-3 flex w-full items-center justify-center py-1.5 text-sm font-medium text-muted transition hover:text-foreground hover:underline"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
