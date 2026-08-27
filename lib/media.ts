export type MediaAsset = {
  src: string;
  alt: string;
  kind: 'photo' | 'logo' | 'graphic';
};

/**
 * Central website media catalog.
 * Keep public image paths here so components do not hard-code media locations.
 * Future Operations/CMS integrations can map to these stable asset keys.
 */
export const media = {
  founder: {
    primary: {
      src: '/images/founder.webp',
      alt: 'Ayo Richard ABE, Founder and Chief Executive Officer (CEO) of ABE TechLab',
      kind: 'photo',
    },
  },
  team: {},
  hero: {
    home: [],
    about: [],
    services: [],
    programs: [],
    insights: [],
  },
  programs: {
    techtrackKids: [],
    techtrackLearn: [],
    techtrackBootcamp: [],
    techtrackInternship: [],
  },
  projects: {
    techtrack: [],
    bumars: [],
    waste2light: [],
  },
  insights: {},
} satisfies Record<string, unknown>;

export function getMediaSrc(asset?: MediaAsset | null) {
  return asset?.src || null;
}
