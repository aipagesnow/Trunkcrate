"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { getProduct } from "@/lib/products";
import { getShopifyVariantId } from "@/lib/shopify";
import type { Product } from "@/lib/types";

function resolveCartProducts(product: Product): Product[] {
  if (product.group !== "kits" || !product.kitIncludes?.length) {
    return [product];
  }
  const pieces: Product[] = [];
  for (const slug of product.kitIncludes) {
    const piece = getProduct(slug);
    if (piece && piece.group !== "kits") pieces.push(piece);
  }
  return pieces.length > 0 ? pieces : [product];
}

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem, showAddedToast } = useCart();
  const [added, setAdded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pieces = resolveCartProducts(product);
  const missing = pieces.filter((p) => !getShopifyVariantId(p.slug));
  const canCheckout = pieces.length > 0 && missing.length === 0;

  return (
    <div className="w-full sm:w-auto">
      <button
        type="button"
        disabled={!canCheckout}
        onClick={() => {
          if (!canCheckout) {
            setError(
              missing.length
                ? `Checkout unavailable for: ${missing.map((p) => p.name).join(", ")}.`
                : "Checkout unavailable for this product. Please try another item or contact us.",
            );
            return;
          }
          setError(null);
          for (const piece of pieces) {
            addItem(piece, 1);
          }
          showAddedToast(
            product.group === "kits"
              ? `${product.name} (${pieces.length} pieces)`
              : product.name,
          );
          setAdded(true);
          window.setTimeout(() => setAdded(false), 1600);
        }}
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-muted sm:w-auto"
      >
        {added
          ? "Added to cart"
          : product.group === "kits"
            ? "Add kit to cart"
            : "Add to cart"}
      </button>
      {product.group === "kits" && canCheckout && (
        <p className="mt-2 text-sm text-muted">
          Adds the {pieces.length} pieces in this kit to your cart for
          checkout.
        </p>
      )}
      {error && (
        <p className="mt-2 text-sm text-[#8a4b3a]" role="alert">
          {error}
        </p>
      )}
      {!canCheckout && !error && (
        <p className="mt-2 text-sm text-[#8a4b3a]" role="alert">
          Checkout unavailable for this product. Please try another item or
          contact us.
        </p>
      )}
    </div>
  );
}
