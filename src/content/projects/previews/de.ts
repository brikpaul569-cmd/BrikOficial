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
    description: "3 Webplattformen mit React.js, Next.js und TypeScript erstellt, inklusive Authentifizierung und technischem SEO.",
  },
  {
    title: "Consultor Full Stack",
    slug: "freelance-consultant",
    thumbnail: consultorThumb,
    contain: true,
    description: "Skalierbare Microservices-Architektur entworfen und Cloud-Migration zu Azure geleitet.",
  },
  {
    title: "Datatools S.A",
    slug: "datatools",
    thumbnail: datatoolsThumb,
    contain: true,
    description: "Entwicklung und Wartung kritischer Anwendungen für den Finanzsektor für 10.000+ Benutzer.",
  },
  {
    title: "Igrowker S.L.",
    slug: "igrowker",
    thumbnail: igrowkerThumb,
    description: "Mitwirkung an der Entwicklung eines SaaS-MVP für kleine Lebensmittelgeschäfte.",
  },
] as const satisfies ProjectPreview[];
