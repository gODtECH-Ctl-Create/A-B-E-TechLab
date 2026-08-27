# ABE TechLab Media Library

This directory and catalog define the website's real-media structure. The public website remains independent from the Operations system, while the asset keys are stable enough for a future integration.

## Where to add photos

```text
public/images/
├── founder/
├── team/
├── hero/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── programs/
│   └── insights/
├── programs/
│   ├── techtrack-kids/
│   ├── techtrack-learn/
│   ├── techtrack-bootcamp/
│   └── techtrack-internship/
├── projects/
└── insights/
```

The existing founder asset at `public/images/founder.webp` remains supported while the catalog is introduced.

## Team photos

Add a team photo under `public/images/team/`, then add its public path to that person's `photo` field in `data/team.ts`.

Example:

```ts
photo: {
  src: '/images/team/cecilia.webp',
  alt: 'Cecilia, Operations and Documentation Lead at ABE TechLab',
}
```

Team cards must always have a graceful fallback when a photo is not available.

## Photo guidance

Prefer high-resolution originals and modern web formats such as WebP or AVIF. Keep the subject framed so the face remains usable in both portrait cards and mobile layouts. Avoid adding personal images until they are approved for public website use.

## Future-ready media keys

The catalog reserves stable areas for founder, team, hero, programs, projects and Insights. A future Operations integration can map these keys to managed assets without requiring the public components to be redesigned.
