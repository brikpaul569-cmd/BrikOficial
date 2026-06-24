export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "java"
  | "springboot"
  | "csharp"
  | "dotnet"
  | "python"
  | "angular"
  | "docker"
  | "azure";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  java: "Java",
  springboot: "Spring Boot",
  csharp: "C#",
  dotnet: ".NET",
  python: "Python",
  angular: "Angular",
  docker: "Docker",
  azure: "Azure",
} as const satisfies Record<TagVariant, string>;
