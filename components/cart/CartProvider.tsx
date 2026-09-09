"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/types";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

export type DrawerPanel = "menu" | "cart";

export type CartToastState = {
  productName?: string;
} | null;

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  drawerOpen: boolean;
  drawerPanel: DrawerPanel;
  openMenu: () => void;
  openCart: () => void;
  closeDrawer: () => void;
  showCartPanel: () => void;
  showMenuPanel: () => void;
  toast: CartToastState;
  showAddedToast: (productName?: string) => void;
  dismissToast: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "trunkcrate-cart";

function loadInitial(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPanel, setDrawerPanel] = useState<DrawerPanel>("menu");
  const [toast, setToast] = useState<CartToastState>(null);

  useEffect(() => {
    setItems(loadInitial());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === product.id);
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((i) => i.productId !== productId);
      return prev.map((i) =>
        i.productId === productId ? { ...i, quantity } : i,
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const openMenu = useCallback(() => {
    setDrawerPanel("menu");
    setDrawerOpen(true);
  }, []);

  const openCart = useCallback(() => {
    setDrawerPanel("cart");
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const showCartPanel = useCallback(() => setDrawerPanel("cart"), []);
  const showMenuPanel = useCallback(() => setDrawerPanel("menu"), []);

  const showAddedToast = useCallback((productName?: string) => {
    setToast({ productName });
  }, []);

  const dismissToast = useCallback(() => setToast(null), []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => i.price * i.quantity + sum, 0);
    return {
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      drawerOpen,
      drawerPanel,
      openMenu,
      openCart,
      closeDrawer,
      showCartPanel,
      showMenuPanel,
      toast,
      showAddedToast,
      dismissToast,
    };
  }, [
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    drawerOpen,
    drawerPanel,
    openMenu,
    openCart,
    closeDrawer,
    showCartPanel,
    showMenuPanel,
    toast,
    showAddedToast,
    dismissToast,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
