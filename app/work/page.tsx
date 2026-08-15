import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import { ProjectVisual } from '@/components/StudioVisual';

export default function Work(){
  return <div>
    <section className="hero-shell border-b border-black/10">
      <div className="container py-24 md:py-32">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/45">Selected work</p>
        <h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.86] tracking-[-.075em] md:text-8xl">Products built around real problems.</h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-black/55">A selection of products and systems we've helped shape across teaching and learning, construction, professional identity and recruitment technology.</p>
      </div>
    </section>
    <section className="bg-[#11110f] py-20 text-white md:py-28">
      <div className="container grid gap-6 md:grid-cols-2">
        {projects.map((p,i)=><ProjectVisual key={p.name} name={p.name} category={p.category} index={i} />)}
      </div>
    </section>
    <section className="container py-24">
      <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
        <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">More than a showcase</p>
        <div><h2 className="font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">Every product starts with a problem worth solving.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-black/55">We care about the decisions behind the interface: what should exist, who it serves, how it works and what needs to happen to get it into the hands of real people. That includes the technology people use to learn and teach, as well as the systems businesses use to operate.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1">Talk about your product <ArrowUpRight size={17}/></Link></div>
      </div>
    </section>
  </div>
}
