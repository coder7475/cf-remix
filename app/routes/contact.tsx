import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Contact } from "~/components/GetInTouch";

export async function action({ request, context }: ActionFunctionArgs) {
  const formData = await request.formData();

  const nameValue = formData.get("name");
  const emailValue = formData.get("email");
  const messageValue = formData.get("message");

  const name = typeof nameValue === "string" ? nameValue.trim() : "";
  const email = typeof emailValue === "string" ? emailValue.trim() : "";
  const message =
    typeof messageValue === "string" ? messageValue.trim() : "";

  if (!name || !email || !message) {
    return json(
      { success: false, error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const apiKey = context.cloudflare.env.RESEND_API_KEY;
  const to =
    context.cloudflare.env.CONTACT_RECIPIENT_EMAIL || "contact@robiulhossain.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured in the environment.");
    return json(
      {
        success: false,
        error:
          "Email service is not configured. Please try again later or email me directly.",
      },
      { status: 500 }
    );
  }

  const subject = `New message from ${name}`;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject,
      text: textBody,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text().catch(() => "Unknown error");
    console.error("Resend API error:", resendResponse.status, errorText);

    return json(
      {
        success: false,
        error:
          "Something went wrong while sending your message. Please try again or email me directly.",
      },
      { status: 500 }
    );
  }

  return json({ success: true });
}

const ContactRoute = () => {
  return <Contact />;
};

export default ContactRoute;
