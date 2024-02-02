import { Projects } from "@/components/organisms";
import { ProjectsPageData } from "@/types/page-info";
import { fetchHygraphQuery } from "@/utils/fetchHygraphQuery";

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    // 1000 * 60 * 60 * 24, // 1 day
  )
}


export default async function ProjectsPage() {
  const { projects } = await getPageData()

  return (
    <>
      <Projects.Introduction />
      <Projects.ProjectsList projects={projects}/>
    </>
  );
}
