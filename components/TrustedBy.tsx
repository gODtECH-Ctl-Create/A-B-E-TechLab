'use client';

type Organization = {
  name: string;
  descriptor: string;
  logo: string;
};

// These are the supplied organisation logos stored as static local assets.
// Do not replace them with recreated SVGs or generated approximations.
const organizations: Organization[] = [
  { name: 'Waste2Light', descriptor: 'Product Development & Management', logo: '/images/trusted/waste2light-original.jpg' },
  { name: 'BuMarS', descriptor: 'Product Strategy & Development', logo: '/images/bumars-logo.webp' },
  { name: 'Future Speakers International School', descriptor: 'Education Technology', logo: '/images/trusted/future-speakers-original.jpg' },
  { name: 'Maka Integrated', descriptor: 'Product Strategy, Programme Management & OHealth Plus', logo: '/images/trusted/maka-integrated-original.jpg' },
  { name: 'Cyfamod Technologies', descriptor: 'Product Strategy, Management & Development', logo: '/images/trusted/cyfamod-original.jpg' },
];

function Organization({ name, descriptor, logo }: Organization) {
  return (
    <div className="flex w-[250px] shrink-0 flex-col items-center justify-center px-6 text-center md:w-[290px]">
      <div className="flex h-20 w-full items-center justify-center rounded-sm bg-white px-2">
        <img
          src={logo}
          alt={`${name} logo`}
          width={220}
          height={76}
          loading="eager"
          decoding="async"
          className="block max-h-[72px] max-w-[220px] object-contain"
        />
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
          {repeated.map((organization, index) => (
            <Organization key={`${organization.name}-${index}`} {...organization} />
          ))}
        </div>
      </div>
    </section>
  );
}
