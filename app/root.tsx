import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import { lazy, Suspense } from "react";

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
import { BackToTopButton } from "./components/BackToTopButton";
import { useKeyboardScroll } from "./hooks/useScrollVisibility";

const Navbar = lazy(() => import("~/components/Navbar").then((mod) => ({ default: mod.Navbar })));

export const links: LinksFunction = () => [
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "/logo.svg",
  },
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
    crossOrigin: "anonymous" as const,
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@203..800&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain | Software Engineer" },
    {
      name: "description",
      content:
        "Robiul Hossain's personal portfolio showcasing projects, blog posts, and skills in web development, DevOps, and system design.",
    },
    { property: "og:title", content: "Robiul Hossain | Software Engineer" },
    {
      property: "og:description",
      content:
        "Explore Robiul Hossain's portfolio, featuring projects and experience in MERN stack, DevOps, and more.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com" },
    { property: "og:image", content: "https://robiulhossain.com/profile.png" },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Robiul Hossain | Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Visit Robiul Hossain's portfolio to see projects, skills, and experience in modern web development.",
    },
    { name: "twitter:image", content: "https://x.com/robiul7475/photo" },
  ];
};

export function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="page-shell">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-slate-900 focus:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Skip to main content
        </a>
        <div className="absolute inset-x-0 top-0 h-64 pointer-events-none opacity-70">
          <div className="mx-auto h-full max-w-6xl relative">
            <div className="absolute -left-40 top-8 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>
        </div>

        <Suspense fallback={<div className="h-16" />}>
          <Navbar />
        </Suspense>
        <main
          id="main-content"
          className="page-inner pb-24 pt-6"
          tabIndex={-1}
          role="main"
        >
          {children}
        </main>
        <Footer />
        <BackToTopButton />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  // Optimized keyboard scroll with passive listeners
  useKeyboardScroll();

  return <Outlet />;
}

export const ErrorBoundary = () => {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);

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
  console.log(error);
  throw new Error("Function not implemented.");
}

export default App;
