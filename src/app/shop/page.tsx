"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, Grid3X3, LayoutList, Search } from "lucide-react";
import ProductGrid from "@/components/product/ProductGrid";
import { DEMO_PRODUCTS } from "@/lib/demo-data";
import { Product } from "@/types/product";

const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Fashion", value: "fashion" },
  { label: "Electronics", value: "electronics" },
  { label: "Home & Living", value: "home-living" },
  { label: "Accessories", value: "accessories" },
];

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name A-Z", value: "name-asc" },
];

export default function ShopPage() {
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let results: Product[] = [...DEMO_PRODUCTS];

    // Filter by category
    if (category) {
      results = results.filter((p) => p.category === category);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        results.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case "price-desc":
        results.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case "name-asc":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // newest first (already in order from demo data)
        break;
    }

    return results;
  }, [category, sortBy, searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b">
        <div className="container-fluid py-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 animate-fade-up">
            Shop All Products
          </h1>
          <p className="text-gray-500 mt-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Discover our curated collection of premium products
          </p>
        </div>
      </div>

      <div className="container-fluid py-8">
        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10"
            />
          </div>

          {/* Category tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  category === cat.value
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field w-full sm:w-48"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
