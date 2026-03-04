export interface ProductVariant {
  size?: string;
  color?: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice: number | null;
  category: string;
  images: string[];
  variants: ProductVariant[];
  stock: number;
  featured: boolean;
  active: boolean;
  createdAt: string | Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  order: number;
}
