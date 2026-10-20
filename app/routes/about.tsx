import { AboutMe } from "~/components/AboutMe";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "About Robiul Hossain | Full-Stack Software Engineer" },
    {
      name: "description",
      content:
        "Learn about Robiul Hossain — background, engineering values, and production experience building web systems with TypeScript, React, Node.js, and cloud platforms.",
    },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:type", content: "profile" },
    { property: "og:title", content: "About Robiul Hossain | Full-Stack Software Engineer" },
    {
      property: "og:description",
      content:
        "Learn about Robiul Hossain — background, engineering values, and production experience building web systems.",
    },
    { property: "og:url", content: "https://robiulhossain.com/about" },
    { property: "og:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:title", content: "About Robiul Hossain | Full-Stack Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Learn about Robiul Hossain — background, engineering values, and production experience building web systems.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
  ];
};

const About = () => {
  return <AboutMe />;
};

export default About;
