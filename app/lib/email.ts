export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(
  apiKey: string,
  toEmail: string,
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: [toEmail],
        subject: `New contact form submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      }),
    });

    if (!response.ok) {
      return { success: false, error: `Resend API error: ${response.status}` };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: "Failed to send email" };
  }
}
