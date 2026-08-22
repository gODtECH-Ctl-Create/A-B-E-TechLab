'use client';

import { useEffect, useState } from 'react';

export type HeroVisual = { src: string; alt: string; credit?: string };
const DEFAULT_INTERVAL = 1800;

export default function HeroVisualCarousel({ visuals, interval = DEFAULT_INTERVAL }: { visuals: HeroVisual[]; interval?: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (visuals.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % visuals.length), interval);
    return () => window.clearInterval(timer);
  }, [interval, visuals.length]);

  if (!visuals.length) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {visuals.map((visual, index) => (
        <img
          key={visual.src}
          src={visual.src}
          alt=""
          className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-[1200ms] ease-in-out ${index === active ? 'opacity-[.54]' : 'opacity-0'}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      ))}
    </div>
  );
}
