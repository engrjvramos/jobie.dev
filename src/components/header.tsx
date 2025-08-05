'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from './theme-toggler';

const HEADER_NAVIGATION = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-accent fixed top-0 left-0 z-50 flex w-full items-center justify-between p-5">
      <nav className="flex items-center gap-2 sm:gap-5">
        {HEADER_NAVIGATION.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'dark:hover:text-theme-1 hover:text-theme-2 text-muted-foreground text-sm font-semibold sm:text-lg',
              pathname === item.href && 'dark:text-theme-1 text-theme-2',
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <ThemeToggler />
    </header>
  );
}
