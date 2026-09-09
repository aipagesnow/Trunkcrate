import variantMap from "@/lib/shopify-variant-map.json";

export const SHOPIFY_STORE_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "trunkcrate.myshopify.com";

/** slug → Shopify variant id (first variant per product) */
export const shopifyVariantIds: Record<string, number> = variantMap;

export function getShopifyVariantId(slug: string): number | undefined {
  return shopifyVariantIds[slug];
}

export type CheckoutBuildResult =
  | { ok: true; url: string }
  | { ok: false; error: string; missingSlugs: string[] };

/**
 * Build a Shopify cart permalink that lands on hosted checkout/payment.
 *
 * Format: https://{shop}/cart/{variantId}:{qty},{variantId}:{qty},...
 *
 * Shopify docs: cart permalinks redirect to hosted checkout by default.
 * Do NOT append ?storefront=true — that forces the Online Store cart/theme UI.
 *
 * Development stores may still show the password gate before checkout; that is expected.
 */
export function buildShopifyCheckoutUrl(
  lines: { slug: string; quantity: number }[],
): CheckoutBuildResult {
  if (lines.length === 0) {
    return {
      ok: false,
      error: "Your cart is empty.",
      missingSlugs: [],
    };
  }

  const parts: string[] = [];
  const missingSlugs: string[] = [];

  for (const line of lines) {
    const variantId = getShopifyVariantId(line.slug);
    if (!variantId) {
      missingSlugs.push(line.slug);
      continue;
    }
    const qty = Math.max(1, Math.min(99, Math.floor(line.quantity) || 1));
    parts.push(`${variantId}:${qty}`);
  }

  if (missingSlugs.length > 0) {
    return {
      ok: false,
      error: `Checkout unavailable: missing Shopify variant for ${missingSlugs.join(", ")}.`,
      missingSlugs,
    };
  }

  if (parts.length === 0) {
    return {
      ok: false,
      error: "Checkout unavailable: no valid cart lines.",
      missingSlugs: [],
    };
  }

  const url = `https://${SHOPIFY_STORE_DOMAIN}/cart/${parts.join(",")}`;
  return { ok: true, url };
}

/** @deprecated Prefer buildShopifyCheckoutUrl for explicit success/error. */
export function buildShopifyCartPermalink(
  lines: { slug: string; quantity: number }[],
): string | null {
  const result = buildShopifyCheckoutUrl(lines);
  return result.ok ? result.url : null;
}
