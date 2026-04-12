import Image from "next/image";
import { REVIEW_IMAGES, RESTAURANT } from "@/lib/constants";

export default function Reviews() {
  return (
    <section id="danh-gia" className="bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-gold-dark uppercase">
            Đánh giá
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-brown-900 md:text-4xl">
            Khách Hàng Nói Gì
          </h2>
          <div className="ornament mt-1" />
          <p className="mx-auto mt-6 max-w-xl text-brown-700">
            Đánh giá thực tế từ khách hàng trên Google Maps
          </p>
        </div>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {REVIEW_IMAGES.map((review) => (
            <div
              key={review.src}
              className="min-w-[280px] shrink-0 overflow-hidden rounded-2xl bg-warm-white shadow-sm md:min-w-0"
            >
              <div className="relative w-full">
                <Image
                  src={review.src}
                  alt={review.alt}
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={RESTAURANT.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:underline"
          >
            Xem thêm đánh giá trên Google Maps
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
