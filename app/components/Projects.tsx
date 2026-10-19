import { useMemo, useRef } from "react";
import { ExternalLink, Github, CheckCircle } from "lucide-react";
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
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Fullstack" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "mobile", label: "Mobile" },
];

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
            "text-muted-foreground max-w-2xl mb-8 ml-5",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.1s" }}
        >
          A selection of my most significant projects showcasing my technical
          expertise and problem-solving capabilities.
        </p>

        {/* Tab navigation */}
        <div
          role="tablist"
          aria-label="Project categories"
          className={cn(
            "flex gap-1 mb-10 overflow-x-auto pb-2 ml-5",
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
                  "px-4 py-2 rounded-lg font-mono text-sm whitespace-nowrap transition-all duration-200",
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {tab.label}
                <span
                  className={cn(
                    "ml-2 text-xs",
                    isSelected
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground/70"
                  )}
                >
                  ({tabCounts[tab.id]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Staggered grid */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
          className="columns-1 sm:columns-2 gap-6 space-y-6 focus:outline-none"
        >
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
