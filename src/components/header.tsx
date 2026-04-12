"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RESTAURANT, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brown-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Mobile: hamburger left */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        {/* Logo - centered on mobile, left on desktop */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <div className="rounded-md bg-cream/90 p-1">
            <Image
              src="/images/logo-horizontal-small.png"
              alt={RESTAURANT.name}
              width={160}
              height={48}
              className="h-9 w-auto"
              priority
            />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${RESTAURANT.phone}`}
            className="rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-terracotta/80"
          >
            Gọi ngay
          </a>
        </div>

        {/* Mobile: spacer right to balance hamburger */}
        <div className="w-6 md:hidden" />
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-brown-900/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-4 px-4 pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-cream transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="mt-2 rounded-full bg-terracotta px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Gọi ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
