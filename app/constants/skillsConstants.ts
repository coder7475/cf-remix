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
  FlaskConical,
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
      { name: "JavaScript", icon: Code, category: "Languages & Databases" },
      { name: "TypeScript", icon: Code, category: "Languages & Databases" },
      { name: "Python", icon: Code, category: "Languages & Databases" },
      { name: "MongoDB", icon: Database, category: "Languages & Databases" },
      {
        name: "PostgreSQL",
        icon: Database,
        category: "Languages & Databases",
      },
      { name: "Redis", icon: Database, category: "Languages & Databases" },
      { name: "SQL", icon: Database, category: "Languages & Databases" },
      { name: "YAML", icon: Code, category: "Languages & Databases" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      {
        name: "Express",
        icon: Code2Icon,
        category: "Frameworks & Libraries",
      },
      { name: "NestJS", icon: Code2Icon, category: "Frameworks & Libraries" },
      {
        name: "FastAPI",
        icon: Code2Icon,
        category: "Frameworks & Libraries",
      },
      { name: "React", icon: Code, category: "Frameworks & Libraries" },

      {
        name: "Next.js",
        icon: Code,
        category: "Frameworks & Libraries",
      },

      { name: "Remix", icon: Code, category: "Frameworks & Libraries" },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Linux", icon: Server, category: "DevOps & Cloud" },
      { name: "Git", icon: Settings, category: "DevOps & Cloud" },
      { name: "Docker", icon: Container, category: "DevOps & Cloud" },
      { name: "Kubernetes", icon: ServerCog, category: "DevOps & Cloud" },
      { name: "AWS", icon: Cloud, category: "DevOps & Cloud" },
      { name: "CI/CD", icon: GitBranch, category: "DevOps & Cloud" },
      { name: "Terraform", icon: Cloud, category: "DevOps & Cloud" },
      { name: "Terragrunt", icon: Cloud, category: "DevOps & Cloud" },
      { name: "Ansible", icon: ServerCog, category: "DevOps & Cloud" },
      { name: "RabbitMQ", icon: Server, category: "DevOps & Cloud" },
      { name: "ElasticSearch", icon: Database, category: "DevOps & Cloud" },
      { name: "Traefik", icon: ServerCog, category: "DevOps & Cloud" },
      { name: "Nginx", icon: ServerCog, category: "DevOps & Cloud" },
    ],
  },
  {
    name: "Testing & Tools",
    skills: [
      { name: "Playwright", icon: FlaskConical, category: "Testing & Tools" },
      { name: "Jest", icon: FlaskConical, category: "Testing & Tools" },
      { name: "Vitest", icon: FlaskConical, category: "Testing & Tools" },
    ],
  },
];

export const additionalSkills = [
  "Bash",
  "Cron Jobs",
  "Cypress",
  "Cursor",
  "Confluence",
  "Design Patterns",
  "GitHub",
  "GitHub Actions",
  "Grafana",
  "Jira",
  "Jest",
  "Microsoft Teams",
  "Microservices",
  "Networking",
  "Node.js",
  "Notion",
  "npm",
  "Obsidian",
  "OOP",
  "PM2",
  "Postman",
  "Prometheus",
  "RESTful APIs",
  "Security",
  "Shell Scripting",
  "Slack",
  "Swagger",
  "System Design",
  "Vitest",
  "VSCode",
  "YAML",
];
