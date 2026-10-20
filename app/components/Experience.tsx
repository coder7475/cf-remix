import { useInView } from "~/hooks/use-in-view";
import { cn } from "~/libs/utils";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  skills: string[];
}

export const Experience = () => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.1 });

  const experiences: ExperienceItem[] = [
    {
      title: "Junior Software Engineer",
      company: "Elementix Software Ventures LLC",
      date: "Dec 2025 - Present",
      description: [
        "Architected responsive web applications using Next.js and Tailwind CSS, improving interaction fluidity and Core Web Vitals.",
        "Designed and maintained type-safe RESTful microservices and backend endpoints using TypeScript, Express.js, NestJS, and PostgreSQL.",
        "Authored comprehensive automated test suites using Jest and Playwright to guarantee regression-free production releases.",
        "Orchestrated cloud infrastructure automation and continuous deployment pipelines utilizing AWS, Docker, Terraform, and GitHub Actions.",
      ],
      skills: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "AWS", "Docker", "Terraform", "Playwright"],
    },
    {
      title: "Junior Software Engineer",
      company: "OctopusX",
      date: "Apr 2024 - Apr 2025",
      description: [
        "Engineered scalable web client interfaces and centralized state management systems utilizing React, Next.js, and Redux Toolkit.",
        "Built performant backend APIs with TypeScript, Express.js, and MongoDB, optimizing database queries for high transaction volumes.",
        "Configured and managed Linux production VPS instances with Docker containers, Nginx reverse proxies, and automated SSL.",
        "Implemented CI/CD pipelines via GitHub Actions and worked cross-functionally with designers to deliver creator economy products.",
      ],
      skills: ["React", "Redux", "TypeScript", "Express.js", "MongoDB", "Docker", "Nginx", "Linux"],
    },
    {
      title: "Software Engineering Intern",
      company: "OctopusX",
      date: "Jan 2024 - Mar 2024",
      description: [
        "Developed full-stack web features across the MERN stack in close collaboration with senior engineering leads.",
        "Participated in daily agile standups, peer code reviews, and Git feature-branch workflows to uphold code quality.",
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "Git", "Agile"],
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-start gap-4 mb-16",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-1">
              Career Trajectory &amp; Impact
            </span>
            <h2 id="experience-heading" className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              <span className="text-gradient">Work Experience</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 sm:left-6 top-0 h-full w-px bg-border/60" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex gap-5 sm:gap-8 md:gap-10",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.1 + index * 0.12}s` }}
              >
                <div className="relative z-10 shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary border-2 border-primary flex items-center justify-center shadow-lg">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                </div>

                <div className="glass-morphism rounded-xl p-6 sm:p-8 flex-1 border border-border/70 hover:border-primary/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground uppercase tracking-wider bg-secondary/80 px-2.5 py-1 rounded-md border border-border/60 self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-primary" />
                      {item.date}
                    </span>
                  </div>

                  <p className="text-primary font-semibold text-base mb-4 font-display">
                    {item.company}
                  </p>

                  <ul className="space-y-2.5 text-sm text-muted-foreground mb-6">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex gap-2.5 leading-relaxed">
                        <span className="text-primary font-bold shrink-0">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-0.5 rounded bg-secondary/70 text-foreground/80 border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
