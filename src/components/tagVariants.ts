export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "sqlserver"
  | "oracle"
  | "ogl"
  | "glsl"
  | "java"
  | "springboot"
  | "csharp"
  | "dotnet"
  | "python"
  | "php"
  | "angular"
  | "docker"
  | "azure"
  | "tailwind"
  | "bootstrap"
  | "powershell"
  | "bash";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  mongodb: "MongoDB",
  sqlserver: "SQL Server",
  oracle: "Oracle",
  ogl: "OGL.js",
  glsl: "GLSL",
  java: "Java",
  springboot: "Spring Boot",
  csharp: "C#",
  dotnet: ".NET",
  python: "Python",
  php: "PHP",
  angular: "Angular",
  docker: "Docker",
  azure: "Azure",
  tailwind: "Tailwind CSS",
  bootstrap: "Bootstrap",
  powershell: "PowerShell",
  bash: "Bash",
} as const satisfies Record<TagVariant, string>;
