import { ProjectSection } from "@/types/projects";
import Image from "next/image";

type ProjectSectionsProps = {
  sections: ProjectSection[]
};
export default function ProjectSections({ sections }: ProjectSectionsProps) {
  return (
    <section className="mg:gap-32 container my-12 flex flex-col gap-32 md:my-32">
      {sections?.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            width={1080}
            height={672}
            className="aspect-auto w-full rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  );
}
