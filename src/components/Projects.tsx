import { useEffect, useRef } from "react";
import muzikaImg from "@/assets/muzika-project.jpg";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Muzika",
    subtitle: "Music Shop Platform",
    description:
      "A full-featured online music shop where customers can browse and purchase instruments, accessories, and music gear. Built with modern web technologies, featuring an elegant UI and smooth shopping experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "E-commerce"],
    image: muzikaImg,
    featured: true,
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Branding",
    description:
      "This very portfolio — designed and developed from scratch with a focus on clean aesthetics, smooth animations, and showcasing my journey as a developer.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    image: null,
    featured: false,
    link: "#",
    github: "#",
  },
  {
    title: "Student Hub",
    subtitle: "Academic Tool",
    description:
      "A web app to help students organize their courses, assignments, and deadlines in one beautiful dashboard.",
    tags: ["React", "Node.js", "SQL"],
    image: null,
    featured: false,
    link: "#",
    github: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => ref.current?.classList.add("visible"), index * 150);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  if (project.featured) {
    return (
      <div
        ref={ref}
        className="section-reveal col-span-full rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group"
        style={{ background: "var(--gradient-card)" }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative overflow-hidden aspect-video md:aspect-auto min-h-64">
            <img
              src={project.image!}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                Featured Project
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
              {project.subtitle}
            </p>
            <h3 className="text-4xl font-black mb-4 font-['Playfair_Display']">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <a
                href={project.github}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-muted-foreground text-sm hover:border-primary/50 hover:text-primary transition-all"
              >
                <Github size={14} />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="section-reveal p-7 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group flex flex-col"
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
        <span className="text-primary font-bold text-sm">{index}</span>
      </div>
      <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
        {project.subtitle}
      </p>
      <h3 className="text-2xl font-black mb-3 font-['Playfair_Display']">{project.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs border border-border text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.link}
          className="flex items-center gap-1.5 text-xs text-primary hover:underline"
        >
          <ExternalLink size={12} />
          Live Demo
        </a>
        <a
          href={project.github}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={12} />
          Code
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="section-reveal text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-black font-['Playfair_Display']">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
