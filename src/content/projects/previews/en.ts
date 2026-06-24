import type { ProjectPreview } from "../../types";

export default [
  {
    title: "DNA Music",
    slug: "dna-music",
    thumbnail: "https://via.placeholder.com/800x600/dfd1bc/000000?text=DNA+Music",
    description: "Built 3 web platforms with React.js, Next.js, and TypeScript, including auth systems and technical SEO.",
  },
  {
    title: "Consultor Full Stack",
    slug: "freelance-consultant",
    thumbnail: "https://via.placeholder.com/800x600/dfd1bc/000000?text=Freelance+Consultant",
    description: "Designed scalable microservices architecture and led cloud migration to Azure.",
  },
  {
    title: "Datatools S.A",
    slug: "datatools",
    thumbnail: "https://via.placeholder.com/800x600/dfd1bc/000000?text=Datatools",
    description: "Developed and maintained critical financial sector applications ensuring data integrity for 10,000+ users.",
  },
  {
    title: "Igrowker S.L.",
    slug: "igrowker",
    thumbnail: "https://via.placeholder.com/800x600/dfd1bc/000000?text=Igrowker",
    description: "Participated in the development of a SaaS MVP for small food businesses.",
  },
] as const satisfies ProjectPreview[];
