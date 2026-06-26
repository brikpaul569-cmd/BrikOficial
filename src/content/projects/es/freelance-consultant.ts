import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/consultor.png";

export default {
  title: "Consultor Full Stack",
  theme: "light",
  tags: ["node", "springboot", "java", "dotnet", "csharp", "next", "react", "typescript", "docker", "azure"],
  description:
    "Consultor Full Stack Independiente (2024 – Actualidad).<br/><br/>Diseñé y desarrollé arquitecturas de microservicios escalables con Node.js y Spring Boot, logrando una modularización del sistema del 100%.<br/>Lideré la migración de sistemas monolíticos legacy a la nube en Azure, reduciendo costos operativos de infraestructura en un 25%.<br/>Implementé APIs RESTful seguras con autenticación JWT, mejorando la seguridad de transacciones de datos en un 40%.<br/>Optimicé rendimiento frontend en Next.js y React, reduciendo el tiempo de carga inicial (LCP) en un 30%.<br/>Automaticé despliegues con pipelines CI/CD en Azure DevOps, disminuyendo el tiempo de entrega a producción en un 50%.<br/>Integré APIs de Meta (Facebook/Instagram), OpenAI y Twilio para automatización de interacción con usuarios y mensajería.",
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
