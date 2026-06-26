export const social = [
  { url: "https://wa.me/573123734069", name: "whatsapp" },
  { url: "mailto:brik3391@gmail.com", name: "mail" },
  { url: "https://github.com/brikpaul569-cmd", name: "github" },
  { url: "https://www.linkedin.com/in/brikman-paul-morales/", name: "linkedin" },
  { url: "https://www.youtube.com/@BrikmanPauls", name: "youtube" },
] as const satisfies { url: string; name: "whatsapp" | "mail" | "github" | "linkedin" | "youtube" }[];
