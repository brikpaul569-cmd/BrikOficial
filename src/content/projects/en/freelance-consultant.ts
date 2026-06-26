import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/consultor.png";

export default {
  title: "Consultor Full Stack",
  theme: "light",
  tags: ["node", "springboot", "java", "dotnet", "csharp", "next", "react", "typescript", "docker", "azure"],
  description:
    "Freelance Full Stack Consultant (2024 – Present).<br/><br/>Designed and developed scalable microservices architectures using Node.js and Spring Boot, achieving 100% system modularization.<br/>Led migration of legacy monolithic systems to Azure cloud, reducing infrastructure operational costs by 25%.<br/>Implemented secure RESTful APIs with JWT authentication, improving data transaction security by 40%.<br/>Optimized frontend performance in Next.js and React applications, reducing initial load time (LCP) by 30%.<br/>Automated deployment pipelines via CI/CD in Azure DevOps, cutting production delivery time by 50%.<br/>Integrated Meta (Facebook/Instagram), OpenAI, and Twilio APIs for user interaction automation and WhatsApp/SMS messaging.",
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
