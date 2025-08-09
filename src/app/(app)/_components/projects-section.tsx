'use client';

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
          Projects
        </motion.h1>
        <motion.div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] place-items-center gap-8 sm:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))]">
          {[1, 2, 3, 4, 5, 6].map((x, index) => (
            <motion.div
              key={x}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
            >
              <ProjectItem />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
