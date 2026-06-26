import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/dna-music.avif";

export default {
  title: "DNA Music",
  theme: "dark",
  tags: ["react", "next", "typescript", "javascript"],
  description:
    "Frontend Developer at DNA Music (Nov 2024 – May 2025).<br/><br/>Built 3 web platforms in React.js, Next.js, and TypeScript, including an institutional site, an academic scheduling platform, and an administrative dashboard.<br/>Implemented a complete authentication system with OTP, refresh tokens, and role-based access control.<br/>Built real-time academic dashboards, practice reservation flows with QR generation/validation, external data synchronization (Q10), and technical SEO.",
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
