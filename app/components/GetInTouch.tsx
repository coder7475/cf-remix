import { useState } from "react";
import { cn } from "~/libs/utils";
import { useInView } from "~/hooks/use-in-view";
import { Mail, Github, Linkedin, Youtube, Users, Calendar, Copy, Check, Clock } from "lucide-react";
import { Link } from "@remix-run/react";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Contact = () => {
  const [sectionRef, isVisible] = useInView<HTMLElement>({ threshold: 0.1 });

  const [form, setForm] = useState({ name: "", email: "", subjectType: "job", message: "" });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@robiulhossain.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);

    if (!form.name || !form.email || !form.message) {
      setFormStatus("error");
      return;
    }

    setIsSubmitting(true);

    const intentPrefix =
      form.subjectType === "job"
        ? "[Opportunity]"
        : form.subjectType === "client"
        ? "[Project Inquiry]"
        : "[Connect]";

    const subject = `${intentPrefix} Inquiry from ${form.name}`;
    const body = `Sender: ${form.name}\r\nEmail: ${form.email}\r\nPurpose: ${form.subjectType}\r\n\r\nMessage:\r\n${form.message}`;
    const mailto = `mailto:contact@robiulhossain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("success");
      setForm({ name: "", email: "", subjectType: "job", message: "" });
    }, 400);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24" aria-labelledby="contact-heading">
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
              Start a Conversation
            </span>
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              <span className="text-gradient">Get In Touch</span>
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
          I&apos;m currently available for full-time engineering roles, high-impact consulting, and contract MVP development. Reach out directly or choose a time on my calendar.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          <form
            onSubmit={handleSubmit}
            className={cn(
              "flex-1 glass-morphism rounded-xl p-6 sm:p-8 space-y-6 border border-border/70",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/50">
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">Send a Direct Message</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Launches your default email composer with pre-filled details</p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5" />
                <span>Replies &lt; 24h</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-1.5 font-mono">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm transition-colors text-foreground"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    autoComplete="name"
                    placeholder="Jane Doe"
                    aria-describedby={formStatus === "error" ? "form-error" : undefined}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-1.5 font-mono">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm transition-colors text-foreground"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    autoComplete="email"
                    placeholder="jane@company.com"
                    aria-describedby={formStatus === "error" ? "form-error" : undefined}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subjectType" className="block text-sm font-medium text-foreground/90 mb-1.5 font-mono">
                  Primary Topic
                </label>
                <select
                  id="subjectType"
                  name="subjectType"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm transition-colors text-foreground"
                  value={form.subjectType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="job">Hiring for a Full-Time / Contract Role</option>
                  <option value="client">Client Project / MVP Development Inquiry</option>
                  <option value="consulting">Technical Architecture Consultation</option>
                  <option value="other">General Networking / Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-1.5 font-mono">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm resize-none transition-colors text-foreground"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Tell me about the role, technical requirements, or project scope..."
                  aria-describedby={formStatus === "error" ? "form-error" : undefined}
                />
              </div>
            </div>

            <button
              type="submit"
              className={cn(
                "w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-bold font-mono text-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center gap-2 shadow-md",
                isSubmitting && "opacity-60 cursor-not-allowed"
              )}
              disabled={isSubmitting}
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>{isSubmitting ? "Opening Email Client..." : "Send Message"}</span>
            </button>

            {formStatus === "success" && (
              <div role="status" className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono text-center">
                Your email client has been launched! If it did not open, click the Copy Email button to send directly.
              </div>
            )}
            {formStatus === "error" && (
              <p id="form-error" className="text-red-500 text-sm font-mono text-center" role="alert">
                Please fill in your name, valid email, and message.
              </p>
            )}
          </form>

          <div
            className={cn(
              "lg:w-80 space-y-6",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="glass-morphism rounded-xl p-6 space-y-6 border border-border/70">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Direct Email
                </h4>
                <div className="space-y-2">
                  <a
                    href="mailto:contact@robiulhossain.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-mono text-sm break-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span>contact@robiulhossain.com</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full mt-2 py-2 px-3 rounded-lg border border-border/70 bg-secondary/50 hover:bg-secondary text-foreground text-xs font-mono transition-colors flex items-center justify-center gap-2"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Email Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Direct Booking
                </h4>
                <Link
                  to="/schedule"
                  className="flex items-center gap-3 p-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Book a 30-min Call
                    </span>
                    <span className="block text-xs text-muted-foreground">Pick a slot on Calendly</span>
                  </div>
                </Link>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Professional Profiles
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/coder7475",
                      label: "GitHub",
                      colorClass: "bg-slate-500/10 text-foreground border-border/60 hover:bg-[#24292e] hover:text-white hover:border-[#24292e]",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/robiul7475",
                      label: "LinkedIn",
                      colorClass: "bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
                    },
                    {
                      icon: XIcon,
                      href: "https://x.com/robiul7475",
                      label: "X",
                      colorClass: "bg-black/10 dark:bg-white/10 text-foreground border-border/60 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white",
                    },
                    {
                      icon: Youtube,
                      href: "https://www.youtube.com/@RobiulHossain-f2k",
                      label: "YouTube",
                      colorClass: "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/30 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
                    },
                  ].map(({ icon: Icon, href, label, colorClass }) => (
                    <a
                      key={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={href}
                      aria-label={`Visit Robiul's ${label} profile`}
                      className={cn(
                        "w-11 h-11 rounded-lg border flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40",
                        colorClass
                      )}
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Developer Community
                </h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dly.to/VgMLbgyno0F"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg border border-border/60 hover:border-primary/30 bg-secondary/30 hover:bg-primary/5"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-foreground">Dev Daily Group</span>
                    <span className="block text-xs text-muted-foreground">Community &amp; Discussions</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
