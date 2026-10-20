import { Server, Code, Cloud, Sparkles } from "lucide-react";

export interface WhatIDoCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

export const whatIDoCards: WhatIDoCard[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web Apps",
    description:
      "Crafting performant, accessible web applications from discovery to production. Expert in React, Next.js, and Remix with responsive, pixel-perfect Tailwind CSS design.",
    icon: Code,
    skills: ["React", "Next.js", "Remix", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Scalable APIs & Architecture",
    description:
      "Designing type-safe REST & GraphQL APIs, event-driven microservices, and database models with PostgreSQL, Redis, and MongoDB engineered for high concurrency and uptime.",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "devops",
    title: "Cloud & DevOps Engineering",
    description:
      "Automating infrastructure, zero-downtime deployment pipelines, and serverless hosting across AWS and Cloudflare using Docker, Terraform, and GitHub Actions.",
    icon: Cloud,
    skills: ["AWS", "Cloudflare", "Docker", "CI/CD", "Terraform", "Linux"],
  },
  {
    id: "ai-solutions",
    title: "AI Integration & Automation",
    description:
      "Implementing LLM workflows, Retrieval-Augmented Generation (RAG), and intelligent agents using Python, FastAPI, and Gemini/OpenAI to automate business processes.",
    icon: Sparkles,
    skills: ["Python", "FastAPI", "Gemini API", "RAG", "Vector Search", "LLMs"],
  },
];
