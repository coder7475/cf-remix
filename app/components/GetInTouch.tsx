import { useState, useEffect, useRef } from "react";
import { cn } from "~/libs/utils";
import { Mail, Github, Linkedin, Twitter, Youtube } from "lucide-react";

export const Contact = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
          >
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p
            className={cn(
              "text-center text-muted-foreground max-w-2xl mx-auto mb-16 font-mono",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Have a project in mind or just want to connect? Feel free to reach
            out through my social channels.
          </p>

          <div className="flex justify-center">
            {/* Contact Information */}
            <div
              className={cn(
                "glass-morphism rounded-lg p-8 max-w-md w-full space-y-8",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <h3 className="text-xl font-bold mb-4 font-mono">
                  Contact Information
                </h3>
                <p className="text-muted-foreground text-sm font-display">
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:john.doe@example.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>robiulhossain7475@gmail.com</span>
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                  SOCIAL PROFILES
                </h4>
                <div className="flex gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/coder7475"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/robiul7475"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x.com/robiul7475"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/@RobiulHossain-f2k"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
