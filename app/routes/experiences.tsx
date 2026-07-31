import { Experience } from "~/components/Experience";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Experience | Robiul Hossain Portfolio" },
    {
      name: "description",
      content:
        "Work experience and career history of Robiul Hossain — software engineering roles in full-stack development and DevOps.",
    },
  ];
};

const experience = () => {
  return <Experience />;
};

export default experience;
