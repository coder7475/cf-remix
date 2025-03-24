import { useState, useEffect, useRef } from "react";
import { cn } from "~/libs/utils";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

export const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const blogPosts: BlogPost[] = [
    {
      title: "Building Resilient Microservices with Kubernetes",
      excerpt: "Learn how to design and implement fault-tolerant microservices that can recover automatically from failures...",
      date: "March 15, 2023",
      readTime: "8 min read",
      tags: ["Kubernetes", "Microservices", "Architecture"],
      url: "#"
    },
    {
      title: "CI/CD Best Practices for Modern DevOps Teams",
      excerpt: "Exploring the essential practices for building efficient, secure, and maintainable continuous integration pipelines...",
      date: "January 28, 2023",
      readTime: "10 min read",
      tags: ["DevOps", "CI/CD", "Automation"],
      url: "#"
    },
    {
      title: "Infrastructure as Code: Beyond the Basics",
      excerpt: "Taking your infrastructure as code to the next level with advanced patterns, testing strategies, and security considerations...",
      date: "November 12, 2022",
      readTime: "12 min read",
      tags: ["Terraform", "IaC", "Cloud"],
      url: "#"
    }
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

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <a
                key={post.title}
                href={post.url}
                className={cn(
                  "block glass-morphism rounded-lg p-6 hover:border-primary/50 transition-colors",
                  isVisible ? "animate-slide-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="flex items-center mr-4">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            className={cn(
              "mt-12 text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#"
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

