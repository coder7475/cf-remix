import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "~/libs/utils";
import { Link } from "@remix-run/react";
import { projects } from "~/constants";

const PROJECTS_PER_PAGE = 4;

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Pagination state
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

  // Get projects for current page
  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30 font-display"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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

          {/* Improved grid: responsive, min-h for card, flex col for card content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {paginatedProjects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "glass-morphism rounded-lg overflow-hidden group hover:border-primary/50 transition-colors flex flex-col h-full min-h-[370px]",
                  isVisible ? "animate-slide-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* Fixed height for description, ellipsis for overflow */}
                  <p className="text-muted-foreground mb-4 text-sm min-h-[64px] line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "text-xs font-semibold px-3 py-1 rounded-full border border-primary bg-primary/10 text-primary shadow-sm tracking-wide transition-colors",
                          "hover:bg-primary/20"
                        )}
                        style={{
                          letterSpacing: "0.04em",
                          boxShadow: "0 1px 4px 0 rgba(80, 80, 180, 0.08)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Push links to bottom */}
                  <div className="flex gap-4 mt-auto">
                    {project.githubUrl && (
                      <Link
                        to={project.githubUrl}
                        className={cn(
                          "flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded border border-muted-foreground/30 bg-muted/40 text-muted-foreground shadow-sm transition-all duration-200",
                          "hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          boxShadow: "0 2px 8px 0 rgba(80, 80, 180, 0.08)",
                        }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        to={project.liveUrl}
                        className={cn(
                          "flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded border border-primary bg-primary/5 text-primary shadow-sm transition-all duration-200",
                          "hover:bg-primary/10 hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          boxShadow: "0 2px 8px 0 rgba(80, 80, 180, 0.10)",
                        }}
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div
              className={cn(
                "flex justify-center items-center gap-4 mt-10",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.5s" }}
            >
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={cn(
                  "px-4 py-2 rounded border border-primary text-primary transition-colors",
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-primary/10"
                )}
                aria-label="Previous page"
              >
                Previous
              </button>
              <span className="text-muted-foreground text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={cn(
                  "px-4 py-2 rounded border border-primary text-primary transition-colors",
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
          {/* 
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
          </div> */}
        </div>
      </div>
    </section>
  );
};
