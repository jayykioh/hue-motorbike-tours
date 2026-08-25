"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Mountain, Waves, Compass, Sun, Camera, Map } from "lucide-react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";

const partnerLogos: LogoItem[] = [
  { node: <span className="flex items-center gap-4 font-display text-xl tracking-wider opacity-90 px-6"><Mountain className="w-6 h-6 text-[var(--color-terracotta)]" /> Hai Van Pass</span> },
  { node: <span className="flex items-center gap-4 font-display text-xl tracking-wider opacity-90 px-6"><Waves className="w-6 h-6 text-[var(--color-terracotta)]" /> Lang Co Beach</span> },
  { node: <span className="flex items-center gap-4 font-display text-xl tracking-wider opacity-90 px-6"><Sun className="w-6 h-6 text-[var(--color-terracotta)]" /> Dream Spring</span> },
  { node: <span className="flex items-center gap-4 font-display text-xl tracking-wider opacity-90 px-6"><MapPin className="w-6 h-6 text-[var(--color-terracotta)]" /> Imperial City</span> },
  { node: <span className="flex items-center gap-4 font-display text-xl tracking-wider opacity-90 px-6"><Compass className="w-6 h-6 text-[var(--color-terracotta)]" /> Perfume River</span> },
  { node: <span className="flex items-center gap-4 font-display text-xl tracking-wider opacity-90 px-6"><Map className="w-6 h-6 text-[var(--color-terracotta)]" /> Thien Mu Pagoda</span> },
  { node: <span className="flex items-center gap-4 font-display text-xl tracking-wider opacity-90 px-6"><Camera className="w-6 h-6 text-[var(--color-terracotta)]" /> Lap An Lagoon</span> },
];

export default function Hero() {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      subtitle: "CENTRAL VIETNAM\nHue → Hai Van → Hoi An",
      title: "Take the scenic way.",
      description: "Curated journeys through Hue, Da Nang & Hoi An — shaped by local knowledge, good food and the roads worth slowing down for.",
      primaryCta: "Plan My Trip →",
      secondaryCta: "Explore Tours",
    },
    vi: {
      subtitle: "MIỀN TRUNG VIỆT NAM\nHuế → Hải Vân → Hội An",
      title: "Đi theo con đường đẹp nhất.",
      description: "Hành trình được chọn lọc qua Huế, Đà Nẵng và Hội An — với kiến thức địa phương, ẩm thực ngon và những con đường xứng đáng được đi chậm lại.",
      primaryCta: "Lên Kế Hoạch Chuyến Đi →",
      secondaryCta: "Khám Phá Tour",
    }
  };

  const lang = t[currentLocale];

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-end pb-24 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[var(--color-night)]">
        <Image
          src="/photo/danangtohue.jpg"
          alt="Da Nang to Hue Motorbike Tour"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-night)] via-[var(--color-night)]/40 to-transparent opacity-80"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[var(--container-max)] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8 xl:col-span-6 flex flex-col gap-6 text-[var(--color-limestone)]">
          <p className="whitespace-pre-line text-small font-semibold tracking-widest uppercase opacity-80">
            {lang.subtitle}
          </p>
          <h1 className="text-display-l font-display">
            {lang.title}
          </h1>
          <p className="text-body-lg opacity-80 max-w-md">
            {lang.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link href={`/${currentLocale}/plan`} className="btn-primary w-full sm:w-auto">
              {lang.primaryCta}
            </Link>
            <Link 
              href={`/${currentLocale}/tours`} 
              className="w-full sm:w-auto text-center px-6 py-3 rounded-[var(--radius-pill)] border border-[var(--color-limestone)] border-opacity-30 hover:bg-[var(--color-limestone)] hover:text-[var(--color-ink)] transition-colors font-semibold"
            >
              {lang.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Loop at the bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-[var(--color-limestone)] border-opacity-10 bg-[var(--color-night)]/50 backdrop-blur-sm text-[var(--color-limestone)]">
        <LogoLoop
          logos={partnerLogos}
          speed={40}
          direction="left"
          logoHeight={64}
          gap={80}
          pauseOnHover={false}
          fadeOut={true}
          fadeOutColor="transparent"
        />
      </div>
    </section>
  );
}
