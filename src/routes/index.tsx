import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { BackgroundFX } from "@/components/site/background-fx";
import { HeroVisual } from "@/components/site/hero-visual";
import { WaitlistForm } from "@/components/site/waitlist-form";
import {
  TrustBadges, Mission, Architecture, Platform, WhyClinivora,
  Technology, Roadmap, Capabilities, Contact, SectionHeader,
} from "@/components/site/sections";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clinivora AI — AI-Native Clinical Intelligence for Preventive Healthcare" },
      {
        name: "description",
        content:
          "Clinivora AI builds intelligent healthcare systems that turn medical data into actionable insights through machine learning, explainable AI, and clinical analytics.",
      },
      { property: "og:title", content: "Clinivora AI — Clinical Intelligence Platform" },
      {
        property: "og:description",
        content:
          "AI-native clinical intelligence for preventive healthcare. Explainable, accurate, and built on modern AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClinivoraPage,
});

function ClinivoraPage() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
        <BackgroundFX />
        <Navbar />

        <main>
          <Hero />
          <section className="relative -mt-6 pb-20">
            <TrustBadges />
          </section>
          <Mission />
          <Architecture />
          <Platform />
          <WhyClinivora />
          <Technology />
          <Roadmap />
          <Capabilities />
          <EarlyAccess />
          <Contact />
        </main>

        <Footer />
        <Toaster
          position="bottom-right"
          theme="system"
          toastOptions={{
            classNames: {
              toast:
                "!bg-[color:var(--card)] !text-[color:var(--foreground)] !border-[color:var(--hairline)]",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] px-3 py-1 text-[12px] font-medium text-[color:var(--muted-foreground)] backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--primary)]" />
            Introducing {siteConfig.name}
            <span className="mx-1 h-1 w-1 rounded-full bg-[color:var(--muted-foreground)]/40" />
            Early access open
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-6 font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[56px] md:text-[68px]"
          >
            <span className="text-gradient">AI-Native</span>{" "}
            <span>Clinical Intelligence</span>{" "}
            <span className="text-[color:var(--muted-foreground)]">for Preventive Healthcare.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-[color:var(--muted-foreground)]"
          >
            Building intelligent healthcare systems that transform medical data into
            actionable insights through machine learning, explainable AI, clinical
            analytics, and intelligent decision support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#platform"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-3 text-[14px] font-semibold text-[color:var(--background)] transition-all hover:shadow-lg hover:shadow-[color:var(--primary)]/25"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#early-access"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] px-5 py-3 text-[14px] font-semibold text-[color:var(--foreground)] backdrop-blur transition-all hover:border-[color:var(--primary)]/40"
            >
              Join Early Access
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[color:var(--muted-foreground)]"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)] animate-pulse-soft" />
              Privacy-first AI architecture
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--secondary)] animate-pulse-soft" />
              Explainable by design
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary-glow)] animate-pulse-soft" />
              Cloud-native infrastructure
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mx-auto w-full"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ Early Access ------------------------------ */

function EarlyAccess() {
  return (
    <section id="early-access" className="relative py-28">
      <SectionHeader
        eyebrow="Early Access"
        title="Be part of the first cohort."
        description="Join the early access program and help shape an AI-native clinical intelligence platform from day one."
      />
      <div className="mx-auto mt-12 max-w-3xl px-6">
        <WaitlistForm />
      </div>
    </section>
  );
}
