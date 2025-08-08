'use client';

import { CAREER_ITEMS } from '@/lib/constants';

export default function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl">
      <h1 className="mb-10 text-lg uppercase">Experience</h1>
      <ol className="flex flex-col gap-14">
        {CAREER_ITEMS.sort((a, b) => b.id - a.id).map((item) => (
          <li key={item.id} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-muted-foreground text-sm">{item.date}</div>
            <div className="space-y-3 text-pretty md:col-span-2">
              <h2>
                {item.position} <span className="text-primary-500">@ {item.title}</span>
              </h2>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <ul className="flex flex-wrap items-center gap-2">
                {item.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="border-secondary-500 rounded border px-3 py-0.5 font-mono text-xs whitespace-nowrap"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
