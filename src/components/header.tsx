'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ThemeToggler from './theme-toggler';
import { Button } from './ui/button';

const HEADER_NAVIGATION = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#faq', label: 'FAQs' },
  { href: '#projects', label: 'Projects' },
];
const headerOffset = 80;

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();

    const id = href.slice(1);
    setActiveSection(id);

    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) {
      setOpen(false);
      return;
    }

    const mobileNavHeight = open && mobileNavRef.current ? mobileNavRef.current.offsetHeight : 0;

    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - mobileNavHeight;
    const offsetPosition = elementPosition - headerOffset;

    setOpen(false);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - headerOffset;
        const id = current.getAttribute('id');

        if (id && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="bg-background dark:shadow-input/30 sm:bg-background/30 sticky top-0 z-50 w-full shadow sm:backdrop-blur-[10px]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-5 sm:h-16">
        <div className="flex items-center gap-4 sm:hidden">
          <Button
            className="group"
            variant="outline"
            size="icon"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
          <div className="font-mono text-sm tracking-wide">jobie.dev</div>
        </div>

        <nav className="hidden items-center gap-5 sm:flex">
          {HEADER_NAVIGATION.map((item) => (
            <Link
              key={item.label}
              id={`${item.label.toLowerCase()}-link`}
              href={item.href}
              onClick={(e) => handleScrollClick(e, item.href)}
              className={cn(
                'text-muted-foreground hover:text-primary-500 text-sm font-semibold transition-colors sm:text-base',
                activeSection === item.href.slice(1) && 'text-primary-500',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggler />
      </div>

      <div
        ref={mobileNavRef}
        className={cn('overflow-hidden transition-all duration-300 sm:hidden', open ? 'max-h-60' : 'max-h-0')}
      >
        <nav className="border-input flex flex-col items-start gap-4 border-y px-5 py-4">
          {HEADER_NAVIGATION.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollClick(e, item.href)}
              className={cn(
                'text-muted-foreground hover:text-primary-500 block w-full text-center text-sm font-semibold transition-colors',
                activeSection === item.href.slice(1) && 'text-primary-500',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
