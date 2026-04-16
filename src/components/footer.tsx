import { RESTAURANT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brown-900 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-8">
        <p className="font-heading text-lg font-bold text-gold">
          {RESTAURANT.name}
        </p>
        <p className="mt-2 text-sm text-cream-dark/60">
          {RESTAURANT.address}
        </p>

        {/* Social links */}
        <div className="mt-5 flex justify-center gap-4">
          <a
            href={RESTAURANT.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brown-800 text-cream-dark/80 transition-all hover:bg-[#1877F2] hover:text-white"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href={RESTAURANT.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zalo"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brown-800 text-cream-dark/80 transition-all hover:bg-[#0068FF] hover:text-white"
          >
            <span className="text-xs font-bold">Zalo</span>
          </a>
          <a
            href={RESTAURANT.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brown-800 text-cream-dark/80 transition-all hover:bg-red-500 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
        </div>

        <div className="mt-6 h-px bg-brown-800" />
        <p className="mt-4 text-xs text-cream-dark/40">
          &copy; {new Date().getFullYear()} {RESTAURANT.name}. Thiết kế bởi DanSolutions.
        </p>
      </div>
    </footer>
  );
}
