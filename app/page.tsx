import { Home } from "@/components/organisms";
import { HomePageData } from "@/types/page-info";
import { fetchHygraphQuery } from "@/utils/fetchHygraphQuery";

export const metadata = {
  title: "Home",
};

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    // 1000 * 60 * 60 * 24
  );
};

export default async function HomePage() {
  const { page: pageData, workExperiences } = await getPageData();
  return (
    <>
      <Home.Hero homeInfo={pageData} />
      <Home.KnownTechs techs={pageData.knownTechs} />
      <Home.HighlightedProjects projects={pageData.highlightProjects} />
      <Home.WorkExperience experiences={workExperiences} />
    </>
  );
}
