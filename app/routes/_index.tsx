import { lazy, Suspense, memo } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";

const Hero = lazy(() => import("~/components/Banner").then((mod) => ({ default: mod.Hero })));
const AboutMe = lazy(() => import("~/components/AboutMe").then((mod) => ({ default: mod.AboutMe })));
const Skills = lazy(() => import("~/components/Skills").then((mod) => ({ default: mod.Skills })));
const Experience = lazy(() => import("~/components/Experience").then((mod) => ({ default: mod.Experience })));
const Blog = lazy(() => import("~/components/Blog").then((mod) => ({ default: mod.Blog })));
const Contact = lazy(() => import("~/components/GetInTouch").then((mod) => ({ default: mod.Contact })));

// Loading skeleton for better perceived performance
const SectionSkeleton = memo(function SectionSkeleton() {
  return (
    <div className="py-20 md:py-28 animate-pulse">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-12 bg-slate-800/50 rounded w-1/3 mx-auto mb-12" />
        <div className="h-64 bg-slate-800/30 rounded-xl" />
      </div>
    </div>
  );
});

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain | Software Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Robiul Hossain, a software engineer and full-stack developer specializing in scalable, secure, and high-performance web applications with JavaScript, TypeScript and Python",
    },
    { name: "author", content: "Robiul Hossain" },
    {
      name: "keywords",
      content:
        "Robiul Hossain, software engineer, full-stack developer, TypeScript, React, Node.js, NestJS, Next.js, AWS, PostgreSQL, portfolio",
    },
    { property: "og:title", content: "Robiul Hossain | Software Engineer" },
    {
      property: "og:description",
      content:
        "Explore the portfolio of Robiul Hossain, a software engineer and full-stack developer building scalable, secure, and high-performance web applications.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com" },
    { property: "og:image", content: "https://robiulhossain.com/og-image.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Robiul Hossain | Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Software engineer and full-stack developer building scalable, secure, and high-performance web applications.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/og-image.jpg" },
    { name: "twitter:site", content: "@robiul7475" },
  ];
};

/**
 * Renders the main landing page with hero and about-me sections.
 *
 * Displays the `Hero` and `AboutMe` components in a vertically stacked layout.
 */
export default function Index() {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<SectionSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </div>
  );
}
