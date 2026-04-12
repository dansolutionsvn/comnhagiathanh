import Image from "next/image";
import { MENU_ITEMS, FULL_MENU } from "@/lib/constants";

export default function MenuSection() {
  return (
    <section id="thuc-don" className="bg-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-gold-dark uppercase">
            Thực đơn
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-brown-900 md:text-4xl">
            Cơm Phần Hàng Ngày
          </h2>
          <div className="ornament mt-1" />
          <p className="mx-auto mt-6 max-w-xl text-brown-700">
            Mỗi ngày chúng tôi thay đổi thực đơn để mang đến sự phong phú,
            luôn tươi ngon như bữa cơm mẹ nấu.
          </p>
        </div>

        {/* Main portion cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.name}
              className={`overflow-hidden rounded-2xl bg-warm-white shadow-md transition-shadow hover:shadow-xl ${
                item.highlight ? "ring-2 ring-gold" : ""
              }`}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {item.highlight && (
                  <span className="absolute top-4 right-4 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-white">
                    Phổ biến
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-bold text-brown-900">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-heading text-2xl font-bold text-gold">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brown-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full detailed menu */}
        <div className="mt-16">
          <h3 className="font-heading text-center text-2xl font-bold text-brown-900 md:text-3xl">
            Thực Đơn Gọi Thêm
          </h3>
          <p className="mt-2 text-center text-sm text-brown-700">
            Các món có thể gọi thêm ngoài cơm phần (giá tính theo nghìn đồng)
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FULL_MENU.map((category) => (
              <div
                key={category.name}
                className="rounded-xl bg-warm-white p-5 shadow-sm"
              >
                <h4 className="font-heading border-b border-gold/30 pb-2 text-lg font-bold text-brown-900">
                  {category.name}
                </h4>
                <ul className="mt-3 space-y-1.5">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-brown-700">
                        {item.hot && (
                          <span className="mr-1 text-terracotta" title="Món hot">
                            🔥
                          </span>
                        )}
                        {item.name}
                      </span>
                      <span className="ml-2 shrink-0 font-medium text-gold-dark">
                        {item.price}k
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Menu images - will show when available */}
        {/* <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Image src="/images/menu/menu-daily.jpg" ... />
          <Image src="/images/menu/menu-promo.jpg" ... />
          <Image src="/images/menu/menu-full.jpg" ... />
        </div> */}
      </div>
    </section>
  );
}
