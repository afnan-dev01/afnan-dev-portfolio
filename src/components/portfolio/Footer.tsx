import { Mail } from "lucide-react";
import { profile } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { href: profile.github, label: "GitHub", Icon: GithubIcon, external: true },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, external: false },
  ];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 text-sm text-muted-foreground md:flex-row md:px-8">
        <p>
          © {year} · Designed &amp; Built by{" "}
          <span className="font-medium text-foreground">Muhammad Afnan Shakeel</span>
        </p>
        <ul className="flex items-center gap-3">
          {links.map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
