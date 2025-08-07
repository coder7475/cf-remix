import { AboutMe } from "~/components/AboutMe";
import { Hero } from "~/components/Banner";

import type { MetaFunction } from "@remix-run/cloudflare";


export const meta: MetaFunction = () => {
  return [
    { title: "Home | Robiul Hossain" },
    { name: "description", content: "Learn more about Robiul Hossain." },
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
    </div>
  );
}
