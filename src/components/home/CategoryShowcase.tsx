import Link from "next/link";

const CATEGORIES = [
  {
    name: "Fashion",
    slug: "fashion",
    emoji: "👗",
    color: "from-pink-400 to-rose-500",
    count: "120+ Items",
  },
  {
    name: "Electronics",
    slug: "electronics",
    emoji: "📱",
    color: "from-blue-400 to-indigo-500",
    count: "80+ Items",
  },
  {
    name: "Home & Living",
    slug: "home-living",
    emoji: "🏠",
    color: "from-amber-400 to-orange-500",
    count: "60+ Items",
  },
  {
    name: "Accessories",
    slug: "accessories",
    emoji: "⌚",
    color: "from-emerald-400 to-teal-500",
    count: "95+ Items",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="section-heading">Shop by Category</h2>
          <p className="section-subheading mx-auto">
            Find exactly what you&apos;re looking for
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/shop?category=${cat.slug}`}
              className="group animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="card p-6 text-center hover:-translate-y-1">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {cat.emoji}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
