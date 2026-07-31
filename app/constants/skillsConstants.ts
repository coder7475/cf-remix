import {
  Code,
  Database,
  Server,
  Settings,
  GitBranch,
  Code2Icon,
  FlaskConical,
  Layout,
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
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: Code, category: "Languages" },
      { name: "TypeScript", icon: Code, category: "Languages" },
      { name: "Python", icon: Code, category: "Languages" },
      { name: "SQL", icon: Database, category: "Languages" },
      { name: "HTML/CSS", icon: Layout, category: "Languages" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: Code, category: "Frontend" },
      { name: "Next.js", icon: Code, category: "Frontend" },
      { name: "Remix", icon: Code, category: "Frontend" },
      { name: "Tailwind CSS", icon: Layout, category: "Frontend" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: Server, category: "Backend" },
      { name: "Express", icon: Code2Icon, category: "Backend" },
      { name: "NestJS", icon: Code2Icon, category: "Backend" },
      { name: "FastAPI", icon: Code2Icon, category: "Backend" },
      { name: "REST APIs", icon: Server, category: "Backend" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database, category: "Databases" },
      { name: "MongoDB", icon: Database, category: "Databases" },
      { name: "Redis", icon: Database, category: "Databases" },
    ],
  },
  {
    name: "Tools & Practices",
    skills: [
      { name: "Git", icon: Settings, category: "Tools & Practices" },
      { name: "Docker", icon: Server, category: "Tools & Practices" },
      { name: "CI/CD", icon: GitBranch, category: "Tools & Practices" },
      { name: "Jest", icon: FlaskConical, category: "Tools & Practices" },
      { name: "Vitest", icon: FlaskConical, category: "Tools & Practices" },
      { name: "Playwright", icon: FlaskConical, category: "Tools & Practices" },
    ],
  },
];

export const additionalSkills = [
  "Agile/Scrum",
  "Code Review",
  "Design Patterns",
  "GitHub",
  "GitHub Actions",
  "Jira",
  "Microservices",
  "npm/pnpm",
  "OOP",
  "Postman",
  "RESTful APIs",
  "System Design",
  "VS Code",
  "WebSocket",
];
