import type { MetaFunction } from "@remix-run/cloudflare";
import { Hero } from "~/components/Banner";
import { Contact } from "~/components/Contact";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain" },
    { name: "description", content: "Software Engineer & DevOps Engineer" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Contact />
    </div>
  );
}


