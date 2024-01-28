import { ProjectCard } from "@/components/molecules";
import Link from "next/link";

export default function Projectslist() {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      <Link href="/projects/book">
        <ProjectCard />
      </Link>
    </section>
  );
}
