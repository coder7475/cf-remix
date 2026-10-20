import { useMemo, useRef } from "react";
import { ExternalLink, Github, CheckCircle2, Clock } from "lucide-react";
import { cn } from "~/libs/utils";
import { Link, useSearchParams } from "@remix-run/react";
import { projects } from "~/constants";
import { ProjectCategory } from "~/types";
import { useInView } from "~/hooks/use-in-view";

const PROJECTS_PER_PAGE = 4;

const VALID_CATEGORIES: ProjectCategory[] = [
  "backend",
  "fullstack",
  "ai-ml",
  "mobile",
];

const tabs: { id: ProjectCategory; label: string }[] = [
  { id: "backend", label: "Backend & Systems" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "ai-ml", label: "AI & ML" },
  { id: "mobile", label: "Mobile Apps" },
];

const StatusBadge = ({ status }: { status: "in-progress" | "finished" }) => {
  if (status === "in-progress") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-mono font-medium border border-amber-500/20">
        <Clock className="w-3 h-3" />
        In Active Development
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
      <CheckCircle2 className="w-3 h-3" />
      Shipped &amp; Tested
    </span>
  );
};

export const Projects = () => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.1 });
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get("category");
  const activeTab: ProjectCategory =
    categoryParam && VALID_CATEGORIES.includes(categoryParam as ProjectCategory)
      ? (categoryParam as ProjectCategory)
      : "backend";

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.category === activeTab),
    [activeTab]
  );

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const pageParam = searchParams.get("page");
  const parsedPage = pageParam ? parseInt(pageParam, 10) : 1;
  const currentPage =
    Number.isInteger(parsedPage) && parsedPage >= 1
      ? Math.min(parsedPage, Math.max(totalPages, 1))
      : 1;

  const tabCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      backend: 0,
      fullstack: 0,
      "ai-ml": 0,
      mobile: 0,
    };
    projects.forEach((p) => {
      counts[p.category]++;
    });
    return counts;
  }, []);

  const handleTabChange = (tab: ProjectCategory) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("category", tab);
    nextParams.set("page", "1");
    setSearchParams(nextParams, { preventScrollReset: true });
  };

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("category", activeTab);
    nextParams.set("page", prevPage.toString());
    setSearchParams(nextParams, { preventScrollReset: true });
  };

  const handleNext = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("category", activeTab);
    nextParams.set("page", nextPage.toString());
    setSearchParams(nextParams, { preventScrollReset: true });
  };

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex: number | null = null;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      const nextTab = tabs[nextIndex];
      handleTabChange(nextTab.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/20" aria-labelledby="featured-projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-start gap-4 mb-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-1">
              Engineered Works &amp; Case Studies
            </span>
            <h2 id="featured-projects-heading" className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              <span className="text-gradient">Featured Projects</span>
            </h2>
          </div>
        </div>
        <p
          className={cn(
            "text-muted-foreground max-w-2xl mb-10 ml-5 text-base sm:text-lg leading-relaxed",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.1s" }}
        >
          A curated portfolio of real-world systems, microservices, and production web applications. Each demonstrates strict type safety, tested logic, and scalable architectural patterns.
        </p>

        <div
          role="tablist"
          aria-label="Project categories"
          className={cn(
            "flex gap-2 mb-10 overflow-x-auto pb-2 ml-5 scrollbar-none",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.15s" }}
        >
          {tabs.map((tab, index) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isSelected}
                aria-controls={`tabpanel-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleTabChange(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={cn(
                  "px-4 py-2.5 rounded-lg font-mono text-sm whitespace-nowrap transition-all duration-200 border",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm font-semibold"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/60 hover:border-border"
                )}
              >
                {tab.label}
                <span
                  className={cn(
                    "ml-2 text-xs py-0.5 px-1.5 rounded-full",
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {tabCounts[tab.id]}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 focus:outline-none"
        >
          {paginatedProjects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "glass-morphism rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col justify-between border border-border/70 p-6 sm:p-7",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/70 text-foreground/80 border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <Link
                      to={project.githubUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 text-foreground text-xs font-mono transition-colors border border-border/60 hover:border-primary/40"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      to={project.liveUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary text-xs font-mono transition-colors border border-primary/30"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demonstration for ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div
            className={cn(
              "flex justify-center items-center gap-4 mt-12",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={cn(
                "px-5 py-2.5 rounded-lg border border-primary/50 text-foreground transition-all font-mono text-sm",
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed border-border"
                  : "hover:bg-primary/10 hover:border-primary text-primary"
              )}
              aria-label="Previous page of projects"
            >
              Previous
            </button>
            <span className="text-muted-foreground text-sm font-mono px-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={cn(
                "px-5 py-2.5 rounded-lg border border-primary/50 text-foreground transition-all font-mono text-sm",
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed border-border"
                  : "hover:bg-primary/10 hover:border-primary text-primary"
              )}
              aria-label="Next page of projects"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
