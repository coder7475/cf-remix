import { Link } from "@remix-run/react";
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
    <section className="relative min-h-[80vh] flex items-center">
      <div className="grid gap-10 md:grid-cols-[1.5fr,1fr] items-center w-full">
        <div className="relative">
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs sm:text-sm text-emerald-200/90 shadow-[0_0_0_1px_rgba(52,211,153,0.15)]",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Hello, my name is
          </div>

          <h1
            className={cn(
              "mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gradient",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Robiul Hossain
          </h1>

          <h2
            className={cn(
              "mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-medium text-gradient-primary z-100 md:p-2",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            Software Engineer
          </h2>

          <p
            className={cn(
              "mt-5 max-w-xl text-sm sm:text-base text-muted-foreground font-mono leading-relaxed",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            Software Engineer on a journey to become a Software Architect
          </p>

          <div
            className={cn(
              "mt-8 flex flex-wrap items-center gap-4 font-mono",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              to="projects"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_10px_35px_rgba(52,211,153,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(52,211,153,0.65)] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="View my projects"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
              </svg>
              <span>View Projects</span>
            </Link>
            <Link
              to="experiences"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-emerald-100 shadow-[0_10px_35px_rgba(22,101,52,0.45)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="See my experiences"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                <path d="M6.5 20a6.5 6.5 0 0 1 11 0" />
              </svg>
              <span>My Experience</span>
            </Link>
          </div>
        </div>

        <div
          className={cn(
            "relative h-72 sm:h-80 md:h-[420px]",
            isVisible ? "animate-slide-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.35s" }}
        >
          <div className="absolute inset-0 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-b from-white/5 via-slate-900/60 to-slate-950 shadow-[0_24px_80px_rgba(0,0,0,0.9)] overflow-hidden">
            <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-slate-900/80 ring-2 ring-emerald-400/40 flex items-center justify-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-mono text-emerald-200/80 uppercase tracking-[0.2em]">
                      Portfolio
                    </p>
                    <p className="text-sm font-display font-medium text-slate-50">
                      Software Engineer
                    </p>
                  </div>
                </div>
                
              </div>

              <div className="space-y-3">
                <p className="text-xs font-mono text-emerald-200/80 uppercase tracking-[0.24em]">
                  Focus
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-100/90">
                  <div className="rounded-xl bg-slate-950/60 border border-emerald-400/15 px-3 py-2.5">
                    <p className="text-[0.7rem] text-emerald-200/80 font-mono mb-1">
                      Architecture
                    </p>
                    <p className="text-[0.74rem] font-display leading-snug">
                      Scalable systems, clean abstractions and resilient
                      backends.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-950/60 border border-emerald-400/15 px-3 py-2.5">
                    <p className="text-[0.7rem] text-emerald-200/80 font-mono mb-1">
                      Delivery
                    </p>
                    <p className="text-[0.74rem] leading-snug font-display">
                      CI/CD, observability and reliable engineering workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="flex gap-4 text-xs font-mono text-slate-200/90">
                  <div className="flex flex-col">
                    <span className="text-[0.68rem] text-emerald-200/70">
                      Years
                    </span>
                    <span className="text-base font-semibold">1.5+</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.68rem] text-emerald-200/70">
                      Projects
                    </span>
                    <span className="text-base font-semibold">20+</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.68rem] text-emerald-200/70">
                      Stack
                    </span>
                    <span className="text-base font-semibold">Node.js</span>
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
