import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/consultor.png";

export default {
  title: "Consultor Full Stack",
  theme: "light",
  tags: ["node", "springboot", "java", "next", "azure"],
  description:
    "Freelance Full Stack Consultant (2020 – 2024).<br/><br/>Skalierbare Microservices-Architektur entworfen und Cloud-Migration zu Azure geleitet. Mehrere Unternehmen bei der digitalen Transformation unterstützt, komplexe Backend-Lösungen in .NET/C# und dynamische Frontends in React.js implementiert.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        contain: true,
      },
    },
  ],
} as const satisfies ProjectContent;
