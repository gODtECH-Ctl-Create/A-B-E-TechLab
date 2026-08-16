'use client';

import { useEffect, useState } from 'react';

export type HeroVisual = {
  src: string;
  alt: string;
  credit?: string;
};

const DEFAULT_INTERVAL = 1800;

export default function HeroVisualCarousel({
  visuals,
  interval = DEFAULT_INTERVAL,
}: {
  visuals: HeroVisual[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (visuals.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % visuals.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [interval, visuals.length]);

  if (!visuals.length) return null;

  return (
    <div className="relative mt-12 overflow-hidden border border-black/10 bg-[#11110f] shadow-[0_24px_70px_rgba(0,0,0,.10)]" aria-label="Technology and product work visuals">
      <div className="relative h-[210px] sm:h-[260px] md:h-[320px]">
        {visuals.map((visual, index) => (
          <img
            key={visual.src}
            src={visual.src}
            alt={visual.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0'}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
          <p className="max-w-md text-[10px] font-semibold uppercase tracking-[.18em] text-white/75">Research · Product · Technology · People building</p>
          <div className="flex gap-1.5" aria-hidden="true">
            {visuals.map((_, index) => (
              <span key={index} className={`h-1.5 transition-all duration-500 ${index === active ? 'w-7 bg-[#b7ff3c]' : 'w-1.5 bg-white/45'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
