"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import toast from "react-hot-toast";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["123, MG Road, Indiranagar", "Bengaluru, Karnataka 560038"],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 98765 43210", "+91 80 4567 8901"],
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["support@retailstore.in", "hello@retailstore.in"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon – Sat: 9 AM – 9 PM", "Sun: 10 AM – 6 PM"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));

    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <main className="min-h-screen">
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-fluid relative z-10 text-center">
          <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Have a question, suggestion, or just want to say hi? We&rsquo;d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* ─── Contact Form + Sidebar ─── */}
      <section className="container-fluid py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="animate-fade-up rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Aarav Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="aarav@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what's on your mind…"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="card animate-fade-up rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {item.label}
                    </h3>
                  </div>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-gray-500">
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Map Placeholder ─── */}
      <section className="container-fluid pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200">
          <div className="flex h-80 items-center justify-center bg-gray-100 text-gray-400">
            <div className="text-center">
              <MapPin className="mx-auto mb-3 h-10 w-10" />
              <p className="text-sm font-medium">
                Interactive Map Placeholder
              </p>
              <p className="mt-1 text-xs">
                Integrate Google Maps or Mapbox here
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
