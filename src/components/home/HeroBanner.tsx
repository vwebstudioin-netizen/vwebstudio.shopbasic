"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-fluid relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-16 sm:py-20 lg:py-28">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              New Arrivals for 2024
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-gray-900 leading-tight tracking-tight">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Perfect Style
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Shop the latest trends in fashion, electronics, and lifestyle.
              Premium quality products at prices that make you smile.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <Link
                href="/shop"
                className="btn-primary group w-full sm:w-auto"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="btn-secondary w-full sm:w-auto"
              >
                Our Story
              </Link>
            </div>
            {/* Trust badges */}
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Free Shipping 499+
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                COD Available
              </span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden shadow-2xl shadow-primary-200/50">
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-white/60 backdrop-blur flex items-center justify-center shadow-lg">
                    <Sparkles className="w-10 h-10 text-primary-600" />
                  </div>
                  <p className="mt-4 text-primary-700 font-medium text-sm">
                    Hero Image Placeholder
                  </p>
                  <p className="text-primary-500 text-xs mt-1">
                    Replace with product photography
                  </p>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce-soft">
                <p className="text-xs font-semibold text-gray-900">🔥 Trending</p>
                <p className="text-[10px] text-gray-500 mt-0.5">1200+ items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
