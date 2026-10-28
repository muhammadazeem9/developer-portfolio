export type ThemeMode = 'dark' | 'light' | 'system';

export type PalettePresetId =
  | 'electric-blue'
  | 'cyber-violet'
  | 'neon-emerald'
  | 'arctic-cyan'
  | 'amber-signal'
  | 'rose-magenta';

export interface PalettePreset {
  id: PalettePresetId;
  name: string;
  description: string;
  primaryDark: string;
  primaryLight: string;
  hoverDark: string;
  hoverLight: string;
  secondaryDark: string;
  secondaryLight: string;
  ring: string;
  subtleAccentDark: string;
  subtleAccentLight: string;
  gradientStart: string;
  gradientEnd: string;
}

export type ProjectCategory =
  | 'Full-Stack Applications'
  | 'SaaS'
  | 'Websites'
  | 'APIs'
  | 'Developer Tools';

export type ProjectKind = 'Personal' | 'Client' | 'Open Source' | 'Prototype';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  headline: string;
  description: string;
  category: ProjectCategory;
  kind: ProjectKind;
  role: string;
  timeline: string;
  featured: boolean;
  coverImage: string;
  thumbnail: string;
  technologies: string[];
  metrics: ProjectMetric[];
  overview: string;
  problem: string;
  goals: string[];
  constraints: string[];
  architecture: string;
  frontendImplementation: string;
  backendImplementation: string;
  databaseAndApi: string;
  securityAndAuth: string;
  challengesAndSolutions: { challenge: string; solution: string }[];
  outcomes: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  idealFor: string;
  problemSolved: string;
  deliverables: string[];
  techStack: string[];
  workflow: string[];
  pricingGuidance: string;
  gettingStartedRequirements: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  description: string;
}
