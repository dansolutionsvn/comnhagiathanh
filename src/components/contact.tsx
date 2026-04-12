import { RESTAURANT } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="lien-he" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-gold-dark uppercase">
            Liên hệ
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-brown-900 md:text-4xl">
            Đến Với Chúng Tôi
          </h2>
          <div className="ornament mt-1" />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brown-900">Địa chỉ</h3>
                <p className="mt-1 text-sm text-brown-700">{RESTAURANT.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brown-900">Điện thoại</h3>
                <a href={`tel:${RESTAURANT.phone}`} className="mt-1 block text-sm text-terracotta hover:underline">
                  {RESTAURANT.phone}
                </a>
                <a href={`tel:${RESTAURANT.phone2}`} className="mt-0.5 block text-sm text-terracotta hover:underline">
                  {RESTAURANT.phone2}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brown-900">Giờ mở cửa</h3>
                <p className="mt-1 text-sm text-brown-700">{RESTAURANT.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brown-900">Giao hàng</h3>
                <p className="mt-1 text-sm text-brown-700">{RESTAURANT.deliveryNote}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brown-900">Dịch vụ</h3>
                <ul className="mt-1 space-y-0.5 text-sm text-brown-700">
                  {RESTAURANT.services.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${RESTAURANT.phone}`}
                className="rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta/80"
              >
                Gọi ngay
              </a>
              <a
                href={RESTAURANT.zaloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-gold px-6 py-2.5 text-sm font-semibold text-gold-dark transition-colors hover:bg-gold hover:text-brown-900"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src={RESTAURANT.googleMapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí Cơm Nhà Gia Thành"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
