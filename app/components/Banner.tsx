import { useEffect, useState } from "react";
import { cn } from "~/libs/utils";

const ServerTopology = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <pre className="font-mono text-xs sm:text-sm leading-relaxed text-primary select-none">
{`    ┌─────────┐
    │  CDN    │
    └────┬────┘
         │
    ┌────┴────┐
    │  Load   │
    │ Balancer│
    └────┬────┘
    ┌────┴────┐
    │ Worker  │
    │  (API)  │
    └────┬────┘
  ┌─────┼─────┐
  │     │     │
┌─┴─┐ ┌─┴─┐ ┌─┴─┐
│D1 │ │KV │ │R2 │
└───┘ └───┘ └───┘`}
    </pre>
  </div>
);

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        {/* Left column - Typographic content (60%) */}
        <div className="md:col-span-3 z-10">
          <span
            className={cn(
              "inline-block font-mono text-xs sm:text-sm mb-4 tracking-widest uppercase text-primary",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Hello, my name is
          </span>

          <h1
            className={cn(
              "text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4 tracking-tight text-foreground",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Robiul Hossain
          </h1>

          <p
            className={cn(
              "font-mono text-sm sm:text-base mb-6 tracking-widest uppercase text-primary",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            Software Engineer
          </p>

          <p
            className={cn(
              "text-muted-foreground max-w-xl mb-10 text-base sm:text-lg leading-relaxed",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            I design and build reliable, secure software systems
          </p>

          <div
            className={cn(
              "flex flex-wrap gap-4",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.5s" }}
          >
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get In Touch
              </span>
            </button>
            <a
              href="/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-8 rounded-md transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Schedule a Meeting
              </span>
            </a>
          </div>
        </div>

        {/* Right column - Code visual element (40%) */}
        <div
          className={cn(
            "hidden md:flex md:col-span-2 h-64 md:h-96",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.6s" }}
        >
          <ServerTopology />
        </div>
      </div>
    </section>
  );
};
