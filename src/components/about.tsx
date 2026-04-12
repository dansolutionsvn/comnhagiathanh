import Image from "next/image";
import { ABOUT_TEXT } from "@/lib/constants";

export default function About() {
  return (
    <section id="gioi-thieu" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/about.jpg"
              alt="Mặt tiền quán Cơm Nhà Gia Thành"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-gold-dark uppercase">
              Về chúng tôi
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-brown-900 md:text-4xl">
              {ABOUT_TEXT.title}
            </h2>
            <div className="ornament mt-1" />
            <div className="mt-8 space-y-4">
              {ABOUT_TEXT.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-brown-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
