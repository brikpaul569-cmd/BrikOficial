import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/dna-music.avif";

export default {
  title: "DNA Music",
  theme: "dark",
  tags: ["react", "next", "javascript"],
  description:
    "Frontend Developer bei DNA Music (Nov 2024 – Mai 2025).<br/><br/>Entwicklung von 3 Webplattformen in React.js, Next.js und TypeScript, einschließlich einer institutionellen Website, einer akademischen Planungsplattform und einem administrativen Dashboard.<br/>Implementierung eines vollständigen Authentifizierungssystems mit OTP, Refresh-Tokens und rollenbasierter Zugriffskontrolle.<br/>Entwicklung von akademischen Echtzeit-Dashboards, Reservierungsabläufen mit QR-Generierung/-Validierung, externer Datensynchronisation (Q10) und technischem SEO.",
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
  live: "https://dnamusic.edu.co/",
} as const satisfies ProjectContent;
