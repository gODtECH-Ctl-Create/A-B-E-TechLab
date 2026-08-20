import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { projects, services, focusAreas } from "@/data/content";
import { ProjectVisual, StudioVisual } from "@/components/StudioVisual";
import HeroVisualCarousel from "@/components/HeroVisualCarousel";
import TrustedBy from "@/components/TrustedBy";

export const metadata: Metadata = {
  title: "ABE TechLab | Product, Research, Education & Technology",
  description: "ABE TechLab researches, shapes, designs, builds and positions digital products, including education and teaching technology.",
  alternates: { canonical: '/' },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.22em] text-black/45">{children}</p>;
}

const heroVisuals = [
  { src: "https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Developers collaborating around a computer in a technology workspace" },
  { src: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Developer working with code on a laptop" },
  { src: "https://images.pexels.com/photos/12899167/pexels-photo-12899167.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Software developers collaborating on a coding project" },
];

const audiences = [
  ["Founders", "You have an idea and need help turning it into a real product."],
  ["Growing businesses", "You need a digital platform, internal system or new product."],
  ["Organizations", "You need technology that solves a specific operational problem."],
  ["Education & learning", "You want to build better teaching, learning or education technology."],
  ["Existing products", "You already have something and need product, research, marketing, design or development support."],
];

export default function Home() {
  return (
    <>
      <section className="hero-shell overflow-hidden border-b border-black/10">
        <div className="container py-12 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
            <div className="reveal">
              <p className="mb-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-black/50"><span className="h-1.5 w-1.5 rounded-full bg-[#b7ff3c] ring-4 ring-[#b7ff3c]/20" />Product · Research · Education · Teaching Technology · Marketing · Design · Development</p>
              <h1 className="font-display max-w-3xl text-[clamp(3.5rem,7vw,6.8rem)] font-semibold leading-[.86] tracking-[-.075em]">We turn ideas into products that work.</h1>
              <p className="mt-9 max-w-xl text-base leading-7 text-black/60 md:text-lg">ABE TechLab helps founders, businesses, organizations and education teams research opportunities, shape products, position them, design the experience, build the technology and move toward launch.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="btn-primary px-6 py-4 text-sm font-semibold transition">Start a project <ArrowUpRight size={17} /></Link><Link href="/work" className="btn-secondary px-6 py-4 text-sm font-semibold transition">Explore our work</Link></div>
              <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-semibold uppercase tracking-[.16em] text-black/35"><span>Research</span><span>Strategy</span><span>Design</span><span>Marketing</span><span>Development</span><span>Delivery</span></div>
            </div>
            <div className="reveal-delay hidden md:block"><StudioVisual /></div>
            <div className="reveal-delay md:hidden">
              <div className="relative overflow-hidden border border-black/10 bg-[#11110f] p-5 text-white shadow-[0_18px_50px_rgba(17,17,15,.12)]">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#b7ff3c] blur-[55px] opacity-30" />
                <div className="relative flex items-end justify-between">
                  <div><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/45">Product studio</p><div className="font-display mt-2 text-4xl font-bold tracking-[-.08em]">ABE</div><p className="mt-1 text-[9px] font-semibold uppercase tracking-[.25em] text-[#b7ff3c]">TECHLAB</p></div>
                  <div className="grid grid-cols-2 gap-2 text-[9px] font-semibold uppercase tracking-[.14em] text-white/55"><span className="border border-white/15 px-2 py-2">Idea</span><span className="border border-white/15 px-2 py-2">Design</span><span className="border border-white/15 px-2 py-2">Build</span><span className="border border-white/15 px-2 py-2">Ship</span></div>
                </div>
                <div className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-white/55">We build products and technology for people who learn, teach, work and build.</div>
              </div>
            </div>
          </div>
          <HeroVisualCarousel visuals={heroVisuals} />
        </div>
      </section>

      <TrustedBy />

      <section className="border-b border-black/10 bg-white/60"><div className="container grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center"><p className="max-w-2xl text-sm leading-6 text-black/55">We work across the messy middle between a problem and a finished product: researching what matters, defining the opportunity, designing the experience, building the technology and helping the product reach the right people.</p><div className="font-display text-2xl font-semibold tracking-[-.04em]">Built for the work ahead.</div></div></section>

      <section className="container py-28 md:py-36">
        <div className="mb-10 md:mb-12"><SectionLabel>What we do</SectionLabel><h2 className="font-display max-w-2xl text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">From a rough idea to something people can use and grow.</h2></div>
        <div className="hidden overflow-hidden border border-black/10 bg-black/10 gap-px md:grid md:grid-cols-2">
          {services.map((service) => <div key={service.number} className="service-card group border-0 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,.07)] md:p-8"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold tracking-[.18em] text-black/35">{service.number}</span><ArrowUpRight size={18} className="text-black/25 transition group-hover:text-black" /></div><h3 className="font-display mt-14 text-2xl font-semibold tracking-[-.04em]">{service.title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{service.text}</p><div className="mt-7 space-y-2 border-t border-black/10 pt-5">{service.items.slice(0, 3).map((item) => <p key={item} className="flex items-center gap-2 text-xs text-black/45"><Check size={13} />{item}</p>)}</div></div>)}
        </div>
        <div className="grid gap-2 md:hidden">
          {services.map((service) => <Link key={service.number} href="/services" className="group flex min-h-[84px] items-center gap-4 border border-black/10 bg-white/70 px-4 py-4"><span className="text-[10px] font-semibold tracking-[.18em] text-black/30">{service.number}</span><div className="min-w-0 flex-1"><h3 className="font-display text-xl font-semibold tracking-[-.035em]">{service.title}</h3><p className="mt-1 truncate text-xs text-black/45">{service.text}</p></div><ArrowUpRight size={17} className="shrink-0 text-black/25" /></Link>)}
        </div>
        <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold md:hidden">Explore all services <ArrowUpRight size={16}/></Link>
      </section>

      <section className="border-y border-black/10 bg-[#ecece6]"><div className="container py-24 md:py-32"><div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[.7fr_1.3fr] md:items-end"><div><SectionLabel>Areas we build in</SectionLabel><h2 className="font-display text-4xl font-semibold leading-none tracking-[-.055em] md:text-6xl">Technology with a purpose.</h2></div><p className="max-w-xl text-sm leading-7 text-black/55">Our work is not limited to one industry. We build around real problems, including the way people learn, teach, build, work and access services.</p></div><div className="hidden gap-px overflow-hidden border border-black/10 bg-black/10 md:grid md:grid-cols-2">{focusAreas.map((area, index) => <article key={area.title} className="bg-[#f5f5ef] p-8 md:p-10"><span className="text-[10px] font-semibold tracking-[.18em] text-black/30">0{index + 1}</span><h3 className="font-display mt-16 text-2xl font-semibold tracking-[-.04em]">{area.title}</h3><p className="mt-3 text-sm leading-7 text-black/55">{area.text}</p></article>)}</div><div className="-mx-3 flex snap-x gap-3 overflow-x-auto px-3 pb-1 md:hidden">{focusAreas.map((area, index) => <article key={area.title} className="w-[82vw] shrink-0 snap-start border border-black/10 bg-[#f5f5ef] p-6"><span className="text-[10px] font-semibold tracking-[.18em] text-black/30">0{index + 1}</span><h3 className="font-display mt-10 text-2xl font-semibold tracking-[-.04em]">{area.title}</h3><p className="mt-3 text-sm leading-7 text-black/55">{area.text}</p></article>)}</div><p className="mt-3 text-[10px] uppercase tracking-[.16em] text-black/35 md:hidden">Swipe to explore</p></div></section>

      <section className="bg-[#11110f] py-28 text-white md:py-36"><div className="container"><div className="mb-12 grid gap-8 md:mb-14 md:grid-cols-[.7fr_1.3fr] md:items-end"><div><SectionLabel>Selected work</SectionLabel><h2 className="font-display text-4xl font-semibold leading-none tracking-[-.055em] md:text-6xl">Products we've helped shape.</h2></div><p className="max-w-xl text-sm leading-7 text-white/50">A selection of digital products, platforms and systems across teaching and learning, construction, professional identity and recruitment technology.</p></div><div className="grid gap-4 md:grid-cols-2">{projects.slice(0, 4).map((project, index) => <ProjectVisual key={project.name} name={project.name} category={project.category} index={index} />)}</div><div className="mt-8"><Link href="/work" className="inline-flex items-center gap-2 border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50">See all work <ArrowUpRight size={16} /></Link></div></div></section>

      <section className="container py-28 md:py-36"><div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div><SectionLabel>How we work</SectionLabel><h2 className="font-display text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">Good products don't happen by accident.</h2><p className="mt-6 max-w-md text-sm leading-7 text-black/55">We give ideas structure, test assumptions, shape the market story and move them toward something people can actually use.</p></div><div className="process-list">{[["01","Research","Understand the problem, users, market and opportunity."],["02","Define","Turn evidence, requirements and ideas into a clear product direction."],["03","Design","Shape the experience, interface and product structure."],["04","Build","Develop, test and refine the product."],["05","Position & Launch","Help the product reach the right audience, learn and improve."]].map(([number,title,text]) => <div key={number} className="process-item group grid grid-cols-[52px_1fr_auto] gap-5 border-t border-black/15 py-7"><span className="text-xs text-black/30">{number}</span><div><h3 className="font-display text-2xl font-semibold tracking-[-.035em]">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-black/50">{text}</p></div><ArrowUpRight size={19} className="mt-1 text-black/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" /></div>)}</div></div></section>

      <section className="border-y border-black/10 bg-[#ecece6]"><div className="container grid gap-10 py-28 md:grid-cols-[1fr_1fr] md:items-center md:py-36"><div><SectionLabel>Who we work with</SectionLabel><h2 className="font-display text-5xl font-semibold leading-[.92] tracking-[-.06em] md:text-7xl">Built for people building something.</h2></div><div className="grid gap-2 sm:grid-cols-2 md:gap-px md:overflow-hidden md:border md:border-black/10 md:bg-black/10">{audiences.map(([title, text], index) => <div key={title} className={`${index === audiences.length - 1 ? 'sm:col-span-2' : ''} border border-black/10 bg-[#f5f5ef] p-6 md:border-0 md:bg-[#f5f5ef] md:p-7`}><h3 className="font-display text-xl font-semibold tracking-[-.03em]">{title}</h3><p className="mt-2 text-sm leading-6 text-black/55">{text}</p></div>)}</div></div></section>

      <section className="border-b border-black/10 bg-[#ecece6]"><div className="container grid gap-10 pb-28 md:grid-cols-[1fr_1fr] md:items-center md:pb-36"><div><SectionLabel>About ABE TechLab</SectionLabel><h2 className="font-display text-5xl font-semibold leading-[.92] tracking-[-.06em] md:text-7xl">Small studio.<br />Serious products.</h2></div><div className="max-w-xl text-base leading-8 text-black/60"><p>ABE TechLab works at the intersection of research, product strategy, design, technology and product marketing.</p><p className="mt-5 hidden md:block">Education is a core part of that work. Through TechTrack, we build teaching and learning technology that supports structured learning, practical projects, bootcamps and professional development.</p><p className="mt-5 hidden md:block">We don't believe every project needs a large agency. It needs the right thinking, the right people and a clear path to shipping, positioning and learning from the market.</p><Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold md:hidden">More about the studio <ArrowUpRight size={16}/></Link></div></div></section>

      <section className="cta-section relative overflow-hidden bg-[#b7ff3c]"><div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/40 blur-[100px]" /><div className="container relative flex flex-col gap-8 py-24 md:flex-row md:items-end md:justify-between md:py-36"><div><SectionLabel>Start a conversation</SectionLabel><h2 className="font-display max-w-3xl text-5xl font-semibold leading-[.9] tracking-[-.065em] md:text-8xl">Have something worth building?</h2><p className="mt-6 max-w-xl text-base text-black/60">Tell us what you're working on. We'll help you figure out what comes next.</p></div><Link href="/contact" className="btn-primary shrink-0 px-7 py-5 text-sm font-semibold transition">Start a project <ArrowUpRight size={18} /></Link></div></section>
    </>
  );
}
