"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Eye } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getSubtotal } =
    useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center animate-fade-up">
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <ShoppingBag className="w-8 h-8 text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mt-2">
            Looks like you haven&apos;t added anything yet.
          </p>
          <Link href="/shop" className="btn-primary mt-6 inline-flex gap-2">
            Start Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getSubtotal();
  const shipping = subtotal >= 499 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-fluid py-8 lg:py-12">
        <h1 className="text-3xl font-extrabold font-heading text-gray-900 mb-8 animate-fade-up">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={`${item.productId}-${item.variant?.size}-${item.variant?.color}`}
                className="card p-4 sm:p-6 flex gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <Eye className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.variant.size && `Size: ${item.variant.size}`}
                          {item.variant.size && item.variant.color && " · "}
                          {item.variant.color && `Color: ${item.variant.color}`}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        removeItem(item.productId, item.variant)
                      }
                      className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            Math.max(1, item.quantity - 1),
                            item.variant
                          )
                        }
                        className="px-2.5 py-1.5 text-gray-500 hover:bg-gray-50"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 py-1.5 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.quantity + 1,
                            item.variant
                          )
                        }
                        className="px-2.5 py-1.5 text-gray-500 hover:bg-gray-50"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {/* Price */}
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        {formatPrice(
                          (item.salePrice || item.price) * item.quantity
                        )}
                      </p>
                      {item.salePrice && item.salePrice < item.price && (
                        <p className="text-xs text-gray-400 line-through">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear cart */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">FREE</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-primary-600">
                    Add {formatPrice(499 - subtotal)} more for free shipping!
                  </p>
                )}
                <div className="border-t pt-3 flex justify-between font-bold text-gray-900 text-base">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <Link href="/checkout" className="w-full mt-6 block">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href="/shop"
                className="block text-center text-sm text-gray-500 hover:text-primary-600 mt-3 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
