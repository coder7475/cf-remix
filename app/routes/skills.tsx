import { Skills } from "~/components/Skills";
import type { MetaFunction } from "@remix-run/cloudflare";


export const meta: MetaFunction = () => {
  return [
    { title: "Skills | Robiul Hossain" },
    { name: "description", content: "Learn more about Robiul Hossain's Skills." },
  ];
};


const skills = () => {
  return <Skills />;
};

export default skills;
