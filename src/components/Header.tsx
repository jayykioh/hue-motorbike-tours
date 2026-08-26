"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentLocale = pathname.startsWith('/vi') ? 'vi' : 'en';
  
  const getLocaleSwitchPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || `/${targetLocale}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: currentLocale === 'vi' ? 'Các Tour' : 'Tours', href: `/${currentLocale}/tours` },
    { label: currentLocale === 'vi' ? 'Điểm đến' : 'Destinations', href: `/${currentLocale}/destinations` },
    { label: currentLocale === 'vi' ? 'Nhật ký' : 'Journal', href: `/${currentLocale}/journal` },
  ];

  const isHomePage = pathname === '/en' || pathname === '/vi' || pathname === '/';
  const headerSolid = isScrolled || !isHomePage;

  return (
    <>
      {/* N10 Scroll-Morph — full-width solid bar, transparent at top (only on home) */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[var(--ease-standard)] ${
          headerSolid
            ? "bg-[var(--color-night)]/95 backdrop-blur-md border-b border-white/8 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-10 h-16 lg:h-18 flex items-center justify-between gap-8">
          
          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            onClick={(e) => {
              if (pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
          >
            <Image
              src="/photo/logo.jpeg"
              alt="Hue Motorbike Tours Logo"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <span className="hidden sm:block text-small font-display font-bold tracking-widest uppercase text-[var(--color-limestone)]">
              HUE MOTORBIKE TOURS
            </span>
          </Link>

          {/* Desktop Nav — center */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-small font-semibold text-[var(--color-limestone)] opacity-75 hover:opacity-100 transition-opacity tracking-wide focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions — right */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1 text-small font-semibold text-[var(--color-limestone)]">
              <Link
                href={getLocaleSwitchPath('vi')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  currentLocale === 'vi'
                    ? 'bg-[var(--color-terracotta)] text-white'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                VN
              </Link>
              <span className="opacity-30">|</span>
              <Link
                href={getLocaleSwitchPath('en')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  currentLocale === 'en'
                    ? 'bg-[var(--color-terracotta)] text-white'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                EN
              </Link>
            </div>
            <Link
              href={`/${currentLocale}/plan`}
              className="text-small font-semibold px-5 py-2 rounded-[var(--radius-pill)] bg-[var(--color-terracotta)] text-white hover:bg-[color-mix(in_srgb,var(--color-terracotta)_85%,black)] transition-colors"
            >
              {currentLocale === 'vi' ? 'Lên kế hoạch' : 'Plan Trip'}
            </Link>
          </div>

          {/* Mobile: right side — locale + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 text-small font-semibold text-[var(--color-limestone)]">
              <Link
                href={getLocaleSwitchPath('vi')}
                className={`px-2 py-1 rounded transition-colors ${currentLocale === 'vi' ? 'text-[var(--color-terracotta)]' : 'opacity-60'}`}
              >
                VN
              </Link>
              <span className="opacity-30 text-xs">|</span>
              <Link
                href={getLocaleSwitchPath('en')}
                className={`px-2 py-1 rounded transition-colors ${currentLocale === 'en' ? 'text-[var(--color-terracotta)]' : 'opacity-60'}`}
              >
                EN
              </Link>
            </div>
            <button
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--color-limestone)] focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 12h16M4 6h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-[var(--color-night)] text-[var(--color-limestone)] z-40 flex flex-col p-6 pt-24 transition-all duration-300 ease-[var(--ease-standard)] lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-h2 font-display hover:text-[var(--color-terracotta)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/10 pt-8">
          <Link
            href={`/${currentLocale}/plan`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary w-full text-center py-4 block"
          >
            {currentLocale === 'vi' ? 'Lên kế hoạch chuyến đi →' : 'Plan a Trip →'}
          </Link>
        </div>
      </div>
    </>
  );
}
