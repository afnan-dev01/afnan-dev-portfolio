import { BookOpen, Lightbulb, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const focus = [
  { icon: BookOpen, title: "Academic journey", body: "BS Software Engineering, currently in my 3rd semester." },
  { icon: Lightbulb, title: "Practical learning", body: "Learning by building — from AI concepts to hardware projects." },
  { icon: Users, title: "Collaboration", body: "Training programmes and team-based hackathon projects." },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="About me" title="A student building strong foundations" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm a passionate <span className="text-foreground">BS Software Engineering student</span>{" "}
              currently in my 3rd semester. I enjoy understanding how software is designed and
              built, and I'm steadily strengthening my fundamentals through coursework and
              hands-on practice.
            </p>
            <p>
              Alongside my studies, I'm exploring{" "}
              <span className="text-foreground">Artificial Intelligence, Generative AI and Agentic AI</span>.
              I've taken part in Generative AI and Agentic AI training and collaborative project
              activities, and I have basic experience training machine learning models.
            </p>
            <p>
              I also like working with real hardware — building practical projects with Arduino
              and sensors helps me connect code to the physical world. I'm still early in my
              journey, and I'm focused on learning, collaborating with others, and growing one
              project at a time.
            </p>
          </Reveal>
          <div className="space-y-4">
            {focus.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="surface-card glow-hover flex gap-4 rounded-2xl p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
