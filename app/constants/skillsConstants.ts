import {
  Atom,
  Boxes,
  Braces,
  Cloud,
  Compass,
  Cpu,
  Database,
  Flame,
  GitBranch,
  Globe,
  Layers,
  Network,
  Palette,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Terminal,
  Zap,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const categories: SkillCategory[] = [
  {
    name: "Core Languages",
    skills: [
      { name: "TypeScript", icon: Braces, category: "Languages" },
      { name: "JavaScript", icon: Terminal, category: "Languages" },
      { name: "Python", icon: Cpu, category: "Languages" },
      { name: "SQL", icon: Database, category: "Languages" },
      { name: "HTML5 / CSS3", icon: Palette, category: "Languages" },
    ],
  },
  {
    name: "Modern Frontend & Mobile",
    skills: [
      { name: "React", icon: Atom, category: "Frontend" },
      { name: "React Native", icon: Smartphone, category: "Mobile" },
      { name: "Next.js", icon: Compass, category: "Frontend" },
      { name: "Remix", icon: Zap, category: "Frontend" },
      { name: "Tailwind CSS", icon: Palette, category: "Frontend" },
    ],
  },
  {
    name: "Scalable Backend & APIs",
    skills: [
      { name: "Node.js", icon: Server, category: "Backend" },
      { name: "Hono", icon: Flame, category: "Backend" },
      { name: "Express.js", icon: Terminal, category: "Backend" },
      { name: "NestJS", icon: Cpu, category: "Backend" },
      { name: "FastAPI", icon: Zap, category: "Backend" },
      { name: "REST & GraphQL", icon: Network, category: "Backend" },
    ],
  },
  {
    name: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", icon: Database, category: "Databases" },
      { name: "Cloudflare KV", icon: Globe, category: "Databases" },
      { name: "MongoDB", icon: Database, category: "Databases" },
      { name: "Redis", icon: Zap, category: "Databases" },
      { name: "Drizzle ORM", icon: Layers, category: "Databases" },
    ],
  },
  {
    name: "Cloud, DevOps & Testing",
    skills: [
      { name: "Cloudflare Pages & Workers", icon: Globe, category: "Cloud" },
      { name: "AWS", icon: Cloud, category: "Cloud" },
      { name: "Docker", icon: Boxes, category: "DevOps" },
      { name: "CI/CD & Actions", icon: GitBranch, category: "DevOps" },
      { name: "Terraform", icon: Settings, category: "DevOps" },
      { name: "Playwright & Jest", icon: ShieldCheck, category: "Testing" },
    ],
  },
];

export const additionalSkills = [
  "React Native & Expo",
  "Cloudflare KV & Workers",
  "Hono Serverless APIs",
  "Microservices",
  "System Design",
  "Design Patterns",
  "Git & GitHub Workflows",
  "RabbitMQ",
  "Kong Gateway",
  "Keycloak / OAuth",
  "Turborepo / Monorepos",
  "Linux Administration",
  "Agile / Scrum",
  "Code Review Mentorship",
  "OpenAPI / Postman",
  "WebSockets",
  "Vector Search & RAG",
];
