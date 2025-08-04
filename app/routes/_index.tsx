import type { MetaFunction } from "@remix-run/cloudflare";
import { Hero } from "~/components/Banner";

export const meta: MetaFunction = () => {
  return [
    { title: "Robiul Hossain" },
    { name: "description", content: "A Software Engineer's portfolio" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <Hero />
    </div>
  );
}
