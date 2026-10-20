import { Skills } from "~/components/Skills";
import type { MetaFunction } from "@remix-run/cloudflare";


export const meta: MetaFunction = () => {
  return [
    { title: "Technical Skills & Capabilities | Robiul Hossain" },
    {
      name: "description",
      content:
        "Comprehensive technical arsenal of Robiul Hossain: TypeScript, React, Next.js, Remix, Node.js, NestJS, PostgreSQL, AWS, Cloudflare, and automated testing.",
    },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Technical Skills & Capabilities | Robiul Hossain" },
    {
      property: "og:description",
      content:
        "Technical skills of Robiul Hossain across modern frontend, scalable backend, databases, cloud, and DevOps.",
    },
    { property: "og:url", content: "https://robiulhossain.com/skills" },
    { property: "og:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:title", content: "Technical Skills & Capabilities | Robiul Hossain" },
    {
      name: "twitter:description",
      content:
        "Technical skills of Robiul Hossain across modern frontend, scalable backend, databases, cloud, and DevOps.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
  ];
};


const skills = () => {
  return <Skills />;
};

export default skills;
