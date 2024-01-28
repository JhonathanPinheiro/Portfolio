import { Home } from "@/components/organisms";

export default async function HomePage() {
  return (
    <>
      <Home.Hero />
      <Home.KnownTechs />
      <Home.HighlightedProjects />
      <Home.WorkExperience />
    </>
  );
}
