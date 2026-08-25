"use client";

import { MapPin, Mountain, Waves, Compass, Sun, Camera, Map } from "lucide-react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";

const tickerItems: LogoItem[] = [
  { node: <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3 whitespace-nowrap"><Mountain className="w-4 h-4 opacity-70 shrink-0" /> HAI VAN PASS</span> },
  { node: <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3 whitespace-nowrap"><Waves className="w-4 h-4 opacity-70 shrink-0" /> LANG CO BEACH</span> },
  { node: <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3 whitespace-nowrap"><Sun className="w-4 h-4 opacity-70 shrink-0" /> DREAM SPRING</span> },
  { node: <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3 whitespace-nowrap"><MapPin className="w-4 h-4 opacity-70 shrink-0" /> IMPERIAL CITY</span> },
  { node: <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3 whitespace-nowrap"><Compass className="w-4 h-4 opacity-70 shrink-0" /> PERFUME RIVER</span> },
  { node: <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3 whitespace-nowrap"><Map className="w-4 h-4 opacity-70 shrink-0" /> THIEN MU PAGODA</span> },
  { node: <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 flex items-center gap-3 whitespace-nowrap"><Camera className="w-4 h-4 opacity-70 shrink-0" /> LAP AN LAGOON</span> },
];

export default function TravelTicker() {
  return (
    <section className="w-full bg-[#020617] py-5 border-b border-white/5 overflow-hidden" aria-label="Destinations ticker">
      <LogoLoop
        logos={tickerItems}
        speed={30}
        direction="left"
        logoHeight={20}
        gap={80}
        pauseOnHover={false}
        fadeOut={true}
        fadeOutColor="#020617"
      />
    </section>
  );
}
