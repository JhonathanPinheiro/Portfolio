import {
  HorizontalDivider,
  ProjectCard,
  SectionTitle,
} from "@/components/atoms";

export default function HighlightedProjects() {
  return (
    <section className="container">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
      </div>
    </section>
  );
}
