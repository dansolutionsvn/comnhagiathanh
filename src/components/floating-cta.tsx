"use client";

import { RESTAURANT } from "@/lib/constants";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1080 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="540" cy="540" r="540" fill="white" />
      <path
        d="M293.8 196.3C238.5 268.5 205.8 358.3 205.8 456c0 80.4 22.5 155.7 61.5 219.8-4.3 15.2-17.8 53.4-46.7 107.7-7.5 14.1 5.8 29.5 20.7 24.1 59.1-21.3 100.5-40.7 124.2-52.8 57.8 30.4 123.6 47.6 193.5 47.6 211.8 0 389.3-131.7 461.2-316.4H660.8c-14.3 0-25.9-11.6-25.9-25.9s11.6-25.9 25.9-25.9h373.8c3.1-18.4 5.1-37.2 6.1-56.2H706.6c-14.3 0-25.9-11.6-25.9-25.9s11.6-25.9 25.9-25.9h333.6c-1.6-19.1-4.3-37.8-8-56.2H706.6c-14.3 0-25.9-11.6-25.9-25.9s11.6-25.9 25.9-25.9h312.6C965.3 299.5 846.9 196.3 706.6 196.3H293.8z"
        fill="#0068FF"
      />
      <path
        d="M418.3 547.7c-21.5 0-38.5-7.3-50.8-21.9-12.3-14.6-18.5-34.8-18.5-60.7 0-27.2 6.3-48.2 18.8-63.2 12.5-14.9 29.5-22.4 50.8-22.4 21.3 0 38.2 7.5 50.5 22.4 12.3 15 18.5 36 18.5 63.2 0 25.9-6.2 46.1-18.5 60.7-12.3 14.6-29.3 21.9-50.8 21.9zm.3-27.8c10.5 0 18.7-5.5 24.6-16.6 5.9-11 8.8-26.3 8.8-45.7 0-19.4-2.9-34.4-8.8-45.1-5.9-10.7-14.1-16-24.6-16s-18.8 5.3-24.9 16c-6.1 10.7-9.2 25.7-9.2 45.1 0 19.4 3.1 34.7 9.2 45.7 6.1 11.1 14.4 16.6 24.9 16.6z"
        fill="white"
      />
      <path
        d="M535.5 544.6V386.5h-17.8c-5.2 0-9.4-4.2-9.4-9.4v-.6c0-5.2 4.2-9.4 9.4-9.4h53.4v177.5h17.2c5.2 0 9.4 4.2 9.4 9.4v.6c0 5.2-4.2 9.4-9.4 9.4h-69.8c-5.2 0-9.4-4.2-9.4-9.4v-.6c0-5.2 4.2-9.4 9.4-9.4h17z"
        fill="white"
      />
      <path
        d="M266.8 544.6V399.2l-101.2 145.4h135.6c5.2 0 9.4 4.2 9.4 9.4v.6c0 5.2-4.2 9.4-9.4 9.4H126.6c-7.2 0-11.3-8.2-6.9-13.8l119.6-170.8c3-4.3 1.1-10.2-3.8-11.8-.8-.3-1.7-.4-2.6-.4h-82.5c-5.2 0-9.4-4.2-9.4-9.4v-.6c0-5.2 4.2-9.4 9.4-9.4h117.2c7.2 0 11.3 8.2 6.9 13.8L158.1 525.2"
        fill="white"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function FloatingCTA() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {/* Zalo */}
      <a
        href={RESTAURANT.zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] shadow-lg shadow-blue-500/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40"
        aria-label="Nhắn Zalo"
      >
        <ZaloIcon className="h-14 w-14" />
      </a>

      {/* Phone */}
      <a
        href={`tel:${RESTAURANT.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 animate-pulse"
        aria-label="Gọi điện"
        style={{ animationDuration: "2s" }}
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
