'use client';

import { useState } from 'react';

type Organization = {
  name: string;
  descriptor: string;
  logo: string;
};

// Use repository-local assets as the single source of truth. This avoids
// remote image dependencies and prevents fallback drawings from replacing
// the supplied organisation marks.
const organizations: Organization[] = [
  { name: 'Waste2Light', descriptor: 'Product Development & Management', logo: '/images/waste2light-logo.svg' },
  { name: 'BuMarS', descriptor: 'Product Strategy & Development', logo: '/images/bumars-logo.webp' },
  { name: 'Future Speakers International School', descriptor: 'Education Technology', logo: '/images/future-speakers-logo.svg' },
  { name: 'Maka Integrated', descriptor: 'Product Strategy & Programme Management', logo: '/images/maka-integrated-logo.svg' },
  { name: 'Cyfamod Technologies', descriptor: 'Product Strategy, Management & Development', logo: '/images/cyfamod-logo.svg' },
];

function Organization({ name, descriptor, logo }: Organization) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex w-[250px] shrink-0 flex-col items-center justify-center px-6 text-center md:w-[290px]">
      <div className="flex h-20 w-full items-center justify-center">
        {!failed ? (
          <img
            src={logo}
            alt={`${name} logo`}
            width={220}
            height={76}
            loading="eager"
            decoding="async"
            onError={() => setFailed(true)}
            className="block max-h-[72px] max-w-[220px] object-contain"
          />
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
