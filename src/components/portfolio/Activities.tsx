import { Bot, Sparkles, Trophy, Wrench, type LucideIcon } from "lucide-react";
import { activities } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = { sparkles: Sparkles, bot: Bot, trophy: Trophy, wrench: Wrench } satisfies Record<string, LucideIcon>;

export function Activities() {
  return (
    <section id="activities" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Learning & Activities"
          description="Training, teamwork and hands-on building that shape how I learn."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) => {
            const Icon = icons[a.icon];
            return (
              <Reveal key={a.title} delay={i * 90} className="h-full">
                <article className="surface-card glow-hover h-full rounded-2xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet/30 bg-violet/10 text-violet">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
