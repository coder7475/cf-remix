import { useEffect, useState } from "react";
import { cn } from "~/libs/utils";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
      />

      <div className="container max-w-4xl mx-auto z-10 text-center">
        <span
          className={cn(
            "inline-block text-primary font-mono text-sm sm:text-base mb-4 tracking-wider",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.1s" }}
        >
          Hello, my name is
        </span>

        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gradient tracking-tight",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          Robiul Hossain
        </h1>

        <h2
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-8 text-muted-foreground",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.3s" }}
        >
          Software & DevOps Engineer
        </h2>

        <p
          className={cn(
            "text-muted-foreground max-w-2xl mx-auto mb-12 text-base sm:text-lg font-mono",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.4s" }}
        >
          I build scalable systems and automate deployment pipelines.
          Passionate about cloud infrastructure, containerization, and continuous integration.
        </p>

        <div
          className={cn(
            "flex flex-wrap justify-center gap-4 font-mono",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
          >
            Get in touch
          </a>
          <a
            href="blog"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
          >
            View my blogs
          </a>
        </div>
      </div>
    </section>
  );
};

