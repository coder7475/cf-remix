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
    name: "Backend Engineering & Systems",
    skills: [
      { name: "Node.js", icon: Server, category: "Backend" },
      { name: "NestJS", icon: Cpu, category: "Backend" },
      { name: "Express.js", icon: Terminal, category: "Backend" },
      { name: "FastAPI", icon: Zap, category: "Backend" },
      { name: "REST & GraphQL", icon: Network, category: "Backend" },
      { name: "Hono", icon: Flame, category: "Backend" },
    ],
  },
  {
    name: "Databases & Data Modeling",
    skills: [
      { name: "PostgreSQL", icon: Database, category: "Databases" },
      { name: "Redis", icon: Zap, category: "Databases" },
      { name: "Drizzle ORM", icon: Layers, category: "Databases" },
      { name: "MongoDB", icon: Database, category: "Databases" },
      { name: "Cloudflare KV", icon: Globe, category: "Databases" },
    ],
  },
  {
    name: "Modern Frontend & Mobile UI",
    skills: [
      { name: "React", icon: Atom, category: "Frontend" },
      { name: "Next.js", icon: Compass, category: "Frontend" },
      { name: "React Native", icon: Smartphone, category: "Mobile" },
      { name: "Remix", icon: Zap, category: "Frontend" },
      { name: "Tailwind CSS", icon: Palette, category: "Frontend" },
    ],
  },
  {
    name: "DevOps, Releases & Testing",
    skills: [
      { name: "Docker", icon: Boxes, category: "DevOps" },
      { name: "CI/CD & Actions", icon: GitBranch, category: "DevOps" },
      { name: "AWS", icon: Cloud, category: "Cloud" },
      { name: "Cloudflare", icon: Globe, category: "Cloud" },
      { name: "Terraform", icon: Settings, category: "DevOps" },
      { name: "Playwright & Jest", icon: ShieldCheck, category: "Testing" },
    ],
  },
  {
    name: "AI Engineering & Agent Workflows",
    skills: [
      { name: "Spec-Driven Agents", icon: Cpu, category: "AI" },
      { name: "LLM Integrations", icon: Zap, category: "AI" },
      { name: "Vector Search & RAG", icon: Layers, category: "AI" },
      { name: "Prompt Engineering", icon: Terminal, category: "AI" },
      { name: "System Design", icon: Network, category: "Architecture" },
    ],
  },
];

export const additionalSkills = [
  "Spec-Driven Development",
  "AI Agent Workflows",
  "Backend System Architecture",
  "Kubernetes & Docker",
  "Terraform & Terragrunt",
  "Nginx & Reverse Proxies",
  "Relational Schema Design",
  "REST & GraphQL APIs",
  "CI/CD Pipeline Automation",
  "Zero-Downtime Releases",
  "Automated E2E Testing",
  "React Native & Expo",
  "Redis Caching & Queues",
  "Microservices",
  "Linux Server Administration",
  "Turborepo Monorepos",
  "Agile Sprint Delivery",
];
