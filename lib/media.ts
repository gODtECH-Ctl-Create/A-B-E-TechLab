export type MediaAsset = {
  src: string;
  alt: string;
  kind: 'photo' | 'logo' | 'graphic';
};

/** Central catalog for public website media. */
export const media = {
  founder: {
    primary: {
      src: '/images/founder.webp',
      alt: 'Ayo Richard ABE, Founder and Chief Executive Officer (CEO) of ABE TechLab',
      kind: 'photo',
    } satisfies MediaAsset,
  },
  team: {} as Record<string, MediaAsset>,
  hero: {
    home: [] as MediaAsset[],
    about: [] as MediaAsset[],
    services: [] as MediaAsset[],
    programs: [] as MediaAsset[],
    insights: [] as MediaAsset[],
    team: [] as MediaAsset[],
  },
  programs: {
    techtrackKids: [] as MediaAsset[],
    techtrackLearn: [] as MediaAsset[],
    techtrackBootcamp: [] as MediaAsset[],
    techtrackInternship: [] as MediaAsset[],
  },
  projects: {} as Record<string, MediaAsset[]>,
  insights: {} as Record<string, MediaAsset>,
};

export function getMediaSrc(asset?: MediaAsset | null) {
  return asset?.src ?? null;
}
