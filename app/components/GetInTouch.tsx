import { useState, useEffect, useRef } from "react";
import { cn } from "~/libs/utils";
import { Mail, Github, Linkedin, Twitter, Youtube, Users } from "lucide-react";
import { Link } from "@remix-run/react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);

    if (!form.name || !form.email || !form.message) {
      setFormStatus("error");
      return;
    }

    setIsSubmitting(true);

    const subject = `Contact from ${form.name}`;
    const body = `Name: ${form.name}\r\nEmail: ${form.email}\r\n\r\n${form.message}`;
    const mailto = `mailto:contact@robiulhossain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-start gap-4 mb-6",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="w-1 h-12 bg-primary rounded-full shrink-0 mt-1" />
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            <span className="text-gradient">Get In Touch</span>
          </h2>
        </div>
        <p
          className={cn(
            "text-muted-foreground max-w-2xl mb-16 ml-5",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: "0.1s" }}
        >
          Have a project in mind or just want to connect? Feel free to reach
          out through my social channels or send a message using the form below.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact form - full width on mobile, main content on desktop */}
          <form
            onSubmit={handleSubmit}
            className={cn(
              "flex-1 glass-morphism rounded-lg p-8 space-y-6",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.2s" }}
            autoComplete="off"
          >
            <h3 className="text-xl font-display font-bold mb-2">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-md border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono text-sm transition-colors"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2.5 rounded-md border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono text-sm transition-colors"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-md border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono text-sm resize-none transition-colors"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <button
              type="submit"
              className={cn(
                "w-full py-2.5 px-4 rounded-md bg-primary text-primary-foreground font-bold font-mono text-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40",
                isSubmitting && "opacity-60 cursor-not-allowed"
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {formStatus === "success" && (
              <p className="text-emerald-500 text-sm font-mono text-center mt-2">
                Your email client should have opened. If not, please email me directly!
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-red-500 text-sm font-mono text-center mt-2">
                Please fill in all fields.
              </p>
            )}
          </form>

          {/* Contact info sidebar */}
          <div
            className={cn(
              "lg:w-80 space-y-6",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="glass-morphism rounded-lg p-6 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Email
                </h4>
                <Link
                  to="mailto:contact@robiulhossain.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-mono">contact@robiulhossain.com</span>
                </Link>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Social
                </h4>
                <div className="flex gap-2">
                  {[
                    { icon: Github, href: "https://github.com/coder7475", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/robiul7475", label: "LinkedIn" },
                    { icon: Twitter, href: "https://x.com/robiul7475", label: "Twitter" },
                    { icon: Youtube, href: "https://www.youtube.com/@RobiulHossain-f2k", label: "YouTube" },
                  ].map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      to={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Community
                </h4>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://dly.to/VgMLbgyno0F"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-3 rounded-md border border-border/50 hover:border-primary/30 bg-secondary/20 hover:bg-primary/5"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-foreground">Dev Daily Group</span>
                    <span className="block text-xs text-muted-foreground">Educational community</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
