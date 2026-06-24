import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/consultor.png";

export default {
  title: "Consultor Full Stack",
  theme: "light",
  tags: ["node", "springboot", "java", "next", "azure"],
  description:
    "Consultor Full Stack Independiente (2020 – 2024).<br/><br/>Diseño de arquitectura de microservicios escalable y liderazgo en migración a la nube en Azure. Asesoría a múltiples empresas en transformación digital, implementando soluciones backend complejas en .NET/C# e interfaces frontends dinámicas en React.js.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
      },
    },
  ],
} as const satisfies ProjectContent;
