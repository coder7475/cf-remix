import type { MetaFunction , LinksFunction } from "@remix-run/cloudflare";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const links: LinksFunction = () => [
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
    { name: "description", content: "Robiul Hossain's personal portfolio showcasing projects, blog posts, and skills in web development, DevOps, and system design." },

    // Open Graph (for Facebook, LinkedIn, etc.)
    { property: "og:title", content: "Robiul Hossain | Software Engineer" },
    { property: "og:description", content: "Explore Robiul Hossain’s portfolio, featuring projects and experience in MERN stack, DevOps, and more." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com" }, // update with actual domain
    { property: "og:image", content: "https://robiulhossain.com/profile.png" }, // optional image
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:locale", content: "en_US" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Robiul Hossain | Software Engineer" },
    { name: "twitter:description", content: "Visit Robiul Hossain’s portfolio to see projects, skills, and experience in modern web development." },
    { name: "twitter:image", content: "https://x.com/robiul7475/photo" }, // optional image
  ];
};


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
