import { Project } from "@/types/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({project}: ProjectCardProps) {
  const technologies = project.technologies.map(x => x.name).join(', ');
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 opacity-70 transition-all duration-500 hover:border-emerald-500 hover:opacity-100">
      <div className="h-48 w-full overflow-hidden">
        <Image
          width={380}
          height={200}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <strong className="transition-all: font-medium text-gray-50/90 duration-500 group-hover:text-emerald-500">
          {project.title}
        </strong>
        <p className="mt-2 line-clamp-4 text-gray-400">
          {project.shortDescription}
        </p>
        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          {technologies}
        </span>
      </div>
    </div>
  );
}
