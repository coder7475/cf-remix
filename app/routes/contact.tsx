import { Contact } from "~/components/GetInTouch";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getAppEnv } from "~/libs/env.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const siteUrl = data?.siteUrl || "https://robiulhossain.com";
  const ogImage = `${siteUrl}/open-graph-image.jpeg`;

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
    { property: "og:url", content: `${siteUrl}/contact` },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:title", content: "Contact Robiul Hossain | Full-Stack Software Engineer" },
    {
      name: "twitter:description",
      content:
        "Get in touch with Robiul Hossain for full-time engineering roles, consulting, or client projects.",
    },
    { name: "twitter:image", content: ogImage },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const env = getAppEnv(context);
  return json({
    contactEmail: env.CONTACT_EMAIL,
    siteUrl: env.SITE_URL,
    hasServerEmail: Boolean(env.RESEND_API_KEY),
  });
}

export async function action({ request, context }: ActionFunctionArgs) {
  const env = getAppEnv(context);
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subjectType = String(formData.get("subjectType") || "job").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return json({ error: "All fields are required." }, { status: 400 });
  }

  if (env.RESEND_API_KEY) {
    const intentPrefix =
      subjectType === "job"
        ? "[Opportunity]"
        : subjectType === "client"
        ? "[Project Inquiry]"
        : "[Connect]";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: env.CONTACT_EMAIL,
        reply_to: email,
        subject: `${intentPrefix} Inquiry from ${name}`,
        text: `Sender: ${name}\nEmail: ${email}\nPurpose: ${subjectType}\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      return json({ error: "Failed to dispatch message. Please try again." }, { status: 502 });
    }

    return json({ success: true });
  }

  return json({ success: true, mode: "client_fallback" });
}

const ContactRoute = () => {
  const data = useLoaderData<typeof loader>();
  return <Contact asPage={true} contactEmail={data?.contactEmail} />;
};

export default ContactRoute;
