import { Link } from "@remix-run/react";
import { ArrowDown, Calendar, Mail, Sparkles, Terminal } from "lucide-react";

const SystemArchitectureCard = () => (
  <div
    className="relative w-full rounded-xl glass-morphism border border-primary/20 overflow-hidden shadow-2xl font-mono text-xs sm:text-sm"
    aria-label="Software engineer system status and stack overview"
  >
    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="text-xs text-slate-400 ml-2 hidden sm:inline">robiul@arch-node: ~</span>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-emerald-400">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>system: healthy</span>
      </div>
    </div>

    <div className="p-5 sm:p-6 space-y-3.5 bg-slate-950 text-slate-200 overflow-hidden">
      <div className="flex items-center gap-2 text-primary">
        <Terminal className="w-4 h-4 shrink-0" />
        <span className="text-slate-100 font-semibold">$ cat engineer.json</span>
      </div>

      <pre className="text-slate-300 overflow-hidden whitespace-pre-wrap break-words text-[11px] sm:text-xs leading-relaxed select-text font-mono">
{`{
  "name": "Robiul Hossain",
  "role": "Software Engineer",
  "focus": "Scalable, secure & high-performance systems",
  "core_stack": {
    "languages": ["TypeScript", "JavaScript", "SQL", "Python"],
    "backend": ["Node.js", "NestJS", "Express.js", "FastAPI"],
    "databases": ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"],
    "devops_cloud": ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    "frontend": ["React", "Next.js", "React Native", "Tailwind CSS"]
  },
  "company": "Elementix Software Ventures LLC",
  "location": "Remote / Worldwide"
}`}
      </pre>

      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
        <span className="text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-primary" /> Ready for production impact
        </span>
        <span className="text-primary font-bold">2+ YOE</span>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section
      className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden"
      aria-label="Introduction and summary"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-3 tracking-tight text-foreground leading-[1.1] motion-safe:animate-fade-in"
          >
            Hi, I&apos;m <span className="text-gradient">Robiul Hossain</span>
          </h1>

          <p
            className="font-mono text-base sm:text-lg mb-4 tracking-wide text-primary font-medium motion-safe:animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Software Engineer · Backend &amp; Cloud Systems
          </p>

          <p
            className="text-muted-foreground max-w-xl mb-8 text-base sm:text-lg leading-relaxed motion-safe:animate-fade-in font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Focused on scalable, secure, and high-performance backend systems, distributed architectures, and cloud automation.
          </p>

          <div
            className="flex flex-wrap gap-4 items-center mb-10 motion-safe:animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-7 rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              aria-label="Scroll down to contact form"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>Get In Touch</span>
            </button>

            <Link
              to="/schedule"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center gap-2 text-sm sm:text-base"
              aria-label="Schedule a 30-minute consultation"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Schedule Call</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-muted-foreground hover:text-foreground font-medium py-3 px-4 rounded-lg transition-colors flex items-center gap-1.5 text-sm cursor-pointer"
              aria-label="Scroll to featured projects"
            >
              <span>View Projects</span>
              <ArrowDown className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          <div
            className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50 max-w-lg motion-safe:animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display text-foreground">2+ YOE</div>
              <div className="text-xs text-muted-foreground font-mono">Production Eng</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display text-foreground">15+</div>
              <div className="text-xs text-muted-foreground font-mono">Shipped Apps</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display text-foreground">Full-Cycle</div>
              <div className="text-xs text-muted-foreground font-mono">Concept to Prod</div>
            </div>
          </div>
        </div>

        <div
          className="lg:col-span-5 w-full flex items-center justify-center motion-safe:animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          <SystemArchitectureCard />
        </div>
      </div>
    </section>
  );
};
