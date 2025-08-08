import { Discord, GitHub, Gmail, LinkedIn, Telegram } from './svg';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/engrjvramos',
    icon: <GitHub />,
  },
  {
    name: 'Email',
    url: 'mailto:engrjvramos@gmail.com',
    icon: <Gmail />,
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/1024682213050167327',
    icon: <Discord />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/engrjvramos/',
    icon: <LinkedIn />,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/jobieramos',
    icon: <Telegram />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-base-100 px-8 py-8 sm:px-16 dark:bg-zinc-900">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center text-sm sm:flex-row">
        <p className="flex items-center">&copy; {new Date().getFullYear()} Jobie Ramos. All rights reserved.</p>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map(({ icon, name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:ring-ring border-input hover:text-accent-foreground hover:border-primary/30 inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium whitespace-nowrap shadow-none saturate-0 transition-all duration-100 hover:border-[0.2px] hover:border-b-4 hover:saturate-100 focus-visible:ring-1 focus-visible:outline-none active:scale-[0.97] active:border-b disabled:pointer-events-none disabled:opacity-50"
            >
              {icon}
              <span className="sr-only lowercase">
                {name} - {url}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
