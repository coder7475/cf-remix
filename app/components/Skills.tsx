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
    <section id="skills" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-display font-bold mb-16 tracking-tight text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
          >
            <span className="text-gradient">Technical Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
            {categories.map((category, categoryIndex) => (
              <div
                key={category.name}
                className={cn(
                  "glass-morphism rounded-lg py-6",
                  isVisible ? "animate-slide-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.1 + categoryIndex * 0.1}s` }}
              >
                <h3 className="md:text-lg lg:text-xl font-bold mb-6 text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={cn(
                          "flex flex-col items-center p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors",
                          isVisible ? "animate-slide-in" : "opacity-0"
                        )}
                        style={{
                          animationDelay: `${
                            0.2 + categoryIndex * 0.1 + skillIndex * 0.05
                          }s`,
                        }}
                      >
                        <IconComponent className="w-8 h-8 mb-2 text-primary" />
                        <span className="font-medium text-sm text-center">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "mt-16 glass-morphism rounded-lg p-8 font-display",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-xl font-bold mb-6 text-center">
              Additional Tools & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <span
                  key={skill}
                  className={cn(
                    "bg-secondary/50 text-foreground px-4 py-2 rounded-full text-sm",
                    isVisible ? "animate-slide-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.6 + index * 0.02}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
