import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center animate-fade-up">
        <h1 className="text-8xl font-extrabold font-heading text-primary-600">
          404
        </h1>
        <p className="mt-4 text-xl font-medium text-gray-700">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/shop" className="btn-secondary">
            Browse Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
