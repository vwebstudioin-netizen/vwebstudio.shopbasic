import HeroBanner from "@/components/home/HeroBanner";
import UVPBar from "@/components/home/UVPBar";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import { DEMO_PRODUCTS } from "@/lib/demo-data";

// In production, replace DEMO_PRODUCTS with:
// import { getFeaturedProducts } from "@/lib/products";
// const products = await getFeaturedProducts(8);

export default async function HomePage() {
  // Using demo data for development — switch to Firestore in production
  const featuredProducts = DEMO_PRODUCTS.filter((p) => p.featured);

  return (
    <>
      <HeroBanner />
      <UVPBar />
      <CategoryShowcase />
      <FeaturedProducts products={featuredProducts} />
      <NewsletterSignup />
    </>
  );
}
