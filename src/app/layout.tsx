import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import { RESTAURANT } from "@/lib/constants";
import "./globals.css";

const SITE_URL = "https://comnhagiathanh.com";

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
  metadataBase: new URL(SITE_URL),
  title: "Cơm Nhà Gia Thành | Cơm Nhà Quảng Trị",
  description:
    "Cơm Nhà Gia Thành - Hương vị cơm nhà ấm tình gia đình. Cơm phần 2 người (79k) và 1 người (39k). Giao hàng miễn phí 2km. Gần Thành Cổ Quảng Trị.",
  keywords: [
    "cơm nhà",
    "cơm nhà quảng trị",
    "quán cơm quảng trị",
    "cơm phần quảng trị",
    "gia thành",
    "cơm trưa quảng trị",
    "thành cổ quảng trị",
    "cơm niêu",
    "cơm văn phòng quảng trị",
    "giao cơm quảng trị",
    "quán cơm gần thành cổ",
    "272 trần hưng đạo quảng trị",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Cơm Nhà Gia Thành | Cơm Nhà — Vị Quê",
    description:
      "Cơm Nhà — Vị Quê. 272 Trần Hưng Đạo, Quảng Trị. Cơm phần 2 người 79k, 1 người 39k. Giao hàng miễn phí 2km.",
    url: SITE_URL,
    siteName: "Cơm Nhà Gia Thành",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mâm cơm nhà Gia Thành - Cơm Nhà Vị Quê",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cơm Nhà Gia Thành | Cơm Nhà — Vị Quê",
    description:
      "Cơm phần 79k/39k tại 272 Trần Hưng Đạo, Quảng Trị. Giao hàng miễn phí 2km.",
    images: ["/images/hero.jpg"],
  },
  category: "restaurant",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: RESTAURANT.name,
  alternateName: "Gia Thành",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: [
    `${SITE_URL}/images/hero.jpg`,
    `${SITE_URL}/images/about.jpg`,
    `${SITE_URL}/images/menu/com-2-nguoi.jpg`,
    `${SITE_URL}/images/menu/com-1-nguoi.jpg`,
  ],
  description:
    "Cơm Nhà Gia Thành - quán cơm phần phong cách bếp xưa, décor Pháp cổ, gần Thành Cổ Quảng Trị. Phục vụ cơm trưa, giao hàng miễn phí 2km.",
  servesCuisine: ["Vietnamese", "Cơm Nhà", "Cơm Niêu"],
  telephone: [RESTAURANT.phone, RESTAURANT.phone2],
  priceRange: "39.000đ - 79.000đ",
  currenciesAccepted: "VND",
  paymentAccepted: "Cash, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "272 Trần Hưng Đạo",
    addressLocality: "Phường Quảng Trị",
    addressRegion: "Quảng Trị",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.7533189,
    longitude: 107.1865452,
  },
  hasMap: RESTAURANT.googleMapsLink,
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
  acceptsReservations: true,
  sameAs: [
    RESTAURANT.zaloLink,
    RESTAURANT.googleMapsLink,
    RESTAURANT.facebookLink,
  ],
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
