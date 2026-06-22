import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/config/site";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Platform", href: "#platform" },
  { label: "Technology", href: "#technology" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[color:var(--hairline)] bg-[color:var(--surface-strong)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <Logo size={32} />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-[13.5px] font-medium text-[color:var(--muted-foreground)] transition-colors hover:bg-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 place-items-center rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] text-[color:var(--muted-foreground)] backdrop-blur transition-all hover:scale-105 hover:border-[color:var(--primary)]/40 hover:text-[color:var(--foreground)] sm:grid"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] text-[color:var(--muted-foreground)] backdrop-blur transition-all hover:scale-105 hover:border-[color:var(--primary)]/40 hover:text-[color:var(--foreground)] sm:grid"
          >
            <Github className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <a
            href="#early-access"
            className="group hidden items-center gap-1.5 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-[13px] font-semibold text-[color:var(--background)] transition-all hover:shadow-lg hover:shadow-[color:var(--primary)]/20 sm:inline-flex"
          >
            Get Early Access
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--hairline)] md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[color:var(--hairline)] bg-[color:var(--surface-strong)] backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--muted-foreground)] hover:bg-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-2">
              <a
                href="#early-access"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-center text-sm font-semibold text-[color:var(--background)]"
              >
                Get Early Access
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
