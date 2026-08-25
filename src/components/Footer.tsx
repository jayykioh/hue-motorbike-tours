"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/vi') ? 'vi' : 'en';

  const t = {
    en: {
      tours: "Tours",
      company: "Company",
      contact: "Contact",
      language: "Language",
      rights: "© 2026 Hue Motorbike Tours. All rights reserved.",
      description: "Premium motorbike tours and authentic local experiences in Hue, Vietnam.",
      links: {
        tour1: "Hue Motorbike Tour",
        tour2: "Hue Imperial City",
        tour3: "DMZ Tour",
        about: "About Us",
        journal: "Journal",
        contact: "Contact",
      }
    },
    vi: {
      tours: "Các Tour",
      company: "Công ty",
      contact: "Liên hệ",
      language: "Ngôn ngữ",
      rights: "© 2026 Hue Motorbike Tours. Mọi quyền được bảo lưu.",
      description: "Trải nghiệm tour xe máy cao cấp và văn hóa địa phương đích thực tại Huế, Việt Nam.",
      links: {
        tour1: "Tour Xe Máy Huế",
        tour2: "Đại Nội Huế",
        tour3: "Tour DMZ",
        about: "Về Chúng Tôi",
        journal: "Nhật Ký",
        contact: "Liên Hệ",
      }
    }
  };

  const lang = t[currentLocale];

  const getLocaleSwitchPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || `/${targetLocale}`;
  };

  return (
    <footer className="bg-[var(--color-night)] text-[var(--color-limestone)] pt-24 px-6 mt-auto overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col gap-24">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Mission/Description (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 pr-8">
            <p className="text-body-lg opacity-90 leading-relaxed font-semibold">
              {lang.description}
            </p>
            <div className="flex gap-4 items-center">
              <a 
                href="https://wa.me/84862391918" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary mt-4"
              >
                +84 862 391 918
              </a>
            </div>
          </div>

          {/* Links (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-small uppercase tracking-widest text-[var(--color-terracotta)]">
                {lang.tours}
              </h4>
              <nav className="flex flex-col gap-4">
                <Link href={`/${currentLocale}/tours/hue-motorbike-tour`} className="text-body hover:text-[var(--color-terracotta)] transition-colors w-fit">{lang.links.tour1}</Link>
                <Link href={`/${currentLocale}/tours/imperial-city`} className="text-body hover:text-[var(--color-terracotta)] transition-colors w-fit">{lang.links.tour2}</Link>
                <Link href={`/${currentLocale}/tours/dmz-tour`} className="text-body hover:text-[var(--color-terracotta)] transition-colors w-fit">{lang.links.tour3}</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-small uppercase tracking-widest text-[var(--color-terracotta)]">
                {lang.company}
              </h4>
              <nav className="flex flex-col gap-4">
                <Link href={`/${currentLocale}/about`} className="text-body hover:text-[var(--color-terracotta)] transition-colors w-fit">{lang.links.about}</Link>
                <Link href={`/${currentLocale}/journal`} className="text-body hover:text-[var(--color-terracotta)] transition-colors w-fit">{lang.links.journal}</Link>
                <Link href={`/${currentLocale}/contact`} className="text-body hover:text-[var(--color-terracotta)] transition-colors w-fit">{lang.links.contact}</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-small uppercase tracking-widest text-[var(--color-terracotta)]">
                {lang.language}
              </h4>
              <div className="flex flex-col gap-4 text-body">
                <Link 
                  href={getLocaleSwitchPath('en')} 
                  className={`hover:text-[var(--color-terracotta)] transition-colors w-fit ${currentLocale === 'en' ? 'text-[var(--color-terracotta)] font-semibold' : 'opacity-70'}`}
                >
                  English (EN)
                </Link>
                <Link 
                  href={getLocaleSwitchPath('vi')} 
                  className={`hover:text-[var(--color-terracotta)] transition-colors w-fit ${currentLocale === 'vi' ? 'text-[var(--color-terracotta)] font-semibold' : 'opacity-70'}`}
                >
                  Tiếng Việt (VN)
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ft5 Statement - Massive Typography at Bottom */}
        <div className="flex flex-col items-center gap-8 pb-8">
          <div className="w-full h-px bg-[var(--color-limestone)] opacity-20"></div>
          
          <div className="w-full text-center">
            <h2 className="text-[12vw] leading-none font-display text-[var(--color-limestone)] opacity-10 whitespace-nowrap overflow-hidden select-none">
              HUE MOTORBIKE TOURS
            </h2>
          </div>
          
          <div className="w-full flex justify-between items-center text-small opacity-50">
            <span>{lang.rights}</span>
            <span className="hidden sm:inline">Built with ♥ in Hue</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
