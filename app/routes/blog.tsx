import { Blog } from "~/components/Blog";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Blogs | Robiul Hossain" },
    {
      name: "description",
      content:
        "Read technical articles, tutorials, and insights by Robiul Hossain on software engineering, full-stack web development, TypeScript, React, Node.js, AWS, and system design.",
    },
  ];
};

const BlogRoute = () => {
  return <Blog />;
};

export default BlogRoute;
