"use client";

import Image from "next/image";
import { RESTAURANT } from "@/lib/constants";

export default function FloatingCTA() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {/* Zalo */}
      <a
        href={RESTAURANT.zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40"
        aria-label="Nhắn Zalo"
      >
        <Image
          src="/images/zalo-icon.png"
          alt="Zalo"
          width={56}
          height={56}
          className="h-14 w-14"
        />
      </a>

      {/* Phone */}
      <a
        href={`tel:${RESTAURANT.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 animate-pulse"
        aria-label="Gọi điện"
        style={{ animationDuration: "2s" }}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      </a>
    </div>
  );
}
