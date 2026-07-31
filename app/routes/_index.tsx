import { AboutMe } from "~/components/AboutMe";
import { Hero } from "~/components/Banner";

import type { MetaFunction } from "@remix-run/cloudflare";
import { Skills } from "~/components/Skills";
import { Experience } from "~/components/Experience";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/GetInTouch";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain — Backend & Cloud Engineer | Portfolio" },
    {
      name: "description",
      content:
        "Backend & cloud infrastructure engineer specializing in React, TypeScript, Node.js, AWS, Docker, Terraform, and Kubernetes. Building scalable distributed systems.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Robiul Hossain — Backend & Cloud Engineer | Portfolio" },
    {
      property: "og:description",
      content:
        "Backend & cloud infrastructure engineer specializing in React, TypeScript, Node.js, AWS, Docker, Terraform, and Kubernetes. Building scalable distributed systems.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Robiul Hossain — Backend & Cloud Engineer | Portfolio" },
    {
      name: "twitter:description",
      content:
        "Backend & cloud infrastructure engineer specializing in React, TypeScript, Node.js, AWS, Docker, Terraform, and Kubernetes.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <div id="hero">
        <Hero />
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
