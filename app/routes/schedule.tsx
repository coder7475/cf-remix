import { CalendlyInline } from "~/components/CalendlyInline";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Schedule a 30-Minute Consultation | Robiul Hossain" },
    {
      name: "description",
      content:
        "Book a direct 30-minute consultation with Robiul Hossain to discuss full-stack engineering roles, architectural advisory, or client project scopes.",
    },
    { property: "og:site_name", content: "Robiul Hossain Portfolio" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Schedule a 30-Minute Consultation | Robiul Hossain" },
    {
      property: "og:description",
      content:
        "Book a direct 30-minute consultation with Robiul Hossain via Calendly.",
    },
    { property: "og:url", content: "https://robiulhossain.com/schedule" },
    { property: "og:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@robiul7475" },
    { name: "twitter:title", content: "Schedule a 30-Minute Consultation | Robiul Hossain" },
    {
      name: "twitter:description",
      content:
        "Book a direct 30-minute consultation with Robiul Hossain via Calendly.",
    },
    { name: "twitter:image", content: "https://robiulhossain.com/open-graph-image.jpeg" },
  ];
};

const ScheduleRoute = () => {
  return (
    <section className="py-16 md:py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            <span className="text-gradient">Schedule a Meeting</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Pick a time that works for you. I&apos;m available for 30-minute
            consultations to discuss your project, ideas, or just to connect.
          </p>
        </div>

        <div className="glass-morphism rounded-lg p-4 md:p-8">
          <CalendlyInline
            url="https://calendly.com/robiulhossain7475/30min"
            className="rounded-lg overflow-hidden"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Can&apos;t find a suitable time?{" "}
            <Link
              to="/#contact"
              className="text-primary hover:underline"
            >
              Send me a message instead
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleRoute;