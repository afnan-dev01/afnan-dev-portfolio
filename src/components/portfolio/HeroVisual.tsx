import { Bot, BrainCircuit, Cpu } from "lucide-react";

const code: { indent: number; tokens: [string, string][] }[] = [
  { indent: 0, tokens: [["text-violet", "class "], ["text-primary-glow", "Afnan"], ["text-muted-foreground", ":"]] },
  { indent: 1, tokens: [["text-foreground", "role "], ["text-muted-foreground", "= "], ["text-success", '"SE Student"']] },
  { indent: 1, tokens: [["text-foreground", "semester "], ["text-muted-foreground", "= "], ["text-chart-5", "3"]] },
  { indent: 1, tokens: [["text-foreground", "exploring "], ["text-muted-foreground", "= ["], ["text-success", '"GenAI"'], ["text-muted-foreground", ", "], ["text-success", '"Agents"'], ["text-muted-foreground", "]"]] },
  { indent: 0, tokens: [["", " "]] },
  { indent: 1, tokens: [["text-violet", "def "], ["text-primary-glow", "loop"], ["text-muted-foreground", "(self):"]] },
  { indent: 2, tokens: [["text-violet", "return "], ["text-muted-foreground", "["], ["text-success", '"Plan"'], ["text-muted-foreground", ", "], ["text-success", '"Learn"'], ["text-muted-foreground", ","]] },
  { indent: 3, tokens: [["text-success", '"Practice"'], ["text-muted-foreground", ", "], ["text-success", '"Evaluate"'], ["text-muted-foreground", ","]] },
  { indent: 3, tokens: [["text-success", '"Adapt"'], ["text-muted-foreground", "]"]] },
];

/** Animated code + orbit composition for the hero. Decorative only. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      {/* glow */}
      <div className="absolute inset-10 rounded-full bg-gradient-brand opacity-25 blur-3xl" />

      {/* orbits */}
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/20">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow" />
        <span className="absolute bottom-[14%] left-[4%] h-2 w-2 rounded-full bg-violet" />
      </div>
      <div className="absolute inset-[12%] animate-spin-reverse rounded-full border border-violet/20">
        <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-glow" />
      </div>

      {/* code window */}
      <div className="absolute inset-x-[6%] top-1/2 -translate-y-1/2 animate-float">
        <div className="surface-card overflow-hidden rounded-2xl">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-5/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
            <span className="ml-3 font-mono text-[0.7rem] text-muted-foreground">afnan.py</span>
          </div>
          <pre className="overflow-hidden px-4 py-4 font-mono text-[0.68rem] leading-6 sm:text-[0.78rem]">
            {code.map((line, i) => (
              <div
                key={i}
                className="code-line flex whitespace-pre"
                style={{ animationDelay: `${300 + i * 220}ms` }}
              >
                <span className="mr-4 w-4 select-none text-right text-muted-foreground/40">{i + 1}</span>
                <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                  {line.tokens.map(([cls, t], j) => (
                    <span key={j} className={cls}>
                      {t}
                    </span>
                  ))}
                </span>
              </div>
            ))}
            <div className="flex">
              <span className="mr-4 w-4 text-right text-muted-foreground/40">{code.length + 1}</span>
              <span className="inline-block h-4 w-2 animate-blink bg-primary" />
            </div>
          </pre>
        </div>
      </div>

      {/* floating chips */}
      <div className="surface-card absolute left-0 top-[10%] flex animate-float items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium [animation-delay:-2s]">
        <BrainCircuit className="h-4 w-4 text-primary" /> Generative AI
      </div>
      <div className="surface-card absolute right-0 top-[18%] flex animate-float items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium [animation-delay:-4s]">
        <Bot className="h-4 w-4 text-violet" /> Agentic AI
      </div>
      <div className="surface-card absolute bottom-[8%] right-[8%] flex animate-float items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium [animation-delay:-1s]">
        <Cpu className="h-4 w-4 text-primary-glow" /> Embedded
      </div>
    </div>
  );
}
