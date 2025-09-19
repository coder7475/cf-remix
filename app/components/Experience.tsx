import { useState, useEffect, useRef } from "react";
import { cn } from "~/libs/utils";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  icon: typeof Briefcase;
}

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "DevOps Engineer",
      company: "Monster Studio",
      date: "Aug 2024 - Apr 2025",
      description: [
        "Designed and implemented robust CI/CD pipelines for 20+ production web applications, ensuring rapid and reliable deployments",
        "Automated deployment workflows, reducing release times by 70% and minimizing manual intervention",
        "Orchestrated application deployments and scaling using Linux, Nginx, PM2, Docker, and UFW for enhanced security and performance",
        "Established comprehensive monitoring and alerting with Cron jobs, Prometheus, and Grafana to ensure system reliability and uptime",
        "Implemented a monorepo architecture to promote code reuse, enforce DRY principles, and streamline development across multiple services.",
        "Led code reviews and mentored interns, ensuring adherence to best practices and fostering team knowledge growth.",
      ],
      icon: Briefcase,
    },
    {
      title: "Software Engineer",
      company: "Monster Studio",
      date: "Apr 2024 - July 2024",
      description: [
        "Improved React component rendering performance by 75% through lazy loading and code splitting, enhancing user experience and page load times.",
        "Built scalable RESTful APIs using Node.js and Express for a creator services platform, supporting thousands of active users.",
        "Debugged and improved JWT-based authentication mechanisms to ensure secure and persistent user sessions.",
        "Developed and maintained robust test coverage using Vitest for unit testing and Cypress for end-to-end testing.",
      ],
      icon: Briefcase,
    },
    {
      title: "Web Developer Intern",
      company: "Monster Studio",
      date: "Jan 2024 - Mar 2024",
      description: [
        "Participated in requirements analysis and platform design for a creator-focused content-sharing system",
        "Helped establish codebase architecture, branching strategy, and merge workflows on GitHub.",
        "Developed and debugged reusable React components.",
      ],
      icon: Briefcase,
    },
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
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-display font-bold mb-12 tracking-tight text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
          >
            <span className="text-gradient">Experiences</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-border"></div>

            <div className="space-y-12">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center", // <-- make one line middle
                    isVisible ? "animate-slide-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-secondary border-2 border-primary flex items-center justify-center z-10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 md:pr-12 md:text-left ml-16 md:ml-0 font-display">
                    {index % 2 === 0 ? (
                      <div className="hidden md:block"></div>
                    ) : (
                      <div className="glass-morphism rounded-lg p-6 space-y-3">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-primary font-medium">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.date}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/2 md:pl-12 ml-16 md:ml-0 mt-4 md:mt-0 font-mono">
                    {index % 2 === 0 ? (
                      <div className="glass-morphism rounded-lg p-6 space-y-3 text-left">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-primary font-medium">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.date}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground font-display">
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="hidden md:block"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
