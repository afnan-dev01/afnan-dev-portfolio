import { useState, type FormEvent } from "react";
import { ArrowUpRight, Info, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildMailto, contactSchema, type ContactInput } from "@/lib/contact";
import { profile } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Errors = Partial<Record<keyof ContactInput, string>>;
const empty: ContactInput = { name: "", email: "", subject: "", message: "" };

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: "GitHub", value: `github.com/${profile.githubHandle}`, href: profile.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, Icon: LinkedinIcon, external: true },
];

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const update = (k: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const errs: Errors = {};
      result.error.issues.forEach((i) => {
        const key = i.path[0] as keyof ContactInput;
        if (!errs[key]) errs[key] = i.message;
      });
      setErrors(errs);
      return;
    }
    window.location.href = buildMailto(profile.email, result.data);
    setOpened(true);
  };

  const field = (k: keyof ContactInput, label: string, type = "text") => (
    <div className="space-y-2">
      <Label htmlFor={`contact-${k}`} className="text-secondary-foreground">
        {label}
      </Label>
      {k === "message" ? (
        <Textarea
          id={`contact-${k}`}
          rows={5}
          value={values[k]}
          onChange={update(k)}
          aria-invalid={!!errors[k]}
          maxLength={2000}
          className="border-input bg-surface/60 text-foreground"
        />
      ) : (
        <Input
          id={`contact-${k}`}
          type={type}
          value={values[k]}
          onChange={update(k)}
          aria-invalid={!!errors[k]}
          className="h-11 border-input bg-surface/60 text-foreground"
        />
      )}
      {errors[k] && <p className="text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect & Build Something"
          description="Whether it's a study project, a hackathon team or just a conversation about AI — I'd be glad to hear from you."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-4">
            {channels.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="surface-card glow-hover group flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                  <span className="block truncate font-medium text-foreground">{value}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="surface-card space-y-5 rounded-2xl p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {field("name", "Name")}
                {field("email", "Email", "email")}
              </div>
              {field("subject", "Subject")}
              {field("message", "Message")}

              <p className="flex gap-2 rounded-xl border border-border bg-surface/60 p-3 text-xs leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Direct sending isn't configured yet. Submitting opens your email app with this
                message ready to send to {profile.email}.
              </p>

              <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
                <Send /> Open in Email App
              </Button>
              {opened && (
                <p role="status" className="text-sm text-success">
                  Your email app should now be open with the message drafted. If nothing happened,
                  email {profile.email} directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
