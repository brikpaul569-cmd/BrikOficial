import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/igrowker-astronauts.png";

export default {
  title: "Igrowker S.L.",
  theme: "light",
  tags: ["java", "python", "postgresql", "angular"],
  description:
    "Desarrollador Full Stack - Pasantía Internacional Remota (Ene 2024 – Jun 2024).<br/><br/>Participación en el desarrollo de una plataforma MVP SaaS para pequeños negocios de alimentación.<br/>Contribución al desarrollo backend con Java, Python y PostgreSQL, y desarrollo frontend con Angular.<br/>Colaboración en un equipo multidisciplinario centrado en el diseño, pruebas y validación del producto.",
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
