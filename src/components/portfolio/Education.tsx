import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Set the institution name here once confirmed.
const INSTITUTION = "Institution name — to be added";

const timeline = [
  { label: "Semesters 1–2", title: "Foundation", body: "Completed the first two semesters of the programme.", state: "done" },
  { label: "Semester 3", title: "Currently studying", body: "Continuing core software engineering coursework alongside AI exploration.", state: "current" },
  { label: "Ahead", title: "Upcoming semesters", body: "Continuing the degree and building more hands-on projects.", state: "next" },
] as const;

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Education" title="Academic path" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <article className="surface-card relative h-full overflow-hidden rounded-2xl p-7 md:p-8">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-brand opacity-20 blur-3xl" aria-hidden="true" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <GraduationCap className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 text-2xl font-bold text-foreground">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="relative mt-2 text-muted-foreground">{INSTITUTION}</p>
              <dl className="relative mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-surface/60 p-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Status</dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-foreground">3rd Semester</dd>
                </div>
                <div className="rounded-xl border border-border bg-surface/60 p-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Location</dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-foreground">Pakistan</dd>
                </div>
              </dl>
            </article>
          </Reveal>

          <ol className="relative space-y-6 border-l border-border pl-8">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 120} className="relative">
                <span
                  className={
                    t.state === "current"
                      ? "absolute -left-[41px] top-1 h-4 w-4 animate-pulse-dot rounded-full border-2 border-background bg-success"
                      : t.state === "done"
                        ? "absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-background bg-primary"
                        : "absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-border bg-surface-raised"
                  }
                  aria-hidden="true"
                />
                <div className="surface-card glow-hover rounded-2xl p-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.label}</p>
                  <h4 className="mt-1.5 text-lg font-semibold text-foreground">{t.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
