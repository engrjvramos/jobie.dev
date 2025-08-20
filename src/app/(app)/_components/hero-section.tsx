'use client';

import { Button } from '@/components/ui/button';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@/components/ui/marquee';
import { TECH_ICONS } from '@/lib/constants';
import { ArrowDownCircleIcon, FileDownIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import SkillsModal from '../../../components/skills-modal';

export default function HeroSection() {
  const ref = useRef(null);

  const handleSeeMoreClick = () => {
    const aboutLink = document.querySelector<HTMLAnchorElement>('#about-link');
    aboutLink?.click();
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative mx-auto grid h-[calc(100dvh-5rem)] w-full max-w-6xl place-content-center px-4 antialiased"
    >
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
          {/* <motion.div
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
          </motion.div> */}

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
            Jose Roberto V. Ramos
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
            className="group mt-6 flex w-full items-center justify-center gap-2"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.6,
            }}
          >
            <Button className="h-10">
              View Resume <FileDownIcon className="size-4" />
            </Button>
            <Button variant={'outline'} className="h-10" onClick={handleSeeMoreClick}>
              About Me <ArrowDownCircleIcon />
            </Button>
          </motion.div>

          <motion.div
            className="mt-20 flex max-w-lg flex-col items-center gap-10"
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
            <SkillsModal />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
