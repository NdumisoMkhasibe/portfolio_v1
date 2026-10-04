export type Project = {
  name: string;
  type: string;
  summary: string;
  stack: string[];
  repository: string;
  live?: string;
  artwork: 'career' | 'map' | 'barber';
};

export const projects: Project[] = [
  {
    name: 'FumanAI',
    type: 'Career tools · AI',
    summary:
      'An AI-assisted career application platform focused on tailored application materials and tools for organizing a job search.',
    stack: ['React', 'TypeScript', 'Vite'],
    repository: 'https://github.com/NdumisoMkhasibe/fumanai',
    live: 'https://fumanai.vercel.app/',
    artwork: 'career',
  },
  {
    name: 'MapSafe',
    type: 'Community mapping',
    summary:
      'A community safety map for browsing and sharing recent, location-based experiences with context.',
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma'],
    repository: 'https://github.com/NdumisoMkhasibe/map-safe',
    live: 'https://map-safe-roan.vercel.app/',
    artwork: 'map',
  },
  {
    name: 'IVORY Barbers',
    type: 'Barbershop website',
    summary:
      'A responsive Cape Town barbershop site with service information and a barber-first appointment booking flow.',
    stack: ['Next.js', 'React', 'Neon Postgres'],
    repository: 'https://github.com/NdumisoMkhasibe/ivory-barbers',
    live: 'https://ivory-barbers.vercel.app/',
    artwork: 'barber',
  },
];

export const skills = [
  'Java',
  'Python',
  'TypeScript',
  'React',
  'Object-oriented programming',
  'Data structures & algorithms',
  'REST APIs',
  'Databases',
  'Git',
  'Linux',
  'Debugging',
  'Generative AI',
];

export const education = [
  {
    qualification: 'Software Engineering',
    institution: 'WeThinkCode_',
    location: 'Cape Town',
    period: '2025 — present',
    note: 'Ongoing study',
  },
  {
    qualification: 'National Diploma in Electrical Engineering',
    institution: 'Vaal University of Technology',
    location: 'South Africa',
    period: 'Completed 2020',
    note: 'Electrical engineering',
  },
];

export const credentials = [
  'AWS Certified AI Practitioner · July 2026',
  'Microsoft Azure Fundamentals (AZ-900)',
  'Google AI Essentials',
  'Generative AI for Developers · WeThinkCode_',
  'Generative AI for Professionals · WeThinkCode_',
];

export const experience = [
  {
    role: 'Electrical Technician',
    company: 'Lambouka Trading',
    location: 'Ladysmith',
    period: 'March 2022 — December 2024',
    details: [
      'Served as an on-site technical lead, inspecting electricity meters for tampering and illegal connections.',
      'Disconnected and reconnected supply in line with municipal regulations.',
    ],
  },
  {
    role: 'Electrical Technician',
    company: 'GPT Concrete Products South Africa',
    location: 'Ladysmith',
    period: 'January 2020 — November 2021',
    details: [
      'Carried out preventive maintenance on three-phase systems and industrial machinery, with corrective repairs when needed.',
      'Worked with mechanical and production teams to help reduce downtime.',
    ],
  },
];
