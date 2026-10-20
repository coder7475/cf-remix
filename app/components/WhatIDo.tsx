import { useInView } from "~/hooks/use-in-view";
import { cn } from "~/libs/utils";
import { whatIDoCards } from "~/constants/whatIDoConstants";
import { CheckCircle2 } from "lucide-react";

const valueProps = [
  "Production-Grade Quality: Strict TypeScript & tested architectures",
  "High Velocity: Rapid MVPs and iterative sprint delivery",
  "Direct Communication: Proactive, clear, and transparent updates",
  "End-to-End Ownership: From database schema to polished UI",
];

export const WhatIDo = () => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-16 md:py-24" aria-labelledby="what-i-do-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-start gap-4 mb-4",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-1">
              Engineering Services &amp; Capabilities
            </span>
            <h2 id="what-i-do-heading" className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              <span className="text-gradient">How I Deliver Value</span>
            </h2>
          </div>
        </div>
        <p
          className={cn(
            "text-muted-foreground max-w-2xl mb-12 ml-5 text-base sm:text-lg leading-relaxed",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.1s" }}
        >
          Whether joining an engineering team full-time or partnering as a consultant to launch a new product, I provide end-to-end technical leadership that bridges robust systems with intuitive user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {whatIDoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={cn(
                  "glass-morphism rounded-xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {card.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-foreground border border-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={cn(
            "rounded-xl glass-morphism p-6 sm:p-8 border border-primary/20 bg-primary/[0.02]",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.55s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90 leading-snug">
                  {prop}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
