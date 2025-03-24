import { useState, useEffect, useRef, FormEvent } from "react";
import { cn } from "~/libs/utils";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
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
            Have a project in mind or just want to connect? Feel free to reach out through
            the form below or via my social channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div
              className={cn(
                "glass-morphism rounded-lg p-6 md:col-span-1 space-y-8",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <h3 className="text-xl font-bold font-mono mb-4">Contact Information</h3>
                <p className="text-muted-foreground font-display">Feel free to reach out through any of these channels.</p>
              </div>

              <div className="space-y-4">
                <a href="mailto:robiulhossain7475@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-display">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>robiulhossain7475@gmail.com</span>
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-4">SOCIAL PROFILES</h4>
                <div className="flex gap-3">
                  <a href="https://github.com/coder7475/coder7475" className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/robiul7475" className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                  <a href="https://x.com/robiul7475" className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={cn(
                "glass-morphism rounded-lg p-6 md:col-span-2",
                isVisible ? "animate-slide-in" : "opacity-0"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-secondary/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-secondary/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full bg-secondary/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-md transition-all duration-300 w-full sm:w-auto",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
                {submitSuccess && (
                  <div className="bg-primary/10 text-primary px-4 py-3 rounded-md flex items-center gap-2 animate-fade-in">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Message sent successfully!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

