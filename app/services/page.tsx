import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/content';

export const metadata: Metadata = {
  title: 'Services | Product Research, Strategy, Marketing & Development',
  description: 'Explore ABE TechLab services across product research, product strategy, product marketing, design, development and delivery.',
  alternates: { canonical: '/services' },
};

export default function Services(){return <div><section className="grid-bg"><div className="container py-24 md:py-32"><p className="text-xs font-semibold uppercase tracking-[.18em] text-black/45">Services</p><h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.07em] md:text-8xl">Product thinking, design and technology in one place.</h1></div></section><section className="container py-20 md:py-28"><div className="divide-y divide-black/15 border-t border-black/15">{services.map(s=><article key={s.number} className="grid gap-8 py-12 md:grid-cols-[80px_1fr_1fr] md:py-16"><span className="text-xs text-black/35">{s.number}</span><div><h2 className="font-display text-3xl font-semibold tracking-[-.045em] md:text-4xl">{s.title}</h2><p className="mt-4 max-w-md text-sm leading-7 text-black/55">{s.text}</p></div><ul className="grid content-start gap-3 text-sm text-black/65">{s.items.map(item=><li key={item} className="flex items-center gap-3"><span className="h-1 w-1 bg-black"/>{item}</li>)}</ul></article>)}</div></section><section className="bg-black text-white"><div className="container flex flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between"><h2 className="font-display max-w-2xl text-4xl font-semibold tracking-[-.05em] md:text-5xl">Not sure what you need yet? That's part of the conversation.</h2><Link href="/contact" className="flex shrink-0 items-center gap-2 bg-white px-6 py-4 text-sm font-semibold text-black">Start a project <ArrowUpRight size={16}/></Link></div></section></div>}
