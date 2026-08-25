import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-display'
});

const manrope = Manrope({ 
  subsets: ['latin', 'vietnamese'], 
  display: 'swap',
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://huemotorbiketours.com'),
  title: 'Hue Motorbike Tours | Authentic Local Experiences in Central Vietnam',
  description: 'Explore Hue like a local. Premium motorbike tours, food experiences, and heritage journeys through the Imperial City, Tam Giang Lagoon, and the DMZ.',
  openGraph: {
    title: 'Hue Motorbike Tours | Authentic Local Experiences',
    description: 'Explore Hue like a local. Premium motorbike tours and food experiences.',
    url: 'https://huemotorbiketours.com',
    siteName: 'Hue Motorbike Tours',
    images: [{ url: '/og-home.webp', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/photo/logo.jpeg',
  },
  twitter: {
    card: "summary_large_image",
    title: "Hue Motorbike Tours | Authentic Local Experiences in Central Vietnam",
    description: "Explore Hue like a local. Premium motorbike tours, food experiences, and heritage journeys.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://huemotorbiketours.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Hue Motorbike Tours",
  "telephone": "+84862391918",
  "areaServed": ["Hue", "Thua Thien Hue"],
  "description": "Premium motorbike tours and authentic local experiences in Hue, Vietnam.",
  "url": "https://huemotorbiketours.com",
  "founder": {
    "@type": "Person",
    "name": "Mai Anh Tu"
  }
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${instrumentSerif.variable} ${manrope.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
