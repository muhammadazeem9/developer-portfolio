import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Code2,
  Server,
  Database,
  ShieldCheck,
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/projects/ProjectCard';

export const ProjectDetailsPage: React.FC<{ slug?: string }> = ({ slug }) => {
  const { navigate } = useRouter();
  const [imageError, setImageError] = useState(false);

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-bold text-canvas-text">Case Study Not Found</h1>
        <p className="text-muted-theme max-w-md mx-auto">
          The requested project case study could not be located. It may have been relocated or updated.
        </p>
        <div className="pt-4">
          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('/work')}
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
          >
            Back to All Projects
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Top Back Navigation */}
      <div>
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-theme hover:text-canvas-text transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-theme">
          <span className="text-primary-theme font-semibold">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.kind} Project</span>
          <span aria-hidden="true">·</span>
          <span>Timeline: {project.timeline}</span>
          <span aria-hidden="true">·</span>
          <span>Role: {project.role}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-canvas-text [text-wrap:balance]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-muted-theme leading-relaxed [text-wrap:balance]">
          {project.headline}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Button size="md" variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                Visit Live Product
              </Button>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              <Button size="md" variant="secondary" icon={<Github className="w-4 h-4" />}>
                Inspect Source Code
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Cover / Hero Screenshot */}
      <div className="rounded-2xl border border-theme bg-surface-elevated overflow-hidden shadow-2xl">
        {!imageError ? (
          <img
            src={project.coverImage}
            alt={`${project.title} detailed interface mockup`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-auto object-cover max-h-[540px]"
          />
        ) : (
          <div className="aspect-video w-full flex items-center justify-center p-12 bg-surface text-center">
            <span className="text-base font-bold text-canvas-text">{project.title}</span>
          </div>
        )}
      </div>

      {/* Metrics Row */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl border border-theme bg-surface">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 text-left">
              <div className="text-xs font-mono text-muted-theme">{m.label}</div>
              <div className="text-2xl font-extrabold text-canvas-text font-mono tabular-nums mt-1">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Overview & Problem Statement */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4">
        <div className="md:col-span-7 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-canvas-text mb-3">Project Overview</h2>
            <p className="text-muted-theme text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-canvas-text mb-3">The Problem</h2>
            <p className="text-muted-theme text-sm sm:text-base leading-relaxed">
              {project.problem}
            </p>
          </section>
        </div>

        {/* Goals & Constraints */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-xl border border-theme bg-surface space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary-theme font-bold">
              Engineering Goals
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-canvas-text">
              {project.goals.map((g, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-theme shrink-0 mt-0.5" />
                  <span className="leading-snug">{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-theme bg-surface space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-theme font-bold">
              Technical Constraints
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-theme">
              {project.constraints.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary-theme font-bold">·</span>
                  <span className="leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Deep-Dive Technical Architecture */}
      <div className="space-y-8 pt-8 border-t border-theme">
        <h2 className="text-2xl font-bold text-canvas-text flex items-center gap-2">
          <Layers className="w-6 h-6 text-primary-theme" />
          <span>Architecture & Technical Implementation</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-theme bg-surface space-y-3">
            <div className="flex items-center gap-2 text-primary-theme font-semibold text-sm">
              <Code2 className="w-4 h-4" />
              <span>Frontend Architecture</span>
            </div>
            <p className="text-sm text-muted-theme leading-relaxed">
              {project.frontendImplementation}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-theme bg-surface space-y-3">
            <div className="flex items-center gap-2 text-primary-theme font-semibold text-sm">
              <Server className="w-4 h-4" />
              <span>Backend & Server Runtime</span>
            </div>
            <p className="text-sm text-muted-theme leading-relaxed">
              {project.backendImplementation}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-theme bg-surface space-y-3">
            <div className="flex items-center gap-2 text-primary-theme font-semibold text-sm">
              <Database className="w-4 h-4" />
              <span>Database & API Contracts</span>
            </div>
            <p className="text-sm text-muted-theme leading-relaxed">
              {project.databaseAndApi}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-theme bg-surface space-y-3">
            <div className="flex items-center gap-2 text-primary-theme font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Security & Access Control</span>
            </div>
            <p className="text-sm text-muted-theme leading-relaxed">
              {project.securityAndAuth}
            </p>
          </div>
        </div>
      </div>

      {/* Challenges & Engineering Solutions */}
      <div className="space-y-6 pt-8 border-t border-theme">
        <h2 className="text-2xl font-bold text-canvas-text flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-primary-theme" />
          <span>Key Challenges & Solutions</span>
        </h2>

        <div className="space-y-4">
          {project.challengesAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-theme bg-surface grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-5 space-y-2">
                <div className="text-xs font-mono text-amber-500 font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>CHALLENGE</span>
                </div>
                <p className="text-sm text-canvas-text leading-relaxed font-medium">
                  {item.challenge}
                </p>
              </div>

              <div className="md:col-span-7 space-y-2 border-t md:border-t-0 md:border-l border-theme pt-4 md:pt-0 md:pl-6">
                <div className="text-xs font-mono text-primary-theme font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ENGINEERING SOLUTION</span>
                </div>
                <p className="text-sm text-muted-theme leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Outcomes */}
      <div className="p-8 rounded-xl border border-theme bg-surface-elevated space-y-4">
        <h3 className="text-lg font-bold text-canvas-text">Verified Outcomes & Results</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {project.outcomes.map((outcome, idx) => (
            <li
              key={idx}
              className="p-4 rounded-lg bg-surface border border-theme-subtle text-xs sm:text-sm text-canvas-text leading-relaxed flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-primary-theme shrink-0 mt-0.5" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contextual Project Inquiry CTA */}
      <div className="p-8 sm:p-10 rounded-2xl border border-theme bg-surface text-center space-y-4">
        <h3 className="text-2xl font-bold text-canvas-text">
          Interested in building something similar?
        </h3>
        <p className="text-sm sm:text-base text-muted-theme max-w-xl mx-auto leading-relaxed">
          I apply this same level of architectural discipline, code cleanliness, and performance optimization to client and startup projects.
        </p>
        <div className="pt-2">
          <Button
            size="lg"
            variant="primary"
            onClick={() => navigate(`/contact?referencedProject=${encodeURIComponent(project.title)}`)}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Discuss a Similar Build
          </Button>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-theme">
          <h3 className="text-xl font-bold text-canvas-text">Other Featured Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
