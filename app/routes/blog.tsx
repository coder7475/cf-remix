import { Blog } from "~/components/Blog";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | Robiul Hossain Portfolio" },
    {
      name: "description",
      content:
        "Technical articles, tutorials, and insights on software engineering, web development, and system design by Robiul Hossain.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Blog | Robiul Hossain Portfolio" },
    {
      property: "og:description",
      content:
        "Technical articles, tutorials, and insights on software engineering, web development, and system design by Robiul Hossain.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com/blog" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Blog | Robiul Hossain Portfolio" },
    {
      name: "twitter:description",
      content:
        "Technical articles, tutorials, and insights on software engineering by Robiul Hossain.",
    },
  ];
};

const BlogRoute = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Blog />
      </div>
    </div>
  );
};

export default BlogRoute;
