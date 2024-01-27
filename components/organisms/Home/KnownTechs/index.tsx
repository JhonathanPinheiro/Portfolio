import { KnownCard, SectionTitle } from "@/components/atoms";
import { TbBrandNextjs } from "react-icons/tb";

export default function KnownTechsSection() {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />
      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownCard
            key={index}
            tech={{
              icon: <TbBrandNextjs size={24} />,
              name: "Next.js",
            }}
          />
        ))}
      </div>
    </section>
  );
}
