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
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left column - Heading with accent line */}
          <div className="md:w-1/4">
            <div
              className={cn(
                "flex items-start gap-4",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
            >
              <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                <span className="text-gradient">About Me</span>
              </h2>
            </div>
          </div>

          {/* Right column - Text and image */}
          <div className="md:w-3/4 flex flex-col md:flex-row gap-10 md:gap-12 items-start">
            {/* Bio text */}
            <div
              className={cn(
                "md:w-3/5 space-y-4 text-muted-foreground",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              <p className="leading-relaxed">
                Assalamu Alaikum, I&apos;m Robiul Hossain — a Software
                Engineer with experience building scalable web applications,
                APIs, and distributed systems.
              </p>

              <p className="leading-relaxed">
                My focus is on full-stack development with React, TypeScript,
                Node.js, and Python. I work across the stack — from building
                responsive frontends to designing robust backend services and
                infrastructure. I&apos;m passionate about writing clean,
                maintainable code and continuously improving my craft.
              </p>

              <p className="leading-relaxed">
                I&apos;d love to bring my experience in backend engineering,
                infrastructure automation, and distributed systems to help
                build and scale your product.
              </p>

              <p className="text-primary font-semibold font-display pt-2">
                Goal: Distinguished Software Engineer
              </p>
            </div>

            {/* Profile image */}
            <div
              className={cn(
                "md:w-2/5 flex justify-center md:justify-end",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                <div className="rounded-lg glass-morphism p-1 max-w-xs">
                  <div className="aspect-square rounded overflow-hidden bg-secondary">
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
    </section>
  );
};
