'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'motion/react';

const items = [
  {
    id: '1',
    title: 'Why did you shift careers from engineering to tech?',
    content:
      'It started with curiosity—I wanted to understand how websites and apps were built. I took a deliberate break from engineering and dedicated my time to learning HTML, CSS, JavaScript, and modern web tools. Building projects helped me strengthen my frontend skills and fueled my desire to pursue this path full-time.',
  },
  {
    id: '2',
    title: 'How did you learn web development?',
    content:
      "I'm entirely self-taught. I studied through online platforms like Codecademy and Udemy, learning by doing. I built real-world projects and focused on creating high-quality, responsive websites and web apps. Along the way, I developed a strong problem-solving mindset and a love for clean, maintainable code.",
  },
  {
    id: '3',
    title: 'What are you currently learning?',
    content:
      "I'm currently working toward becoming a certified AWS AI Practitioner, with a growing interest in machine learning. I'm expanding my skills beyond web development to prepare for future opportunities in AI-driven web experiences.",
  },
  {
    id: '4',
    title: 'Do you take freelance or contract work?',
    content:
      "Yes, I'm open to freelance or contract opportunities—especially if the project involves building modern web apps, improving UI/UX, or collaborating with creative teams.",
  },
  {
    id: '5',
    title: 'How can someone reach out to you for a project or collaboration?',
    content:
      'Feel free to contact me via email or through my social media links. I’m always open to interesting opportunities, whether it’s freelance work, collaboration, or full-time roles.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function FaqSection() {
  return (
    <motion.section
      id="faq"
      className="mx-auto max-w-6xl"
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
          FAQs
        </motion.h1>

        <motion.div className="space-y-4 md:col-span-2" variants={containerVariants}>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              >
                <AccordionItem
                  value={item.id}
                  className="bg-sidebar has-focus-visible:border-ring has-focus-visible:ring-ring/50 border-input rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
                >
                  <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-2">{item.content}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
