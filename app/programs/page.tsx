import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programs | Technology Learning & Development',
  description: 'Explore ABE TechLab programs powered by TechTrack, including bootcamps, internships and practical technology learning experiences.',
  alternates: { canonical: '/programs' },
};

const programs = [
  {
    number: '01',
    name: 'TechTrack Bootcamps',
    type: 'Structured learning',
    description: 'Practical technology programs designed around structured learning, projects, guided development and the skills people need to move forward.',
  },
  {
    number: '02',
    name: 'TechTrack Internships',
    type: 'Work-based learning',
    description: 'Internship experiences that connect learning with real product work, collaboration, documentation and practical delivery.',
  },
  {
    number: '03',
    name: 'Technology Development Programs',
    type: 'Future programs',
    description: 'New programs can be built around specific technology, product, education or professional development needs as the studio grows.',
  },
];

export default function ProgramsPage() {
  return (
    <div>
      <section className="grid-bg border-b border-black/10">
        <div className="container py-24 md:py-32">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/45">Programs</p>
          <h1 className="font-display mt-6 max-w-5xl text-6xl font-semibold leading-[.86] tracking-[-.075em] md:text-8xl">We don't just build technology. We use it to help people grow.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">ABE TechLab programs combine practical technology education with the systems we build through TechTrack, creating structured paths for learning, experience and development.</p>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="mb-12 max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">Program portfolio</p>
          <h2 className="font-display mt-5 text-4xl font-semibold leading-none tracking-[-.055em] md:text-6xl">Learning experiences built around doing.</h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10">
          {programs.map((program) => (
            <article key={program.number} className="bg-[#f5f5f2] p-8 transition hover:bg-white md:p-10">
              <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start">
                <p className="text-xs text-black/35">{program.number}</p>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">{program.type}</p>
                  <h3 className="font-display mt-3 text-3xl font-semibold tracking-[-.045em] md:text-4xl">{program.name}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55">{program.description}</p>
                </div>
                <span className="mt-1 inline-flex w-fit items-center gap-2 border border-black/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.14em] text-black/45">Powered by TechTrack</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#ecece6]">
        <div className="container py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">The system behind the programs</p>
            <div>
              <h2 className="font-display max-w-3xl text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">TechTrack turns a program idea into a working learning experience.</h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-black/55">TechTrack provides the digital layer for structured learning, bootcamps and internship experiences, while ABE TechLab shapes the product and program experience around the people using it.</p>
              <Link href="/products" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">See products <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="bg-[#b7ff3c] p-8 md:p-14">
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/50">Future programs</p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.05em] md:text-6xl">A program can start with a problem worth teaching.</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/65">As the studio grows, this page can expand with new bootcamps, internships, fellowships, workshops and technology development programs.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">Talk to us <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
