import {
  Code,
  Database,
  Server,
  Settings,
  GitBranch,
  Code2Icon,
  FlaskConical,
  Layout,
  Cloud,
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
      { name: "TypeScript", icon: Code, category: "Languages" },
      { name: "JavaScript", icon: Code, category: "Languages" },
      { name: "Python", icon: Code, category: "Languages" },
      { name: "SQL", icon: Database, category: "Languages" },
      { name: "HTML5/CSS3", icon: Layout, category: "Languages" },
    ],
  },
  {
    name: "Modern Frontend",
    skills: [
      { name: "React", icon: Code, category: "Frontend" },
      { name: "Next.js", icon: Code, category: "Frontend" },
      { name: "Remix", icon: Code, category: "Frontend" },
      { name: "Tailwind CSS", icon: Layout, category: "Frontend" },
      { name: "React Native", icon: Code, category: "Frontend" },
    ],
  },
  {
    name: "Scalable Backend",
    skills: [
      { name: "Node.js", icon: Server, category: "Backend" },
      { name: "Express.js", icon: Code2Icon, category: "Backend" },
      { name: "NestJS", icon: Code2Icon, category: "Backend" },
      { name: "FastAPI", icon: Code2Icon, category: "Backend" },
      { name: "REST & GraphQL", icon: Server, category: "Backend" },
    ],
  },
  {
    name: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", icon: Database, category: "Databases" },
      { name: "MongoDB", icon: Database, category: "Databases" },
      { name: "Redis", icon: Database, category: "Databases" },
      { name: "Drizzle ORM", icon: Database, category: "Databases" },
    ],
  },
  {
    name: "Cloud, DevOps & Testing",
    skills: [
      { name: "AWS", icon: Cloud, category: "Cloud" },
      { name: "Cloudflare", icon: Cloud, category: "Cloud" },
      { name: "Docker", icon: Server, category: "DevOps" },
      { name: "CI/CD & Actions", icon: GitBranch, category: "DevOps" },
      { name: "Terraform", icon: Settings, category: "DevOps" },
      { name: "Jest & Playwright", icon: FlaskConical, category: "Testing" },
    ],
  },
];

export const additionalSkills = [
  "Microservices",
  "System Design",
  "Design Patterns",
  "Git & GitHub Workflows",
  "RabbitMQ",
  "Kong Gateway",
  "Keycloak / Auth",
  "Turborepo / Monorepos",
  "Linux Administration",
  "Agile / Scrum",
  "Code Review Mentorship",
  "Postman / OpenAPI",
  "WebSockets",
  "Vector Search & RAG",
];
