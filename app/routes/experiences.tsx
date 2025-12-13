import { Experience } from "~/components/Experience";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Experiences | Robiul Hossain" },
    {
      name: "description",
      content: "Learn more about Robiul Hossain's Experiences.",
    },
  ];
};

const experience = () => {
  return <Experience />;
};

export default experience;
