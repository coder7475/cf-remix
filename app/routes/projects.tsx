import { Projects } from "~/components/Projects";
import type { MetaFunction } from "@remix-run/cloudflare";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Featured Projects & Architecture | Robiul Hossain" },
    {
      name: "description",
      content:
        "Explore full-stack web applications, distributed microservices, and AI integrations built by Robiul Hossain using TypeScript, Next.js, Node.js, and cloud platforms.",
    },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Featured Projects & Architecture | Robiul Hossain" },
    {
      property: "og:description",
      content:
        "Explore full-stack web applications, distributed microservices, and AI integrations built by Robiul Hossain.",
    },
    { property: "og:url", content: "https://robiulhossain.com/projects" },
    { property: "og:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:title", content: "Featured Projects & Architecture | Robiul Hossain" },
    {
      name: "twitter:description",
      content:
        "Explore full-stack web applications, distributed microservices, and AI integrations built by Robiul Hossain.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
  ];
};

const projects = () => {
  return <Projects />;
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
            Failed to load projects
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

export default projects;
