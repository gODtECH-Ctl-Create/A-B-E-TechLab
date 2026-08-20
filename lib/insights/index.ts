import type { Insight, InsightCategory } from './types';
import whatAbeTechlabBuilds from './articles/what-abe-techlab-builds';
import whyProductResearchComesBeforeBuilding from './articles/why-product-research-comes-before-building';
import teachingTechnologyIsMoreThanAnLms from './articles/teaching-technology-is-more-than-an-lms';
import fromConstructionProblemToProcurementPlatform from './articles/from-construction-problem-to-procurement-platform';
import productMarketingStartsBeforeLaunch from './articles/product-marketing-starts-before-launch';
import howWeApproachProductStrategy from './articles/how-we-approach-product-strategy';
import whatToValidateBeforeBuildingAnMvp from './articles/what-to-validate-before-building-an-mvp';
import buildingForAfricanMarketsStartsWithContext from './articles/building-for-african-markets-starts-with-context';
import designingSchoolTechnologyAroundWorkflows from './articles/designing-school-technology-around-workflows';
import whatWeLearnedFromBuildingTechProducts from './articles/what-we-learned-from-building-tech-products';

export type { Insight, InsightCategory } from './types';

export const insights: Insight[] = [
  whatAbeTechlabBuilds,
  whyProductResearchComesBeforeBuilding,
  teachingTechnologyIsMoreThanAnLms,
  fromConstructionProblemToProcurementPlatform,
  productMarketingStartsBeforeLaunch,
  howWeApproachProductStrategy,
  whatToValidateBeforeBuildingAnMvp,
  buildingForAfricanMarketsStartsWithContext,
  designingSchoolTechnologyAroundWorkflows,
  whatWeLearnedFromBuildingTechProducts,
];

export function getInsight(slug: string) { return insights.find((insight) => insight.slug === slug); }
export function getFeaturedInsights(limit = 3) { return insights.filter((insight) => insight.featured).slice(0, limit); }
export function getInsightsByCategory(category: InsightCategory) { return insights.filter((insight) => insight.category === category); }
export function getRelatedInsights(insight: Insight, limit = 3) {
  const explicit = (insight.relatedSlugs ?? []).map((slug) => getInsight(slug)).filter((candidate): candidate is Insight => Boolean(candidate));
  const fallback = insights.filter((candidate) => candidate.slug !== insight.slug && candidate.category === insight.category && !explicit.some((related) => related.slug === candidate.slug));
  return [...explicit, ...fallback].slice(0, limit);
}
