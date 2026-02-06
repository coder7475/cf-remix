import { memo } from "react";
import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";
import { cn } from "~/libs/utils";

export const AboutMe = memo(function AboutMe() {
  const [isVisible, sectionRef] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
            {/* About Text */}
            <div className="md:w-3/5">
              <h2
                className={cn(
                  "text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight",
                  isVisible ? "animate-slide-in" : "opacity-0"
                )}
              >
                <span className="text-gradient">About Me</span>
              </h2>

              <div
                className={cn(
                  "space-y-4 text-muted-foreground font-display text-sm sm:text-base leading-relaxed",
                  isVisible ? "animate-slide-in" : "opacity-0"
                )}
                style={{ animationDelay: "0.1s" }}
              >
                <p>
                  Assalamu Alaikum, I'm Robiul Hossain — a Software Engineer
                  with one and a half years of experience, specializing in
                  full-stack development.
                </p>

                <p>
                  I've worked on SaaS products in the creator economy, including
                  a CMS powering 20+ free tools. My work spans implementing
                  secure authentication systems, RAG-based features, and
                  scalable infrastructure across 10+ servers. I've also built
                  CI/CD pipelines, reverse proxies, monitoring setups, and
                  automated workflows to make development fast and reliable.
                </p>

                <p>
                  Throughout my journey, I've worked with JavaScript,
                  TypeScript, and Python — developing efficient, maintainable,
                  and user-focused web applications. I'm passionate about system
                  design, backend infrastructure, and building solutions that
                  scale gracefully.
                </p>

                <p>
                  I actively learn through online courses, coding challenges,
                  and side projects to stay updated with evolving technologies.
                  Over the next few years, I aspire to grow into a Software
                  Architect, deepening my expertise in DevOps, platform
                  reliability, and system scalability while improving leadership
                  and communication skills to drive impactful projects.
                </p>

                <p>
                  I would love to bring my experience in design, development,
                  and automation to help build and scale your product.
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div
              className={cn(
                "md:w-2/5 flex justify-center",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative w-64 sm:w-72">
                <div className="absolute -left-10 -top-6 h-32 w-32 rounded-full bg-emerald-400/25 blur-3xl" />
                <div className="absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-emerald-400/15 blur-3xl" />

                <div className="relative rounded-[1.75rem] glass-morphism border-emerald-400/25 bg-slate-900/60 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-950">
                    <img
                      src="/profile.png"
                      alt="Robiul Hossain"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <p className="text-[0.7rem] font-mono uppercase tracking-[0.2em] text-emerald-200/80">
                        Role
                      </p>
                      <p className="text-sm font-semibold text-slate-50">
                        Software Engineer
                      </p>
                    </div>
                    <div className="rounded-full border border-emerald-400/40 bg-slate-950/70 px-3 py-1 text-[0.7rem] font-mono text-emerald-100/80">
                      Architect in progress
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
});
