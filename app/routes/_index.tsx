import { AboutMe } from "~/components/AboutMe";
import { Hero } from "~/components/Banner";

import type { MetaFunction } from "@remix-run/cloudflare";
import { Skills } from "~/components/Skills";
import { Experience } from "~/components/Experience";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/GetInTouch";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain — Software Engineer | Portfolio" },
    {
      name: "description",
      content:
        "Software engineer specializing in React, TypeScript, Node.js, and full-stack web development. Building scalable, performant applications.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Robiul Hossain — Software Engineer | Portfolio" },
    {
      property: "og:description",
      content:
        "Software engineer specializing in React, TypeScript, Node.js, and full-stack web development. Building scalable, performant applications.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Robiul Hossain — Software Engineer | Portfolio" },
    {
      name: "twitter:description",
      content:
        "Software engineer specializing in React, TypeScript, Node.js, and full-stack web development.",
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
