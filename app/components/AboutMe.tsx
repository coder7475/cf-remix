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
                  Hello! I&apos;m Robiul Hossain — a Software Engineer focused
                  on building scalable, secure, and high-performance backend
                  systems. I specialize in TypeScript, Node.js, Express.js,
                  NestJS, and databases like PostgreSQL and MongoDB.
                </p>
                <p>
                  I work across backend development and DevOps, with hands-on
                  experience in Docker, Nginx, GitHub Actions, and system
                  monitoring tools like Prometheus and Grafana. I emphasize
                  clean architecture, efficient database design, automation, and
                  system resilience.
                </p>
                <p>
                  Over the next 4-5 years, I aim to grow into a Principal
                  Software Engineer, specializing in system design, backend
                  infrastructure, DevOps, and platform reliability, while
                  improving leadership and communication skills to drive
                  impactful projects.
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
