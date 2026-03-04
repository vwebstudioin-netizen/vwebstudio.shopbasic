import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | RetailStore",
  description:
    "Read RetailStore's privacy policy to understand how we collect, use, and protect your personal information.",
};

const lastUpdated = "1 March 2026";

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you use RetailStore, we may collect the following types of information:

• **Personal Information** — Name, email address, phone number, shipping address, and billing details provided during account creation or checkout.
• **Payment Information** — Payment details are processed securely through our payment partner. We do not store your full card number or CVV on our servers.
• **Usage Data** — Pages visited, products viewed, time spent on site, device type, browser, IP address, and referring URLs collected through cookies and analytics tools.
• **Communications** — Any messages, emails, or feedback you send us through our contact form or support channels.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Process and fulfil your orders, including shipping and delivery.
• Send order confirmations, shipping updates, and receipts.
• Personalise your shopping experience and recommend products.
• Improve our website, services, and customer support.
• Communicate promotional offers and newsletters (you can opt out anytime).
• Detect, prevent, and address fraud, security issues, or technical problems.
• Comply with applicable legal obligations.`,
  },
  {
    title: "3. Data Security",
    content: `We take the security of your data seriously. All data transmitted between your browser and our servers is encrypted using SSL/TLS. We implement industry-standard security measures including:

• Encrypted storage of sensitive personal data.
• Regular security audits and vulnerability assessments.
• Role-based access controls limiting employee access to personal data.
• Secure, PCI-DSS compliant payment processing.

While we strive to protect your information, no method of transmission over the Internet is 100 % secure. We cannot guarantee absolute security but are committed to safeguarding your data to the best of our ability.`,
  },
  {
    title: "4. Third-Party Services",
    content: `We share your information with trusted third parties only as necessary to operate our business:

• **Payment Gateway** — Processes all payment transactions securely. The payment provider's privacy policy governs how they handle your payment data.
• **Shipping Partners** — Receive your name, address, and phone number to deliver orders.
• **Analytics Providers** — We use services such as Google Analytics to understand website traffic and usage patterns. These providers may use cookies and similar technologies.
• **Email Service Providers** — Help us send transactional and promotional emails.

We do not sell, rent, or trade your personal information to any third party for their marketing purposes.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses cookies and similar technologies to:

• Keep you signed in to your account.
• Remember items in your shopping cart.
• Analyse site traffic and user behaviour.
• Deliver relevant advertisements.

You can manage cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• **Access** — Request a copy of the personal data we hold about you.
• **Correction** — Ask us to correct inaccurate or incomplete data.
• **Deletion** — Request deletion of your personal data, subject to legal retention requirements.
• **Opt-Out** — Unsubscribe from marketing communications at any time using the link in our emails.
• **Data Portability** — Request your data in a structured, machine-readable format.

To exercise any of these rights, contact us at **privacy@retailstore.in**.`,
  },
  {
    title: "7. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy, please reach out to us:

• **Email:** privacy@retailstore.in
• **Phone:** +91 98765 43210
• **Address:** 123, MG Road, Indiranagar, Bengaluru, Karnataka 560038

We will respond to your inquiry within 30 business days.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-fluid relative z-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
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
            At <strong>RetailStore</strong>, your privacy matters. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or make a purchase. Please
            read it carefully.
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
            By using RetailStore, you acknowledge that you have read and
            understood this Privacy Policy.
            <br />
            <Link
              href="/contact"
              className="font-medium text-indigo-600 hover:underline"
            >
              Contact us
            </Link>{" "}
            if you have any questions.
          </p>
        </div>
      </section>
    </main>
  );
}
