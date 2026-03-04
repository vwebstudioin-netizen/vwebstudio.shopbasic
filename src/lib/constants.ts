export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "RetailStore";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const UVP_ITEMS = [
  { icon: "Truck", text: "Free Shipping Over ₹999" },
  { icon: "RefreshCw", text: "Easy 7-Day Returns" },
  { icon: "Shield", text: "Secure Payments" },
  { icon: "Headphones", text: "24/7 Support" },
] as const;

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "Twitter", url: "#" },
] as const;

export const PAYMENT_METHODS = [
  "Visa",
  "Mastercard",
  "UPI",
  "Net Banking",
  "Wallets",
] as const;

export const ORDER_STATUSES = [
  "pending",
  "confirmed",
  "shipped",
  "delivered",
  "cancelled",
] as const;

export const ITEMS_PER_PAGE = 12;
