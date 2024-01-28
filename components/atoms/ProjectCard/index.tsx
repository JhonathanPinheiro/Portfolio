import Image from "next/image";
import TechBadge from "../TechBadge";
import Link from "../Link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-full w-full">
        <Image
          width={420}
          height={304}
          src="https://placehold.co/600x400.png"
          alt="Project Image"
          className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div className="max-w-[620px]">
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          BookWise
        </h3>
        <p className="my-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          adipisci commodi alias. Repellendus itaque aspernatur fugiat fuga
          laborum eveniet quasi magnam quia tenetur. Repellat ipsum quasi
          excepturi nulla quam esse, eveniet amet omnis reiciendis quos ut harum
          accusantium debitis quia et soluta fugit, necessitatibus vel ab qui id
          beatae deserunt!
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
}
