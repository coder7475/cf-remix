import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteError,
} from "@remix-run/react";

import "./tailwind.css";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import { ScrollToTop } from "~/components/ScrollToTop";
import { Toaster } from "~/components/ui/toaster";
import { ThemeProvider } from "~/hooks/use-theme";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
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
    { title: "Robiul Hossain Portfolio" },
    {
      name: "description",
      content:
        "Software Engineer specializing in backend systems, distributed architectures, cloud automation, and modern full-stack web and mobile applications.",
    },
    { name: "author", content: "Robiul Hossain" },
    {
      name: "keywords",
      content:
        "Robiul Hossain, coder7475, Software Engineer, Backend Engineer, Distributed Systems, Cloud Automation, Docker, Kubernetes, AWS, Terraform, TypeScript, Node.js, NestJS, PostgreSQL, Redis, React",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Robiul Hossain Portfolio" },
    {
      property: "og:description",
      content:
        "Software Engineer specializing in backend systems, distributed architectures, cloud automation, and modern web and mobile applications.",
    },
    { property: "og:url", content: BASE_URL },
    { property: "og:image", content: `${BASE_URL}/open-graph-image.jpeg` },
    { property: "og:image:secure_url", content: `${BASE_URL}/open-graph-image.jpeg` },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "2848" },
    { property: "og:image:height", content: "1504" },
    { property: "og:image:alt", content: "Robiul Hossain Portfolio" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:creator", content: "@robiul7475" },
    { name: "twitter:title", content: "Robiul Hossain Portfolio" },
    {
      name: "twitter:description",
      content:
        "Software Engineer specializing in backend systems, distributed architectures, cloud automation, and modern full-stack web and mobile applications.",
    },
    { name: "twitter:image", content: `${BASE_URL}/open-graph-image.jpeg` },
    { name: "twitter:image:alt", content: "Robiul Hossain Portfolio" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, "");
  const canonicalUrl = `${BASE_URL}${normalizedPath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Robiul Hossain",
        alternateName: "coder7475",
        jobTitle: "Software Engineer",
        description:
          "Software Engineer focused on scalable, secure, and high-performance backend systems, distributed architectures, and cloud automation.",
        image: `${BASE_URL}/open-graph-image.jpeg`,
        url: BASE_URL,
        worksFor: {
          "@type": "Organization",
          name: "Elementix Software Ventures LLC",
        },
        hasOccupation: {
          "@type": "Occupation",
          name: "Software Engineer",
          occupationalCategory: "15-1252.00",
          skills: [
            "TypeScript",
            "Node.js",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Kubernetes",
            "AWS",
            "Terraform",
            "React",
            "React Native",
            "CI/CD",
          ],
        },
        knowsAbout: [
          "TypeScript",
          "JavaScript",
          "React",
          "React Native",
          "Mobile App Development",
          "Expo",
          "Next.js",
          "Remix",
          "Node.js",
          "Hono",
          "Express.js",
          "NestJS",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Cloudflare KV",
          "Cloudflare Workers",
          "Docker",
          "Kubernetes",
          "AWS",
          "Terraform",
          "Microservices",
          "RESTful APIs",
          "GraphQL",
          "Python",
          "FastAPI",
          "Spec-Driven Development",
          "AI Agents",
          "CI/CD",
        ],
        sameAs: [
          "https://github.com/coder7475",
          "https://www.linkedin.com/in/robiul7475",
          "https://x.com/robiul7475",
          "https://dev.to/coder7475",
          "https://www.youtube.com/@RobiulHossain-f2k",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Robiul Hossain Portfolio",
        description: "Portfolio of Robiul Hossain, Software Engineer.",
        inLanguage: "en-US",
        publisher: {
          "@id": `${BASE_URL}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${BASE_URL}/#profilepage`,
        url: BASE_URL,
        name: "Robiul Hossain Profile",
        inLanguage: "en-US",
        mainEntity: {
          "@id": `${BASE_URL}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.remove("light")}else if(t==="light"){document.documentElement.classList.add("light")}else{var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.classList.remove("light")}else{document.documentElement.classList.add("light")}}}catch(e){}`,
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
        <ThemeProvider>
          <Navbar />
          <main className="page-inner pb-24 pt-6">{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
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
  console.error("Application error captured by boundary:", error);
}

export default App;
