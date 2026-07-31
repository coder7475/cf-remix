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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                  Assalamu Alaikum, I'm Robiul Hossain — a Backend & Cloud
                  Infrastructure Engineer with experience building scalable
                  distributed systems, secure APIs, and automated infrastructure.
                </p>

                <p>
                  My focus is on backend development, cloud infrastructure
                  (AWS, Docker, Terraform, Kubernetes), distributed systems,
                  system design, and CI/CD automation. I'm also expanding into
                  cybersecurity and learning Rust to deepen my systems
                  programming skills.
                </p>

                <p>
                  I'd love to bring my experience in backend engineering,
                  infrastructure automation, and distributed systems to help
                  build and scale your product.
                </p>

                <p className="text-primary font-semibold">
                  Goal: Distinguished Software Engineer
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
