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
            user-friendly websites and web apps. At the end of 2021, I made the intentional decision to shift careers
            and began teaching myself web development. Prior to this, I pursued a career in Civil Engineering, gaining
            valuable experience within both a family-run business and a large corporation.
          </p>

          <p>
            Since then, I&apos;ve had the privilege of working with excellent companies, and gained invaluable knowledge
            from seasoned developers, which further improved my skills significantly. These experiences have resulted in
            a diverse portfolio that showcases my growth, adaptability, and drive to continuously learn and improve as a
            full-stack developer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
