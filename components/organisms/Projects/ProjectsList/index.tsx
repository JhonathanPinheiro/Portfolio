import { ProjectCard } from "@/components/molecules";
import { Project } from "@/types/projects";
import Link from "next/link";

type ProjectListProps = {
  projects: Project[]
}

export default function Projectslist({projects}: ProjectListProps) {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {
          projects.map(project => (
            <Link key={project.title} href={`/projects/${project.slug}`}>
              <ProjectCard project={project} />
            </Link>

          ))
        }
    </section>
  );
}
