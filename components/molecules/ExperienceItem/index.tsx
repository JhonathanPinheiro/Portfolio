import { TechBadge } from "@/components/atoms";
import Image from "next/image";

export default function ExperienceItem() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://placehold.co/40x40.png"
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo da empresa"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-emerald-500"
          >
            @Be
          </a>
          <h4 className="text-gray-300">Desenvolvedor front end</h4>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
            exercitationem?
          </span>
          <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
          <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
            competências
          </p>
          <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
          </div>
        </div>
      </div>
    </div>
  );
}
