import type { ProjectPreview } from "../../types";

export default [
  {
    title: "DNA Music",
    slug: "dna-music",
    thumbnail: "https://via.placeholder.com/800x600/dfd1bc/000000?text=DNA+Music",
    description: "3 Webplattformen mit React.js, Next.js und TypeScript erstellt, inklusive Authentifizierung und technischem SEO.",
  },
  {
    title: "Consultor Full Stack",
    slug: "freelance-consultant",
    thumbnail: "https://via.placeholder.com/800x600/dfd1bc/000000?text=Freelance+Consultant",
    description: "Skalierbare Microservices-Architektur entworfen und Cloud-Migration zu Azure geleitet.",
  },
  {
    title: "Datatools S.A",
    slug: "datatools",
    thumbnail: "https://via.placeholder.com/800x600/dfd1bc/000000?text=Datatools",
    description: "Entwicklung und Wartung kritischer Anwendungen für den Finanzsektor für 10.000+ Benutzer.",
  },
  {
    title: "Igrowker S.L.",
    slug: "igrowker",
    thumbnail: "https://via.placeholder.com/800x600/dfd1bc/000000?text=Igrowker",
    description: "Mitwirkung an der Entwicklung eines SaaS-MVP für kleine Lebensmittelgeschäfte.",
  },
] as const satisfies ProjectPreview[];
