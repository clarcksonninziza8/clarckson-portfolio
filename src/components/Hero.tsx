import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("visible");
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      {/* Content */}
      <div
        ref={ref}
        className="section-reveal relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-none mb-4 font-['Playfair_Display']">
          Clarckson
          <br />
          <span className="gradient-text">Ninziza</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
          Student Developer & Creative Builder. I craft beautiful web experiences
          and transform ideas into products people love.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 shadow-gold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-5 justify-center">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:clarckson@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
