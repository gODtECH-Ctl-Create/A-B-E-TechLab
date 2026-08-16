import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products & Platforms',
  description: 'Products and digital platforms built or shaped by ABE TechLab across education, business and technology.',
  alternates: { canonical: '/products' },
};

const products = [
  {
    name: 'TechTrack',
    type: 'Education technology platform',
    description: 'A practical learning and development platform that brings courses, bootcamps, internships and technology programs into one experience.',
    href: '/programs',
    action: 'Explore programs',
  },
  {
    name: 'PROQUREMENT',
    type: 'Construction technology',
    description: 'A builders marketplace experience shaped around the practical problem of finding and connecting with building-material suppliers.',
    href: '/work',
    action: 'View selected work',
  },
  {
    name: 'Portfolio Platform',
    type: 'Professional identity technology',
    description: 'A digital product experience for creating professional identities, portfolios and career-focused profiles from one shareable destination.',
    href: '/work',
    action: 'View selected work',
  },
  {
    name: 'MeetMind / Vertica',
    type: 'Recruitment technology',
    description: 'AI-assisted recruitment technology exploring structured interviews, candidate participation and evaluation workflows.',
    href: '/work',
    action: 'View selected work',
  },
];

export default function ProductsPage() {
  return (
    <div>
      <section className="hero-shell border-b border-black/10">
        <div className="container py-24 md:py-32">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/45">Products & platforms</p>
          <h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.86] tracking-[-.075em] md:text-8xl">Technology we shape into products people can use.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">A clearer home for the digital products and platforms ABE TechLab builds, shapes and develops across education, construction, professional identity and recruitment technology.</p>
        </div>
      </section>

      <section className="bg-[#11110f] py-20 text-white md:py-28">
        <div className="container grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {products.map((product, index) => (
            <article key={product.name} className="bg-[#11110f] p-8 transition hover:bg-[#191916] md:p-10">
              <p className="text-[10px] text-white/35">0{index + 1}</p>
              <p className="mt-10 text-[10px] font-semibold uppercase tracking-[.18em] text-[#b7ff3c]">{product.type}</p>
              <h2 className="font-display mt-4 text-4xl font-semibold tracking-[-.05em] md:text-5xl">{product.name}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">{product.description}</p>
              <Link href={product.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#b7ff3c]">{product.action} <ArrowUpRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">How we build</p>
          <div>
            <h2 className="font-display max-w-3xl text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">Research first. Product thinking throughout. Technology that serves the idea.</h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-black/55">Products are not just interfaces. We work across research, strategy, positioning, design and development so the thing being built makes sense before it scales.</p>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">See our capabilities <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
