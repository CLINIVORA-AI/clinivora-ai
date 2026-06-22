import { motion } from "framer-motion";
import {
  Activity, Brain, FileSearch, MessageSquare, Eye, LineChart,
  Cpu, Sparkles, Database, Languages, Bot, Cloud,
  ShieldCheck, Gauge, Layers, Heart, Zap, Lock,
  Github, Linkedin, Mail, Copy, ArrowUpRight, Check,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";

/* -------------------------------- helpers -------------------------------- */

export function SectionHeader({
  eyebrow, title, description, align = "center",
}: {
  eyebrow?: string; title: string; description?: string; align?: "center" | "left";
}) {
  return (
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--muted-foreground)] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)] animate-pulse-soft" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-[44px] md:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-[color:var(--muted-foreground)]">
          {description}
        </p>
      )}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.2, 0.7, 0.2, 1] as const },
  }),
};

/* ------------------------------ Trust Badges ------------------------------ */

const BADGES = [
  "Machine Learning",
  "Explainable AI",
  "Clinical Analytics",
  "Medical Intelligence",
  "Intelligent Agents",
  "Preventive Healthcare",
];

export function TrustBadges() {
  return (
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {BADGES.map((b, i) => (
          <motion.span
            key={b}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-full px-3.5 py-1.5 text-[12.5px] font-medium text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--foreground)]"
          >
            {b}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- Mission -------------------------------- */

export function Mission() {
  return (
    <section className="relative py-28 sm:py-36">
      <SectionHeader
        eyebrow="Mission"
        title="Healthcare intelligence, made understandable."
        description="Clinivora AI exists to make healthcare intelligence more accessible through artificial intelligence — building systems that help individuals understand health risks, interpret medical information, and make informed decisions through explainable and trustworthy AI."
      />
    </section>
  );
}

/* -------------------------- Architecture Diagram ------------------------- */

const ARCH = [
  { title: "Health Data", desc: "Lab results, vitals, biomarkers", icon: Database },
  { title: "Machine Learning Models", desc: "Predictive risk inference", icon: Brain },
  { title: "Explainable AI Layer", desc: "Feature-level transparency", icon: Eye },
  { title: "Clinical Reasoning Engine", desc: "Medical knowledge grounding", icon: Cpu },
  { title: "Actionable Insights", desc: "Personalised guidance", icon: Sparkles },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative py-28">
      <SectionHeader
        eyebrow="Architecture"
        title="Clinical Intelligence, end-to-end."
        description="A transparent pipeline from raw health signals to interpretable, trustworthy insights."
      />
      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="glass-strong noise relative overflow-hidden rounded-3xl p-6 sm:p-10">
          <div className="absolute inset-x-0 top-0 h-px brand-gradient" />
          <ol className="grid gap-5 md:grid-cols-5">
            {ARCH.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative"
                >
                  <div className="glass rounded-2xl p-5 hover-lift">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--primary)]/12 text-[color:var(--primary)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-foreground)]">
                      Step {i + 1}
                    </p>
                    <h3 className="font-display text-base font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-1 text-[13px] text-[color:var(--muted-foreground)]">{step.desc}</p>
                  </div>
                  {i < ARCH.length - 1 && (
                    <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 md:block">
                      <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                        <line x1="0" y1="7" x2="22" y2="7" stroke="var(--primary)"
                          strokeWidth="1.4" className="animate-dash-flow" strokeLinecap="round" />
                        <path d="M20 2 L26 7 L20 12" stroke="var(--primary)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Platform ------------------------------- */

const PLATFORM = [
  { icon: Heart, title: "Heart Risk Assessment", desc: "Advanced machine learning models for early cardiovascular risk screening.", span: "lg:col-span-2" },
  { icon: Activity, title: "Chronic Kidney Disease Intelligence", desc: "Explainable AI systems for identifying potential CKD indicators." },
  { icon: FileSearch, title: "Medical Report Intelligence", desc: "Transform complex laboratory reports into understandable clinical insights." },
  { icon: MessageSquare, title: "AI Health Assistant", desc: "Conversational healthcare guidance powered by intelligent language models." },
  { icon: Eye, title: "Explainable AI", desc: "Transparent predictions with feature-level explanations and interpretable analytics." },
  { icon: LineChart, title: "Health Analytics Dashboard", desc: "Track assessments, health trends, and personalised intelligence over time.", span: "lg:col-span-2" },
];

export function Platform() {
  return (
    <section id="platform" className="relative py-28">
      <SectionHeader
        eyebrow="Platform"
        title="Clinical Intelligence Platform"
        description="A suite of AI-native modules engineered for preventive, explainable, and trustworthy healthcare."
      />
      <div className="mx-auto mt-14 max-w-7xl px-6">
        <div className="grid auto-rows-fr gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORM.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--card)] p-6 hover-lift ${f.span ?? ""}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "radial-gradient(circle, var(--primary-glow), transparent 70%)" }}
                />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--primary)]/12 text-[color:var(--primary)] transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-[17px] font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--muted-foreground)]">
                    {f.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Why Clinivora ------------------------------- */

const WHY = [
  { icon: Gauge, title: "Accurate", desc: "Advanced predictive healthcare models." },
  { icon: Eye, title: "Explainable", desc: "Transparent decision making." },
  { icon: Brain, title: "Intelligent", desc: "Medical language understanding." },
  { icon: ShieldCheck, title: "Preventive", desc: "Early detection and risk awareness." },
  { icon: Layers, title: "Scalable", desc: "Cloud-native healthcare infrastructure." },
  { icon: Lock, title: "Secure", desc: "Privacy-first AI architecture." },
];

export function WhyClinivora() {
  return (
    <section id="why" className="relative py-28">
      <SectionHeader
        eyebrow="Why Clinivora"
        title="Engineered for trust at every layer."
        description="Six commitments that shape every model, interface, and decision we ship."
      />
      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={fadeUp}
                className="group relative rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--card)] p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--primary)]/30"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--primary)]/15 to-[color:var(--secondary)]/15 text-[color:var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-[16px] font-semibold tracking-tight">{w.title}</h3>
                </div>
                <p className="mt-3 text-[14px] text-[color:var(--muted-foreground)]">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Technology ------------------------------ */

const TECH = [
  { icon: Brain, title: "Machine Learning", desc: "Modern predictive models built on rigorous evaluation." },
  { icon: Eye, title: "Explainable AI", desc: "Interpretability across every prediction." },
  { icon: Database, title: "Clinical Data Analytics", desc: "Streaming, batch, and longitudinal pipelines." },
  { icon: Languages, title: "Natural Language Processing", desc: "Medical-grade language understanding." },
  { icon: Bot, title: "Intelligent Agents", desc: "Reasoning agents for clinical workflows." },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Secure, scalable, and compliance-aware by design." },
];

export function Technology() {
  return (
    <section id="technology" className="relative py-28">
      <SectionHeader
        eyebrow="Technology"
        title="Built on modern AI."
        description="The foundation layer that powers our clinical intelligence platform."
      />
      <div className="mx-auto mt-14 max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--card)] p-6 hover-lift"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(80% 60% at 0% 0%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 60%)",
                  }}
                />
                <div className="relative flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--background)] text-[color:var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-[16px] font-semibold tracking-tight">{t.title}</h3>
                    <p className="mt-1 text-[14px] text-[color:var(--muted-foreground)]">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Roadmap -------------------------------- */

const ROADMAP = [
  { phase: "Phase 1", title: "Platform Foundation", desc: "Core infrastructure, data pipelines, and identity." },
  { phase: "Phase 2", title: "CKD Intelligence Engine", desc: "Explainable models for chronic kidney disease screening." },
  { phase: "Phase 3", title: "Medical Report Analyzer", desc: "Lab and clinical document understanding." },
  { phase: "Phase 4", title: "AI Health Copilot", desc: "Conversational, context-aware clinical guidance." },
  { phase: "Phase 5", title: "Multi-Disease Intelligence Suite", desc: "Expansion across cardiometabolic and preventive domains." },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-28">
      <SectionHeader
        eyebrow="Roadmap"
        title="A staged path to clinical-grade intelligence."
        description="A focused, transparent build sequence — shipped iteratively, validated rigorously."
      />
      <div className="mx-auto mt-14 max-w-4xl px-6">
        <ol className="relative">
          <div
            aria-hidden
            className="absolute left-[19px] top-0 h-full w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--primary) 10%, var(--secondary) 90%, transparent)",
            }}
          />
          {ROADMAP.map((r, i) => (
            <motion.li
              key={r.title}
              custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative pb-10 pl-14"
            >
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-[color:var(--hairline)] bg-[color:var(--background)] text-[12px] font-semibold text-[color:var(--primary)] shadow-sm">
                0{i + 1}
              </span>
              <span
                className="absolute left-[14px] top-[14px] block h-3 w-3 rounded-full"
                style={{ background: "var(--primary)", boxShadow: "0 0 0 6px color-mix(in oklab, var(--primary) 18%, transparent)" }}
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                {r.phase}
              </p>
              <h3 className="mt-1 font-display text-[19px] font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-1.5 text-[14.5px] text-[color:var(--muted-foreground)]">{r.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ----------------------------- Core Capabilities ----------------------------- */

const CAPS = [
  { icon: Zap, title: "AI-Powered Screening", desc: "Rapid, model-driven risk indicators across key conditions." },
  { icon: Eye, title: "Explainable Predictions", desc: "Every output paired with feature-level rationale." },
  { icon: FileSearch, title: "Medical Report Intelligence", desc: "Structured understanding of unstructured clinical text." },
  { icon: Brain, title: "Clinical Decision Support", desc: "Guidance designed to assist — not replace — expertise." },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-28">
      <SectionHeader
        eyebrow="Core Capabilities"
        title="What Clinivora AI does."
        description="Capability primitives that compose into every product surface we ship."
      />
      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {CAPS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={fadeUp}
                className="group flex items-start gap-5 rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--card)] p-7 hover-lift"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl brand-gradient text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-1.5 text-[14.5px] text-[color:var(--muted-foreground)]">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Contact -------------------------------- */

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy. Try again.");
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <SectionHeader
        eyebrow="Contact"
        title="Get in touch."
        description="Interested in healthcare AI, partnerships, research collaborations, or early access? We'd love to hear from you."
      />
      <div className="mx-auto mt-14 grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        <ContactCard
          icon={<Mail className="h-5 w-5" />}
          title="Email"
          subtitle="For partnerships and inquiries"
          actionLabel={copied ? "Copied" : "Copy Email"}
          actionIcon={copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          onClick={copyEmail}
        />
        <ContactCard
          icon={<Github className="h-5 w-5" />}
          title="GitHub"
          subtitle="Follow our engineering"
          actionLabel="Open GitHub"
          actionIcon={<ArrowUpRight className="h-4 w-4" />}
          href={siteConfig.links.github}
        />
        <ContactCard
          icon={<Linkedin className="h-5 w-5" />}
          title="LinkedIn"
          subtitle="Follow our journey"
          actionLabel="Open LinkedIn"
          actionIcon={<ArrowUpRight className="h-4 w-4" />}
          href={siteConfig.links.linkedin}
        />
      </div>
    </section>
  );
}

function ContactCard({
  icon, title, subtitle, actionLabel, actionIcon, href, onClick,
}: {
  icon: React.ReactNode; title: string; subtitle: string;
  actionLabel: string; actionIcon: React.ReactNode;
  href?: string; onClick?: () => void;
}) {
  const inner = (
    <div className="glass-strong noise relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--primary)]/30">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--background)] text-[color:var(--primary)]">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-[16px] font-semibold tracking-tight">{title}</h3>
          <p className="text-[12.5px] text-[color:var(--muted-foreground)]">{subtitle}</p>
        </div>
      </div>
      <div className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-[13px] font-semibold text-[color:var(--background)]">
        {actionLabel}
        {actionIcon}
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="block h-full text-left">
      {inner}
    </button>
  );
}
