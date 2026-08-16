type Organization = {
  name: string;
  descriptor: string;
  logo?: string;
};

const organizations: Organization[] = [
  { name: 'Waste2Light', descriptor: 'Product Development & Management', logo: '/images/waste2light-logo.svg' },
  { name: 'BuMarS', descriptor: 'Product Strategy & Development', logo: '/images/bumars-logo.webp' },
  { name: 'Future Speakers International School', descriptor: 'Education Technology', logo: '/images/future-speakers-logo.svg' },
  { name: 'Maka Integrated', descriptor: 'Product Strategy & Programme Management' },
  { name: 'Cyfamod Technologies', descriptor: 'Product Strategy, Management & Development', logo: '/images/cyfamod-logo.svg' },
];

function Organization({ name, descriptor, logo }: Organization) {
  return (
    <div className="flex w-[250px] shrink-0 flex-col items-center justify-center px-6 text-center md:w-[290px]">
      <div className="flex h-20 w-full items-center justify-center rounded-xl">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            width={220}
            height={76}
            loading="eager"
            decoding="async"
            className="block max-h-[72px] max-w-[220px] object-contain"
          />
        ) : (
          <div className="font-display text-xl font-semibold tracking-[-.045em] text-black/75">
            {name}
          </div>
        )}
      </div>
      <div className="mt-3 font-display text-sm font-semibold tracking-[-.025em] text-black/70">
        {name}
      </div>
      <div className="mt-1 text-[9px] font-semibold uppercase tracking-[.16em] text-black/35">
        {descriptor}
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const repeated = [...organizations, ...organizations];

  return (
    <section aria-label="Trusted by organizations" className="overflow-hidden border-b border-black/10 bg-white/60 py-10">
      <div className="container">
        <p className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">Trusted by</p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="trusted-marquee flex w-max items-center" aria-hidden="true">
          {repeated.map((organization, index) => (
            <Organization key={`${organization.name}-${index}`} {...organization} />
          ))}
        </div>
      </div>
    </section>
  );
}
