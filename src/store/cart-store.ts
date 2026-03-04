"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types/cart";

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, variant?: CartItem["variant"]) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    variant?: CartItem["variant"]
  ) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
}

function itemKey(productId: string, variant?: CartItem["variant"]): string {
  return `${productId}-${variant?.size || ""}-${variant?.color || ""}`;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const key = itemKey(item.productId, item.variant);
          const existing = state.items.find(
            (i) => itemKey(i.productId, i.variant) === key
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                itemKey(i.productId, i.variant) === key
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }

          return { items: [...state.items, item] };
        }),

      removeItem: (productId, variant) =>
        set((state) => ({
          items: state.items.filter(
            (i) => itemKey(i.productId, i.variant) !== itemKey(productId, variant)
          ),
        })),

      updateQuantity: (productId, quantity, variant) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter(
                  (i) =>
                    itemKey(i.productId, i.variant) !==
                    itemKey(productId, variant)
                )
              : state.items.map((i) =>
                  itemKey(i.productId, i.variant) ===
                  itemKey(productId, variant)
                    ? { ...i, quantity }
                    : i
                ),
        })),

      clearCart: () => set({ items: [] }),

      getItemCount: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce(
          (total, item) =>
            total + (item.salePrice ?? item.price) * item.quantity,
          0
        ),
    }),
    {
      name: "retail-store-cart",
    }
  )
);
