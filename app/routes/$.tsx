import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  return json(
    { path: params["*"] ?? "" },
    { status: 404, statusText: "Not Found" }
  );
}

export default function NotFoundRoute() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center glass-morphism p-12 rounded-lg max-w-md">
        <h1 className="text-6xl font-display font-bold mb-6 text-gradient">
          404
        </h1>
        <p className="text-xl text-muted-foreground font-mono mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
