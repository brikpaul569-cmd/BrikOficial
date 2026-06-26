import type { ProjectPreview } from "../../types";
import dnaMusicThumb from "../../../assets/images/projects/dna-music.avif";
import datatoolsThumb from "../../../assets/images/projects/datatools-team.png";
import igrowkerThumb from "../../../assets/images/projects/igrowker-astronauts.png";
import consultorThumb from "../../../assets/images/projects/consultor.png";

export default [
  {
    title: "DNA Music",
    slug: "dna-music",
    thumbnail: dnaMusicThumb,
    contain: true,
    theme: "dark",
    description: "Built 3 web platforms with React.js, Next.js, and TypeScript, including auth systems and technical SEO.",
  },
  {
    title: "Consultor Full Stack",
    slug: "freelance-consultant",
    thumbnail: consultorThumb,
    description: "Designed scalable microservices architecture and led cloud migration to Azure.",
  },
  {
    title: "Datatools S.A",
    slug: "datatools",
    thumbnail: datatoolsThumb,
    contain: true,
    description: "Developed and maintained critical financial sector applications ensuring data integrity for 10,000+ users.",
  },
  {
    title: "Igrowker S.L.",
    slug: "igrowker",
    thumbnail: igrowkerThumb,
    description: "Participated in the development of a SaaS MVP for small food businesses.",
  },
] as const satisfies ProjectPreview[];
