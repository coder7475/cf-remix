import { Contact } from "~/components/GetInTouch";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact | Robiul Hossain Portfolio" },
    {
      name: "description",
      content:
        "Get in touch with Robiul Hossain for collaborations, opportunities, or just to say hello.",
    },
  ];
};

const ContactRoute = () => {
  return <Contact />;
};

export default ContactRoute;
