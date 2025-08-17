'use client';

import { CAREER_ITEMS } from '@/lib/constants';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="mx-auto max-w-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="mb-10 text-lg uppercase"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Experience
      </motion.h1>

      <motion.ol className="flex flex-col gap-14">
        {CAREER_ITEMS.sort((a, b) => b.id - a.id).map((item) => (
          <motion.li
            key={item.id}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="text-muted-foreground text-sm">{item.date}</div>
            <div className="space-y-3 text-pretty md:col-span-2">
              <h2>
                {item.position} <span className="text-primary-500">@ {item.title}</span>
              </h2>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <ul className="flex flex-wrap gap-1.5">
                {item.techStack.map((t) => (
                  <li key={t} className="flex">
                    <span className="text-muted-foreground inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-900">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </motion.section>
  );
}
