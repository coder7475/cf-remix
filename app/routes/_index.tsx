import { AboutMe } from "~/components/AboutMe";
import { Hero } from "~/components/Banner";

import type { MetaFunction } from "@remix-run/cloudflare";
import { Skills } from "~/components/Skills";
import { Experience } from "~/components/Experience";
import { Blog } from "~/components/Blog";
import { Contact } from "~/components/GetInTouch";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain | Software Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Robiul Hossain, a software engineer and full-stack developer specializing in scalable, secure, and high-performance web applications with JavaScript, TypeScript and Python",
    },

    // Basic SEO helpers
    { name: "author", content: "Robiul Hossain" },
    {
      name: "keywords",
      content:
        "Robiul Hossain, software engineer, full-stack developer, TypeScript, React, Node.js, NestJS, Next.js, AWS, PostgreSQL, portfolio",
    },

    // Open Graph (for social previews)
    { property: "og:title", content: "Robiul Hossain | Software Engineer" },
    {
      property: "og:description",
      content:
        "Explore the portfolio of Robiul Hossain, a software engineer and full-stack developer building scalable, secure, and high-performance web applications.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com" },
    { property: "og:image", content: "https://robiulhossain.com/og-image.jpg" },

    // Twitter Card
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
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
    </div>
  );
}
