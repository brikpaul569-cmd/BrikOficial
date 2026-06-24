export const social = [
  { url: "mailto:Brikpaul569@gmail.com", name: "mail" },
  { url: "https://github.com/brikpaul569-cmd", name: "github" },
  { url: "https://www.linkedin.com/in/brikman-paul-morales/", name: "linkedin" },
  { url: "https://www.youtube.com/@BrikmanPauls", name: "youtube" },
] as const satisfies { url: string; name: "mail" | "github" | "linkedin" | "youtube" }[];
