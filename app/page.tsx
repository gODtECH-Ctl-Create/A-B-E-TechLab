import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { projects, services } from "@/data/content";
import { ProjectVisual, StudioVisual } from "@/components/StudioVisual";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.22em] text-black/45">{children}</p>;
}

export default function Home() {
  return (
    <>
      <section className="hero-shell overflow-hidden border-b border-black/10">
        <div className="container py-12 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
            <div className="reveal">
              <p className="mb-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-black/50">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b7ff3c] ring-4 ring-[#b7ff3c]/20" />
                Product · Design · Technology
              </p>
              <h1 className="font-display max-w-3xl text-[clamp(3.5rem,7vw,6.8rem)] font-semibold leading-[.86] tracking-[-.075em]">
                We turn ideas into products that work.
              </h1>
              <p className="mt-9 max-w-xl text-base leading-7 text-black/60 md:text-lg">
                ABE TechLab is a product and technology studio helping founders and businesses shape, design, build and launch useful digital products.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1">
                  Start a project <ArrowUpRight size={17} />
                </Link>
                <Link href="/work" className="inline-flex items-center gap-3 border border-black/15 bg-white/50 px-6 py-4 text-sm font-semibold transition hover:border-black/40">
                  Explore our work
                </Link>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-semibold uppercase tracking-[.16em] text-black/35">
                <span>Strategy</span><span>Design</span><span>Development</span><span>Delivery</span>
              </div>
            </div>
            <div className="reveal-delay">
              <StudioVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white/60">
        <div className="container grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-2xl text-sm leading-6 text-black/55">We work across the messy middle between an idea and a finished product: defining what matters, designing the experience and getting it shipped.</p>
          <div className="font-display text-2xl font-semibold tracking-[-.04em]">Built for the work ahead.</div>
        </div>
      </section>

      <section className="container py-28 md:py-36">
        <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div><SectionLabel>What we do</SectionLabel><h2 className="font-display max-w-md text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">From a rough idea to something people can use.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.number} className="service-card group border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-black/25 hover:shadow-[0_18px_45px_rgba(0,0,0,.07)]">
                <div className="flex items-center justify-between"><span className="text-[10px] font-semibold tracking-[.18em] text-black/35">{service.number}</span><ArrowUpRight size={18} className="text-black/25 transition group-hover:text-black" /></div>
                <h3 className="font-display mt-14 text-2xl font-semibold tracking-[-.04em]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{service.text}</p>
                <div className="mt-7 space-y-2 border-t border-black/10 pt-5">{service.items.slice(0, 3).map((item) => <p key={item} className="flex items-center gap-2 text-xs text-black/45"><Check size={13} />{item}</p>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] py-28 text-white md:py-36">
        <div className="container">
          <div className="mb-14 grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-end">
            <div><SectionLabel>Selected work</SectionLabel><h2 className="font-display text-4xl font-semibold leading-none tracking-[-.055em] md:text-6xl">Products we've helped shape.</h2></div>
            <p className="max-w-xl text-sm leading-7 text-white/50">A selection of digital products, platforms and systems across learning, construction, identity and recruitment technology.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => <ProjectVisual key={project.name} name={project.name} category={project.category} index={index} />)}
          </div>
          <div className="mt-10"><Link href="/work" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white/50">See all work <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>

      <section className="container py-28 md:py-36">
        <div className="grid gap-14 md:grid-cols-[.7fr_1.3fr]">
          <div><SectionLabel>How we work</SectionLabel><h2 className="font-display text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">Good products don't happen by accident.</h2><p className="mt-6 max-w-md text-sm leading-7 text-black/55">We give ideas structure, then move them toward something people can actually use.</p></div>
          <div className="process-list">{[["01","Discover","Understand the problem, users and opportunity."],["02","Define","Turn requirements and ideas into a clear product direction."],["03","Design","Shape the experience, interface and product structure."],["04","Build","Develop, test and refine the product."],["05","Launch","Ship, learn and improve."]].map(([number,title,text]) => <div key={number} className="process-item group grid grid-cols-[52px_1fr_auto] gap-5 border-t border-black/15 py-7"><span className="text-xs text-black/30">{number}</span><div><h3 className="font-display text-2xl font-semibold tracking-[-.035em]">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-black/50">{text}</p></div><ArrowUpRight size={19} className="mt-1 text-black/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" /></div>)}</div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#ecece6]">
        <div className="container grid gap-12 py-28 md:grid-cols-[1fr_1fr] md:items-center md:py-36">
          <div><SectionLabel>About ABE TechLab</SectionLabel><h2 className="font-display text-5xl font-semibold leading-[.92] tracking-[-.06em] md:text-7xl">Small studio.<br />Serious products.</h2></div>
          <div className="max-w-xl text-base leading-8 text-black/60"><p>ABE TechLab works at the intersection of product, design and technology. We help turn early ideas into structured products and help existing products become clearer, more useful and easier to grow.</p><p className="mt-5">We don't believe every project needs a large agency. It needs the right thinking, the right people and a clear path to shipping.</p></div>
        </div>
      </section>

      <section className="cta-section relative overflow-hidden bg-[#b7ff3c]">
        <div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/40 blur-[100px]" />
        <div className="container relative flex flex-col gap-10 py-28 md:flex-row md:items-end md:justify-between md:py-36">
          <div><SectionLabel>Start a conversation</SectionLabel><h2 className="font-display max-w-3xl text-5xl font-semibold leading-[.9] tracking-[-.065em] md:text-8xl">Have something worth building?</h2><p className="mt-7 max-w-xl text-base text-black/60">Tell us what you're working on. We'll help you figure out what comes next.</p></div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 bg-black px-7 py-5 text-sm font-semibold text-white transition hover:-translate-y-1">Start a project <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
