import { Cloud, Code, Cpu, Server } from "lucide-react";

export interface WhatIDoCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

export const whatIDoCards: WhatIDoCard[] = [
  {
    id: "backend",
    title: "Backend Engineering & Architecture",
    description:
      "High-throughput REST and GraphQL APIs, PostgreSQL schema design, Redis caching, and resilient architectures with zero data loss.",
    icon: Server,
    skills: ["Node.js", "NestJS", "PostgreSQL", "Redis", "FastAPI", "TypeScript"],
  },
  {
    id: "frontend",
    title: "Frontend & Mobile Engineering",
    description:
      "Polished, accessible web and mobile apps using React, Next.js, and React Native with smooth UX, 60fps animations, and high conversion.",
    icon: Code,
    skills: ["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "devops",
    title: "DevOps, Release & Automation",
    description:
      "Automated CI/CD via GitHub Actions, Docker containerization, Playwright testing, and zero-downtime releases on AWS and Cloudflare.",
    icon: Cloud,
    skills: ["Docker", "CI/CD", "AWS", "Cloudflare", "Linux", "Playwright"],
  },
  {
    id: "ai",
    title: "AI Engineering & Spec-Driven Workflows",
    description:
      "Fast-paced feature delivery using spec-driven AI agent workflows, practical LLM feature integration, and production RAG pipelines.",
    icon: Cpu,
    skills: ["Spec-Driven Agents", "LLM APIs", "RAG Pipelines", "Python", "Vector Search", "Automation"],
  },
];
