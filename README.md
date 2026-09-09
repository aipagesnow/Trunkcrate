# Trunk Crate

US Shopify storefront for car boot / trunk and travel tidy gear (starter kits + organizers).

Brand: Trunk Crate · Domain: trunkcrate.com (buy later) · Skeleton: kit-led

Ship on Vercel first. Public pages never name Shopify, Vercel, or Flippa.

## Brand lock

**Mark:** Open Crate only (`brand/svg/open-crate.svg`). Do not wire Hatch Latch from git history.

| Token | Hex | Use |
|---|---|---|
| Asphalt | `#1A1C1E` | Mark stroke, wordmark, body ink |
| Steel | `#3D6B8C` | Rivets, links, primary buttons |
| Cool ground | `#F2F1EE` | Page / apple-touch / OG ground |

**Fonts:** Archivo 700 (display / wordmark, tracking −0.02em) + IBM Plex Sans (body).

Favicon pack is copied from `brand/drop-into-app/` → `app/` and `brand/drop-into-public/` → `public/`. Header uses `public/brand/lockup-header.svg`. Sitewide OG/Twitter uses `public/og-default.png` (branded lockup, not a product photo).

`next.config.ts` rewrites `/icon` → `/icon.png` and `/apple-icon` → `/apple-icon.png` only. Never rewrite `favicon.ico`.

## Stack

- Next.js App Router + TypeScript + Tailwind v4
- Catalog in `lib/products.ts` and kits in `lib/kits.ts`
- Slug → variant map in `lib/shopify-variant-map.json` (placeholders until the store exists)
- localStorage cart, slide-out drawer (menu + cart), add-to-cart toast (does not auto-open the drawer)
- Checkout uses cart permalinks → hosted payment (`/cart/{variantId}:{qty},...`). Never `?storefront=true`.

## Pages

Home (kit-led) · Kits index + 4 kit pages · Shop all · 18 product PDPs · About · Shipping · Contact · Privacy · Terms · Cart

## Checkout (owner setup)

The storefront is checkout-ready once a store exists. New owner steps:

1. Activate a paid Shopify plan for the shop in `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` (dev stores need this before clearing Online Store access).
2. In Shopify Admin → Online Store → Preferences, remove the storefront password.
3. On the host, set `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` to `{shop}.myshopify.com` (see `.env.example`). Defaults in `lib/shopify.ts`.
4. Replace placeholder IDs in `lib/shopify-variant-map.json` with real first-variant IDs (one per product slug).
5. Cart Checkout opens `https://{domain}/cart/{variantId}:{qty},...` which routes to hosted payment (not `?storefront=true`, which would force the Online Store cart UI).

Until storefront access is public, the cart URL may show a password gate (expected). Missing mapped variants surface a clear error and do not dump buyers onto the theme homepage.

## Local

```bash
npm install
npm run dev
npm run build
```
