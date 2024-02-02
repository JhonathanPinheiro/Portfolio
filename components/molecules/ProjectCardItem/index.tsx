import Image from "next/image";
import TechBadge from "../../atoms/TechBadge";
import Link from "../../atoms/Link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/types/projects";

type ProjectCardProps = {
  project: Project
}

export default function ProjectCardItem({project}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-[200px] w-full sm:h-[300px] lg:w-[420px] lg:min-h-full">
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </h3>
        <p className="my-6 text-gray-400">
          {project.shortDescription}
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          
          {
            project.technologies?.map(tech => (
              
              <TechBadge key={`${project.title}-tech-${tech.name}`} name={tech.name} />
            ))
          }
          
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
}
