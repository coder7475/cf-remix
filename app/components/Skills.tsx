import { memo } from "react";
import { additionalSkills, categories } from "~/constants/skillsConstants";
import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";
import { cn } from "~/libs/utils";

export const Skills = memo(function Skills() {
  const [isVisible, sectionRef] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
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
                  "glass-morphism rounded-2xl py-6 bg-slate-950/70 border-emerald-400/15",
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
                            "flex flex-col items-center p-4 rounded-xl bg-slate-900/70 hover:bg-slate-900 transition-colors border border-slate-700/70 hover:border-emerald-400/50 shadow-[0_14px_40px_rgba(15,23,42,0.9)]",
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
              "mt-16 glass-morphism rounded-2xl p-8 font-display bg-slate-950/70 border-emerald-400/15",
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
    </section>
  );
});
