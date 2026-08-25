import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const kidsUrl = process.env.NEXT_PUBLIC_TECHTRACK_KIDS_URL || '/programs#techtrack-kids';
const stages = [
  ['Explorers','8–12','Discovering technology, creativity, digital literacy, and foundational Artificial Intelligence concepts.'],
  ['Innovators','13–16','Developing stronger technology skills through coding, Artificial Intelligence, creative technology, and practical projects.'],
  ['Pioneers','17–19','Developing advanced technology, creation, automation, coding, digital product, and career-oriented skills.'],
];
const experiences = [
  ['Courses','Self-paced learning with lessons, videos, modules, quizzes, practical tasks, project submissions, progress tracking and certificates.'],
  ['Programs','Special technology programs such as school programs, challenges, competitions, hackathons, workshops and holiday programs.'],
  ['Parents & Schools','A connected ecosystem for parents and schools to participate in and support children’s learning.'],
];
const areas = ['Digital Literacy','Artificial Intelligence Literacy','Coding','Creative Technology','Animation','Digital Content Creation','Problem Solving','Project-Based Learning'];

export default function TechTrackKidsShowcase(){
  return <div className="mt-8 border-t border-black/10 pt-8">
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="border border-black/10 bg-white/50 p-5"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-black/40">Age</p><p className="mt-2 font-display text-2xl font-semibold">8–19</p></div>
      <div className="border border-black/10 bg-white/50 p-5"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-black/40">Focus</p><p className="mt-2 text-sm leading-6 text-black/60">Technology, Artificial Intelligence, Creativity & Digital Skills</p></div>
    </div>
    <p className="mt-7 max-w-3xl text-sm leading-7 text-black/60">TechTrack Kids is ABE Tech Lab&apos;s youth technology education experience, designed to help children and teenagers develop practical digital skills, explore Artificial Intelligence, express their creativity, solve problems, and build real projects through engaging, project-based learning.</p>
    <div className="mt-8 grid gap-3 md:grid-cols-3">{stages.map(([name,ages,copy])=><div key={name} className="border border-black/10 bg-white/40 p-5"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-black/40">{ages}</p><h4 className="font-display mt-2 text-xl font-semibold">{name}</h4><p className="mt-2 text-sm leading-6 text-black/55">{copy}</p></div>)}</div>
    <div className="mt-8"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-black/40">Key areas</p><div className="mt-3 flex flex-wrap gap-2">{areas.map(area=><span key={area} className="border border-black/10 bg-white/40 px-3 py-2 text-xs text-black/55">{area}</span>)}</div></div>
    <div className="mt-8"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-black/40">Program experience</p><div className="mt-3 grid gap-3 md:grid-cols-3">{experiences.map(([name,copy])=><div key={name} className="border border-black/10 bg-white/40 p-5"><h4 className="font-display text-lg font-semibold">{name}</h4><p className="mt-2 text-sm leading-6 text-black/55">{copy}</p></div>)}</div></div>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={kidsUrl} className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 py-4 text-sm font-semibold">Explore TechTrack Kids <ArrowUpRight size={16}/></Link><Link href="#techtrack-kids" className="inline-flex min-h-12 items-center justify-center border border-black/15 px-6 py-4 text-sm font-semibold transition hover:border-black/35">Learn About the Program</Link></div>
  </div>;
}
