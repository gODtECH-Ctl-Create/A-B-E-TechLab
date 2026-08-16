export type TeamMember = {
  name: string;
  role: string;
  type: 'Human' | 'AI';
  bio: string;
  initials: string;
  note?: string;
};

export const team: TeamMember[] = [
  {
    name: 'Ayo Richard Abe',
    role: 'Founder & Product Lead',
    type: 'Human',
    bio: 'Leads ABE TechLab across product strategy, research, technology, product development and product marketing.',
    initials: 'ARA',
  },
  {
    name: 'ARIA',
    role: 'AI Product & Research Partner',
    type: 'AI',
    bio: 'An AI partner supporting ABE TechLab with product research, strategic thinking, market analysis, documentation, ideation and technology development.',
    initials: 'AI',
    note: 'AI system · Not a human employee',
  },
];
