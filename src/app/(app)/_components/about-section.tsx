'use client';

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

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.h1
          className="text-lg uppercase"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          About
        </motion.h1>

        <motion.div
          className="text-muted-foreground space-y-3 text-pretty md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p>
            I&apos;m a self-taught web developer with a strong eye for detail and a love for building responsive,
            user-friendly websites and web apps. Originally trained as a{' '}
            <span className="text-primary-500">Civil Engineer</span>, I graduated in 2017 from the Technological
            Institute of the Philippines and began my career in the construction industry—working both in a family-run
            business and a{' '}
            <a
              href="https://megawide.com.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline"
            >
              large corporation.
            </a>
          </p>
          <p>
            Over time, I realized my passion was in tech. I made the intentional decision to shift careers and began
            teaching myself web development. I started with the basics—HTML, CSS, and JavaScript—and dove deep into
            modern frameworks and tools through courses on platforms like{' '}
            <a
              href="https://www.codecademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline"
            >
              Codecademy
            </a>{' '}
            and{' '}
            <a
              href="https://www.udemy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline"
            >
              Udemy
            </a>
            .
          </p>
          <p>
            What began as curiosity has grown into a full-blown passion. I&apos;ve since built a variety of projects
            that showcase my growth, adaptability, and drive to continuously learn and improve as a full-stack
            developer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
