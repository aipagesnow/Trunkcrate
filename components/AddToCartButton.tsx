"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { getShopifyVariantId } from "@/lib/shopify";
import type { Product } from "@/lib/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem, showAddedToast } = useCart();
  const [added, setAdded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const variantId = getShopifyVariantId(product.slug);

  return (
    <div className="w-full sm:w-auto">
      <button
        type="button"
        disabled={!variantId}
        onClick={() => {
          if (!variantId) {
            setError(
              "Checkout unavailable for this product. Please try another item or contact us.",
            );
            return;
          }
          setError(null);
          addItem(product, 1);
          showAddedToast(product.name);
          setAdded(true);
          window.setTimeout(() => setAdded(false), 1600);
        }}
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-muted sm:w-auto"
      >
        {added ? "Added to cart" : "Add to cart"}
      </button>
      {error && (
        <p className="mt-2 text-sm text-[#8a4b3a]" role="alert">
          {error}
        </p>
      )}
      {!variantId && !error && (
        <p className="mt-2 text-sm text-[#8a4b3a]" role="alert">
          Checkout unavailable for this product. Please try another item or
          contact us.
        </p>
      )}
    </div>
  );
}
