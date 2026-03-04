# Retail Store — Basic Tier

A modern, fluid, and eye-catching retail store template built with **Next.js 14**, **Firebase**, **Razorpay**, and **Tailwind CSS**. Designed for **$0/month deployment** on Vercel Hobby + Firebase Spark free tier.

## 🚀 Tech Stack

| Layer | Technology | Plan |
|-------|-----------|------|
| Framework | Next.js 14 (App Router) | — |
| UI | React 18 + Tailwind CSS v3 | — |
| Database | Firebase Firestore | Spark (Free) |
| Auth | Firebase Auth | Spark (Free) |
| Storage | Firebase Storage | Spark (5GB) |
| Payments | Razorpay Checkout | Pay per txn |
| State | Zustand (cart) | — |
| Hosting | Vercel | Hobby (Free) |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, header, footer)
│   ├── page.tsx             # Home page
│   ├── loading.tsx          # Global loading spinner
│   ├── not-found.tsx        # 404 page
│   ├── shop/
│   │   ├── page.tsx         # Product listing with filters
│   │   └── [slug]/page.tsx  # Product detail
│   ├── cart/page.tsx        # Shopping cart
│   ├── checkout/
│   │   ├── page.tsx         # Checkout with Razorpay
│   │   └── success/page.tsx # Order confirmation
│   ├── about/page.tsx       # About us
│   ├── contact/page.tsx     # Contact form
│   ├── privacy/page.tsx     # Privacy policy
│   ├── terms/page.tsx       # Terms of service
│   ├── admin/
│   │   ├── layout.tsx       # Admin auth guard + sidebar
│   │   ├── page.tsx         # Dashboard overview
│   │   ├── products/page.tsx # Product management
│   │   └── orders/page.tsx  # Order management
│   └── api/
│       ├── order/route.ts   # Create Razorpay order
│       ├── verify/route.ts  # Verify payment signature
│       ├── webhook/route.ts # Razorpay webhooks
│       └── contact/route.ts # Contact form handler
├── components/
│   ├── ui/          # Button, Input, Badge, Skeleton
│   ├── layout/      # Header, Footer, MobileMenu
│   ├── home/        # HeroBanner, UVPBar, CategoryShowcase, FeaturedProducts, Newsletter
│   └── product/     # ProductCard, ProductGrid
├── lib/
│   ├── firebase.ts       # Client SDK
│   ├── firebase-admin.ts # Admin SDK
│   ├── razorpay.ts       # Server + client helpers
│   ├── products.ts       # Firestore product queries
│   ├── demo-data.ts      # Sample products for dev
│   ├── utils.ts          # cn(), formatPrice(), etc.
│   └── constants.ts      # Nav links, UVP items, etc.
├── store/
│   └── cart-store.ts     # Zustand cart with localStorage
└── types/
    ├── product.ts
    ├── cart.ts
    ├── order.ts
    └── index.ts
```

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.local.example .env.local

# 3. Fill in your Firebase & Razorpay credentials in .env.local

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🔑 Environment Variables

See `.env.local.example` for all required variables:
- `NEXT_PUBLIC_FIREBASE_*` — Firebase client config
- `FIREBASE_SERVICE_ACCOUNT_KEY` — Firebase Admin (JSON string)
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` — Razorpay public key
- `RAZORPAY_KEY_SECRET` — Razorpay secret
- `RAZORPAY_WEBHOOK_SECRET` — Webhook verification

## 💰 Cost Breakdown

| Service | Free Tier Limits | Monthly Cost |
|---------|-----------------|-------------|
| Vercel Hobby | 100GB bandwidth | $0 |
| Firebase Spark | 1GiB storage, 50K reads/day | $0 |
| Razorpay | No monthly fee | 2% per domestic txn |
| **Total** | | **$0/month + payment fees** |

## 🎨 Design Features

- Fluid animations (fade-up, scale-in, slide effects)
- Glassmorphism effects on header scroll
- Gradient hero sections
- Responsive mobile-first design
- Custom skeleton loading states
- Smooth page transitions

## 📦 Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 📝 Notes

- **Demo Data**: The template uses `demo-data.ts` for development. Switch to Firestore queries in `lib/products.ts` for production.
- **Admin Auth**: The admin panel uses Firebase email/password auth. Create an admin user in Firebase Console first.
- **SEO**: `next-sitemap` generates sitemap.xml on build. Update `next-sitemap.config.js` with your domain.

---

Built with ❤️ for Indian e-commerce entrepreneurs.
