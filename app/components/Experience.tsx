import { useState, useEffect, useRef } from "react";
import { cn } from "~/libs/utils";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "Junior Software Engineer",
      company: "Elementix Software Ventures LLC",
      date: "Dec 2025 - Present",
      description: [
        "Responsive UI/UX Development with Next.js",
        "REST API Development with TypeScript, Express.js, NestJS, MongoDB and PostgreSQL",
        "Automated Testing with Jest and Playwright",
        "Cloud Deployment and Infrastructure Automation with AWS, Terraform, Terragrunt, Docker, and GitHub Actions",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "OctopusX",
      date: "Apr 2024 - Apr 2025",
      description: [
        "Frontend Development with React, Redux, and Next.js",
        "Backend Development with TypeScript, Express.js, MongoDB, and PostgreSQL",
        "Application Deployment on VPS Using Docker, Nginx, and Linux",
        "CI/CD Pipeline Development with GitHub Actions",
        "Cross-Functional Collaboration with Designers and Developers to Build Creator Economy Products",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "OctopusX",
      date: "Jan 2024 - Mar 2024",
      description: [
        "Full-Stack Development with the MERN Stack",
        "Collaborative Development Using Git & GitHub",
      ],
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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-start gap-4 mb-16",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            <span className="text-gradient">Experiences</span>
          </h2>
        </div>

        {/* Left-rail timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex gap-6 md:gap-10",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div className="glass-morphism rounded-lg p-6 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-3 font-display">
                    {item.company}
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">-</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
