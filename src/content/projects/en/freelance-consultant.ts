import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/consultor.png";

export default {
  title: "Consultor Full Stack",
  theme: "light",
  tags: ["node", "springboot", "java", "next", "azure"],
  description:
    "Freelance Full Stack Consultant (2020 – 2024).<br/><br/>Designed scalable microservices architecture and led cloud migration to Azure. Guided multiple companies through digital transformation, implementing complex backend solutions in .NET/C# and dynamic frontends in React.js.",
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
