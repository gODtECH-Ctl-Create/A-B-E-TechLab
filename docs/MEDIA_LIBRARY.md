# ABE TechLab Media Library

The public website uses a small GitHub-managed media catalog so real photography can replace temporary imagery without rewriting components.

## Media folders

```text
public/images/
├── founder/
├── team/
├── hero/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── programs/
│   ├── insights/
│   └── team/
├── programs/
│   ├── techtrack-kids/
│   ├── techtrack-learn/
│   ├── techtrack-bootcamp/
│   └── techtrack-internship/
├── projects/
└── insights/
```

Existing assets remain valid. The current founder image is `/images/founder.webp`.

## Team photos

Add a public-safe photo under `public/images/team/` and reference it from the member's `photo` field in `data/team.ts`.

```ts
photo: {
  src: '/images/team/cecilia.webp',
  alt: 'Cecilia, Operations and Documentation Lead at ABE TechLab',
}
```

The Team component must show a branded fallback when a member has no approved photo yet.

## Photo quality

Prefer high-resolution originals and modern web formats such as WebP or AVIF. Keep faces and important subjects inside the safe crop area because cards and hero images use different aspect ratios on mobile and desktop.

## Future integration

`lib/media.ts` is the stable website-side catalog. A future Operations or Content Management System integration can map to these asset keys without changing the public components.
