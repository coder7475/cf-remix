import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "~/libs/utils";
import { Link } from "@remix-run/react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: "Ride Booking System",
      description:
        "A secure, scalable, and role-based backend API for a ride booking system using Express.js and Mongoose.",
      technologies: ["Node.js", "TypeScript", "MongoDB", "RESTAPIs"],
      image: "", // Placeholder
      liveUrl: "https://ride-booking-system-wine.vercel.app/",
      githubUrl: "https://github.com/coder7475/ride-booking-system",
    },
    {
      title: "Library Management System",
      description:
        "A modern library management system built with React, TypeScript, Vite, Redux Toolkit, RTK Query, Tailwind CSS, and Shadcn UI. Includes CRUD, borrow flow, genre filter, pagination, modals, type-safe forms, and is ready to deploy.",
      technologies: [
        "React",
        "Redux",
        "TypeScript",
        "Zod",
        "Shadcn",
        "Express",
      ],
      image: "", // Placeholder
      liveUrl: "https://library.robiulhossain.com",
      githubUrl: "https://github.com/coder7475/libraray_management_frontend",
    },
    {
      title: "Custom WC Tool",
      description:
        "This is a custom implementation of the Unix wc (word count) command-line utility, developed as part of the challenge-wc from codingchallenges.fyi.",
      technologies: ["C++", "Make"],
      image: "", // Placeholder

      githubUrl:
        "https://github.com/coder7475/coding-challenges/tree/main/wc-tool",
    },
    {
      title: "Scripts",
      description: "Collection of Scripts to Automate Tasks",
      technologies: ["Bash", "Python", "Docker", "JavaScript"],
      image: "", // Placeholder
      githubUrl: "#",
    },
  ];

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
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30 font-display"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
          >
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p
            className={cn(
              "text-center text-muted-foreground max-w-2xl mx-auto mb-16",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            A selection of my most significant projects showcasing my technical
            expertise and problem-solving capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "glass-morphism rounded-lg overflow-hidden group hover:border-primary/50 transition-colors",
                  isVisible ? "animate-slide-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary/70 px-2 py-1 rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <Link
                        to={project.githubUrl}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        to={project.liveUrl}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "mt-16 text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              to="https://github.com/coder7475"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
