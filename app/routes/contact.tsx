import { Contact } from "~/components/GetInTouch";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Robiul Hossain | Full-Stack Software Engineer" },
    {
      name: "description",
      content:
        "Get in touch with Robiul Hossain for full-time engineering roles, high-impact consulting, or MVP product development. Guaranteed response within 24 hours.",
    },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Contact Robiul Hossain | Full-Stack Software Engineer" },
    {
      property: "og:description",
      content:
        "Get in touch with Robiul Hossain for full-time engineering roles, consulting, or client projects.",
    },
    { property: "og:url", content: "https://robiulhossain.com/contact" },
    { property: "og:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:title", content: "Contact Robiul Hossain | Full-Stack Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Get in touch with Robiul Hossain for full-time engineering roles, consulting, or client projects.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
  ];
};

const ContactRoute = () => {
  return <Contact />;
};

export default ContactRoute;
