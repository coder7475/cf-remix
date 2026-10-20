import { Experience } from "~/components/Experience";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Career Experience & Track Record | Robiul Hossain" },
    {
      name: "description",
      content:
        "Software engineering career history of Robiul Hossain at Elementix Software Ventures and OctopusX. Full-stack development, API architecture, and DevOps automation.",
    },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Career Experience & Track Record | Robiul Hossain" },
    {
      property: "og:description",
      content:
        "Software engineering career history of Robiul Hossain at Elementix Software Ventures and OctopusX.",
    },
    { property: "og:url", content: "https://robiulhossain.com/experiences" },
    { property: "og:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:title", content: "Career Experience & Track Record | Robiul Hossain" },
    {
      name: "twitter:description",
      content:
        "Software engineering career history of Robiul Hossain at Elementix Software Ventures and OctopusX.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
  ];
};

const experience = () => {
  return <Experience />;
};

export default experience;
