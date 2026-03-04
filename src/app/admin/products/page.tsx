"use client";

import { Pencil, Trash2 } from "lucide-react";
import { DEMO_PRODUCTS } from "@/lib/demo-data";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between animate-fade-up">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your product catalog
          </p>
        </div>
        <Button onClick={() => toast("Coming soon!")}>+ Add Product</Button>
      </div>

      {/* Products Table */}
      <div className="card animate-fade-up">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Image
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Name
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Category
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Price
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Stock
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Status
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {DEMO_PRODUCTS.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  {/* Image */}
                  <td className="px-5 py-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-xs overflow-hidden">
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        "IMG"
                      )}
                    </div>
                  </td>

                  {/* Name */}
                  <td className="px-5 py-3">
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-400">{product.slug}</p>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-3 text-gray-600 capitalize">
                    {product.category.replace("-", " ")}
                  </td>

                  {/* Price */}
                  <td className="px-5 py-3">
                    <p className="font-medium text-gray-900">
                      {formatPrice(product.salePrice ?? product.price)}
                    </p>
                    {product.salePrice && product.salePrice < product.price && (
                      <p className="text-xs text-gray-400 line-through">
                        {formatPrice(product.price)}
                      </p>
                    )}
                  </td>

                  {/* Stock */}
                  <td className="px-5 py-3">
                    <span
                      className={`font-medium ${
                        product.stock > 10
                          ? "text-green-600"
                          : product.stock > 0
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-3">
                    <Badge variant={product.active ? "success" : "danger"}>
                      {product.active ? "Active" : "Inactive"}
                    </Badge>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toast("Coming soon!")}
                        className="p-2 rounded-lg text-gray-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toast("Coming soon!")}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
