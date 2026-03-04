"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ShoppingBag, User, Home, Grid3X3, Info, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

const NAV_ICONS: Record<string, React.ReactNode> = {
  "/": <Home className="w-5 h-5" />,
  "/shop": <Grid3X3 className="w-5 h-5" />,
  "/about": <Info className="w-5 h-5" />,
  "/contact": <Phone className="w-5 h-5" />,
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold font-heading">
              Shop<span className="text-primary-600">Name</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 font-medium"
            >
              {NAV_ICONS[link.href]}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-4 border-t" />

        {/* Account link */}
        <div className="p-4">
          <Link
            href="/admin"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 font-medium"
          >
            <User className="w-5 h-5" />
            Admin Panel
          </Link>
        </div>

        {/* Footer area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
          <p className="text-xs text-gray-400 text-center">
            © 2024 ShopName. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
