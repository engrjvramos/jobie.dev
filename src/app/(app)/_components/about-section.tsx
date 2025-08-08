export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <h1 className="text-lg uppercase">About</h1>
        <div className="text-muted-foreground space-y-3 text-pretty md:col-span-2">
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
        </div>
      </div>
    </section>
  );
}
