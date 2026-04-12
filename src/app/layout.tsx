import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import { RESTAURANT } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  variable: "--font-playfair",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cơm Nhà Gia Thành | Cơm Nhà Quảng Trị",
  description:
    "Cơm Nhà Gia Thành - Hương vị cơm nhà ấm tình gia đình. Cơm phần 2 người (79k) và 1 người (39k). Giao hàng miễn phí 2km. Gần Thành Cổ Quảng Trị.",
  keywords: [
    "cơm nhà",
    "quảng trị",
    "cơm phần",
    "gia thành",
    "cơm trưa",
    "thành cổ quảng trị",
    "cơm niêu",
    "cơm văn phòng",
  ],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Cơm Nhà Gia Thành",
    description:
      "Cơm Nhà — Vị Quê. 272 Trần Hưng Đạo, Quảng Trị. Cơm phần 2 người 79k, 1 người 39k. Giao hàng miễn phí 2km.",
    locale: "vi_VN",
    type: "website",
    images: ["/images/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT.name,
  description: metadata.description,
  servesCuisine: "Vietnamese",
  address: {
    "@type": "PostalAddress",
    streetAddress: RESTAURANT.address,
    addressLocality: "Quảng Trị",
    addressCountry: "VN",
  },
  telephone: RESTAURANT.phone,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "14:00",
  },
  priceRange: "39,000 - 79,000 VND",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${beVietnam.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
