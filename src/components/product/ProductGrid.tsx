import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({
  products,
  title,
  subtitle,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div>
      {(title || subtitle) && (
        <div className="text-center mb-8 lg:mb-12">
          {title && <h2 className="section-heading">{title}</h2>}
          {subtitle && <p className="section-subheading mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
