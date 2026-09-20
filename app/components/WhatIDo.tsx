import { useEffect, useState } from "react";
import { cn } from "~/libs/utils";
import { whatIDoCards } from "~/constants/whatIDoConstants";

export const WhatIDo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-start gap-4 mb-6",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            <span className="text-gradient">What I Do</span>
          </h2>
        </div>
        <p
          className={cn(
            "text-muted-foreground max-w-2xl mb-16 ml-5",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.1s" }}
        >
          I specialize in building end-to-end web solutions, from crafting
          intuitive user interfaces to architecting robust backend systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatIDoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={cn(
                  "glass-morphism rounded-lg p-6 hover:scale-[1.02] transition-all duration-300",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};