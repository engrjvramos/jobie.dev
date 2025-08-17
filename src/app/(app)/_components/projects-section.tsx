'use client';

import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion } from 'motion/react';
import ProjectItem from './project-item';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="">
        <motion.h1
          className="mb-10 text-lg uppercase"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Selected Projects
        </motion.h1>
        <motion.ul className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] place-items-center gap-8 sm:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))]">
          {[1, 2, 3, 4, 5, 6].map((x, index) => (
            <motion.li
              key={x}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              className="border-input relative rounded-xl border"
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <ProjectItem />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
