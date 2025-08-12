import { useState, useEffect, useRef } from "react";
import { cn } from "~/libs/utils";
import { Mail, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "@remix-run/react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Contact form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );
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

  // Simple client-side form handler that opens mailto
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    // Construct mailto link
    const subject = `Contact from ${form.name}`;
    // Use CRLF for newlines in mailto body for better compatibility
    const body = `Name: ${form.name}\r\nEmail: ${form.email}\r\n\r\n${form.message}`;
    const mailto = `mailto:contact@robiulhossain.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
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
                "glass-morphism rounded-lg p-8 max-w-md w-full space-y-8",
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
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className={cn(
                "glass-morphism rounded-lg p-8 max-w-md w-full space-y-6",
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
                  Your email client should have opened. If not, please email me
                  directly!
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-red-600 text-sm font-mono text-center mt-2">
                  Please fill in all fields.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
