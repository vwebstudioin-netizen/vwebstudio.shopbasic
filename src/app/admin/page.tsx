"use client";

import { IndianRupee, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

const stats = [
  {
    title: "Total Revenue",
    value: formatPrice(284500),
    icon: IndianRupee,
    change: "+12.5%",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Total Orders",
    value: "156",
    icon: ShoppingCart,
    change: "+8.2%",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Total Products",
    value: "48",
    icon: Package,
    change: "+3",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Avg Order Value",
    value: formatPrice(1824),
    icon: TrendingUp,
    change: "+4.1%",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

const recentOrders = [
  {
    id: "ORD-1001",
    customer: "Rahul Sharma",
    date: "28 Feb 2026",
    amount: 2499,
    status: "delivered" as const,
  },
  {
    id: "ORD-1002",
    customer: "Priya Patel",
    date: "27 Feb 2026",
    amount: 5998,
    status: "shipped" as const,
  },
  {
    id: "ORD-1003",
    customer: "Amit Kumar",
    date: "27 Feb 2026",
    amount: 1499,
    status: "confirmed" as const,
  },
  {
    id: "ORD-1004",
    customer: "Sneha Reddy",
    date: "26 Feb 2026",
    amount: 3299,
    status: "pending" as const,
  },
  {
    id: "ORD-1005",
    customer: "Vikram Singh",
    date: "25 Feb 2026",
    amount: 4499,
    status: "cancelled" as const,
  },
];

const statusVariant: Record<string, "success" | "info" | "warning" | "danger"> = {
  delivered: "success",
  shipped: "info",
  confirmed: "info",
  pending: "warning",
  cancelled: "danger",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-up">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          Welcome back! Here&apos;s what&apos;s happening with your store.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-up">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-green-600 font-medium mt-1">
                    {stat.change} from last month
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="card animate-fade-up">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Orders
          </h2>
        </div>
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
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-5 py-3 text-gray-600">{order.customer}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
