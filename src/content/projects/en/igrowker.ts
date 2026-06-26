import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/igrowker-astronauts.png";

export default {
  title: "Igrowker S.L.",
  theme: "light",
  tags: ["java", "python", "postgresql", "angular"],
  description:
    "Full Stack Developer - Remote International Internship (Jan 2024 – Jun 2024).<br/><br/>Participated in the development of an MVP SaaS platform for small food businesses.<br/>Backend development with Java, Python, and PostgreSQL; frontend development with Angular.<br/>Collaborated in a multidisciplinary team at Igrowker S.L. (Valencia, Spain) focusing on design, testing, and product validation.",
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
