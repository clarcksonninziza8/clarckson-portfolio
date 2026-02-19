import { useEffect, useRef } from "react";
import profileImg from "@/assets/profile.jpg";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 px-6">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/5] max-w-sm mx-auto">
            <img
              src={profileImg}
              alt="Clarckson Ninziza"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 md:right-0 bg-card border border-border rounded-xl px-5 py-3 shadow-card">
            <p className="text-xs text-muted-foreground">Available for work</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6 font-['Playfair_Display']">
            Building the future,<br />
            <span className="gradient-text">one line at a time.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm Clarckson Ninziza, a passionate student developer with a love for
            creating meaningful digital experiences. From web applications to
            brand identities, I bridge the gap between technology and creativity.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            My flagship project, <span className="text-primary font-semibold">Muzika</span>, 
            is an online music shop that combines my love for music with modern web development. 
            I believe technology should be both powerful and beautiful.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "5+", label: "Projects" },
              { value: "2+", label: "Years Coding" },
              { value: "100%", label: "Passion" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-xl bg-muted border border-border">
                <p className="text-2xl font-black gradient-text font-['Playfair_Display']">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 rounded-full border border-primary/50 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
