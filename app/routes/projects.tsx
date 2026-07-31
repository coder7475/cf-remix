import { Projects } from "~/components/Projects";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Robiul Hossain Portfolio" },
    {
      name: "description",
      content:
        "Explore projects built by Robiul Hossain — full-stack web applications, APIs, and cloud infrastructure solutions.",
    },
  ];
};

const projects = () => {
  return <Projects />;
};

export default projects;
