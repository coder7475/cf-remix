import { additionalSkills, categories } from "~/constants/skillsConstants";
import { useInView } from "~/hooks/use-in-view";
import { cn } from "~/libs/utils";

export const Skills = () => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/20" aria-labelledby="skills-heading">
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
              Stack &amp; Capabilities
            </span>
            <h2 id="skills-heading" className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              <span className="text-gradient">Technical Arsenal</span>
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={cn(
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${0.1 + categoryIndex * 0.1}s` }}
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary font-mono text-xs px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <span>{category.name}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary/40 hover:bg-secondary/70 transition-all border border-border/60 hover:border-primary/30 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground break-words min-w-0 leading-tight">
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
            "mt-16 pt-12 border-t border-border/60",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="font-display font-semibold text-lg text-foreground">
              Architecture Patterns &amp; Methodologies
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              Built for production scalability
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="bg-secondary/60 text-foreground/80 px-3.5 py-1.5 rounded-lg text-xs font-mono border border-border/60 hover:text-foreground hover:border-primary/40 transition-colors"
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
