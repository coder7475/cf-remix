import { Blog } from "~/components/Blog"
import type { MetaFunction } from "@remix-run/cloudflare";


export const meta: MetaFunction = () => {
  return [
    { title: "Blogs | Robiul Hossain" },
    { name: "description", content: "Learn more about Robiul Hossain's Blogs." },
  ];
};


const BlogRoute = () => {
  return (
    <Blog />
  )
}

export default BlogRoute;
