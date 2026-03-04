import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductGrid from "@/components/product/ProductGrid";
import { Product } from "@/types/product";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-fluid">
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <div>
            <h2 className="section-heading">Featured Products</h2>
            <p className="section-subheading">
              Handpicked items just for you
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <ProductGrid products={products} />
        <div className="mt-8 text-center sm:hidden">
          <Link href="/shop" className="btn-secondary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
