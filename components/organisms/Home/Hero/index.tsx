"use client";

import { Button, RichText, CMSIcon } from "@/components/atoms";
import { HomePageInfo } from "@/types/page-info";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

type HeroSectionProps = {
  homeInfo: HomePageInfo;
};

export default function HeroSection ({ homeInfo }: HeroSectionProps) {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[735px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, me chamo</p>
          <h2 className="mt-2 text-4xl font-medium">Jhonathan Pinheiro</h2>
          <div className="my-6 text-sm text-gray-400 sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {homeInfo.socials?.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="transition-colors hover:text-gray-100"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src={homeInfo?.profilePicture?.url}
          alt="Foto de perfil"
          className="m-auto lg:mr-0 mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
        />
      </div>
    </section>
  );
}
