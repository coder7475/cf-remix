import { useState, useEffect, useRef } from "react";
import { cn } from "~/libs/utils";
import { Mail, Github, Linkedin, Twitter, Youtube, Users } from "lucide-react";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const actionData = useActionData<{
    success?: boolean;
    error?: string;
  }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // Contact form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!actionData) return;

    if (actionData.success) {
      setForm({ name: "", email: "", message: "" });
      setFormStatus("success");
    } else if (actionData.error) {
      setFormStatus("error");
    }
  }, [actionData]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight text-center",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
          >
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p
            className={cn(
              "text-center text-muted-foreground max-w-2xl mx-auto mb-16 font-mono",
              isVisible ? "animate-slide-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Have a project in mind or just want to connect? Feel free to reach
            out through my social channels or send a message using the form
            below.
          </p>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
            {/* Contact Information */}
            <div
              className={cn(
                "glass-morphism rounded-2xl p-8 max-w-md w-full space-y-8 bg-slate-950/70 border-emerald-400/15",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <h3 className="text-xl font-bold mb-4 font-mono">
                  Contact Information
                </h3>
                <p className="text-muted-foreground text-sm font-display">
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  to="mailto:contact@robiulhossain.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>contact@robiulhossain.com</span>
                </Link>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                  SOCIAL PROFILES
                </h4>
                <div className="flex gap-3">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://github.com/coder7475"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://www.linkedin.com/in/robiul7475"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://x.com/robiul7475"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://www.youtube.com/@RobiulHossain-f2k"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                  EDUCATIONAL GROUP
                </h4>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://dly.to/VgMLbgyno0F"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-mono p-3 rounded-md border border-border/50 hover:border-primary/30 bg-secondary/30 hover:bg-primary/5"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-sm font-semibold text-foreground">Join Dev Daily Group</span>
                    <span className="block text-xs text-muted-foreground">Educational community for developers</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <Form
              method="post"
              className={cn(
                "glass-morphism rounded-2xl p-8 max-w-md w-full space-y-6 bg-slate-950/70 border-emerald-400/15",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.3s" }}
              autoComplete="off"
            >
              <h3 className="text-xl font-bold mb-2 font-mono">
                Send a Message
              </h3>
              <div className="space-y-4 font-display">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono resize-none"
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
                  "w-full py-2 px-4 rounded-md bg-primary text-white font-bold font-mono transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30",
                  isSubmitting && "opacity-60 cursor-not-allowed"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {formStatus === "success" && (
                <p className="text-green-600 text-sm font-mono text-center mt-2">
                    Message sent successfully! I will get back to you soon.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-red-600 text-sm font-mono text-center mt-2">
                  Something went wrong. Please check the fields and try again, or
                  email me directly.
                </p>
              )}
            </Form>
          </div>
        </div>
    </section>
  );
};
