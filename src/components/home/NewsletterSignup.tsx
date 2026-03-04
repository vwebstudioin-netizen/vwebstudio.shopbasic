"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call (replace with Firestore write in production)
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Thanks for subscribing! 🎉");
    setEmail("");
    setLoading(false);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-fluid relative text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
          Stay in the Loop
        </h2>
        <p className="mt-3 text-primary-100 max-w-md mx-auto">
          Get exclusive deals, new arrivals, and style tips straight to your
          inbox. No spam, we promise!
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            required
          />
          <Button
            type="submit"
            variant="accent"
            size="lg"
            isLoading={loading}
            className="w-full sm:w-auto flex-shrink-0"
          >
            <Send className="w-4 h-4" />
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
