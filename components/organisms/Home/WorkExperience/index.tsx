import { SectionTitle } from "@/components/atoms";
import { ExperienceItem } from "@/components/molecules";
import { WorkExperience as IWorkExperience } from "@/types/work-experience";

type WorkExperiencesProps = {
  experiences: IWorkExperience[]
}

export default function WorkExperienceSection({ experiences }: WorkExperiencesProps) {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiência Profissional"
          subtitle="experiências"
        />
        <p className="mt-6 text-gray-400">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incriveis
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {
          experiences?.map(experience => (
            <ExperienceItem
            key={experience.companyName}
            experience={experience}
            />
          ))
        }
      </div>
    </section>
  );
}
