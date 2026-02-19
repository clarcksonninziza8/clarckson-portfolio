import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-muted/30">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black font-['Playfair_Display']">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "clarckson@example.com",
                href: "mailto:clarckson@example.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+250 000 000 000",
                href: "tel:+250000000000",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Rwanda",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-5 p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-foreground font-medium mt-0.5">{value}</p>
                </div>
              </a>
            ))}

            {/* Quote card */}
            <div
              className="p-6 rounded-xl border border-primary/20 mt-4"
              style={{ background: "linear-gradient(135deg, hsl(38 90% 52% / 0.08), transparent)" }}
            >
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "I'm always excited to connect with like-minded people, explore
                new opportunities, and collaborate on meaningful projects."
              </p>
              <p className="text-primary text-xs font-semibold mt-3">— Clarckson Ninziza</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-2xl border border-border"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
              style={{ background: "var(--gradient-gold)", color: "hsl(var(--navy))" }}
            >
              {sent ? (
                "Message Sent! ✓"
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
