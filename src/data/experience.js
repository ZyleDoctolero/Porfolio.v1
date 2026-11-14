// src/data/experience.js — keep in step with the CV (public/Zyle-Doctolero-CV.pdf)
export const experience = [
  {
    id: 'e1',
    company: 'EMIGMA',
    context: 'Early-stage startup',
    role: 'Full Stack Engineer',
    period: 'Jun 2026 – now',
    // Kept general on purpose: product details are under NDA.
    points: [
      'Build and ship core features of a role-based web platform that serves several user groups',
      'Built sign-up with identity verification, secure document upload with multi-step approval workflows, and live dashboards that show each user’s progress and status',
      'Built a marketplace with listings, reservations and eligibility checks, and a Kanban-style case board with KPI reports',
      'Test the product with the team, review bug reports and ship fixes regularly',
      'Product details are kept general under a non-disclosure agreement',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  },
  {
    id: 'e2',
    company: 'Davao City Water District',
    context: 'Leak and operations management system',
    role: 'Frontend Developer Intern',
    period: 'Jan – Mar 2026',
    points: [
      'Completed 400+ hours over 10 weeks on an internal system field crews and office staff use every day',
      "Built a major operations module end to end, and moved the app's data handling from MobX to TanStack Query, which fixed screens showing outdated data",
      'Built admin tools for user accounts and access control, plus report forms with image support and printable report pages',
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'MobX', 'REST APIs', 'GIS'],
  },
  {
    id: 'e3',
    company: 'Independent contractor',
    context: 'Content and site systems, remote',
    role: 'Contractor',
    period: '2026 – now',
    points: [
      'Manage SEO and website content for several client sites at once, planning and delivering the work independently',
      'Built and ran a set of 36 linked landing pages, with repeatable steps for writing and checking content',
    ],
    stack: ['SEO', 'WordPress', 'Content systems'],
  },
];
