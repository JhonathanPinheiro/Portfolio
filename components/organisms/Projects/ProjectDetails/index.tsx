import {
  Button,
  Link,
  RichText,
  SectionTitle,
  TechBadge,
} from "@/components/atoms";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Project } from "@/types/projects";

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <div
        className="absolute inset-0 -z-[1px]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project?.thumbnail.url}) no-repeat center/cover`,
        }}
      />
      <SectionTitle
        title="Nome do projeto"
        subtitle={project?.title}
        classname="text-center items-center sm:[&h3]:text-4xl z-10"
      />

      <div className="z-10 my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        <RichText content={project?.description.raw} />
      </div>

      <div className="z-10 flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {project?.technologies.map((tech) => (
          <TechBadge key={tech.name} name={tech.name} />
        ))}
      </div>

      <div className="z-10 my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        {project?.githubUrl && (
          <a href={project.githubUrl} target="_blank">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositótio
            </Button>
          </a>
        )}

        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        )}
      </div>

      <Link href="/projects" className="z-10">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
}
