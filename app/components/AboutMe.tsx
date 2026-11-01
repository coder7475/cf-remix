import { useInView } from "~/hooks/use-in-view";
import { cn } from "~/libs/utils";
import { Globe, MapPin, Sparkles, UserCheck } from "lucide-react";

const quickHighlights = [
  { label: "Location", val: "Dhaka, Bangladesh (Remote Worldwide)", icon: MapPin },
  { label: "Experience", val: "2+ Years in Production Environments", icon: UserCheck },
  { label: "Primary Stack", val: "TypeScript, React, React Native, Hono, Node.js", icon: Sparkles },
  { label: "Availability", val: "Full-Time Roles & High-Impact Contracts", icon: Globe },
];

export const AboutMe = () => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-16 md:py-24" aria-labelledby="about-me-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div
            className={cn(
              "lg:col-span-5 space-y-6",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            <div className="flex items-start gap-4">
              <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-1">
                  Background &amp; Philosophy
                </span>
                <h2 id="about-me-heading" className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                  <span className="text-gradient">About Me</span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-foreground font-medium leading-relaxed">
              Engineering resilient, type-safe software systems across web, mobile, and distributed edge infrastructure.
            </p>

            <div className="p-5 rounded-xl glass-morphism border border-primary/20 bg-primary/[0.02] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-muted-foreground border-b border-border/50 pb-2.5">
                <span>STATUS</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground border-b border-border/50 pb-2.5">
                <span>FOCUS</span>
                <span className="text-foreground">Web · Mobile · Edge APIs</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>TIMEZONE</span>
                <span className="text-foreground">UTC+6 (Flexible Overlap)</span>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "lg:col-span-7 space-y-6",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Assalamu Alaikum! I&apos;m <span className="text-foreground font-semibold">Robiul Hossain</span>, a Software Engineer dedicated to architecting resilient, scalable applications that deliver measurable business outcomes.
              </p>
              <p>
                My engineering spans the entire product lifecycle: crafting responsive web frontends with React, Next.js, and Remix, building native-feel mobile applications with React Native and Expo, and deploying low-latency edge APIs using Hono, Node.js, and Cloudflare KV with PostgreSQL storage.
              </p>
              <p>
                When working with teams or founders, I don&apos;t just write code — I partner to eliminate product bottlenecks, enforce rigorous type-safety, and automate testing with Playwright and Jest for zero-regression deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {quickHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass-morphism rounded-xl p-4 border border-border/60 hover:border-primary/30 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item.val}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
