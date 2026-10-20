import { AboutMe } from "~/components/AboutMe";
import { Hero } from "~/components/Banner";
import { WhatIDo } from "~/components/WhatIDo";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Skills } from "~/components/Skills";
import { Experience } from "~/components/Experience";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/GetInTouch";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain — Full-Stack Software Engineer & API Architect" },
    {
      name: "description",
      content:
        "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js, and cloud architectures. Available for full-time engineering roles and high-impact client projects.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Robiul Hossain — Full-Stack Software Engineer & API Architect" },
    {
      property: "og:description",
      content:
        "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js, and cloud architectures. Available for full-time engineering roles and client projects.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Robiul Hossain — Full-Stack Software Engineer & API Architect" },
    {
      name: "twitter:description",
      content:
        "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js, and cloud architectures.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <div id="hero">
        <Hero />
      </div>
      <div id="what-i-do">
        <WhatIDo />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
