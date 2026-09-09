import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "Review the kits and organizers in your cart, then checkout to pay and enter shipping.",
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl text-foreground">Cart</h1>
      <p className="mt-2 text-sm text-muted">
        Check quantities, then checkout to pay and enter your shipping address.
      </p>
      <div className="mt-8">
        <CartView />
      </div>
    </div>
  );
}
