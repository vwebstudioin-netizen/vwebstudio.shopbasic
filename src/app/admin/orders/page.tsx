"use client";

import { Eye } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import toast from "react-hot-toast";

const sampleOrders = [
  {
    id: "ORD-2001",
    customer: "Rahul Sharma",
    email: "rahul@example.com",
    date: "02 Mar 2026",
    amount: 2499,
    items: 2,
    status: "pending" as const,
  },
  {
    id: "ORD-2002",
    customer: "Priya Patel",
    email: "priya@example.com",
    date: "01 Mar 2026",
    amount: 5998,
    items: 3,
    status: "confirmed" as const,
  },
  {
    id: "ORD-2003",
    customer: "Amit Kumar",
    email: "amit@example.com",
    date: "28 Feb 2026",
    amount: 1499,
    items: 1,
    status: "shipped" as const,
  },
  {
    id: "ORD-2004",
    customer: "Sneha Reddy",
    email: "sneha@example.com",
    date: "27 Feb 2026",
    amount: 8999,
    items: 4,
    status: "delivered" as const,
  },
  {
    id: "ORD-2005",
    customer: "Vikram Singh",
    email: "vikram@example.com",
    date: "26 Feb 2026",
    amount: 3299,
    items: 2,
    status: "cancelled" as const,
  },
  {
    id: "ORD-2006",
    customer: "Anita Desai",
    email: "anita@example.com",
    date: "25 Feb 2026",
    amount: 4499,
    items: 1,
    status: "delivered" as const,
  },
];

const statusVariant: Record<string, "success" | "info" | "warning" | "danger"> = {
  pending: "warning",
  confirmed: "info",
  shipped: "info",
  delivered: "success",
  cancelled: "danger",
};

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-up">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-500 text-sm mt-1">
          View and manage customer orders
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up">
        {[
          { label: "Total Orders", value: sampleOrders.length, color: "text-gray-900" },
          {
            label: "Pending",
            value: sampleOrders.filter((o) => o.status === "pending").length,
            color: "text-amber-600",
          },
          {
            label: "Shipped",
            value: sampleOrders.filter((o) => o.status === "shipped").length,
            color: "text-blue-600",
          },
          {
            label: "Delivered",
            value: sampleOrders.filter((o) => o.status === "delivered").length,
            color: "text-green-600",
          },
        ].map((stat) => (
          <div key={stat.label} className="card p-4 text-center">
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <p className={`text-xl font-bold mt-1 ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Orders Table */}
      <div className="card animate-fade-up">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Order ID
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Customer
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Date
                </th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">
                  Amount
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
              {sampleOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-5 py-3">
                    <p className="text-gray-900">{order.customer}</p>
                    <p className="text-xs text-gray-400">{order.email}</p>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{order.date}</td>
                  <td className="px-5 py-3 font-medium text-gray-900">
                    {formatPrice(order.amount)}
                  </td>
                  <td className="px-5 py-3">
                    <Badge variant={statusVariant[order.status]}>
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-5 py-3">
                    <button
                      onClick={() => toast("Coming soon!")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View
                    </button>
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
