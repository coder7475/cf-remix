
import { useState, useEffect, useRef } from "react";
import { cn } from "~/lib/utils";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
import axios from "axios";
import { useToast } from "~/hooks/use-toast";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  url: string;
}

export const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        // Replace with your dev.to username if you have one
        const response = await axios.get('https://dev.to/api/articles', {
          params: {
            per_page: 3, // Fetch only 3 posts
            // You can uncomment and use this when you have your own username
            // username: 'yourusername', 
          }
        });
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
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

  // Format the date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
              "text-center text-muted-foreground max-w-2xl mx-auto mb-16",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            I regularly share my knowledge and experiences through articles on DevOps practices,
            software engineering, and emerging technologies.
          </p>

          {isLoading ? (
            <div className="space-y-8">
              {[...Array(3)].map((_, index) => (
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
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block glass-morphism rounded-lg p-6 hover:border-primary/50 transition-colors",
                    isVisible ? "animate-slide-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tag_list.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
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
                </a>
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
            <a
              href="https://dev.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

