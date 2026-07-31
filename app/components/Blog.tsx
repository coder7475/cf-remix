import { useState, useEffect, useRef } from "react";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
import axios from "axios";
import { useToast } from "~/hooks/use-toast";
import { cn } from "~/libs/utils";
import { Link } from "@remix-run/react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  url: string;
  cover_image: string;
}

const placeholderImages = [
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
];

export const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://dev.to/api/articles", {
          params: { per_page: 4, username: "coder7475" },
        });
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", (error as Error).message);
        toast({
          title: "Error fetching articles",
          description: "Could not load blog posts from dev.to. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, [toast]);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const featuredPost = !isLoading && blogPosts.length > 0 ? blogPosts[0] : null;
  const remainingPosts = !isLoading ? blogPosts.slice(1) : [];

  return (
    <section id="blog" ref={sectionRef}>
      <div
        className={cn(
          "flex items-start gap-4 mb-6",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
      >
        <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
          <span className="text-gradient">Latest Articles</span>
        </h2>
      </div>
      <p
        className={cn(
          "text-muted-foreground max-w-2xl mb-16 ml-5",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
        style={{ animationDelay: "0.1s" }}
      >
        I regularly share my knowledge and experiences through articles on
        DevOps practices, software engineering, and emerging technologies.
      </p>

      {isLoading ? (
        <div className="space-y-8">
          <div className="glass-morphism rounded-lg p-6 h-64 animate-pulse">
            <div className="h-4 bg-primary/10 rounded w-1/4 mb-3" />
            <div className="h-8 bg-primary/10 rounded w-3/4 mb-3" />
            <div className="h-4 bg-primary/10 rounded w-full mb-3" />
            <div className="h-4 bg-primary/10 rounded w-2/3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="glass-morphism rounded-lg p-6 h-48 animate-pulse">
                <div className="h-4 bg-primary/10 rounded w-1/4 mb-3" />
                <div className="h-6 bg-primary/10 rounded w-3/4 mb-3" />
                <div className="h-4 bg-primary/10 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {blogPosts.length === 0 && (
            <p className="text-center text-red-500">No blog posts found.</p>
          )}

          {/* Featured article - full width */}
          {featuredPost && (
            <Link
              to={featuredPost.url}
              aria-label={`Read more: ${featuredPost.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "block glass-morphism rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 group",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 h-56 md:h-auto">
                  <img
                    src={featuredPost.cover_image || placeholderImages[0]}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-3/5 p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredPost.tag_list.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground font-mono uppercase tracking-widest text-xs">
                    <div className="flex items-center mr-4">
                      <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
                      <span>{formatDate(featuredPost.published_at)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      <span>{featuredPost.reading_time_minutes} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining articles - 2 column grid */}
          {remainingPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {remainingPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={post.url}
                  aria-label={`Read more: ${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "glass-morphism rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 group",
                    isVisible ? "animate-fade-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={post.cover_image || placeholderImages[index % placeholderImages.length]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {post.tag_list.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center text-muted-foreground font-mono uppercase tracking-widest text-xs">
                      <div className="flex items-center mr-3">
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.reading_time_minutes} min</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      <div
        className={cn(
          "mt-12",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
        style={{ animationDelay: "0.6s" }}
      >
        <Link
          to="https://dev.to/coder7475"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          <span>View all articles</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
