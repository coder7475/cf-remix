import { useState, useEffect, useRef } from "react";
import { cn } from "~/libs/utils";

export const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
                  "space-y-4 text-muted-foreground font-display",
                  isVisible ? "animate-slide-in" : "opacity-0"
                )}
                style={{ animationDelay: "0.1s" }}
              >
                <p>
                  Assalamu Alaikum, I’m Robiul Hossain — a Software Engineer
                  with one and a half years of experience, specializing in
                  full-stack development.
                </p>

                <p>
                  I’ve worked on SaaS products in the creator economy, including
                  a CMS powering 20+ free tools. My work spans implementing
                  secure authentication systems, RAG-based features, and
                  scalable infrastructure across 10+ servers. I’ve also built
                  CI/CD pipelines, reverse proxies, monitoring setups, and
                  automated workflows to make development fast and reliable.
                </p>

                <p>
                  Throughout my journey, I’ve worked with JavaScript,
                  TypeScript, and Python — developing efficient, maintainable,
                  and user-focused web applications. I’m passionate about system
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
              <div className="relative">
                <div className="rounded-lg glass-morphism p-1 max-w-xs">
                  <div className="aspect-square rounded overflow-hidden bg-secondary">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      <img
                        src="/profile.png"
                        alt="Robiul Hossain"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
