'use client';

import { TECH_ICONS } from '@/lib/constants';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import SkillsModal from './skills-modal';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function HeroSection() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="grid min-h-dvh place-content-center">
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
      >
        <motion.div
          className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center"
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
            <Badge variant={'outline'} className="border-input inline-flex items-center gap-2">
              <MapPin /> Manila, Philippines
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight text-pretty md:text-5xl lg:text-7xl"
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
            className="mb-6 text-2xl font-semibold"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.4,
            }}
          >
            Senior Full-Stack Engineer
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl md:text-lg lg:text-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.5,
            }}
          >
            I specialize in building user-friendly web applications with a strong focus on clean design and performance
            using <span className="text-base-800 grow dark:text-white/80">React Ecosystem</span>.
          </motion.p>

          <motion.div
            className="mt-6 flex items-center gap-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.6,
            }}
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9">View Resume</Button>
            <Button className="bg-background hover:bg-accent text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 border-input h-9 border">
              Learn More
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
            <p className="text-muted-foreground text-center text-pretty">
              I build smooth, responsive UIs using tools I love—clean code, smart design, and a great user experience
              always come first.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {TECH_ICONS.map(({ Icon, name }, i) => (
                <motion.div
                  key={name}
                  title={name}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    delay: 0.8 + i * 0.05,
                  }}
                  className="group border-input hover:bg-accent rounded-md border p-2 shadow-2xl transition-colors"
                >
                  {Icon && <Icon className="size-6 saturate-0 transition-all group-hover:saturate-100" />}
                </motion.div>
              ))}
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
