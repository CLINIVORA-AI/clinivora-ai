import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--hairline)] bg-[color:var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={32} />
              <span className="font-display text-base font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-[color:var(--muted-foreground)]">
              Building the future of healthcare intelligence through artificial intelligence.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialIcon href={siteConfig.links.github} label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={siteConfig.links.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={`mailto:${siteConfig.email}`} label="Email"><Mail className="h-4 w-4" /></SocialIcon>
            </div>
          </div>
          <FooterCol title="Platform" links={[
            { label: "Overview", href: "#platform" },
            { label: "Architecture", href: "#architecture" },
            { label: "Why Clinivora", href: "#why" },
          ]} />
          <FooterCol title="Technology" links={[
            { label: "Stack", href: "#technology" },
            { label: "Roadmap", href: "#roadmap" },
            { label: "Capabilities", href: "#capabilities" },
          ]} />
          <FooterCol title="Company" links={[
            { label: "Contact", href: "#contact" },
            { label: "Early Access", href: "#early-access" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ]} />
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--hairline)] pt-6 text-xs text-[color:var(--muted-foreground)] sm:flex-row sm:items-center">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>Designed for the future of preventive healthcare.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] text-[color:var(--muted-foreground)] transition-all hover:scale-105 hover:border-[color:var(--primary)]/40 hover:text-[color:var(--foreground)]"
    >
      {children}
    </a>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-[13px] font-semibold tracking-tight">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--foreground)]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
