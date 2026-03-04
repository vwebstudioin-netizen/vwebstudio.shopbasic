"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Minus, Plus, ShoppingCart, Heart, Share2, Eye, Truck, RotateCcw, Shield } from "lucide-react";
import { useParams } from "next/navigation";
import { DEMO_PRODUCTS } from "@/lib/demo-data";
import { useCartStore } from "@/store/cart-store";
import { formatPrice, getDiscountPercent } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import toast from "react-hot-toast";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = DEMO_PRODUCTS.find((p) => p.slug === slug);

  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<{
    size?: string;
    color?: string;
  }>({});

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <p className="text-gray-500 mt-2">This product doesn&apos;t exist or has been removed.</p>
          <Link href="/shop" className="btn-primary mt-6 inline-flex">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const hasDiscount = product.salePrice && product.salePrice < product.price;
  const discount = hasDiscount ? getDiscountPercent(product.price, product.salePrice!) : 0;
  const sizes = [...new Set(product.variants.map((v) => v.size).filter(Boolean))];
  const colors = [...new Set(product.variants.map((v) => v.color).filter(Boolean))];

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.images[0] || "",
      quantity,
      variant: selectedVariant.size || selectedVariant.color
        ? selectedVariant
        : undefined,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container-fluid py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>
      </div>

      <div className="container-fluid pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image section */}
          <div className="animate-fade-up">
            <div className="relative aspect-square rounded-2xl bg-gray-50 overflow-hidden">
              {product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-300">
                    <Eye className="w-16 h-16 mx-auto" />
                    <p className="text-sm mt-2">Product Image</p>
                  </div>
                </div>
              )}
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {hasDiscount && <Badge variant="danger">-{discount}% OFF</Badge>}
                {product.featured && <Badge variant="info">Featured</Badge>}
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-sm text-primary-600 font-semibold uppercase tracking-wider">
              {product.category}
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold font-heading text-gray-900">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(hasDiscount ? product.salePrice! : product.price)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.price)}
                  </span>
                  <Badge variant="danger">Save {discount}%</Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Variants - Sizes */}
            {sizes.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Size</p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedVariant((prev) => ({ ...prev, size: size! }))
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        selectedVariant.size === size
                          ? "border-primary-600 bg-primary-50 text-primary-700"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Variants - Colors */}
            {colors.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Color</p>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() =>
                        setSelectedVariant((prev) => ({ ...prev, color: color! }))
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        selectedVariant.color === color
                          ? "border-primary-600 bg-primary-50 text-primary-700"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2.5 text-sm font-semibold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-2.5 text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-400">
                  {product.stock} in stock
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                size="lg"
                className="flex-1"
              >
                <ShoppingCart className="w-5 h-5" />
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => toast("Wishlist coming soon!", { icon: "💖" })}
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success("Link copied!");
                }}
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
              {[
                { icon: <Truck className="w-5 h-5" />, text: "Free Shipping" },
                { icon: <RotateCcw className="w-5 h-5" />, text: "7-Day Returns" },
                { icon: <Shield className="w-5 h-5" />, text: "Secure Payment" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-gray-50 text-gray-500 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5 font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
