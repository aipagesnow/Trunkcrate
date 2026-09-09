"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ShoppingCart, X } from "lucide-react";
import { type ReactNode } from "react";
import { CartPanel } from "@/components/cart/CartPanel";
import { useCart } from "@/components/cart/CartProvider";
import { kits } from "@/lib/kits";

function MenuLink({
  href,
  children,
  onClick,
  muted,
}: {
  href: string;
  children: ReactNode;
  onClick: () => void;
  muted?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-md px-3 py-2.5 text-sm font-semibold transition hover:bg-accent-soft ${
        muted ? "text-muted hover:text-foreground" : "text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}

export function CartDrawer() {
  const {
    drawerOpen,
    drawerPanel,
    itemCount,
    closeDrawer,
    showCartPanel,
    showMenuPanel,
  } = useCart();
  const reduceMotion = useReducedMotion();

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 36, mass: 0.85 };
  const fadeTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <AnimatePresence>
      {drawerOpen ? (
        <motion.button
          key="cart-drawer-backdrop"
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={fadeTransition}
          className="fixed inset-0 z-50 bg-[#1a1c1e]/35 backdrop-blur-[2px]"
          aria-label="Close drawer"
          onClick={closeDrawer}
        />
      ) : null}

      {drawerOpen ? (
        <motion.aside
          key="cart-drawer-panel"
          role="dialog"
          aria-modal="true"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={panelTransition}
          className="fixed inset-y-0 right-0 z-[51] flex w-full max-w-md flex-col border-l border-border bg-background shadow-[-12px_0_40px_rgba(26,28,30,0.12)] will-change-transform"
          aria-label={drawerPanel === "cart" ? "Cart" : "Menu"}
        >
          <div className="header-wash flex items-center justify-between gap-3 border-b border-border px-4 py-3.5">
            <div className="flex min-w-0 items-center gap-2">
              {drawerPanel === "cart" ? (
                <>
                  <button
                    type="button"
                    onClick={showMenuPanel}
                    className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2 text-foreground transition hover:border-accent/45 hover:bg-accent-soft md:hidden"
                    aria-label="Back to menu"
                  >
                    <ArrowLeft className="size-4" strokeWidth={1.85} />
                  </button>
                  <div className="flex items-center gap-2">
                    <ShoppingCart
                      className="size-4 text-accent"
                      strokeWidth={2.1}
                      aria-hidden
                    />
                    <h2 className="font-display text-lg text-foreground">
                      Cart
                    </h2>
                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-sm bg-accent px-1.5 text-[11px] font-bold leading-none text-white">
                      {itemCount}
                    </span>
                  </div>
                </>
              ) : (
                <h2 className="font-display text-lg text-foreground">Menu</h2>
              )}
            </div>
            <button
              type="button"
              onClick={closeDrawer}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2 text-foreground transition hover:border-accent/45 hover:bg-accent-soft"
              aria-label="Close"
            >
              <X className="size-4" strokeWidth={1.85} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3">
            {drawerPanel === "menu" ? (
              <nav className="flex flex-col gap-0.5">
                <button
                  type="button"
                  onClick={showCartPanel}
                  className="mb-2 flex w-full items-center justify-between rounded-md border border-border bg-card px-3 py-3 text-left transition hover:border-accent/40 hover:bg-accent-soft"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ShoppingCart
                      className="size-4 text-accent"
                      strokeWidth={2.1}
                      aria-hidden
                    />
                    Cart
                  </span>
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-sm bg-accent px-1.5 text-[12px] font-bold leading-none text-white">
                    {itemCount}
                  </span>
                </button>

                <MenuLink href="/kits" onClick={closeDrawer}>
                  Kits
                </MenuLink>
                {kits.map((k) => (
                  <MenuLink
                    key={k.slug}
                    href={`/kits/${k.slug}`}
                    onClick={closeDrawer}
                    muted
                  >
                    {k.name}
                  </MenuLink>
                ))}
                <MenuLink href="/shop" onClick={closeDrawer}>
                  Shop
                </MenuLink>
                <div className="my-2 border-t border-border" />
                <MenuLink href="/about" onClick={closeDrawer}>
                  About
                </MenuLink>
                <MenuLink href="/contact" onClick={closeDrawer}>
                  Contact
                </MenuLink>
                <MenuLink href="/shipping" onClick={closeDrawer} muted>
                  Shipping & returns
                </MenuLink>
              </nav>
            ) : (
              <CartPanel compact onContinue={closeDrawer} />
            )}
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
