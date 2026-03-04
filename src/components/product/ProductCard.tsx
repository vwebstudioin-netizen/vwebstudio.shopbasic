"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice, getDiscountPercent } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import Badge from "@/components/ui/Badge";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const hasDiscount = product.salePrice && product.salePrice < product.price;
  const discount = hasDiscount
    ? getDiscountPercent(product.price, product.salePrice!)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.images[0] || "",
      quantity: 1,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link href={`/shop/${product.slug}`} className="group">
      <div className="card overflow-hidden">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <Eye className="w-10 h-10" />
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {hasDiscount && (
              <Badge variant="danger">-{discount}%</Badge>
            )}
            {product.featured && (
              <Badge variant="info">Featured</Badge>
            )}
            {product.stock === 0 && (
              <Badge variant="default">Sold Out</Badge>
            )}
          </div>

          {/* Hover overlay with actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center">
            <div className="flex items-center gap-2 pb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-primary-600 hover:text-white transition-all duration-200 disabled:opacity-50"
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toast("Wishlist coming soon!", { icon: "💖" });
                }}
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-base font-bold text-gray-900">
              {formatPrice(hasDiscount ? product.salePrice! : product.price)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
