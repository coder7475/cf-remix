import { AboutMe } from "~/components/AboutMe";
import { Hero } from "~/components/Banner";
import { WhatIDo } from "~/components/WhatIDo";
import type { MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Skills } from "~/components/Skills";
import { Experience } from "~/components/Experience";
import { Projects } from "~/components/Projects";
import { RecentArticles } from "~/components/RecentArticles";
import { Contact } from "~/components/GetInTouch";
import type { BlogPost } from "~/components/Blog";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain — Full-Stack Software Engineer & API Architect" },
    {
      name: "description",
      content:
        "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js, and cloud architectures. Available for full-time engineering roles and high-impact client projects.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:locale", content: "en_US" },
    { property: "og:title", content: "Robiul Hossain — Full-Stack Software Engineer & API Architect" },
    {
      property: "og:description",
      content:
        "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js, and cloud architectures. Available for full-time engineering roles and client projects.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://robiulhossain.com" },
    { property: "og:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { property: "og:image:secure_url", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "2848" },
    { property: "og:image:height", content: "1504" },
    { property: "og:image:alt", content: "Robiul Hossain — Full-Stack Software Engineer Portfolio" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:creator", content: "@robiul7475" },
    { name: "twitter:title", content: "Robiul Hossain — Full-Stack Software Engineer & API Architect" },
    {
      name: "twitter:description",
      content:
        "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js, and cloud architectures.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { name: "twitter:image:alt", content: "Robiul Hossain — Full-Stack Software Engineer Portfolio" },
  ];
};

export async function loader() {
  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=coder7475&per_page=3",
      {
        headers: {
          "User-Agent": "RobiulHossainPortfolio/1.0 (https://robiulhossain.com)",
          Accept: "application/vnd.forem.api-v1+json",
        },
      }
    );
    if (!res.ok) {
      return json<{ recentPosts: BlogPost[] }>({ recentPosts: [] });
    }
    const data: BlogPost[] = await res.json();
    return json<{ recentPosts: BlogPost[] }>({ recentPosts: data });
  } catch {
    return json<{ recentPosts: BlogPost[] }>({ recentPosts: [] });
  }
}

export default function Index() {
  const { recentPosts } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col">
      <div id="hero">
        <Hero />
      </div>
      <div id="what-i-do">
        <WhatIDo />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="articles">
        <RecentArticles posts={recentPosts} />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
