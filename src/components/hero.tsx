import Image from "next/image";
import { RESTAURANT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Mâm cơm nhà Gia Thành"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/70 via-brown-900/50 to-brown-900/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Logo */}
        <div className="mx-auto mb-6 w-20 md:w-24">
          <Image
            src="/images/logo.png"
            alt="Logo Gia Thành"
            width={96}
            height={96}
            className="w-full rounded-full shadow-lg"
            priority
          />
        </div>
        <h1 className="font-heading text-5xl font-bold leading-tight text-cream md:text-7xl">
          {RESTAURANT.name}
        </h1>
        <p className="mt-3 text-lg tracking-[0.15em] text-gold-light md:text-xl">
          {RESTAURANT.tagline}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`tel:${RESTAURANT.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-terracotta/80 hover:shadow-lg"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Gọi đặt cơm
          </a>
          <a
            href={RESTAURANT.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-8 py-3.5 text-base font-semibold text-gold transition-all hover:bg-gold hover:text-brown-900"
          >
            Nhắn Zalo
          </a>
        </div>
        <p className="mt-6 text-sm text-cream-dark/80">
          {RESTAURANT.deliveryNote}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
