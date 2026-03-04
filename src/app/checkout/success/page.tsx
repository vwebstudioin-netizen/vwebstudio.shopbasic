"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md animate-fade-up">
        <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6 animate-scale-in">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-extrabold font-heading text-gray-900">
          Order Confirmed!
        </h1>
        <p className="mt-3 text-gray-500">
          Thank you for your purchase. We&apos;ll send you a confirmation email
          shortly.
        </p>
        {orderId && (
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Order ID
            </p>
            <p className="mt-1 text-sm font-mono font-semibold text-gray-900">
              {orderId}
            </p>
          </div>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/shop" className="btn-primary gap-2 w-full sm:w-auto">
            Continue Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
          <Package className="w-4 h-4" />
          <span>Your order will be shipped within 2-3 business days</span>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
