import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <>
      <HeroSection />
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
