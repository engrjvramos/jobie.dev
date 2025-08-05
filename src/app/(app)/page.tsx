import SkillsModal from '@/components/skills-modal';
import ThemeToggler from '@/components/theme-toggler';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TECH_ICONS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <section className="grid min-h-dvh place-content-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <ThemeToggler />
            <Badge variant={'outline'} className="border-input inline-flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-green-500" /> Open to work
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-pretty md:text-5xl lg:text-7xl">
              Jose Roberto Vasquez Ramos
            </h1>
            <h2 className="mb-6 text-2xl font-semibold">Full-Stack Engineer</h2>

            <p className="text-muted-foreground mx-auto max-w-2xl md:text-lg lg:text-xl">
              I specialize in building user-friendly web applications with a strong focus on clean design and
              performance using <span className="text-base-800 grow dark:text-white/80">React</span> ecosystem.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9">View Resume</Button>
              <Button className="bg-background hover:bg-accent text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 border-input h-9 border">
                Learn More
              </Button>
            </div>

            <div className="mt-20 flex max-w-lg flex-col items-center gap-5">
              <p className="text-muted-foreground text-center text-pretty">
                I build smooth, responsive UIs using tools I love—clean code, smart design, and a great user experience
                always come first.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {TECH_ICONS.map(({ Icon, name }) => (
                  <div
                    key={name}
                    title={name}
                    className="group border-input hover:bg-accent rounded-md border p-2 shadow-2xl transition-colors"
                  >
                    <Icon className="size-6 saturate-0 transition-all group-hover:saturate-100" />
                  </div>
                ))}
              </div>
              <SkillsModal />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-6 text-3xl font-bold">Experience</h2>
          <p className="text-muted-foreground mb-4">
            Over the years, I have worked on various projects that have honed my skills in web development. From
            building responsive user interfaces to developing robust back-end systems, I have a diverse range of
            experiences.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-6 text-3xl font-bold">Projects</h2>
          <p className="text-muted-foreground mb-4">
            I have had the privilege of working on several exciting projects that showcase my skills and creativity.
            Each project has been a unique opportunity to learn and grow as a developer.
          </p>
          <p className="text-muted-foreground">
            From personal projects to collaborative efforts, I take pride in delivering high-quality code and innovative
            solutions that meet user needs.
          </p>
        </div>
      </section>

      <footer className="py-8">
        <div className="text-muted-foreground mx-auto max-w-5xl text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jobie Ramos. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
