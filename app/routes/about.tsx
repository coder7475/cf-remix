import { AboutMe } from "~/components/AboutMe";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Robiul Hossain Portfolio" },
    {
      name: "description",
      content:
        "Learn about Robiul Hossain — a software engineer with experience in React, TypeScript, Node.js, and full-stack web development.",
    },
  ];
};

const About = () => {
  return <AboutMe />;
};

export default About;
