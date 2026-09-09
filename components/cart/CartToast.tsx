"use client";

import { useEffect } from "react";
import { useCart } from "@/components/cart/CartProvider";

export function CartToast() {
  const { toast, dismissToast, openCart } = useCart();

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => dismissToast(), 2300);
    return () => window.clearTimeout(id);
  }, [toast, dismissToast]);

  if (!toast) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-6 sm:pb-8"
      role="status"
      aria-live="polite"
    >
      <div className="pointer-events-auto flex max-w-sm items-center gap-3 rounded-md border border-border bg-card px-4 py-3 shadow-[0_8px_28px_rgba(26,28,30,0.14)]">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">Added to cart</p>
          {toast.productName ? (
            <p className="mt-0.5 truncate text-xs text-muted">
              {toast.productName}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => {
            dismissToast();
            openCart();
          }}
          className="shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-accent-hover"
        >
          View cart
        </button>
      </div>
    </div>
  );
}
