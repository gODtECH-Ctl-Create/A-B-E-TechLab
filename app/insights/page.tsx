import Link from 'next/link';
import { insights } from '@/lib/insights';

export const metadata = {
  title: 'Insights | Research, Product, Technology & Perspectives',
  description: 'Research, product thinking, technology and perspectives from ABE TechLab.',
  alternates: { canonical: '/insights' },
};

const categories = ['Research', 'Product', 'Technology', 'Perspectives'] as const;

export default function InsightsPage(){
  return (
    <div className="min-h-screen bg-[#f5f5f2]">
      <section className="container pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-black/40">Insights</p>
        <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.06em] md:text-8xl">Ideas behind the products.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">Research, product thinking, technology and perspectives from the work we do and the products we build.</p>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Insight categories">
          {categories.map(category => <span key={category} className="border border-black/10 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[.14em] text-black/55">{category}</span>)}
        </div>
      </section>
      <section className="border-t border-black/10">
        <div className="container grid gap-px bg-black/10 md:grid-cols-2">
          {insights.map(i=><Link key={i.slug} href={`/insights/${i.slug}`} className="group bg-[#f5f5f2] p-7 transition hover:bg-white md:p-10">
            <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[.16em] text-black/40"><span>{i.category}</span><span>{i.readTime}</span></div>
            <h2 className="font-display mt-8 text-3xl font-semibold tracking-[-.045em] group-hover:underline md:text-4xl">{i.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-black/55">{i.excerpt}</p>
            <span className="mt-8 inline-block text-sm font-semibold">Read insight →</span>
          </Link>)}
        </div>
      </section>
    </div>
  );
}
