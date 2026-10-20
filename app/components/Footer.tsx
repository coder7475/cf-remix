import { Github, Linkedin, Mail, Youtube } from "lucide-react";
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

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
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
              />
              <img
                src="/logo_white.jpeg"
                alt="Robiul Hossain"
                className="h-8 sm:h-9 w-auto light-logo object-contain rounded-md"
                width={184}
                height={36}
              />
            </Link>
            <p className="text-muted-foreground text-sm mt-3 font-mono text-center md:text-left">
              Full-Stack Software Engineer &amp; API Architect
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/coder7475"
              className="w-10 h-10 rounded-lg bg-slate-500/10 text-foreground border border-border/60 hover:bg-[#24292e] hover:text-white hover:border-[#24292e] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/in/robiul7475"
              className="w-10 h-10 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://x.com/robiul7475"
              className="w-10 h-10 rounded-lg bg-black/10 dark:bg-white/10 text-foreground border border-border/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="X"
            >
              <XIcon className="w-4 h-4" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.youtube.com/@RobiulHossain-f2k"
              className="w-10 h-10 rounded-lg bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/30 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </Link>
            <Link
              to="mailto:contact@robiulhossain.com"
              className="w-10 h-10 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-xs font-mono">
            &copy; {currentYear} Robiul Hossain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
