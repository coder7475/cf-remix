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

// Default placeholder images in case posts don't have cover images
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
        // Replace with your dev.to username if you have one
        const response = await axios.get("https://dev.to/api/articles", {
          params: {
            per_page: 4, // Fetch only 3 posts
            username: "coder7475",
          },
        });
        console.log(response);
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", (error as Error).message);

        toast({
          title: "Error fetching articles",
          description:
            "Could not load blog posts from dev.to. Please try again later.",
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

  // Format the date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
          >
            <span className="text-gradient">Latest Articles</span>
          </h2>
          <p
            className={cn(
              "text-center text-muted-foreground max-w-2xl mx-auto mb-16 font-mono",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            I regularly share my knowledge and experiences through articles on
            DevOps practices, software engineering, and emerging technologies.
          </p>

          {isLoading ? (
            <div className="space-y-8 font-display">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "block glass-morphism rounded-lg p-6 h-40 animate-pulse",
                    isVisible ? "animate-slide-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="h-4 bg-primary/10 rounded w-1/4 mb-3"></div>
                  <div className="h-6 bg-primary/10 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-primary/10 rounded w-full mb-3"></div>
                  <div className="h-4 bg-primary/10 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8 font-display">
              {!isLoading && blogPosts.length === 0 && (
                <p className="text-center text-red-500">No blog posts found.</p>
              )}
              {blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={post.url}
                  aria-label={`Read more: ${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex flex-col md:flex-row glass-morphism rounded-lg overflow-hidden hover:border-primary/50 transition-colors",
                    isVisible ? "animate-slide-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-full md:w-1/3 h-48">
                    <img
                      src={
                        post.cover_image ||
                        placeholderImages[index % placeholderImages.length]
                      }
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:w-2/3 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tag_list.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="flex items-center mr-4">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.reading_time_minutes} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div
            className={cn(
              "mt-12 text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              to="https://dev.to/coder7475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-primary hover:text-primary/80 transition-colors"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
