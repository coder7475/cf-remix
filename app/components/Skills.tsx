import { useState, useEffect, useRef } from "react";
import { additionalSkills, categories } from "~/constants/skillsConstants";
import { cn } from "~/libs/utils";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-start gap-4 mb-16",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            <span className="text-gradient">Technical Skills</span>
          </h2>
        </div>

        {/* Category sections */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={cn(
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${0.1 + categoryIndex * 0.1}s` }}
            >
              <h3 className="font-display font-semibold text-lg mb-6 text-foreground flex items-center gap-3">
                <span className="text-primary font-mono text-sm">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/20"
                    >
                      <IconComponent className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground truncate">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div
          className={cn(
            "mt-16 pt-12 border-t border-border",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
            Additional Tools &amp; Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="bg-secondary/50 text-muted-foreground px-3 py-1.5 rounded-full text-xs font-mono hover:text-foreground hover:bg-secondary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
