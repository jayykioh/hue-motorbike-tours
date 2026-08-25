import Link from 'next/link';
import Image from 'next/image';
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

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

export default function NotFound() {
  return (
    <main className={`${instrumentSerif.variable} ${manrope.variable} antialiased relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-night)]`}>
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photo/thum.png"
          alt="Lost in Vietnam"
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity"
          sizes="100vw"
        />
      </div>

      {/* Heavy vignette / gradient overlay to make text pop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[var(--color-night)]/80 via-transparent to-[var(--color-night)]/90" />
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        <p className="text-small font-semibold tracking-[0.3em] uppercase text-[var(--color-terracotta)] mb-4">
          Error 404
        </p>
        
        <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-display text-[var(--color-limestone)] leading-none mb-6 tracking-tight">
          Lost.
        </h1>
        
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-body-lg text-[var(--color-limestone)] opacity-90">
            You've wandered off the map. This route doesn't exist.
          </p>
          <p className="text-body text-[var(--color-limestone)] opacity-60">
            Bạn đã đi lạc khỏi bản đồ. Đường này không tồn tại.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href="/en" 
            className="w-full sm:w-auto px-8 py-4 rounded-[var(--radius-pill)] bg-[var(--color-limestone)] text-[var(--color-ink)] font-semibold text-body hover:bg-white transition-colors text-center"
          >
            Home / Trang Chủ
          </Link>
          <Link 
            href="/en/tours" 
            className="w-full sm:w-auto px-8 py-4 rounded-[var(--radius-pill)] border border-[var(--color-limestone)]/30 text-[var(--color-limestone)] font-semibold text-body hover:bg-[var(--color-limestone)]/10 transition-colors text-center"
          >
            All Tours / Tất Cả Tour
          </Link>
        </div>
      </div>
    </main>
  );
}
