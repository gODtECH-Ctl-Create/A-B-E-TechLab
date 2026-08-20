import type { Insight } from '../types';

const article: Insight = {
  slug: 'what-to-validate-before-building-an-mvp',
  title: 'What Should You Validate Before Building an MVP?',
  excerpt: 'A practical way to decide which assumptions deserve evidence before the first version is built.',
  category: 'Research',
  publishedAt: '2026-08-20',
  readTime: '6 min read',
  author: 'ABE TechLab',
  relatedSlugs: ['why-product-research-comes-before-building', 'how-we-approach-product-strategy'],
  relatedPaths: ['/services', '/contact'],
  content: [
    'An MVP, or Minimum Viable Product, is not simply a smaller version of a finished product. It is an early version designed to test important assumptions while keeping the cost of learning manageable.',
    'Before building one, we want to identify the assumptions that could make the whole idea fail. Who actually experiences the problem? How often does it happen? Are people already paying, improvising or using another workflow? Would the proposed solution change behaviour in a meaningful way?',
    'The most useful validation questions are usually connected to risk. A team may be uncertain about demand, usability, willingness to pay, technical feasibility or the operational process around the product. Each uncertainty calls for a different kind of test.',
    'Some questions can be answered through interviews or observation. Some are better tested with a prototype. A landing page, a manual service, a clickable interface or a small workflow experiment can sometimes tell us more than building a complete platform.',
    'Validation also helps define the MVP itself. If the biggest uncertainty is whether people understand the value proposition, the first version should not be overloaded with features. If the risk is operational, the MVP should expose the real workflow early instead of hiding it behind a polished interface.',
    'The objective is not to prove that every assumption is correct. It is to learn which assumptions are strong enough to build on and which need to change.',
    'A well-designed MVP therefore starts before the code. The product becomes smaller not because the team has removed ideas at random, but because the team has decided what needs to be learned first.'
  ],
};

export default article;
