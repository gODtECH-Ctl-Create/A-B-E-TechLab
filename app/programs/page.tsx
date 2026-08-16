import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import HeroVisualCarousel from '@/components/HeroVisualCarousel';

export const metadata: Metadata = {
  title: 'Programs | TechTrack & Future Technology Programmes',
  description: 'Explore ABE TechLab programmes powered by TechTrack, including TechTrack Learn, Bootcamp, Internship and future technology programmes.',
  alternates: { canonical: '/programs' },
};

const heroVisuals = [
  { src: 'https://images.pexels.com/photos/7988114/pexels-photo-7988114.jpeg?auto=compress&cs=tinysrgb&w=1800', alt: 'Developer writing code on a laptop' },
  { src: 'https://images.pexels.com/photos/12899167/pexels-photo-12899167.jpeg?auto=compress&cs=tinysrgb&w=1800', alt: 'Software developers learning and collaborating' },
  { src: 'https://images.pexels.com/photos/7504824/pexels-photo-7504824.jpeg?auto=compress&cs=tinysrgb&w=1800', alt: 'Learner coding while working with a mobile device' },
];

const programs = [
  { number: '01', name: 'TechTrack Learn', type: 'Practical technology learning', description: 'A structured learning experience for people building practical technology skills through guided lessons, projects and continuous development.' },
  { number: '02', name: 'TechTrack Bootcamp', type: 'Intensive learning programme', description: 'Cohort-based technology programmes built around structured learning, projects, guided development and practical delivery.' },
  { number: '03', name: 'TechTrack Internship', type: 'Work-based learning', description: 'Internship experiences that connect learning with real product work, collaboration, documentation and practical delivery.' },
  { number: '04', name: 'Future Technology Programmes', type: 'Programmes in development', description: 'Future bootcamps, workshops, fellowships and technology development programmes shaped around emerging needs and opportunities.' },
];

export default function ProgramsPage() {
  return <div>
    <section className="grid-bg border-b border-black/10"><div className="container py-24 md:py-32"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/45">Programs</p><h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.86] tracking-[-.075em] md:text-8xl">Technology programmes built around learning by doing.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">ABE TechLab uses TechTrack as the digital layer for practical learning, bootcamps and internships, while new programmes can grow around the needs of learners, organisations and the technology ecosystem.</p><HeroVisualCarousel visuals={heroVisuals} /></div></section>
    <section className="container py-24 md:py-32"><div className="mb-12 max-w-3xl"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">Program portfolio</p><h2 className="font-display mt-5 text-4xl font-semibold leading-none tracking-[-.055em] md:text-6xl">Four paths, one practical approach.</h2></div><div className="grid gap-px overflow-hidden border border-black/10 bg-black/10">{programs.map((program) => <article key={program.number} className="bg-[#f5f5f2] p-8 transition hover:bg-white md:p-10"><div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start"><p className="text-xs text-black/35">{program.number}</p><div><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">{program.type}</p><h3 className="font-display mt-3 text-3xl font-semibold tracking-[-.045em] md:text-4xl">{program.name}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-black/55">{program.description}</p></div><span className="mt-1 inline-flex w-fit items-center gap-2 border border-black/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.14em] text-black/45">TechTrack</span></div></article>)}</div></section>
    <section className="border-y border-black/10 bg-[#ecece6]"><div className="container py-24 md:py-32"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">The system behind the programmes</p><div><h2 className="font-display max-w-3xl text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">TechTrack turns a programme idea into a working learning experience.</h2><p className="mt-7 max-w-2xl text-base leading-7 text-black/55">TechTrack provides the digital layer for structured learning, bootcamps and internship experiences, while ABE TechLab shapes the product and programme experience around the people using it.</p><Link href="/products" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">See products <ArrowUpRight size={16} /></Link></div></div></div></section>
    <section className="container py-24 md:py-32"><div className="bg-[#b7ff3c] p-8 md:p-14"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/50">Future programmes</p><h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">New programmes can start with a problem worth teaching.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-black/65">As the studio grows, this page can expand with new bootcamps, internships, fellowships, workshops and technology development programmes.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">Talk to us <ArrowUpRight size={16}/></Link></div></section>
  </div>;
}
