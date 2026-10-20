import type { MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData, useRouteError, isRouteErrorResponse } from "@remix-run/react";
import { Blog, type BlogPost } from "~/components/Blog";

interface BlogLoaderData {
  posts: BlogPost[];
  error?: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Engineering Blog & Tech Articles | Robiul Hossain" },
    {
      name: "description",
      content:
        "Technical articles, tutorials, and architectural insights on TypeScript, React, Node.js, and distributed software engineering by Robiul Hossain.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:title", content: "Engineering Blog & Tech Articles | Robiul Hossain" },
    {
      property: "og:description",
      content:
        "Technical articles, tutorials, and architectural insights on TypeScript, React, Node.js, and distributed software engineering by Robiul Hossain.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com/blog" },
    { property: "og:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:title", content: "Engineering Blog & Tech Articles | Robiul Hossain" },
    {
      name: "twitter:description",
      content:
        "Technical articles, tutorials, and architectural insights on software engineering by Robiul Hossain.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
  ];
};

export async function loader() {
  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=coder7475&per_page=4",
      {
        headers: {
          "User-Agent": "RobiulHossainPortfolio/1.0 (https://robiulhossain.com)",
          Accept: "application/vnd.forem.api-v1+json",
        },
      }
    );
    if (!res.ok) {
      return json<BlogLoaderData>(
        { posts: [], error: `Failed to fetch articles (${res.status})` },
        {
          headers: {
            "Cache-Control": "public, max-age=60, s-maxage=60",
          },
        }
      );
    }
    const posts = (await res.json()) as BlogPost[];
    return json<BlogLoaderData>(
      { posts },
      {
        headers: {
          "Cache-Control":
            "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
        },
      }
    );
  } catch (err) {
    return json<BlogLoaderData>(
      { posts: [], error: (err as Error).message },
      {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=60",
        },
      }
    );
  }
}

const BlogRoute = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Blog initialPosts={data.posts} error={data.error} />
      </div>
    </div>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
    ? error.message
    : "An unexpected error occurred";

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto p-8 glass-morphism rounded-xl border border-destructive/30 text-center">
          <h2 className="text-2xl font-display font-bold text-destructive mb-2">
            Failed to load blog posts
          </h2>
          <p className="text-muted-foreground text-sm font-mono mb-6">
            {errorMessage}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogRoute;
