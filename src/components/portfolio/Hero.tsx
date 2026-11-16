import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "./icons";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-3.5 py-1.5 text-xs font-medium text-success">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success" />
            Open to Learning &amp; Collaboration
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Hi, I'm <span className="text-gradient">Muhammad Afnan Shakeel</span>
          </h1>

          <p className="mt-6 font-display text-lg font-medium text-secondary-foreground md:text-xl">
            Software Engineering Student
            <span className="mx-2 text-primary">|</span>
            Exploring AI &amp; Intelligent Systems
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Building my foundation in software engineering while exploring Generative AI, Agentic
            AI, and practical technology solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                Explore My Projects <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#contact">
                <Mail /> Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <span className="h-6 w-px bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> {profile.location}
            </span>
          </div>
        </div>

        <div className="animate-in fade-in zoom-in-95 duration-1000">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
