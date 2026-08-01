import { Contact } from "~/components/GetInTouch";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/cloudflare";
import { sendContactEmail } from "~/lib/email";

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

interface ActionResponse {
  success: boolean;
  errors?: Record<string, string>;
}

export async function action({ request, context }: ActionFunctionArgs): Promise<ActionResponse> {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const errors: Record<string, string> = {};
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.name = "Name is required";
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Valid email is required";
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    const env = context.cloudflare?.env;
    const apiKey = env?.RESEND_API_KEY;
    const contactEmail = env?.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      return { success: false, errors: { server: "Email service not configured" } };
    }

    const result = await sendContactEmail(apiKey, contactEmail, {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (!result.success) {
      return { success: false, errors: { server: result.error || "Failed to send email" } };
    }

    return { success: true };
  } catch (err) {
    return { success: false, errors: { server: "Internal server error" } };
  }
}

const ContactRoute = () => {
  return <Contact />;
};

export default ContactRoute;
