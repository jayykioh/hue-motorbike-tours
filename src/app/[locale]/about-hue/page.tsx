import type { Metadata } from "next";
import AboutHueHero from "@/components/about/AboutHueHero";
import HistorySection from "@/components/about/HistorySection";
import LandmarksGrid from "@/components/about/LandmarksGrid";
import CultureFood from "@/components/about/CultureFood";
import BestTimeSection from "@/components/about/BestTimeSection";
import ExploreWithUsCTA from "@/components/about/ExploreWithUsCTA";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "vi"
      ? "Về Huế — Lịch Sử, Địa Điểm Nổi Bật & Ẩm Thực | Hue Motorbike Tours"
      : "About Hue City — History, Landmarks & Culture | Hue Motorbike Tours";

  const description =
    locale === "vi"
      ? "Tìm hiểu về Huế — cố đô Việt Nam với hơn 700 năm lịch sử, 7 di tích UNESCO, ẩm thực hoàng gia độc đáo và những địa điểm nổi bật nhất. Hướng dẫn du lịch Huế toàn diện nhất."
      : "Discover Hue — Vietnam's ancient imperial capital with 700+ years of history, 7 UNESCO monuments, royal cuisine, and unmissable landmarks. The most complete Hue travel guide.";

  return {
    title,
    description,
    keywords:
      locale === "vi"
        ? [
            "về Huế",
            "lịch sử Huế",
            "địa điểm du lịch Huế",
            "ẩm thực Huế",
            "di tích Huế",
            "Đại Nội Huế",
            "du lịch Huế",
            "văn hóa Huế",
          ]
        : [
            "about Hue Vietnam",
            "Hue history",
            "Hue landmarks",
            "Hue Imperial City",
            "things to do in Hue",
            "Hue travel guide",
            "visit Hue Vietnam",
            "Hue culture food",
            "best time to visit Hue",
          ],
    alternates: {
      canonical: `https://huebiketour.com/${locale}/about-hue`,
      languages: {
        en: "https://huebiketour.com/en/about-hue",
        vi: "https://huebiketour.com/vi/about-hue",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://huebiketour.com/${locale}/about-hue`,
      images: [
        {
          url: "/photo/about-hue-aerial-hero.jpg",
          width: 1200,
          height: 675,
          alt: "Aerial view of Hue Imperial Citadel at golden hour",
        },
      ],
    },
  };
}

export default async function AboutHuePage({ params }: Props) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: locale === "vi" ? "Cố Đô Huế" : "Hue Imperial City, Vietnam",
    description:
      locale === "vi"
        ? "Cố đô Huế — Kinh đô của triều Nguyễn từ 1802 đến 1945, được UNESCO công nhận là Di sản Văn hóa Thế giới năm 1993. Quần thể di tích hoàng gia bao gồm Đại Nội, 7 lăng tẩm, nhiều chùa chiền và cung điện."
        : "Hue — imperial capital of the Nguyen Dynasty from 1802 to 1945, recognized by UNESCO as a World Heritage Site in 1993. The royal heritage complex includes the Imperial Citadel, 7 royal tombs, and numerous pagodas and palaces.",
    url: `https://huebiketour.com/${locale}/about-hue`,
    image: "https://huebiketour.com/photo/about-hue-aerial-hero.jpg",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 16.4637,
      longitude: 107.591,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hue",
      addressRegion: "Thua Thien Hue",
      addressCountry: "VN",
    },
    touristType: ["History enthusiasts", "Cultural travelers", "Adventure tourists", "Food lovers"],
    includesAttraction: [
      {
        "@type": "TouristAttraction",
        name: "Hue Imperial Citadel",
        description: "UNESCO World Heritage royal complex of the Nguyen Dynasty",
      },
      {
        "@type": "TouristAttraction",
        name: "Thien Mu Pagoda",
        description: "Hue's iconic 7-storey pagoda overlooking the Perfume River",
      },
      {
        "@type": "TouristAttraction",
        name: "Tam Giang Lagoon",
        description: "Southeast Asia's largest lagoon system",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex-1 flex flex-col w-full -mt-16">
        {/* 1. Hero — aerial photo, stats bar */}
        <AboutHueHero locale={locale} />
        {/* 2. History — 4-phase timeline */}
        <HistorySection locale={locale} />
        {/* 3. Landmarks — 6-card grid */}
        <LandmarksGrid locale={locale} />
        {/* 4. Culture & Food — 2-column */}
        <CultureFood locale={locale} />
        {/* 5. Best Time to Visit — bar chart + season cards */}
        <BestTimeSection locale={locale} />
        {/* 6. CTA — Explore with us */}
        <ExploreWithUsCTA locale={locale} />
      </div>
    </>
  );
}
