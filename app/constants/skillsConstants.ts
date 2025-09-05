import {
  Code,
  Database,
  Cloud,
  Server,
  Container,
  Settings,
  GitBranch,
  ServerCog,
  Code2Icon,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const categories: SkillCategory[] = [
  {
    name: "Languages & Databases",
    skills: [
      { name: "TypeScript", icon: Code, category: "Languages & Databases" },
      { name: "Python", icon: Code, category: "Languages & Databases" },
      { name: "C++", icon: Code, category: "Languages & Databases" },
      { name: "MongoDB", icon: Database, category: "Languages & Databases" },
      {
        name: "PostgreSQL",
        icon: Database,
        category: "Languages & Databases",
      },
      { name: "Redis", icon: Database, category: "Languages & Databases" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      {
        name: "FastAPI",
        icon: Code2Icon,
        category: "Frameworks & Libraries",
      },
      {
        name: "Express",
        icon: Code2Icon,
        category: "Frameworks & Libraries",
      },
      { name: "NestJS", icon: Code2Icon, category: "Frameworks & Libraries" },
      { name: "React", icon: Code, category: "Frameworks & Libraries" },
      { name: "Redux", icon: Code, category: "Frameworks & Libraries" },
      {
        name: "Shadcn",
        icon: Code,
        category: "Frameworks & Libraries",
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "LINUX", icon: Server, category: "DevOps & Cloud" },
      { name: "Git", icon: Settings, category: "DevOps & Cloud" },
      { name: "Docker", icon: Container, category: "DevOps & Cloud" },
      { name: "NGINX", icon: ServerCog, category: "DevOps & Cloud" },
      { name: "AWS", icon: Cloud, category: "DevOps & Cloud" },
      { name: "CI/CD", icon: GitBranch, category: "DevOps & Cloud" },
    ],
  },
];

export const additionalSkills = [
  "Bash",
  "Cron Jobs",
  "Cypress",
  "Cursor",
  "Design Patterns",
  "Fail2Ban",
  "GitHub",
  "GitHub Actions",
  "Grafana",
  "Jest",
  "Microservices",
  "Networking",
  "Neovim",
  "Node.js",
  "npm",
  "pnpm",
  "OOP",
  "PM2",
  "Prometheus",
  "RESTful APIs",
  "Security",
  "Shell Scripting",
  "System Design",
  "UFW",
  "Vitest",
  "VSCode",
  "Warp Terminal",
];
