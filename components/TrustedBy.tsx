const organizations = [
  { name: 'Waste2Light', descriptor: 'Product & Technology' },
  { name: 'BuMarS', descriptor: 'Product Strategy & Development' },
  { name: 'Future Speakers International School', descriptor: 'Education Technology' },
  { name: 'Maka Tech', descriptor: 'Product Strategy & Technology' },
  { name: 'Cyfamod Technologies', descriptor: 'Product & Technology' },
];

function Organization({ name, descriptor }: { name: string; descriptor: string }) {
  return (
    <div className="flex min-w-[190px] flex-col items-center justify-center px-8 text-center md:min-w-[220px]">
      <div className="font-display text-xl font-semibold tracking-[-.045em] text-black/75">{name}</div>
      <div className="mt-2 text-[9px] font-semibold uppercase tracking-[.16em] text-black/35">{descriptor}</div>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section aria-label="Trusted by organizations" className="overflow-hidden border-b border-black/10 bg-white/60 py-10">
      <div className="container">
        <p className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">Trusted by</p>
      </div>
      <div className="group relative overflow-hidden">
        <div className="trusted-marquee flex w-max items-center">
          {[...organizations, ...organizations].map((organization, index) => (
            <Organization key={`${organization.name}-${index}`} {...organization} />
          ))}
        </div>
      </div>
    </section>
  );
}
