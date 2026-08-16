import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects, services } from '@/data/content';

export const metadata: Metadata = {
  title: 'Services | Product Research, Strategy, Marketing & Development',
  description: 'Explore ABE TechLab services across product research, strategy, marketing, design, development and delivery, with selected work delivered for real organisations.',
  alternates: { canonical: '/services' },
};

export default function Services(){
  return <div>
    <section className="grid-bg"><div className="container py-24 md:py-32"><p className="text-xs font-semibold uppercase tracking-[.18em] text-black/45">Services</p><h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.07em] md:text-8xl">Product thinking, design and technology in one place.</h1><p className="mt-8 max-w-2xl text-base leading-7 text-black/55">We help organisations move from ideas and operational problems to clearer products, stronger systems and technology that works in practice.</p></div></section>

    <section className="container py-20 md:py-28"><div className="mb-10 max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">What we do</p><h2 className="font-display mt-4 text-4xl font-semibold tracking-[-.05em] md:text-6xl">Services across the product lifecycle.</h2></div><div className="divide-y divide-black/15 border-t border-black/15">{services.map(s=><article key={s.number} className="grid gap-8 py-12 md:grid-cols-[80px_1fr_1fr] md:py-16"><span className="text-xs text-black/35">{s.number}</span><div><h3 className="font-display text-3xl font-semibold tracking-[-.045em] md:text-4xl">{s.title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-black/55">{s.text}</p></div><ul className="grid content-start gap-3 text-sm text-black/65">{s.items.map(item=><li key={item} className="flex items-center gap-3"><span className="h-1 w-1 bg-black"/>{item}</li>)}</ul></article>)}</div></section>

    <section className="bg-[#11110f] py-20 text-white md:py-28"><div className="container"><div className="mb-12 max-w-3xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/45">Selected work</p><h2 className="font-display mt-4 text-4xl font-semibold tracking-[-.05em] md:text-6xl">What this work looks like in practice.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">A few examples of where we have applied these capabilities, working as product strategists, managers, developers and technology partners.</p></div><div className="grid gap-px bg-white/15 md:grid-cols-2">{projects.map(p=><article key={p.name} className="bg-[#11110f] p-8 md:p-10"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/40">{p.category}</p><h3 className="font-display mt-5 text-3xl font-semibold tracking-[-.045em]">{p.name}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/60">{p.description}</p></article>)}</div></div></section>

    <section className="container py-24 md:py-32"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">Start with the problem</p><div><h2 className="font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">Not sure which service you need? That's part of the conversation.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-black/55">We can help define the problem, shape the product direction and decide what should be built before moving into design, development or delivery.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1">Talk about your product <ArrowUpRight size={17}/></Link></div></div></section>
  </div>
}
