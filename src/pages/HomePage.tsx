import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Code2, Server, Database, ShieldCheck, Check } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { SITE_CONFIG } from '../data/site';
import { PROJECTS } from '../data/projects';
import { SERVICES, ENGAGEMENT_PROCESS } from '../data/services';
import { SKILL_GROUPS } from '../data/skills';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AvailabilityIndicator } from '../components/ui/AvailabilityIndicator';
import { ProjectCard } from '../components/projects/ProjectCard';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [heroImageError, setHeroImageError] = useState(false);
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Hero Section (Split-Screen Hero with 1440px desktop baseline) */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Technical Kicker + Availability */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono tracking-wider uppercase text-primary-theme font-medium">
                  FULL-STACK DEVELOPER / DIGITAL PRODUCT ENGINEERING
                </span>
                <span className="text-muted-theme/60 hidden sm:inline" aria-hidden="true">·</span>
                <AvailabilityIndicator compact />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-canvas-text [text-wrap:balance] leading-[1.12]">
                {SITE_CONFIG.tagline}
              </h1>

              {/* Supporting Lead Description */}
              <p className="text-lg sm:text-xl text-muted-theme max-w-2xl leading-relaxed [text-wrap:balance]">
                {SITE_CONFIG.supportingMessage}
              </p>

              {/* Two Clear Conversion Paths */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => navigate('/contact')}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => navigate('/work')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>
              </div>

              {/* Selected Technology Indicators (clean text list) */}
              <div className="pt-6 border-t border-theme-subtle">
                <div className="text-xs font-mono text-muted-theme mb-2">
                  CORE STACK FOCUS
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-canvas-text font-mono">
                  <span>React 19 & Next.js</span>
                  <span className="text-muted-theme/50" aria-hidden="true">/</span>
                  <span>TypeScript</span>
                  <span className="text-muted-theme/50" aria-hidden="true">/</span>
                  <span>Node.js & Express</span>
                  <span className="text-muted-theme/50" aria-hidden="true">/</span>
                  <span>PostgreSQL</span>
                  <span className="text-muted-theme/50" aria-hidden="true">/</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Container */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl border border-theme bg-surface-elevated overflow-hidden shadow-2xl">
                {!heroImageError ? (
                  <img
                    src="/src/assets/images/hero_developer_workspace_1793173842769.jpg"
                    alt="Developer workstation setup showing modern code editor and metrics dashboard"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImageError(true)}
                    className="w-full h-auto object-cover aspect-video lg:aspect-4/3"
                  />
                ) : (
                  <div className="aspect-4/3 w-full flex flex-col justify-center items-center p-8 bg-surface-elevated text-center">
                    <Code2 className="w-12 h-12 text-primary-theme mb-3" />
                    <span className="text-base font-bold text-canvas-text">Production Code & Systems</span>
                    <span className="text-xs text-muted-theme mt-1">High-performance digital engineering</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-mono">
                  <span>Architecture & Frontend</span>
                  <span>Zero-Jank Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Metrics KPI Strip below hero split */}
          <div className="mt-16 pt-8 border-t border-theme grid grid-cols-2 md:grid-cols-4 gap-6">
            {SITE_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-surface border border-theme">
                <div className="text-2xl sm:text-3xl font-extrabold text-canvas-text font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-theme mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Selected Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            kicker="PROVEN SOFTWARE"
            title="Featured Engineering Projects"
            description="Explore selected full-stack systems, SaaS tools, and developer platforms engineered for speed and reliability."
            className="mb-0"
          />
          <Button
            variant="secondary"
            size="md"
            onClick={() => navigate('/work')}
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 self-start sm:self-end"
          >
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            kicker="CAPABILITIES & SCOPE"
            title="How I Help Founders & Teams Ship"
            description="From early-stage MVPs to complex system integrations, I provide full-cycle digital product engineering."
            className="mb-0"
          />
          <Button
            variant="secondary"
            size="md"
            onClick={() => navigate('/services')}
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 self-start sm:self-end"
          >
            All 7 Services & Process
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((service, idx) => (
            <div
              key={service.id}
              className="p-6 rounded-xl border border-theme bg-surface hover:border-primary-theme/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-primary-theme font-medium">
                  0{idx + 1}. CAPABILITY
                </span>
                <h3 className="text-lg font-bold text-canvas-text mt-2 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-theme leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-4 pt-4 border-t border-theme-subtle">
                  <div className="text-xs font-mono uppercase text-muted-theme mb-2">
                    Primary Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-canvas-text">
                    {service.deliverables.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary-theme shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-theme flex items-center justify-between">
                <span className="text-xs font-mono text-muted-theme">Milestone-based</span>
                <button
                  onClick={() => navigate('/services')}
                  className="text-xs font-semibold text-primary-theme hover:underline cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Full-Stack Technical Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="TECHNICAL DEPTH"
          title="Full-Stack Technical Capabilities"
          description="A balanced engineering foundation across modern client-side architectures, resilient server runtimes, and scalable databases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, idx) => {
            const icons = [
              <Code2 key="code" className="w-5 h-5 text-primary-theme" />,
              <Server key="server" className="w-5 h-5 text-primary-theme" />,
              <Database key="db" className="w-5 h-5 text-primary-theme" />,
              <ShieldCheck key="shield" className="w-5 h-5 text-primary-theme" />,
            ];

            return (
              <div
                key={group.category}
                className="p-6 rounded-xl border border-theme bg-surface flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  {icons[idx % icons.length]}
                  <h3 className="text-base font-bold text-canvas-text">{group.category}</h3>
                </div>
                <p className="text-xs text-muted-theme mb-4 leading-relaxed">
                  {group.description}
                </p>

                <div className="mt-auto space-y-2.5 pt-4 border-t border-theme-subtle">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-canvas-text">{skill.name}</span>
                        <span className="font-mono text-[10px] text-primary-theme font-medium">
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="text-[11px] text-muted-theme mt-0.5">{skill.focus}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Development Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="HOW WE WORK"
          title="Structured Engagement Process"
          description="Clear communication, transparent milestones, and preview deployments from kickoff to launch."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_PROCESS.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-xl border border-theme bg-surface relative"
            >
              <div className="text-2xl font-mono font-extrabold text-primary-theme mb-2">
                {item.step}.
              </div>
              <h3 className="text-base font-bold text-canvas-text mb-2">{item.title}</h3>
              <p className="text-sm text-muted-theme leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Short Personal Intro & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-theme bg-surface p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-theme shadow-lg bg-surface-elevated">
                <img
                  src="/src/assets/images/avatar_developer_portrait_1793173844576.jpg"
                  alt="Muhammad Azeem, Full-Stack Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-primary-theme uppercase tracking-wider font-medium">
                PHILOSOPHY & PRINCIPLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-canvas-text [text-wrap:balance]">
                Engineering with empathy for users and respect for architecture.
              </h2>
              <p className="text-sm sm:text-base text-muted-theme leading-relaxed">
                I believe great digital products require both thoughtful product intuition and unyielding technical rigor. Too many projects suffer from either over-engineered abstractions that never ship or quick messy hacks that collapse under user load.
              </p>
              <p className="text-sm sm:text-base text-muted-theme leading-relaxed">
                My approach focuses on clean TypeScript domain modeling, accessible user interfaces, strict database constraints, and measurable performance benchmarks.
              </p>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigate('/about')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Read Full Background & Principles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Project-Fit Section ("When We Are a Great Fit") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="COLLABORATION FIT"
          title="Project Fit & Working Compatibility"
          description="Transparency upfront ensures we build high-impact software efficiently and enjoyably."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Great Fit */}
          <div className="p-6 sm:p-8 rounded-xl border border-theme bg-surface space-y-4">
            <h3 className="text-lg font-bold text-canvas-text flex items-center gap-2">
              <Check className="w-5 h-5 text-primary-theme" />
              <span>When We Are a Great Fit</span>
            </h3>
            <ul className="space-y-3 text-sm text-muted-theme">
              {SITE_CONFIG.fit.idealClients.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-primary-theme font-bold shrink-0 mt-0.5">·</span>
                  <span className="leading-relaxed text-canvas-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a Fit */}
          <div className="p-6 sm:p-8 rounded-xl border border-theme bg-surface space-y-4">
            <h3 className="text-lg font-bold text-canvas-text flex items-center gap-2">
              <span className="text-red-400 font-bold">✕</span>
              <span>When We May Not Be the Right Fit</span>
            </h3>
            <ul className="space-y-3 text-sm text-muted-theme">
              {SITE_CONFIG.fit.notFit.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">·</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Final High-Converting Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-theme bg-surface-elevated p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-primary-theme font-medium">
              READY TO BUILD?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-canvas-text [text-wrap:balance]">
              Let’s turn your product vision into production reality.
            </h2>
            <p className="text-base text-muted-theme leading-relaxed [text-wrap:balance]">
              Whether you need an MVP engineered in weeks, an internal dashboard rebuilt, or a senior engineer for your team, let’s discuss timeline and scope.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => navigate('/contact')}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/services')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Services & Scope
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
