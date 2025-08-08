import {
  BetterAuth,
  ChakraUIIcon,
  Cloudflare,
  Expressjs,
  FramerIcon,
  GitHub,
  GitLab,
  HeadlessUIIcon,
  MySQL,
  Neon,
  NextjsIcon,
  Nodejs,
  PostgreSQL,
  PrismaIcon,
  ReactHookForm,
  ReactIcon,
  Redis,
  Redux,
  Resend,
  SassIcon,
  ShadcnuiIcon,
  Socketio,
  SQLite,
  Stripe,
  TailwindCSSIcon,
  TypeScriptIcon,
  Vercel,
} from '@/components/svg';
import { TCareerItem, TSkill } from './types';

export const TECH_ICONS: TSkill[] = [
  { Icon: ShadcnuiIcon, name: 'Shadcn UI' },
  { Icon: TypeScriptIcon, name: 'TypeScript' },
  { Icon: ReactIcon, name: 'React' },
  { Icon: NextjsIcon, name: 'Next.js' },
  { Icon: TailwindCSSIcon, name: 'Tailwind CSS' },
  { Icon: PrismaIcon, name: 'Prisma' },
];

export const SKILLS_FRONTEND: TSkill[] = [
  { Icon: TypeScriptIcon, name: 'TypeScript' },
  { Icon: ReactIcon, name: 'React' },
  { Icon: NextjsIcon, name: 'Next.js' },
  { Icon: TailwindCSSIcon, name: 'Tailwind CSS' },
  { Icon: SassIcon, name: 'Sass' },
  { Icon: HeadlessUIIcon, name: 'Headless UI' },
  { Icon: ChakraUIIcon, name: 'Chakra UI' },
  { Icon: ShadcnuiIcon, name: 'Shadcn UI' },
  { Icon: FramerIcon, name: 'Framer Motion' },
  { Icon: Socketio, name: 'Socket.io' },
  { Icon: Redux, name: 'Redux Toolkit' },
  {
    imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg',
    name: 'Zustand',
  },
  {
    imageSrc: 'https://logo.svgcdn.com/l/jotai.svg',
    name: 'Jotai',
  },
  { Icon: ReactHookForm, name: 'React Hook Form' },
  { imageSrc: '/images/tanstack.svg', name: 'Tanstack Query' },
  { Icon: BetterAuth, name: 'Better Auth' },
  { Icon: Resend, name: 'Resend' },
  { Icon: Stripe, name: 'Stripe' },
];

export const SKILLS_BACKEND: TSkill[] = [
  { Icon: Nodejs, name: 'Node.js' },
  { Icon: Expressjs, name: 'Express' },
];

export const SKILLS_DATABASE_ORM: TSkill[] = [
  { Icon: MySQL, name: 'MySQL' },
  { Icon: SQLite, name: 'SQLite' },
  { Icon: PostgreSQL, name: 'PostreSQL' },
  { Icon: Neon, name: 'Neon' },
  { Icon: Redis, name: 'Redis' },
  { Icon: PrismaIcon, name: 'Prisma' },
];

export const SKILLS_CLOUD_DEVOPS: TSkill[] = [
  { Icon: Vercel, name: 'Vercel' },
  { Icon: GitLab, name: 'GitLab CI/CD' },
  { Icon: GitHub, name: 'GitHub' },
  { Icon: Cloudflare, name: 'Cloudflare' },
];

export const COMPANY_TABS = [
  { value: 'tab-1', label: 'Pandora Technology Solutions' },
  { value: 'tab-2', label: 'Primia IT Solutions' },
  { value: 'tab-3', label: 'Ground Link Digital Advertising Services' },
];

export const CAREER_ITEMS: TCareerItem[] = [
  {
    id: 1,
    date: 'Aug 2019 - Jun 2021',
    title: 'Megawide Construction Corporation',
    position: 'Quality Control Structural Engineer',
    details: [
      'Worked alongside quality control engineers to inspect, monitor and document daily structural activities to ensure compliance with project specifications, resulting in fewer punchlists and rectifications.',
      'Collaborated closely with architects, civil engineers, and project managers, to resolve punchlists, non-compliance reports and ensure seamless project execution.',
      'Performs inspection and documentation of material deliveries and testing, including concrete compressive strength tests and rebar tensile and bending strength tests.',
    ],
    description:
      'Ensured structural quality and compliance on-site by conducting inspections, resolving punchlists, and coordinating with engineers and project managers to maintain high construction standards.',
    techStack: ['Project Management', 'Materials Testing', 'Method Statements', 'QA/QC', 'AutoCad'],
  },

  {
    id: 3,
    date: 'Mar 2022 - Jan 2023',
    title: 'Pandora Technology Solutions Inc.',
    position: 'Web Developer',
    details: [
      'Developed and maintained user interfaces of client websites using HTML, CSS, JavaScript and PHP.',
      'Evaluates code to ensure cross-browser compatibility and mobile responsiveness.',
      'Troubleshoot and debug application issues, and ensure high-quality releases.',
    ],
    description:
      'Built and maintained client websites using HTML, CSS, JavaScript, and PHP, focusing on responsive design, cross-browser compatibility, and reliable functionality.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    id: 4,
    date: 'Feb 2024 - Jul 2024',
    title: 'Primia IT Solutions',
    position: 'Lead Frontend Developer',
    details: [
      'Developed and maintained user interfaces using React, NextJS, and Tailwind CSS. ',
      'Revamped legacy applications by migrating to a modern full-stack architecture with improved performance and maintainability.',
    ],
    description:
      'Modernized frontend systems using React and Next.js, leading UI development and enhancing application performance through efficient, maintainable codebases.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Jotai'],
  },
  {
    id: 5,
    date: 'May 2023 - May 2025',
    title: 'Ground Link Digital Advertising Services',
    position: 'Senior Frontend Developer',
    details: [
      'Led and maintained the overall frontend architecture of web applications.',
      'Implemented CI/CD pipelines using GitLab to streamline testing and deployment workflows.',
      'Built and maintained scalable, modular applications with a strong focus on performance and maintainability.',
      'Mentored developers on best practices in frontend development.',
    ],
    description:
      'Directed frontend architecture for scalable applications, introduced CI/CD pipelines, and mentored developers while focusing on performance-driven development.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Tanstack Query', 'Zustand', 'Socket.io', 'CI/CD'],
  },
];
