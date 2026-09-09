"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart } from "lucide-react";
import { type ReactNode } from "react";
import { BrandLockup, BrandMark } from "@/components/BrandMark";
import { useCart } from "@/components/cart/CartProvider";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`relative px-2.5 py-1.5 text-[15px] font-semibold tracking-[-0.01em] transition-colors hover:text-accent ${
        active
          ? "text-foreground after:absolute after:inset-x-2.5 after:bottom-0 after:h-[2px] after:bg-accent"
          : "text-muted"
      }`}
    >
      {children}
    </Link>
  );
}

function CartControl({ className = "" }: { className?: string }) {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className={`inline-flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-1.5 text-[13px] font-semibold text-foreground transition hover:border-accent/45 hover:bg-accent-soft ${className}`}
    >
      <ShoppingCart className="size-3.5 text-accent" strokeWidth={2.25} aria-hidden />
      Cart
      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-sm bg-accent px-1.5 text-[11px] font-bold leading-none text-white">
        {itemCount}
      </span>
    </button>
  );
}

function MobileCartIcon() {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="relative inline-flex items-center justify-center rounded-md border border-border bg-card p-2 text-foreground transition hover:border-accent/45 hover:bg-accent-soft"
      aria-label={`Open cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
    >
      <ShoppingCart className="size-4" strokeWidth={1.85} aria-hidden />
      <span className="absolute -right-1.5 -top-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-sm bg-accent px-1 text-[10px] font-bold leading-none text-white">
        {itemCount}
      </span>
    </button>
  );
}

export function Header() {
  const { openMenu } = useCart();

  return (
    <header className="header-wash sticky top-0 z-40 border-b border-border/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6 md:hidden">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 text-foreground"
          aria-label="Trunk Crate"
        >
          <BrandMark className="h-8 w-8 shrink-0" />
          <span className="site-wordmark text-[1.2rem] leading-none">
            Trunk Crate
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <MobileCartIcon />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2 text-foreground transition hover:border-accent/45 hover:bg-accent-soft"
            aria-label="Open menu"
            onClick={openMenu}
          >
            <Menu className="size-4" strokeWidth={1.85} />
          </button>
        </div>
      </div>

      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:flex">
        <Link href="/" className="group shrink-0" aria-label="Trunk Crate">
          <BrandLockup className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center md:flex">
          <NavLink href="/kits">Kits</NavLink>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <CartControl />
      </div>
    </header>
  );
}
