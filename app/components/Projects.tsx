import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, CheckCircle } from "lucide-react";
import { cn } from "~/libs/utils";
import { Link } from "@remix-run/react";
import { projects } from "~/constants";

const PROJECTS_PER_PAGE = 4;

const StatusBadge = ({ status }: { status: "in-progress" | "finished" }) => {
  if (status === "in-progress") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold border border-amber-500/20">
        Ongoing
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold border border-emerald-500/20">
      <CheckCircle className="w-3 h-3" />
      Completed
    </span>
  );
};

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

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

  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-start gap-4 mb-6",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            <span className="text-gradient">Featured Projects</span>
          </h2>
        </div>
        <p
          className={cn(
            "text-muted-foreground max-w-2xl mb-16 ml-5",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.1s" }}
        >
          A selection of my most significant projects showcasing my technical
          expertise and problem-solving capabilities.
        </p>

        {/* Staggered grid */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {paginatedProjects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "break-inside-avoid glass-morphism rounded-lg overflow-hidden group hover:border-primary/30 transition-all duration-300",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2 border-t border-border/50">
                  {project.githubUrl && (
                    <Link
                      to={project.githubUrl}
                      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      to={project.liveUrl}
                      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            className={cn(
              "flex justify-center items-center gap-4 mt-10",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={cn(
                "px-4 py-2 rounded border border-primary text-primary transition-colors font-mono text-sm",
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/10"
              )}
              aria-label="Previous page"
            >
              Previous
            </button>
            <span className="text-muted-foreground text-sm font-mono">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={cn(
                "px-4 py-2 rounded border border-primary text-primary transition-colors font-mono text-sm",
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/10"
              )}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
