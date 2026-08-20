import type { Insight } from '../types';

const article: Insight = {
  slug: 'what-we-learned-from-building-tech-products',
  title: 'What We Learn When We Build Real Products',
  excerpt: 'A practical reflection on how building exposes the gaps that planning alone cannot reveal.',
  category: 'Perspectives',
  publishedAt: '2026-08-20',
  readTime: '5 min read',
  author: 'ABE TechLab',
  relatedSlugs: ['how-we-approach-product-strategy', 'from-construction-problem-to-procurement-platform'],
  relatedPaths: ['/services', '/products', '/contact'],
  content: [
    'A product can look clear on paper and still become complicated once real people use it. That is one of the reasons we treat development as part of learning, not only the final execution step.',
    'Building exposes missing assumptions. A workflow that sounded simple may require several decisions. A field that seemed optional may turn out to be essential. A user may take a completely different path from the one the team expected.',
    'Those discoveries are not automatically failures. They are product information. The important thing is to notice them early, understand why they happened and decide whether the product should change.',
    'This is also why prototypes and early versions matter. They make ideas concrete enough to test. Once something can be clicked, used or reviewed in context, conversations become more specific and trade-offs become easier to see.',
    'Real products also teach teams about the environment around the software. Support questions reveal confusion. Operational work reveals bottlenecks. Feedback reveals language that the product team may not have considered. The product becomes a source of evidence.',
    'The lesson is not to build recklessly in the name of learning. It is to create deliberate points where building produces useful information. Research, strategy, design and development should form a loop rather than a one-way pipeline.',
    'That loop is what helps a product get better without losing sight of the original problem it was meant to solve.'
  ],
};

export default article;
