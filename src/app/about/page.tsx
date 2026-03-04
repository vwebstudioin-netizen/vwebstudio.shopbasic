import Link from "next/link";
import {
  ShoppingBag,
  Users,
  Star,
  HeadphonesIcon,
  Truck,
  ShieldCheck,
  BadgePercent,
  Leaf,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us | RetailStore",
  description:
    "Learn about RetailStore — our story, mission, and the team behind your favourite online shopping destination.",
};

const stats = [
  { label: "Products", value: "1,000+", icon: ShoppingBag },
  { label: "Happy Customers", value: "50,000+", icon: Users },
  { label: "Average Rating", value: "4.8★", icon: Star },
  { label: "Support", value: "24/7", icon: HeadphonesIcon },
];

const reasons = [
  {
    icon: Truck,
    title: "Fast & Free Delivery",
    description:
      "Enjoy lightning-fast shipping on all orders. We deliver across India with real-time tracking so you never have to wonder where your order is.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Shop with confidence using Razorpay-powered checkout. Your financial information is encrypted and never stored on our servers.",
  },
  {
    icon: BadgePercent,
    title: "Best Prices Guaranteed",
    description:
      "We work directly with brands and manufacturers to bring you the most competitive prices — no middlemen, no markups.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "From eco-friendly packaging to carbon-neutral shipping options, we're committed to reducing our environmental footprint.",
  },
];

const team = [
  { name: "Aarav Sharma", role: "Founder & CEO" },
  { name: "Priya Patel", role: "Head of Design" },
  { name: "Rohan Mehta", role: "CTO" },
  { name: "Sneha Reddy", role: "Head of Operations" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-28 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-fluid relative z-10 text-center">
          <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About <span className="text-yellow-300">RetailStore</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            We&rsquo;re on a mission to make premium products accessible to
            everyone — with an experience you&rsquo;ll actually enjoy.
          </p>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="container-fluid py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Our Story</h2>
          <p className="section-subheading">
            It all started with a simple idea — what if online shopping felt
            personal again?
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="animate-fade-up space-y-5 text-gray-600">
            <p>
              Founded in 2020, RetailStore began as a small passion project in a
              garage in Bengaluru. We noticed that customers were overwhelmed by
              endless choices yet struggled to find quality products at fair
              prices.
            </p>
            <p>
              Our founder, Aarav Sharma, set out to build a curated marketplace
              that combines the convenience of e-commerce with the trust of your
              neighbourhood store. Every product on our platform is hand-picked,
              quality-tested, and priced transparently.
            </p>
          </div>
          <div className="animate-fade-up space-y-5 text-gray-600">
            <p>
              Today, RetailStore serves over 50,000 happy customers across
              India. We&rsquo;ve grown from 50 products to over 1,000 — but our
              commitment to quality and customer happiness has never changed.
            </p>
            <p>
              We believe shopping should spark joy, not stress. That&rsquo;s why
              we invest heavily in a seamless browsing experience, honest product
              descriptions, hassle-free returns, and a support team that
              actually cares.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-gray-50 py-16">
        <div className="container-fluid">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="animate-fade-up flex flex-col items-center text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm text-gray-500">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="container-fluid py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Why Choose Us</h2>
          <p className="section-subheading">
            Four pillars that set RetailStore apart from the rest.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card animate-fade-up group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="bg-gray-50 py-20">
        <div className="container-fluid">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Meet the Team</h2>
            <p className="section-subheading">
              The passionate people behind your shopping experience.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="card animate-fade-up flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="mb-5 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white">
        <div className="container-fluid relative z-10 text-center">
          <h2 className="animate-fade-up text-3xl font-bold sm:text-4xl">
            Ready to Start Shopping?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Browse our curated collection of 1,000+ products — quality
            guaranteed, prices you&rsquo;ll love.
          </p>
          <Link
            href="/shop"
            className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-yellow-300 hover:text-indigo-700"
          >
            Explore the Shop
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
