import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | RetailStore",
  description:
    "Review the terms and conditions that govern your use of the RetailStore website and services.",
};

const lastUpdated = "1 March 2026";

const sections = [
  {
    title: "1. Agreement to Terms",
    content: `By accessing or using the RetailStore website ("Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you must not use our Site or services.

These Terms apply to all visitors, users, and customers of the Site. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site after changes are posted constitutes acceptance of the revised Terms.`,
  },
  {
    title: "2. Products & Pricing",
    content: `• All product prices on RetailStore are listed in **Indian Rupees (INR)** and are inclusive of applicable taxes unless stated otherwise.
• We make every effort to display accurate product descriptions, images, and pricing. However, errors may occur. In such cases, we reserve the right to correct the error and update the order accordingly, or cancel the order with a full refund.
• Prices are subject to change without notice. Promotional prices are valid only for the duration specified.
• Product availability is not guaranteed and may vary.`,
  },
  {
    title: "3. Orders & Payments",
    content: `• By placing an order, you represent that the information you provide is accurate and that you are authorised to use the payment method supplied.
• All payments are securely processed through **Razorpay**, our trusted payment gateway partner. We support UPI, credit/debit cards, net banking, and popular wallets.
• An order is confirmed only after successful payment. You will receive an email confirmation with your order details.
• We reserve the right to refuse or cancel any order at our sole discretion — including orders that appear fraudulent, violate our policies, or contain pricing/product errors.`,
  },
  {
    title: "4. Shipping & Delivery",
    content: `• We currently ship across India. Delivery timelines are estimated and may vary based on your location and courier availability.
• Standard delivery typically takes 5 – 7 business days. Express delivery options may be available at checkout for select pin codes.
• Shipping charges, if applicable, will be displayed at checkout before payment.
• Risk of loss and title for items transfer to you upon delivery to the carrier.
• If a shipment is delayed beyond the estimated window, please contact our support team for assistance.`,
  },
  {
    title: "5. Returns & Refunds",
    content: `• We offer a **7-day return window** from the date of delivery for most products, provided the item is unused, in its original packaging, and in the same condition you received it.
• To initiate a return, contact us at **returns@retailstore.in** with your order number and reason for return.
• Once we receive and inspect the returned item, we will process your refund within 5 – 7 business days. Refunds will be credited to your original payment method.
• Certain categories (e.g., personal care, innerwear, perishable goods) are **not eligible** for returns unless the product is damaged or defective.
• If you receive a damaged or defective product, please contact us within 48 hours of delivery with photographs for a replacement or full refund.`,
  },
  {
    title: "6. Limitation of Liability",
    content: `To the fullest extent permitted by applicable law:

• RetailStore, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or purchase of products.
• Our total liability for any claim related to our services shall not exceed the amount paid by you for the specific product or transaction in question.
• We do not guarantee uninterrupted, error-free, or secure access to the Site at all times. We are not responsible for any loss resulting from service disruptions, data loss, or unauthorised access beyond our reasonable control.`,
  },
  {
    title: "7. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of **India**. Any disputes arising from or in connection with these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts in **Bengaluru, Karnataka, India**.`,
  },
  {
    title: "8. Contact",
    content: `If you have any questions about these Terms of Service, please contact us:

• **Email:** legal@retailstore.in
• **Phone:** +91 98765 43210
• **Address:** 123, MG Road, Indiranagar, Bengaluru, Karnataka 560038

We aim to respond to all inquiries within 3 – 5 business days.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-fluid relative z-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
            <FileText className="h-7 w-7" />
          </div>
          <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-4 text-sm text-white/70">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="container-fluid py-20">
        <div className="mx-auto max-w-3xl">
          <p className="animate-fade-up mb-12 text-gray-600">
            Welcome to <strong>RetailStore</strong>. These Terms of Service
            govern your access to and use of our website, products, and
            services. By using our platform, you agree to comply with and be
            bound by the following terms and conditions.
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <article key={section.title} className="animate-fade-up">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  {section.title}
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          <hr className="my-16 border-gray-200" />

          <p className="animate-fade-up text-center text-sm text-gray-400">
            By using RetailStore, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service.
            <br />
            <Link
              href="/privacy"
              className="font-medium text-indigo-600 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link
              href="/contact"
              className="font-medium text-indigo-600 hover:underline"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
