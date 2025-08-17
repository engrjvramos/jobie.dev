'use client';

import { Button } from '@/components/ui/button';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@/components/ui/marquee';
import { TECH_ICONS } from '@/lib/constants';
import { ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import SkillsModal from '../../../components/skills-modal';
import { Badge } from '../../../components/ui/badge';

export default function HeroSection() {
  const ref = useRef(null);

  const handleSeeMoreClick = () => {
    const aboutLink = document.querySelector<HTMLAnchorElement>('#about-link');
    aboutLink?.click();
  };

  return (
    <section id="home" ref={ref} className="mx-auto grid h-[calc(100dvh-5rem)] max-w-6xl place-content-center px-4">
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
      >
        <motion.div
          className="z-10 flex flex-col items-center gap-6 text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.1,
          }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.2,
            }}
          >
            <Badge variant={'outline'} className="border-input inline-flex items-center gap-2 font-mono">
              <MapPin /> Manila, Philippines
            </Badge>
          </motion.div>

          <motion.h1
            className="text-[clamp(28px,5vw,72px)] leading-tight font-bold tracking-tight text-pretty md:leading-tight dark:bg-gradient-to-b dark:from-white/50 dark:via-white/80 dark:to-white dark:bg-clip-text dark:text-transparent"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.3,
            }}
          >
            Jose Roberto Vasquez Ramos
          </motion.h1>

          <motion.h2
            className="text-muted-foreground mb-6 text-[clamp(16px,5vw,24px)] font-semibold"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.4,
            }}
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl text-balance md:text-lg lg:text-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.5,
            }}
          >
            I specialize in building user-friendly web applications with a strong focus on clean design and performance
            using <span className="text-base-800 grow-effect dark:text-white/80">React Ecosystem</span>.
          </motion.p>

          <motion.div
            className="group mt-6 grid w-full max-w-[12rem] grid-cols-1 gap-x-4 gap-y-2 sm:max-w-xs sm:grid-cols-2"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.6,
            }}
          >
            <a
              className="focus-visible:ring-ring border-input bg-primary hover:bg-primary hover:border-foreground/30 inline-flex h-9 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow-none transition-all duration-100 hover:border-b-4 focus-visible:ring-1 focus-visible:outline-none active:scale-[0.97] active:border-b disabled:pointer-events-none disabled:opacity-50"
              href={'/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume <ExternalLink className="size-4 shrink-0" />
            </a>
            <Button
              onClick={handleSeeMoreClick}
              className="focus-visible:ring-ring border-input hover:text-accent-foreground hover:border-primary/30 text-foreground inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-zinc-50 px-4 py-2 text-sm font-medium whitespace-nowrap shadow-none transition-all duration-100 hover:border-b-4 hover:bg-zinc-100 focus-visible:ring-1 focus-visible:outline-none active:scale-[0.97] active:border-b disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-900 dark:hover:bg-zinc-950"
            >
              More About Me
            </Button>
          </motion.div>

          <motion.div
            className="mt-20 flex max-w-lg flex-col items-center gap-5"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.7,
            }}
          >
            <div className="bg-background flex size-full items-center justify-center">
              <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent className="max-w-[320px] sm:max-w-lg">
                  {TECH_ICONS.map(({ Icon }, index) => (
                    <MarqueeItem className="" key={index}>
                      <div className="group border-input hover:bg-accent rounded-md border p-2 shadow-2xl transition-colors">
                        {Icon && <Icon className="size-6 saturate-0 transition-all group-hover:saturate-100" />}
                      </div>
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
              </Marquee>
            </div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 1,
              }}
            >
              <SkillsModal />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
