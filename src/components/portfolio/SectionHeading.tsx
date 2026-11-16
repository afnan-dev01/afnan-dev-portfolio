import { Reveal } from "./Reveal";

type Props = { eyebrow: string; title: string; description?: string };

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <span className="h-px w-8 bg-gradient-brand" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
