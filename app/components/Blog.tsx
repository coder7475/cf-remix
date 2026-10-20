import { useState, useEffect, useMemo } from "react";
import {
  CalendarIcon,
  Clock,
  ArrowRight,
  AlertCircle,
  RefreshCw,
  Search,
  ExternalLink,
  BookOpen,
  Sparkles,
  X,
} from "lucide-react";
import { useInView } from "~/hooks/use-in-view";
import { cn } from "~/libs/utils";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  url: string;
  cover_image: string | null;
}

interface BlogProps {
  initialPosts?: BlogPost[];
  error?: string;
}

export const Blog = ({ initialPosts, error: initialError }: BlogProps) => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.1 });
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialPosts ?? []);
  const [isLoading, setIsLoading] = useState(!initialPosts);
  const [error, setError] = useState<string | undefined>(initialError);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    if (initialPosts && !initialError) {
      setBlogPosts(initialPosts);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      setError(undefined);
      try {
        const res = await fetch(
          "https://dev.to/api/articles?username=coder7475&per_page=30",
          {
            signal: controller.signal,
            headers: {
              Accept: "application/vnd.forem.api-v1+json",
            },
          }
        );
        if (!res.ok) {
          throw new Error(`Failed to load articles (${res.status})`);
        }
        const data = (await res.json()) as BlogPost[];
        setBlogPosts(data);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
    return () => controller.abort();
  }, [initialPosts, initialError]);

  const topTags = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach((post) => {
      post.tag_list?.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([tag]) => tag);
    return ["all", ...sorted];
  }, [blogPosts]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tag_list.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag =
        selectedTag === "all" || post.tag_list.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [blogPosts, searchQuery, selectedTag]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isFiltering = searchQuery.trim() !== "" || selectedTag !== "all";
  const featuredPost = !isFiltering && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = !isFiltering && featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <section id="blog" ref={sectionRef} aria-labelledby="blog-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div
            className={cn(
              "flex items-start gap-4 mb-4",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-1">
                Articles &amp; Architecture Notes
              </span>
              <h1 id="blog-heading" className="text-3xl md:text-5xl font-display font-bold tracking-tight">
                <span className="text-gradient">Engineering Blog</span>
              </h1>
            </div>
          </div>
          <p
            className={cn(
              "text-muted-foreground max-w-2xl ml-5 text-base sm:text-lg leading-relaxed",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Deep-dives into cloud deployments, Linux systems, Git internals, and full-stack TypeScript engineering. Written to share production insights and developer tooling workflows.
          </p>
        </div>

        <a
          href="https://dev.to/coder7475"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 border border-border/70 hover:border-primary/40 text-xs font-mono transition-all text-foreground shrink-0 shadow-xs"
        >
          <BookOpen className="w-4 h-4 text-primary" />
          <span>DEV.to Profile ({blogPosts.length} Articles)</span>
          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
        </a>
      </div>

      <div
        className={cn(
          "mb-10 space-y-4",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
        style={{ animationDelay: "0.15s" }}
      >
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, stack, or topic..."
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-border/80 bg-secondary/40 text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/70"
            aria-label="Search articles"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {topTags.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 pt-1" role="tablist" aria-label="Filter articles by tag">
            <span className="text-xs font-mono text-muted-foreground mr-1">Filter:</span>
            {topTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all border",
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                      : "bg-secondary/50 text-muted-foreground border-border/60 hover:text-foreground hover:border-primary/30"
                  )}
                  aria-pressed={isSelected}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="space-y-8">
          <div className="glass-morphism rounded-xl p-8 h-72 animate-pulse flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-4 bg-primary/20 rounded w-1/4" />
              <div className="h-8 bg-primary/20 rounded w-3/4" />
              <div className="h-4 bg-primary/10 rounded w-full" />
            </div>
            <div className="h-4 bg-primary/10 rounded w-1/3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="glass-morphism rounded-xl p-6 h-60 animate-pulse flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-3 bg-primary/20 rounded w-1/3" />
                  <div className="h-6 bg-primary/20 rounded w-5/6" />
                  <div className="h-3 bg-primary/10 rounded w-full" />
                </div>
                <div className="h-3 bg-primary/10 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="glass-morphism rounded-xl p-8 text-center max-w-lg mx-auto border border-destructive/30">
          <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-3" />
          <h3 className="text-lg font-display font-bold mb-2 text-foreground">Unable to Load Articles</h3>
          <p className="text-sm text-muted-foreground mb-4 font-mono">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-xs"
          >
            <RefreshCw className="w-4 h-4" />
            Retry Connection
          </button>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="glass-morphism rounded-xl p-12 text-center max-w-lg mx-auto border border-border/70">
          <BookOpen className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-60" />
          <h3 className="text-lg font-display font-bold mb-2 text-foreground">No articles match your search</h3>
          <p className="text-sm text-muted-foreground mb-5">
            Try adjusting your query or resetting the tag filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedTag("all");
            }}
            className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-mono hover:bg-primary/20 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {featuredPost && (
            <a
              href={featuredPost.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Featured article: ${featuredPost.title}`}
              className={cn(
                "block glass-morphism rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group border border-border/80 shadow-md",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 min-h-[240px] lg:min-h-[320px] bg-secondary/80 relative overflow-hidden">
                  {featuredPost.cover_image ? (
                    <img
                      src={featuredPost.cover_image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary/10 via-secondary to-background border-b lg:border-b-0 lg:border-r border-border/60">
                      <BookOpen className="w-12 h-12 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Technical Deep-Dive
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-primary text-xs font-mono border border-white/10">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Article</span>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {featuredPost.tag_list?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                      {featuredPost.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs font-mono text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-primary" />
                        {formatDate(featuredPost.published_at)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {featuredPost.reading_time_minutes} min read
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Read on DEV</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post, index) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read article: ${post.title}`}
                className={cn(
                  "glass-morphism rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between border border-border/70 p-6",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.1 + (index % 6) * 0.08}s` }}
              >
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tag_list?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-secondary/80 text-foreground/80 border border-border/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-display font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3 text-primary" />
                      {formatDate(post.published_at)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary" />
                      {post.reading_time_minutes}m
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
