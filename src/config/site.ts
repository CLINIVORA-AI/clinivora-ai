export const siteConfig = {
  name: "Clinivora AI",
  shortName: "Clinivora",
  tagline: "AI-Native Clinical Intelligence for Preventive Healthcare",
  description:
    "Building intelligent healthcare systems that transform medical data into actionable insights through machine learning, explainable AI, and clinical analytics.",
  email: "clinivoraai@gmail.com",
  links: {
    github: "https://github.com/CLINIVORA-AI",
    linkedin: "https://www.linkedin.com/company/clinivora-ai/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
