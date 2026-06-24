import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/igrowker-astronauts.png";

export default {
  title: "Igrowker S.L.",
  theme: "light",
  tags: ["java", "python", "postgresql", "angular"],
  description:
    "Full Stack Developer - Remote International Internship (Jan 2024 – Jun 2024).<br/><br/>Mitwirkung an der Entwicklung einer MVP SaaS-Plattform für kleine Lebensmittelgeschäfte.<br/>Beitrag zur Backend-Entwicklung mit Java, Python und PostgreSQL sowie zur Frontend-Entwicklung mit Angular.<br/>Zusammenarbeit in einem multidisziplinären Team mit Schwerpunkt auf Design, Testing und Produktvalidierung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
      },
    },
  ],
  live: "https://igrowker.com/es/",
} as const satisfies ProjectContent;
