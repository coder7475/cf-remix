import { CalendlyInline } from "~/components/CalendlyInline";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Schedule a Meeting | Robiul Hossain Portfolio" },
    {
      name: "description",
      content:
        "Schedule a meeting with Robiul Hossain for consultations, collaborations, or discussions.",
    },
  ];
};

const ScheduleRoute = () => {
  return (
    <div className="dark">
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
              <a
                href="/contact"
                className="text-primary hover:underline"
              >
                Send me a message instead
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleRoute;