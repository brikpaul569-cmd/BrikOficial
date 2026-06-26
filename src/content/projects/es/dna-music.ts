import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/dna-music.avif";

export default {
  title: "DNA Music",
  theme: "dark",
  tags: ["react", "next", "typescript", "javascript"],
  description:
    "Desarrollador Frontend en DNA Music (Nov 2024 – May 2025).<br/><br/>Construcción de 3 plataformas web con React.js, Next.js y TypeScript, incluyendo un sitio institucional, una plataforma de horarios académicos y un dashboard administrativo.<br/>Implementación de un sistema completo de autenticación con OTP, refresh tokens y control de acceso basado en roles.<br/>Desarrollo de paneles académicos en tiempo real, flujos de reserva de prácticas con generación/validación de QR, sincronización externa de datos (Q10) y SEO técnico (JSON-LD, canonical URLs, migración a Next.js App Router).",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        contain: true,
        theme: "dark",
      },
    },
  ],
  live: "https://dnamusic.edu.co/",
} as const satisfies ProjectContent;
