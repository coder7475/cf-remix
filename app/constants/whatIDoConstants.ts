import { Cloud, Code, Server, Smartphone } from "lucide-react";

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
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Building robust cross-platform iOS and Android mobile applications using React Native and Expo, with custom native Kotlin modules, offline-first SQLite storage, and smooth 60fps animations.",
    icon: Smartphone,
    skills: ["React Native", "Expo", "TypeScript", "Kotlin", "Android", "iOS"],
  },
  {
    id: "backend",
    title: "Scalable APIs & Edge Systems",
    description:
      "Architecting high-throughput REST and GraphQL services, event-driven architectures, and lightweight edge microservices with Hono, Node.js, NestJS, Cloudflare KV, and PostgreSQL.",
    icon: Server,
    skills: ["Node.js", "Hono", "NestJS", "Cloudflare KV", "PostgreSQL", "Redis"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps Engineering",
    description:
      "Automating infrastructure, zero-downtime deployment pipelines, and global edge hosting across Cloudflare and AWS using Docker, Terraform, and GitHub Actions.",
    icon: Cloud,
    skills: ["Cloudflare", "AWS", "Docker", "CI/CD", "Terraform", "Linux"],
  },
];
