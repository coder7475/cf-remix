import { Server, Code, Cloud } from "lucide-react";

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
    title: "Backend Development",
    description:
      "Building scalable APIs and microservices with Node.js, Express, and NestJS. Designing robust database architectures with PostgreSQL and MongoDB.",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Creating responsive, performant web applications with React, Next.js, and Remix. Crafting modern UIs with TypeScript and Tailwind CSS.",
    icon: Code,
    skills: ["React", "Next.js", "Remix", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    description:
      "Deploying and managing cloud infrastructure with AWS, Docker, and CI/CD pipelines. Ensuring reliability and scalability.",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Cloudflare"],
  },
];