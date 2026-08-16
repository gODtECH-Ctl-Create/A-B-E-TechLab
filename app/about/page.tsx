import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FounderCard from '@/components/FounderCard';
import HeroVisualCarousel from '@/components/HeroVisualCarousel';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'About ABE TechLab | Product, Research & Technology Studio',
  description: 'Learn about ABE TechLab, what we build, how we work, and the people and AI systems behind the studio.',
  alternates: { canonical: '/about' },
};

const heroVisuals = [
  { src: 'https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1800', alt: 'Developers collaborating around a computer in a technology workspace' },
  { src: 'https://images.pexels.com/photos/5474300/pexels-photo-5474300.jpeg?auto=compress&cs=tinysrgb&w=1800', alt: 'Hands working with code on a laptop' },
  { src: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1800', alt: 'Developer working with code on a laptop' },
];

const whatWeDo = [
  ['01', 'Research & insight', 'We study users, markets, problems and opportunities so product decisions start from evidence rather than assumptions.'],
  ['02', 'Product strategy', 'We turn ideas and real-world problems into clear product direction, requirements, roadmaps and practical paths to launch.'],
  ['03', 'Product marketing', 'We help products become understandable and discoverable through positioning, messaging, go-to-market thinking and launch strategy.'],
  ['04', 'Design & development', 'We design and build digital products, platforms and internal systems that people can actually use.'],
  ['05', 'Technology education', 'Through TechTrack and future programmes, we use technology to create practical learning, bootcamp and internship experiences.'],
];

export default function About() {
  return (
    <div>
      <section className="grid-bg border-b border-black/10">
        <div className="container py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-black/45">About ABE TechLab</p>
          <h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.07em] md:text-8xl">A product, research and technology studio built around useful ideas.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">ABE TechLab researches, shapes, designs, builds and positions digital products. We also create technology programmes that help people learn by doing.</p>
          <HeroVisualCarousel visuals={heroVisuals} />
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[.75fr_1.25fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-black/40">The studio</p><h2 className="font-display mt-5 max-w-sm text-4xl font-semibold leading-none tracking-[-.055em] md:text-5xl">We close the gap between an idea and something useful.</h2></div>
          <div className="max-w-2xl text-lg leading-8 text-black/65"><p>Great ideas often get stuck between seeing an opportunity and building the right thing. ABE TechLab exists to close that gap.</p><p className="mt-7">We work across research, product strategy, product marketing, design and technology. Sometimes that means building our own products. Sometimes it means working closely with an organisation to shape and develop a digital system around a real problem.</p><p className="mt-7">Education is another part of the studio. Through TechTrack and future technology programmes, we create practical learning, bootcamp and internship experiences that connect technology with real work.</p></div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#ecece6]"><div className="container py-24 md:py-32"><div className="mb-12 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.16em] text-black/40">What we do</p><h2 className="font-display mt-5 text-4xl font-semibold leading-none tracking-[-.055em] md:text-6xl">From understanding the problem to building what comes next.</h2></div><div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">{whatWeDo.map(([number, title, text]) => <div key={number} className="bg-[#f5f5ef] p-8 transition hover:bg-white md:p-10"><p className="text-xs text-black/35">{number}</p><h3 className="font-display mt-8 text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-black/55">{text}</p></div>)}</div></div></section>

      <section className="container py-24 md:py-32"><div className="mb-12"><p className="text-xs font-semibold uppercase tracking-[.16em] text-black/40">Founder</p><h2 className="font-display mt-5 text-4xl font-semibold tracking-[-.055em] md:text-6xl">The person behind the studio.</h2></div><FounderCard /></section>

      <section className="border-y border-black/10 bg-[#f5f5ef]"><div className="container py-24 md:py-32"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-black/40">Team</p><h2 className="font-display mt-5 text-4xl font-semibold tracking-[-.055em] md:text-6xl">A growing team around the work.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-black/55">ABE TechLab combines human product leadership with AI-assisted research and technology. More specialists can join as the studio grows.</p></div><Link href="/team" className="inline-flex w-fit items-center gap-2 border border-black/15 px-5 py-3 text-sm font-semibold transition hover:border-black/40">Meet the team <ArrowUpRight size={16} /></Link></div><div className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">{team.map((member) => <article key={member.name} className="bg-white p-8 md:p-10"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">{member.type}</p><h3 className="font-display mt-6 text-3xl font-semibold tracking-[-.045em]">{member.name}</h3><p className="mt-2 text-sm font-medium text-black/55">{member.role}</p><p className="mt-5 max-w-xl text-sm leading-7 text-black/55">{member.bio}</p></article>)}</div></div></section>

      <section className="container py-24 md:py-32"><div className="grid gap-8 md:grid-cols-3">{[["01", "Clarity", "Good execution starts with knowing what should be built and why."], ["02", "Craft", "The details matter, from product flows to the final interface."], ["03", "Momentum", "Projects should keep moving from idea to something people can use."]].map(([number, title, text]) => <div key={number} className="border-t border-black/15 pt-7"><p className="text-xs text-black/35">{number}</p><h2 className="font-display mt-5 text-2xl font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-black/55">{text}</p></div>)}</div></section>
      <section className="container pb-24 md:pb-32"><div className="bg-[#b7ff3c] p-8 md:p-14"><p className="text-xs font-semibold uppercase tracking-[.18em] text-black/50">Work with us</p><h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">Have a product, research or technology problem worth solving?</h2><Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">Start a project <ArrowUpRight size={16}/></Link></div></section>
    </div>
  );
}
