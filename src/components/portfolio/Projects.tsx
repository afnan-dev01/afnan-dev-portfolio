import { ArrowUpRight, Award, FlaskConical, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { profile, projects, type Project } from "@/lib/site";
import { GithubIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectDialog({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="glass" className="rounded-full">
          View Project <ArrowUpRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-popover sm:max-w-2xl">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1280}
          height={800}
          className="aspect-[16/9] w-full rounded-xl object-cover"
        />
        <DialogHeader>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{project.kicker}</p>
          <DialogTitle className="font-display text-2xl text-foreground">{project.title}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        {project.slogan && (
          <p className="rounded-xl border border-primary/25 bg-primary/5 px-4 py-3 text-center font-display font-semibold text-gradient">
            {project.slogan}
          </p>
        )}
        <ul className="grid gap-2 sm:grid-cols-2">
          {project.details.map((d) => (
            <li key={d} className="flex gap-2 text-sm text-secondary-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {d}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="tech">
              {t}
            </Badge>
          ))}
        </div>
        {project.link ? (
          <Button asChild variant="hero" className="rounded-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Open project <ArrowUpRight />
            </a>
          </Button>
        ) : (
          <div className="flex flex-col gap-3 rounded-xl border border-dashed border-border p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Project repository / demo link coming soon.
            </p>
            <Button asChild variant="glass" size="sm" className="rounded-full">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> Visit GitHub
              </a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="Things I've built & been part of"
          description="Hands-on work across embedded systems and AI — each one a step in my learning journey."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 110} className="h-full">
              <article className="surface-card glow-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  <span className="absolute left-4 top-4 font-mono text-xs text-foreground/80">{p.index}</span>
                  {p.highlight && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-chart-5/40 bg-background/70 px-3 py-1 text-xs font-semibold text-chart-5 backdrop-blur">
                      <Award className="h-3.5 w-3.5" /> {p.highlight}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[0.7rem] uppercase tracking-widest text-primary">{p.kicker}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  {p.slogan && (
                    <p className="mt-4 font-display text-sm font-semibold text-gradient">{p.slogan}</p>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="tech">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <ProjectDialog project={p} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 md:flex-row md:items-center md:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
              <FlaskConical className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">Future AI Projects</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                I'm continuing to learn Generative AI and Agentic AI. New AI projects will be added
                here as I build them — follow along on GitHub.
              </p>
            </div>
            <Button asChild variant="glass" className="rounded-full">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> Follow on GitHub
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
