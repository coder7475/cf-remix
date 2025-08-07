import { Link } from "@remix-run/react";
import { Github, Linkedin, Twitter, Mail, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-tight"
            >
              <img
                src="/favicon-32x32.png"
                alt="Logo"
                className="inline-block w-8 h-8 mr-2 align-middle"
              />
              Robiul Hossain
            </Link>
            <p className="text-muted-foreground text-sm mt-2 font-mono">
              Software Engineer
            </p>
          </div>

          <div className="flex gap-6 mb-6 md:mb-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/coder7475"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/in/robiul7475"
              className="text-muted-foreground text-blue-500 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://x.com/robiul7475"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.youtube.com/@RobiulHossain-f2k"
            >
              <Youtube className="w-5 h-5 text-red-500 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              to="mailto:robiulhossain7475@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <div className="text-muted-foreground text-sm font-display">
            © {currentYear} Robiul Hossain. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
