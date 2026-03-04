import { Product } from "@/types/product";

// Demo products for development — replace with Firestore data in production
export const DEMO_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    slug: "classic-cotton-tshirt",
    description:
      "Premium 100% cotton t-shirt with a relaxed fit. Perfect for everyday wear. Breathable fabric keeps you cool all day.",
    price: 799,
    salePrice: 499,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&h=800&fit=crop&q=80",
    ],
    variants: [
      { size: "S", color: "White", stock: 20 },
      { size: "M", color: "White", stock: 15 },
      { size: "L", color: "Black", stock: 10 },
    ],
    stock: 45,
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Wireless Bluetooth Earbuds",
    slug: "wireless-bluetooth-earbuds",
    description:
      "Premium sound quality with active noise cancellation. 24hr battery life with fast charging case.",
    price: 2999,
    salePrice: 1999,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=800&fit=crop&q=80",
    ],
    variants: [],
    stock: 30,
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Minimalist Desk Lamp",
    slug: "minimalist-desk-lamp",
    description:
      "Modern LED desk lamp with touch dimmer and USB charging port. Adjustable brightness and color temperature.",
    price: 1499,
    salePrice: null,
    category: "home-living",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop&q=80",
    ],
    variants: [
      { size: "Standard", color: "Black", stock: 12 },
      { size: "Standard", color: "White", stock: 8 },
    ],
    stock: 20,
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    slug: "leather-crossbody-bag",
    description:
      "Genuine leather crossbody bag with adjustable strap and multiple compartments. Handcrafted with premium materials.",
    price: 3499,
    salePrice: 2799,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop&q=80",
    ],
    variants: [
      { size: "One Size", color: "Tan", stock: 5 },
      { size: "One Size", color: "Black", stock: 7 },
    ],
    stock: 12,
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Organic Scented Candle Set",
    slug: "organic-scented-candle-set",
    description:
      "Set of 3 hand-poured soy candles in lavender, vanilla, and sandalwood. Burns for up to 45 hours each.",
    price: 999,
    salePrice: 749,
    category: "home-living",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&h=800&fit=crop&q=80",
    ],
    variants: [],
    stock: 50,
    featured: false,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: "Smartwatch Pro X",
    slug: "smartwatch-pro-x",
    description:
      "Fitness tracking, heart rate monitor, GPS, and 7-day battery life. Water resistant to 50 meters.",
    price: 5999,
    salePrice: 4499,
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop&q=80",
    ],
    variants: [
      { size: "42mm", color: "Black", stock: 10 },
      { size: "44mm", color: "Silver", stock: 8 },
    ],
    stock: 18,
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Printed Silk Scarf",
    slug: "printed-silk-scarf",
    description:
      "Luxurious 100% silk scarf with hand-painted floral print. Perfect for any occasion — casual or formal.",
    price: 1299,
    salePrice: null,
    category: "fashion",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601924921557-45e8fb00d0ee?w=800&h=800&fit=crop&q=80",
    ],
    variants: [
      { size: "Standard", color: "Blue", stock: 15 },
      { size: "Standard", color: "Rose", stock: 12 },
    ],
    stock: 27,
    featured: false,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Stainless Steel Water Bottle",
    slug: "stainless-steel-water-bottle",
    description:
      "Double-wall vacuum insulated bottle. Keeps drinks cold 24hrs / hot 12hrs. BPA-free and eco-friendly.",
    price: 699,
    salePrice: 499,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=800&h=800&fit=crop&q=80",
    ],
    variants: [
      { size: "500ml", color: "Matte Black", stock: 30 },
      { size: "750ml", color: "Matte Black", stock: 20 },
    ],
    stock: 50,
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
  },
];
