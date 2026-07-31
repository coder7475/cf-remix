import { Skills } from "~/components/Skills";
import type { MetaFunction } from "@remix-run/cloudflare";


export const meta: MetaFunction = () => {
  return [
    { title: "Skills | Robiul Hossain Portfolio" },
    {
      name: "description",
      content:
        "Technical skills and tools used by Robiul Hossain — React, TypeScript, Node.js, Python, AWS, Docker, and more.",
    },
  ];
};


const skills = () => {
  return <Skills />;
};

export default skills;
