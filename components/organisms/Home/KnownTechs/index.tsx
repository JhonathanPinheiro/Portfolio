import { KnownCard, SectionTitle } from "@/components/atoms";
import { KnownTech as IKnownTech } from "@/types/projects";

type KnownTechsProps = {
  techs: IKnownTech[]
}

export default function KnownTechsSection({ techs }: KnownTechsProps) {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />
      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs?.map((tech) => (
          <KnownCard
            key={tech.name}
            tech={tech}
          />
        ))}
      </div>
    </section>
  );
}
