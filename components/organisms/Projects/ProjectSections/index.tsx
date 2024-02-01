import Image from "next/image";

const sections = [
  {
    title: "Login",
    image: "https://placehold.co/1080x672.png",
  },
  {
    title: "Home",
    image: "https://placehold.co/1080x672.png",
  },
];

export default function ProjectSections() {
  return (
    <section className="container my-12 flex flex-col gap-32 mg:gap-32 md:my-32">
      {
        sections?.map(section =>(
          <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300">{section.title}</h2>
            <Image src={section.image} width={1080} height={672} className="w-full aspect-auto rounded-lg object-cover" alt={section.title} unoptimized/>
          </div>
        ))
      }
    </section>
  );
}
