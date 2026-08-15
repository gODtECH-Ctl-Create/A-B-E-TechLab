import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const audiences = [
  ['Founders', 'You have an idea and need a path from concept to a usable product.'],
  ['Growing businesses', 'You need a new digital product, platform or internal system.'],
  ['Organizations', 'You have a specific operational problem that technology can solve.'],
  ['Existing products', 'You already have a product and need help making it clearer, better or more useful.'],
];

export default function About(){return <div>
  <section className="grid-bg"><div className="container py-24 md:py-32"><p className="text-xs font-semibold uppercase tracking-[.18em] text-black/45">About ABE TechLab</p><h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.07em] md:text-8xl">Small studio. Serious products.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">A focused product and technology studio built around the work, not the size of the agency.</p></div></section>

  <section className="container py-24 md:py-32"><div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs uppercase tracking-[.16em] text-black/40">Why we exist</p></div><div className="max-w-2xl text-lg leading-8 text-black/65"><p>Great ideas often get stuck between having a vision and actually building the thing. ABE TechLab exists to close that gap.</p><p className="mt-7">We work at the intersection of product, design and technology. We help turn early ideas into structured products and help existing products become clearer, more useful and easier to grow.</p><p className="mt-7">We don't believe every project needs a large agency. It needs the right thinking, the right people and a clear path to shipping.</p></div></div></section>

  <section className="border-y border-black/10 bg-[#ecece6]"><div className="container py-24 md:py-32"><div className="mb-12 max-w-2xl"><p className="text-xs uppercase tracking-[.16em] text-black/40">Who we work with</p><h2 className="font-display mt-5 text-4xl font-semibold leading-none tracking-[-.055em] md:text-6xl">Built for people building something.</h2></div><div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">{audiences.map(([title,text])=><div key={title} className="bg-[#f5f5ef] p-8 transition hover:bg-white md:p-10"><h3 className="font-display text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-black/55">{text}</p></div>)}</div></div></section>

  <section className="container py-24 md:py-32"><div className="grid gap-8 md:grid-cols-3">{[['01','Clarity','Good execution starts with knowing what should be built and why.'],['02','Craft','The details matter, from product flows to the final interface.'],['03','Momentum','Projects should keep moving from idea to something people can use.']].map(([number,title,text])=><div key={number} className="border-t border-black/15 pt-7"><p className="text-xs text-black/35">{number}</p><h2 className="font-display mt-5 text-2xl font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-black/55">{text}</p></div>)}</div></section>

  <section className="container pb-24 md:pb-32"><div className="bg-[#b7ff3c] p-8 md:p-14"><p className="text-xs font-semibold uppercase tracking-[.18em] text-black/50">Work with us</p><h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">Have a product problem worth solving?</h2><Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">Start a project <ArrowUpRight size={16}/></Link></div></section>
</div>}
