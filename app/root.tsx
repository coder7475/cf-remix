import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import "./tailwind.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const links: LinksFunction = () => [
  { rel: "canonical", href: BASE_URL },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300..700&display=swap",
  },
];

const BASE_URL = "https://robiulhossain.com";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain — Software Engineer | Portfolio" },
    {
      name: "description",
      content:
        "Software engineer specializing in React, TypeScript, Node.js, and full-stack web development. Building scalable, performant applications.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Robiul Hossain — Software Engineer | Portfolio" },
    {
      property: "og:description",
      content:
        "Software engineer specializing in React, TypeScript, Node.js, and full-stack web development. Building scalable, performant applications.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: BASE_URL },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Robiul Hossain — Software Engineer | Portfolio" },
    {
      name: "twitter:description",
      content:
        "Software engineer specializing in React, TypeScript, Node.js, and full-stack web development.",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robiul Hossain",
    jobTitle: "Software Engineer",
    url: BASE_URL,
    sameAs: [
      "https://github.com/coder7475",
      "https://www.linkedin.com/in/robiul7475",
      "https://x.com/robiul7475",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.add("light")}}catch(e){}`,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body className="page-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="page-inner pb-24 pt-6">{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export const ErrorBoundary = () => {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error); // keep/remove as needed

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/40">
        <h1 className="text-2xl font-semibold text-red-400">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          An unexpected error occurred while loading this page.
        </p>
        <p className="mt-1 text-sm text-slate-400">
          You can try refreshing the page, or come back again in a moment.
        </p>
        <button
          type="button"
          onClick={() => location.reload()}
          className="mt-4 inline-flex items-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Refresh page
        </button>
      </div>
    </div>
  );
};

function captureRemixErrorBoundaryError(error: unknown) {
  console.error(error);
}

export default App;
