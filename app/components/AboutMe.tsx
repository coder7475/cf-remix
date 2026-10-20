import { useInView } from "~/hooks/use-in-view";
import { cn } from "~/libs/utils";
import { Check, Globe, MapPin, Sparkles, UserCheck } from "lucide-react";

const quickHighlights = [
  { label: "Location", val: "Dhaka, Bangladesh (Remote Worldwide)", icon: MapPin },
  { label: "Experience", val: "2+ Years in High-Growth Environments", icon: UserCheck },
  { label: "Primary Stack", val: "TypeScript, React, Node.js, PostgreSQL", icon: Sparkles },
  { label: "Availability", val: "Full-Time Roles & Selected Client Projects", icon: Globe },
];

export const AboutMe = () => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-16 md:py-24" aria-labelledby="about-me-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="lg:w-1/3">
            <div
              className={cn(
                "flex items-start gap-4 mb-6",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
            >
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

            <div
              className={cn(
                "relative mx-auto lg:mx-0 max-w-xs",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="rounded-2xl glass-morphism p-2.5 border border-primary/20 relative group">
                <div className="aspect-square rounded-xl overflow-hidden bg-secondary relative">
                  <img
                    src="/profile.png"
                    alt="Robiul Hossain, Full-Stack Software Engineer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Engineer
                    </span>
                    <span className="text-primary font-bold">2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "lg:w-2/3 space-y-6",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Assalamu Alaikum! I&apos;m <span className="text-foreground font-semibold">Robiul Hossain</span>, a Software Engineer dedicated to architecting resilient, scalable web software that delivers measurable business outcomes.
              </p>
              <p>
                My engineering focus spans the entire stack: from engineering intuitive, accessible frontends with React, Next.js, and Remix, to architecting high-throughput backend services using Node.js, Express, NestJS, and PostgreSQL. I take pride in crafting clean, type-safe codebases backed by automated testing (Jest, Playwright) and robust CI/CD pipelines.
              </p>
              <p>
                When working with teams or individual founders, I don&apos;t just write code — I partner to solve core engineering and product bottlenecks, minimize technical debt, and ensure deployments run predictably on AWS and Cloudflare.
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

            <div className="pt-2 flex flex-wrap gap-3">
              {[
                "Strict Type Safety",
                "Automated Testing",
                "Scalable Architecture",
                "Continuous Integration",
                "Pragmatic Engineering",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-foreground/90 border border-border"
                >
                  <Check className="w-3.5 h-3.5 text-primary" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
