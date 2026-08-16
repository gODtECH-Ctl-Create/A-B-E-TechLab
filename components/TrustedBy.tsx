'use client';

import { useState } from 'react';

type Organization = {
  name: string;
  descriptor: string;
  logo?: string;
  fallback?: 'waste2light' | 'cyfamod' | 'future-speakers';
};

const organizations: Organization[] = [
  { name: 'Waste2Light', descriptor: 'Product Development & Management', logo: '/images/waste2light-logo.svg', fallback: 'waste2light' },
  { name: 'BuMarS', descriptor: 'Product Strategy & Development', logo: '/images/bumars-logo.webp' },
  { name: 'Future Speakers International School', descriptor: 'Education Technology', logo: '/images/future-speakers-logo.webp', fallback: 'future-speakers' },
  { name: 'Maka Integrated', descriptor: 'Product Strategy & Programme Management' },
  { name: 'Cyfamod Technologies', descriptor: 'Product Strategy, Management & Development', logo: '/images/cyfamod-logo.webp', fallback: 'cyfamod' },
];

function InlineFallback({ type }: { type: Organization['fallback'] }) {
  if (type === 'waste2light') {
    return (
      <svg viewBox="0 0 520 150" role="img" aria-label="Waste2Light logo" className="h-[72px] w-[220px] object-contain">
        <rect width="520" height="150" rx="6" fill="#fff" />
        <g transform="translate(22 12)" fill="none" stroke="#174f2d" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M46 7v68" /><path d="M46 7c-2 28-8 39-18 48" /><path d="M46 7c2 28 8 39 18 48" />
          <path d="M46 7c-8 20-18 25-29 25" /><path d="M46 7c8 20 18 25 29 25" />
          <path d="M24 91c0-19 10-31 22-31s22 12 22 31" /><path d="M31 92h30M34 105h24M39 118h14" />
        </g>
        <text x="112" y="78" fontFamily="Arial, Helvetica, sans-serif" fontSize="48" fontWeight="700" fill="#174f2d">Waste2Light</text>
        <text x="116" y="111" fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="600" fill="#174f2d">Lighting Tomorrow with Today’s Waste</text>
      </svg>
    );
  }

  if (type === 'cyfamod') {
    return (
      <svg viewBox="0 0 434 150" role="img" aria-label="Cyfamod Technologies logo" className="h-[72px] w-[220px] object-contain">
        <rect width="434" height="150" rx="6" fill="#000" />
        <g transform="translate(24 26)" fill="none" stroke="#087bea" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M42 8v78" /><path d="M42 30 12 14" /><path d="M42 30 72 14" /><path d="M42 58 12 42" />
          <path d="M42 58 72 42" /><path d="M42 86 12 70" /><path d="M42 86 72 70" />
          <circle cx="42" cy="30" r="5" fill="#087bea" /><circle cx="42" cy="58" r="5" fill="#087bea" /><circle cx="42" cy="86" r="5" fill="#087bea" />
        </g>
        <text x="108" y="92" fontFamily="Arial, Helvetica, sans-serif" fontSize="54" fontWeight="700" fill="#fff">CYFAMOD</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 760 190" role="img" aria-label="Future Speakers International School logo" className="h-[72px] w-[220px] object-contain">
      <rect width="760" height="190" rx="8" fill="#fff" />
      <text x="18" y="82" fontFamily="Arial, Helvetica, sans-serif" fontSize="61" fontWeight="700" fill="#30286f">FUTURE SPEAKERS</text>
      <text x="20" y="132" fontFamily="Arial, Helvetica, sans-serif" fontSize="38" fontWeight="700" fill="#c93232">INTERNATIONAL SCHOOL</text>
      <g transform="translate(667 18)">
        <path d="M0 8h70v102c0 26-17 40-35 48C17 150 0 136 0 110Z" fill="#fff" stroke="#5c8db0" strokeWidth="4" />
        <path d="M6 20h58v26H6z" fill="#d9eef7" /><path d="M18 64h34v32H18z" fill="#fff" stroke="#4b6b8a" strokeWidth="3" />
        <path d="M28 73h14v15H28z" fill="#30286f" /><path d="M6 102h58v15c0 15-11 25-29 33-18-8-29-18-29-33z" fill="#c93232" />
        <circle cx="35" cy="126" r="8" fill="#fff" />
      </g>
    </svg>
  );
}

function Organization({ name, descriptor, logo, fallback }: Organization) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex w-[250px] shrink-0 flex-col items-center justify-center px-6 text-center md:w-[290px]">
      <div className="flex h-20 w-full items-center justify-center">
        {logo && !failed ? (
          <img src={logo} alt={`${name} logo`} width={220} height={76} loading="eager" decoding="async" onError={() => setFailed(true)} className="block max-h-[72px] max-w-[220px] object-contain" />
        ) : fallback ? (
          <InlineFallback type={fallback} />
        ) : (
          <div className="font-display text-xl font-semibold tracking-[-.045em] text-black/75">{name}</div>
        )}
      </div>
      <div className="mt-3 font-display text-sm font-semibold tracking-[-.025em] text-black/70">{name}</div>
      <div className="mt-1 text-[9px] font-semibold uppercase tracking-[.16em] text-black/35">{descriptor}</div>
    </div>
  );
}

export default function TrustedBy() {
  const repeated = [...organizations, ...organizations];

  return (
    <section aria-label="Trusted by organisations" className="overflow-hidden border-b border-black/10 bg-white/60 py-10">
      <div className="container">
        <p className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">Trusted by</p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="trusted-marquee" aria-hidden="true">
          {repeated.map((organization, index) => <Organization key={`${organization.name}-${index}`} {...organization} />)}
        </div>
      </div>
    </section>
  );
}
