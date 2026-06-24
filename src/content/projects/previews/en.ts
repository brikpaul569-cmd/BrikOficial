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
    description: "Construcción de 3 plataformas web con React.js, Next.js y TypeScript, incluyendo sistemas de autenticación y SEO técnico.",
  },
  {
    title: "Consultor Full Stack",
    slug: "freelance-consultant",
    thumbnail: consultorThumb,
    description: "Diseño de arquitectura de microservicios escalable y liderazgo en migración a la nube en Azure.",
  },
  {
    title: "Datatools S.A",
    slug: "datatools",
    thumbnail: datatoolsThumb,
    contain: true,
    description: "Desarrollo y mantenimiento de aplicaciones críticas para el sector financiero asegurando la integridad de datos para más de 10,000 usuarios.",
  },
  {
    title: "Igrowker S.L.",
    slug: "igrowker",
    thumbnail: igrowkerThumb,
    description: "Participación en el desarrollo de un MVP SaaS para pequeños negocios de alimentación.",
  },
] as const satisfies ProjectPreview[];
