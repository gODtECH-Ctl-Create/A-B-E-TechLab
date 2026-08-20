import type { Insight } from '../types';

const article: Insight = {
  slug: 'designing-school-technology-around-workflows',
  title: 'Designing School Technology Around Workflows, Not Features',
  excerpt: 'What changes when a school technology product is designed around the daily work of students, teachers and administrators.',
  category: 'Technology',
  publishedAt: '2026-08-20',
  readTime: '6 min read',
  author: 'ABE TechLab',
  relatedSlugs: ['teaching-technology-is-more-than-an-lms', 'what-to-validate-before-building-an-mvp'],
  relatedPaths: ['/services', '/programs', '/contact'],
  content: [
    'School technology is easy to describe as a set of features: attendance, assessments, messaging, payments, learning content and reports. The harder product problem is understanding how those features fit into the work people already do every day.',
    'A teacher may move between lesson preparation, classroom activity, attendance, grading, feedback and parent communication. An administrator may care about enrolment, records, payments, staff operations and reporting. Students have their own routines, constraints and expectations. These are connected workflows, not isolated screens.',
    'Starting from workflows changes the design process. Instead of asking which features should appear on the dashboard, we can ask what someone is trying to accomplish, what information they need at that moment and what should happen next.',
    'That often leads to simpler products. A teacher may not need five separate reporting tools if one clear view answers the main question. An administrator may not need to manually move data between modules if the system is structured around the real sequence of work.',
    'The same principle applies to communication. A notification is useful only when it arrives at the right time and helps someone take an action. More messages do not automatically create better coordination.',
    'School technology should therefore be designed as infrastructure around real educational work. Features still matter, but they should serve the workflow instead of becoming the workflow.',
    'This is one reason education technology deserves serious product thinking. A school is a system of people, responsibilities and decisions. Software works best when it respects that system.'
  ],
};

export default article;
