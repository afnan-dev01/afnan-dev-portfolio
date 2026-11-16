import { BrainCircuit, Code2, Cpu, Users, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = { code: Code2, brain: BrainCircuit, cpu: Cpu, users: Users } satisfies Record<string, LucideIcon>;

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="What I'm learning & working with"
          description="Areas I've studied and practised through coursework, training and hands-on projects."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            return (
              <Reveal key={g.title} delay={i * 90}>
                <article className="surface-card glow-hover group relative h-full overflow-hidden rounded-2xl p-6 md:p-7">
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">{g.title}</h3>
                  </div>
                  <ul className="relative mt-6 flex flex-wrap gap-2.5">
                    {g.skills.map((s) => (
                      <li key={s}>
                        <Badge variant="skill">{s}</Badge>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
