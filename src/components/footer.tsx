import { RESTAURANT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brown-900 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-8">
        <p className="font-heading text-lg font-bold text-gold">
          {RESTAURANT.name}
        </p>
        <p className="mt-2 text-sm text-cream-dark/60">
          {RESTAURANT.address}
        </p>
        <div className="mt-4 h-px bg-brown-800" />
        <p className="mt-4 text-xs text-cream-dark/40">
          &copy; {new Date().getFullYear()} {RESTAURANT.name}. Thiết kế bởi DanSolutions.
        </p>
      </div>
    </footer>
  );
}
