import { Link } from "@remix-run/react";
import { Github, Linkedin, Twitter, Mail, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-8">
          {/* Left: Logo and Title */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-tight flex items-center"
            >
              <img
                src="/favicon-32x32.png"
                alt="Logo"
                className="inline-block w-8 h-8 mr-2 align-middle"
              />
              Robiul Hossain
            </Link>
            <p className="text-muted-foreground text-sm mt-2 font-mono text-center md:text-left">
              Software Engineer
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex gap-6">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/coder7475"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/in/robiul7475"
              className="text-muted-foreground text-blue-500 hover:text-foreground transition-colors flex items-center"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://x.com/robiul7475"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.youtube.com/@RobiulHossain-f2k"
              className="flex items-center"
            >
              <Youtube className="w-5 h-5 text-red-500 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              to="mailto:robiulhossain7475@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          {/* Right: Copyright */}
          <div className="text-muted-foreground text-sm font-display text-center md:text-right">
            © {currentYear} Robiul Hossain. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
