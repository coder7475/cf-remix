import { Projects } from "~/components/Projects";
import type { MetaFunction } from "@remix-run/cloudflare";


export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Robiul Hossain" },
    { name: "description", content: "Learn more about Robiul Hossain's Projects." },
  ];
};


const projects = () => {
  return <Projects />;
};

export default projects;
