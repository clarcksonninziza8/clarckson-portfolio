import { useEffect, useRef } from "react";

const skills = [
  { category: "Frontend", items: ["HTML & CSS", "React", "TypeScript", "Tailwind CSS"], level: 85 },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs", "SQL"], level: 70 },
  { category: "Design", items: ["Figma", "UI/UX Design", "Responsive Design", "Branding"], level: 75 },
  { category: "Tools", items: ["Git & GitHub", "VS Code", "Vite", "Supabase"], level: 80 },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Tailwind CSS",
  "Figma", "Git", "SQL", "HTML5", "CSS3", "REST API", "Vite",
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => ref.current?.classList.add("visible"), index * 120);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="section-reveal p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
      style={{ background: "var(--gradient-card)" }}
    >
      <h3 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
        {skill.category}
      </h3>
      <ul className="space-y-2 mb-5">
        {skill.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      {/* Progress bar */}
      <div className="h-1 w-full bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 delay-300"
          style={{
            width: `${skill.level}%`,
            background: "var(--gradient-gold)",
          }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-right">{skill.level}%</p>
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) headerRef.current?.classList.add("visible");
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="section-reveal text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            What I Know
          </p>
          <h2 className="text-4xl sm:text-5xl font-black font-['Playfair_Display']">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
