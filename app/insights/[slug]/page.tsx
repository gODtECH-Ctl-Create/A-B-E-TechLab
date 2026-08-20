import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getInsight, getRelatedInsights, insights } from '@/lib/insights';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://a-b-e-tech-lab.vercel.app';
const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

const pathLabels: Record<string, string> = {
  '/services': 'Services',
  '/products': 'Products',
  '/programs': 'Programs',
  '/about': 'About ABE TechLab',
  '/contact': 'Start a project',
  '/work': 'Selected work',
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};

  const url = absoluteUrl(`/insights/${insight.slug}`);
  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: 'article',
      url,
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt,
      authors: [insight.author],
      section: insight.category,
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const url = absoluteUrl(`/insights/${insight.slug}`);
  const relatedInsights = getRelatedInsights(insight, 3);
  const relatedPaths = (insight.relatedPaths ?? []).filter(Boolean);

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt || insight.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: insight.author, url: absoluteUrl('/') },
    publisher: { '@type': 'Organization', name: 'ABE TechLab', url: absoluteUrl('/') },
    articleSection: insight.category,
  };

  const formattedDate = new Intl.DateTimeFormat('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${insight.updatedAt || insight.publishedAt}T00:00:00Z`));

  return (
    <article className="min-h-screen bg-[#f5f5f2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />

      <header className="container max-w-4xl pb-12 pt-16 md:pb-16 md:pt-28">
        <Link href="/insights" className="text-xs font-semibold uppercase tracking-[.18em] text-black/40 transition hover:text-black">
          ← All insights
        </Link>
        <div className="mt-10 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-black/40 md:mt-12">
          <span>{insight.category}</span>
          <span aria-hidden="true">·</span>
          <span>{insight.readTime}</span>
        </div>
        <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-6xl md:text-7xl">
          {insight.title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 md:text-xl">
          {insight.excerpt}
        </p>
        <p className="mt-6 text-xs text-black/40">
          By {insight.author} · {formattedDate}
          {insight.updatedAt && insight.updatedAt !== insight.publishedAt ? ` · Updated ${new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${insight.updatedAt}T00:00:00Z`))}` : ''}
        </p>
      </header>

      <main className="border-t border-black/10">
        <div className="container max-w-3xl py-12 md:py-20">
          <div className="space-y-7">
            {insight.content.map((paragraph, index) => (
              <p key={`${insight.slug}-${index}`} className="text-[1.05rem] leading-8 text-black/70 md:text-lg md:leading-9">
                {paragraph}
              </p>
            ))}
          </div>

          {relatedPaths.length > 0 && (
            <section className="mt-16 border-t border-black/10 pt-8" aria-labelledby="related-abe-techlab-pages">
              <p id="related-abe-techlab-pages" className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">
                Explore ABE TechLab
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {relatedPaths.map((path) => (
                  <Link key={path} href={path} className="inline-flex min-h-11 items-center border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold transition hover:bg-white">
                    {pathLabels[path] || path.replace('/', '').replaceAll('-', ' ')} →
                  </Link>
                ))}
              </div>
            </section>
          )}

          {relatedInsights.length > 0 && (
            <section className="mt-14 border-t border-black/10 pt-8" aria-labelledby="related-insights">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/40">Keep reading</p>
                  <h2 id="related-insights" className="font-display mt-2 text-2xl font-semibold tracking-[-.04em] md:text-3xl">
                    More from ABE TechLab
                  </h2>
                </div>
                <Link href="/insights" className="text-xs font-semibold uppercase tracking-[.14em] text-black/45 hover:text-black">
                  All insights →
                </Link>
              </div>

              <div className="mt-6 grid gap-3">
                {relatedInsights.map((related) => (
                  <Link key={related.slug} href={`/insights/${related.slug}`} className="group border border-black/10 bg-white/45 p-5 transition hover:bg-white">
                    <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[.14em] text-black/40">
                      <span>{related.category}</span>
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="font-display mt-3 text-xl font-semibold tracking-[-.03em] group-hover:underline">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-14 border-t border-black/10 pt-8">
            <p className="max-w-xl text-sm leading-6 text-black/55">Have a product, research or technology problem worth working through?</p>
            <Link href="/contact" className="btn-primary mt-4 inline-flex min-h-12 px-6 py-4 font-semibold">
              Talk to ABE TechLab →
            </Link>
          </div>
        </div>
      </main>
    </article>
  );
}
