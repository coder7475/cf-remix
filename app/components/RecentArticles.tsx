import { CalendarIcon, Clock, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { Link } from "@remix-run/react";
import { useInView } from "~/hooks/use-in-view";
import { cn } from "~/libs/utils";
import type { BlogPost } from "~/components/Blog";

const FALLBACK_ARTICLES: BlogPost[] = [
  {
    id: 1,
    title: "Git Submodules Explained for Beginners",
    description: "If you've ever wanted to reuse another Git repository inside your project without copying its code, this guide covers submodules step-by-step.",
    published_at: "2026-07-31T13:53:48Z",
    reading_time_minutes: 4,
    tag_list: ["git", "submodule", "productivity"],
    url: "https://dev.to/coder7475/git-submodules-explained-for-beginners-5hcl",
    cover_image: null,
  },
  {
    id: 2,
    title: "Automating Ubuntu System Maintenance with Cron Jobs",
    description: "Keeping your Ubuntu server healthy requires more than package updates. Learn how to automate cleanup, cache purges, and log rotation.",
    published_at: "2026-07-22T08:35:50Z",
    reading_time_minutes: 3,
    tag_list: ["cronjob", "linux", "automation"],
    url: "https://dev.to/coder7475/automating-ubuntu-system-maintenance-with-cron-jobs-447e",
    cover_image: null,
  },
  {
    id: 3,
    title: "The Only tmux Cheat Sheet You'll Need as a Developer",
    description: "Essential tmux keybindings, session persistence tricks, and split-pane workflows for high-efficiency terminal power users.",
    published_at: "2026-07-01T04:09:51Z",
    reading_time_minutes: 3,
    tag_list: ["linux", "productivity", "devops"],
    url: "https://dev.to/coder7475/the-only-tmux-cheat-sheet-youll-need-as-a-developer-50eg",
    cover_image: null,
  },
];

interface RecentArticlesProps {
  posts?: BlogPost[];
}

export const RecentArticles = ({ posts }: RecentArticlesProps) => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.1 });
  const displayPosts = posts && posts.length > 0 ? posts.slice(0, 3) : FALLBACK_ARTICLES;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="blog" ref={sectionRef} aria-labelledby="blog-heading" className="py-20 border-b border-border/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div
          className={cn(
            "flex items-start gap-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-1">
              Articles &amp; Architecture Notes
            </span>
            <h2 id="blog-heading" className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Engineering Blog
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mt-2">
              Practical guides, system design patterns, and engineering notes published on DEV.to.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "shrink-0",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.15s" }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            <span>See more articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayPosts.map((post, index) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read article: ${post.title}`}
            className={cn(
              "glass-morphism rounded-xl p-6 border border-border/70 hover:border-primary/40 transition-all duration-300 group flex flex-col justify-between",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap gap-1.5">
                  {post.tag_list?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-secondary/80 text-foreground/80 border border-border/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <BookOpen className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors shrink-0" />
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
              <span className="inline-flex items-center gap-1 text-primary text-xs font-medium group-hover:translate-x-0.5 transition-transform">
                <span>Read</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div
        className={cn(
          "mt-12 text-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
        style={{ animationDelay: "0.4s" }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-sm transition-all duration-200 group hover:shadow-md"
        >
          <span>See More Articles</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
