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
      ? "Khám phá lịch sử, Đại Nội, lăng tẩm, ẩm thực và các địa điểm nổi bật ở Huế qua cẩm nang du lịch song ngữ của Hue Motorbike Tours."
      : "Explore Hue's imperial history, landmarks, royal tombs and food with this bilingual travel guide from Hue Motorbike Tours.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://huebiketour.com/${locale}/about-hue`,
      languages: {
        en: "https://huebiketour.com/en/about-hue",
        vi: "https://huebiketour.com/vi/about-hue",
        "x-default": "https://huebiketour.com/en/about-hue",
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
