import { Contact } from "~/components/GetInTouch";
import type { MetaFunction } from "@remix-run/cloudflare";


export const meta: MetaFunction = () => {
  return [
    { title: "Contact | Robiul Hossain" },
    { name: "description", content: "Contact Robiul Hossain." },
  ];
};


const ContactRoute = () => {
  return <Contact />;
};

export default ContactRoute;
