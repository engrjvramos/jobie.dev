import ProjectItem from './project-item';

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="">
        <h2 className="mb-10 text-lg uppercase">Projects</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5">
          {[1, 2, 3, 4, 5, 6].map((x) => (
            <ProjectItem key={x} />
          ))}
        </div>
      </div>
    </section>
  );
}
