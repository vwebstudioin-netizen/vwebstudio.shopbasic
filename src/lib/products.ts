import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  QueryConstraint,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

const PRODUCTS_COLLECTION = "products";

export async function getProducts(options?: {
  category?: string;
  featured?: boolean;
  limitCount?: number;
}): Promise<Product[]> {
  const constraints: QueryConstraint[] = [
    where("active", "==", true),
    orderBy("createdAt", "desc"),
  ];

  if (options?.category) {
    constraints.push(where("category", "==", options.category));
  }
  if (options?.featured) {
    constraints.push(where("featured", "==", true));
  }
  if (options?.limitCount) {
    constraints.push(limit(options.limitCount));
  }

  const q = query(collection(db, PRODUCTS_COLLECTION), ...constraints);
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const q = query(
    collection(db, PRODUCTS_COLLECTION),
    where("slug", "==", slug),
    where("active", "==", true),
    limit(1)
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() } as Product;
}

export async function getProductById(
  id: string
): Promise<Product | null> {
  const docSnap = await getDoc(doc(db, PRODUCTS_COLLECTION, id));
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() } as Product;
}

export async function getFeaturedProducts(
  count: number = 8
): Promise<Product[]> {
  return getProducts({ featured: true, limitCount: count });
}

export async function getCategories(): Promise<string[]> {
  // For the basic tier, we derive categories from products
  const products = await getProducts();
  const cats = new Set(products.map((p) => p.category));
  return Array.from(cats);
}
