import type { MetaFunction } from "@remix-run/cloudflare";
import { AboutMe } from "~/components/AboutMe";
import { Hero } from "~/components/Banner";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain" },
    { name: "description", content: "A Software Engineer's portfolio" },
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
