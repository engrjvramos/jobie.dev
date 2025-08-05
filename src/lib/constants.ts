import {
  BetterAuth,
  ChakraUIIcon,
  CSSIcon,
  Expressjs,
  Figma,
  FramerIcon,
  GitHub,
  GitLab,
  HeadlessUIIcon,
  HTML5Icon,
  JavaScriptIcon,
  Neon,
  NextjsIcon,
  Nodejs,
  PostgreSQL,
  Postman,
  PrismaIcon,
  ReactIcon,
  Redis,
  Resend,
  SassIcon,
  ShadcnuiIcon,
  Socketio,
  SQLite,
  Stripe,
  Swagger,
  TailwindCSSIcon,
  TypeScriptIcon,
  Vercel,
} from '@/components/svg';
import { TSkill } from './types';

export const TECH_ICONS: TSkill[] = [
  { Icon: ShadcnuiIcon, name: 'Shadcn UI' },
  { Icon: TypeScriptIcon, name: 'TypeScript' },
  { Icon: ReactIcon, name: 'React' },
  { Icon: NextjsIcon, name: 'Next.js' },
  { Icon: TailwindCSSIcon, name: 'Tailwind CSS' },
  { Icon: PrismaIcon, name: 'Prisma' },
];

export const SKILLS_FRONTEND: TSkill[] = [
  { Icon: HTML5Icon, name: 'HTML5' },
  { Icon: CSSIcon, name: 'CSS' },
  { Icon: SassIcon, name: 'Sass' },
  { Icon: JavaScriptIcon, name: 'JavaScript' },
  { Icon: TypeScriptIcon, name: 'TypeScript' },
  { Icon: ReactIcon, name: 'React' },
  { Icon: NextjsIcon, name: 'Next.js' },
  { Icon: TailwindCSSIcon, name: 'Tailwind CSS' },
  { Icon: ShadcnuiIcon, name: 'Shadcn UI' },
  { Icon: HeadlessUIIcon, name: 'Headless UI' },
  { Icon: ChakraUIIcon, name: 'Chakra UI' },
  { Icon: FramerIcon, name: 'Framer Motion' },
  { Icon: Socketio, name: 'Socket.io' },
  {
    imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg',
    name: 'Zustand',
  },
  { imageSrc: '/images/tanstack.svg', name: 'Tanstack Query' },
];

export const SKILLS_BACKEND: TSkill[] = [
  { Icon: Nodejs, name: 'NodeJS' },
  { Icon: Expressjs, name: 'ExpressJS' },
  { Icon: PostgreSQL, name: 'PostreSQL' },
  { Icon: SQLite, name: 'SQLite' },
  { Icon: Redis, name: 'Redis' },
  { Icon: PrismaIcon, name: 'Prisma' },
];

export const TOOLS_AND_PLATFORMS: TSkill[] = [
  { Icon: GitLab, name: 'GitLab' },
  { Icon: GitHub, name: 'GitHub' },
  { Icon: Vercel, name: 'Vercel' },
  { Icon: Neon, name: 'Neon' },
  { Icon: BetterAuth, name: 'Better Auth' },
  { Icon: Resend, name: 'Resend' },
  { Icon: Swagger, name: 'Swagger' },
  { Icon: Postman, name: 'Postman' },
  { Icon: Stripe, name: 'Stripe' },
  { Icon: Figma, name: 'Figma' },
];
