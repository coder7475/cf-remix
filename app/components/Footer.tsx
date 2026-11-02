import { Github, Linkedin, Mail, Youtube, ArrowUpRight } from "lucide-react";
import { Link } from "@remix-run/react";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experiences" },
  { label: "Blog & Articles", href: "/blog" },
  { label: "Schedule Call", href: "/schedule" },
  { label: "Contact", href: "/contact" },
];

const capabilities = [
  { label: "Backend Engineering", href: "/projects?category=backend" },
  { label: "Full-Stack Web & Mobile", href: "/projects?category=fullstack" },
  { label: "DevOps & Releases", href: "/projects?category=backend" },
  { label: "AI & Spec-Driven Agents", href: "/projects?category=ai-ml" },
  { label: "FocusGuard App", href: "https://github.com/coder7475/focusGuard", external: true },
  { label: "GRE Quant School LMS", href: "https://lms.grequantschool.com/", external: true },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-block hover:opacity-90 transition-opacity"
              aria-label="Robiul Hossain"
            >
              <img
                src="/logo.svg"
                alt="Robiul Hossain"
                className="h-8 sm:h-9 w-auto dark-logo object-contain"
                width={184}
                height={36}
                loading="lazy"
                decoding="async"
              />
              <img
                src="/logo_white-removebg-preview.png"
                alt="Robiul Hossain"
                className="h-8 sm:h-9 w-auto light-logo object-contain"
                width={184}
                height={36}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-muted-foreground text-sm font-mono max-w-sm">
              Full-cycle software engineer building resilient backend systems, modern web and mobile apps, and automated release workflows.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time &amp; Contracts</span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              Specialization
            </h4>
            <ul className="space-y-2 text-sm">
              {capabilities.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              Connect
            </h4>
            <p className="text-muted-foreground text-sm">
              Have a project or open role? Feel free to reach out directly.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/coder7475"
                className="w-9 h-9 rounded-lg bg-secondary/60 text-foreground border border-border/60 hover:bg-[#24292e] hover:text-white hover:border-[#24292e] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/robiul7475"
                className="w-9 h-9 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://x.com/robiul7475"
                className="w-9 h-9 rounded-lg bg-secondary/60 text-foreground border border-border/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="X"
              >
                <XIcon className="w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.youtube.com/@RobiulHossain-f2k"
                className="w-9 h-9 rounded-lg bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/30 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <Link
                to="mailto:contact@robiulhossain.com"
                className="w-9 h-9 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
            <div className="pt-1">
              <Link
                to="/schedule"
                className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Schedule a 30-min call</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>&copy; {currentYear} Robiul Hossain. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <a
              href="/sitemap.xml"
              className="hover:text-foreground transition-colors"
            >
              Sitemap
            </a>
            <a
              href="/llms.txt"
              className="hover:text-foreground transition-colors"
            >
              llms.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
