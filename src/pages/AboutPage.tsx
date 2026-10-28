import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Check, Compass, Cpu, Code2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { SKILL_GROUPS } from '../data/skills';
import { useRouter } from '../context/RouterContext';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  const principles = [
    {
      title: 'Type Safety from Database to DOM',
      description:
        'Runtime bugs are expensive. By coupling strict TypeScript with synchronized Zod contracts and relational database constraints, software becomes self-documenting and resilient.',
    },
    {
      title: 'Performance as a Feature, Not an Afterthought',
      description:
        'Fast applications retain users. I optimize Core Web Vitals, minimize client bundle weights, and isolate heavy workloads before they reach production.',
    },
    {
      title: 'Empathy for Users, Respect for Systems',
      description:
        'A beautiful interface is worthless if the backend crashes; a bulletproof backend is ignored if the interface is frustrating. I bridge design intuition with system architecture.',
    },
    {
      title: 'Honest Scoping & Asynchronous Cadence',
      description:
        'Realistic expectations and clear written communication eliminate the stress of software projects. I ship in verifiable milestones with working preview builds.',
    },
  ];

  const milestones = [
    {
      year: '2026',
      title: 'Full-Stack Systems & SaaS MVP Architecture',
      description:
        'Focusing on high-throughput TypeScript runtimes, distributed cloud monitoring, microservice observability tooling, and full-stack product launches for global clients and startups.',
    },
    {
      year: '2025',
      title: 'Headless E-Commerce & Developer Workbench Tooling',
      description:
        'Created open-source API testing workbenches (APIForge) and engineered high-conversion headless storefronts with sub-second page transitions.',
    },
    {
      year: '2024',
      title: 'Production Web Applications & API Integrations',
      description:
        'Engineered custom admin dashboards, internal automation tools, third-party webhook integrations, and multi-tenant PostgreSQL schemas.',
    },
    {
      year: '2023',
      title: 'Modern Frontend Architecture & Component Systems',
      description:
        'Specialized in React, Next.js, and design token architectures, building accessible, WCAG-compliant design systems for digital teams.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Intro Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-theme">
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-theme shadow-2xl bg-surface-elevated">
            <img
              src="/src/assets/images/avatar_developer_portrait_1793173844576.jpg"
              alt="Muhammad Azeem, Full-Stack Developer"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-primary-theme font-medium">
            FULL-STACK DEVELOPER & PRODUCT ENGINEER
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-canvas-text [text-wrap:balance]">
            Hi, I’m Muhammad Azeem.
          </h1>
          <p className="text-base sm:text-lg text-muted-theme leading-relaxed">
            I am a full-stack software engineer who specializes in translating ambiguous product concepts into fast, dependable, production-ready digital products.
          </p>
          <p className="text-sm sm:text-base text-muted-theme leading-relaxed">
            Whether collaborating with startup founders to launch a validated SaaS MVP or partnering with established businesses to modernize web infrastructure, I care deeply about both the intuitive user experience in the browser and the resilience of the underlying databases and APIs.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-theme hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>{SITE_CONFIG.email}</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-theme text-muted-theme hover:text-canvas-text hover:bg-surface-elevated transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-theme text-muted-theme hover:text-canvas-text hover:bg-surface-elevated transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Working Principles */}
      <section className="space-y-8">
        <SectionHeading
          kicker="HOW I THINK"
          title="Core Engineering Principles"
          description="Guidelines that govern every system I architect, from initial schema draft to final deployment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-theme bg-surface space-y-3"
            >
              <div className="flex items-center gap-2 text-primary-theme font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>0{idx + 1}. {principle.title}</span>
              </div>
              <p className="text-sm text-muted-theme leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specialization Deep Dive */}
      <section className="space-y-8">
        <SectionHeading
          kicker="SPECIALIZED FOCUS"
          title="Areas of Specialization"
          description="Where I generate the highest leverage for teams and products."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-theme bg-surface space-y-3">
            <Cpu className="w-6 h-6 text-primary-theme" />
            <h3 className="text-base font-bold text-canvas-text">SaaS MVP Engineering</h3>
            <p className="text-xs sm:text-sm text-muted-theme leading-relaxed">
              Full lifecycle from auth and subscription billing (Stripe) to tenant isolation and core features built for immediate customer validation.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-theme bg-surface space-y-3">
            <Code2 className="w-6 h-6 text-primary-theme" />
            <h3 className="text-base font-bold text-canvas-text">Complex Frontend Systems</h3>
            <p className="text-xs sm:text-sm text-muted-theme leading-relaxed">
              Reactive dashboards, custom canvas/SVG visualizations, virtualized data tables, and fluid theme token architectures.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-theme bg-surface space-y-3">
            <Check className="w-6 h-6 text-primary-theme" />
            <h3 className="text-base font-bold text-canvas-text">Resilient APIs & Backends</h3>
            <p className="text-xs sm:text-sm text-muted-theme leading-relaxed">
              RESTful and event-stream APIs, webhook ingestion with idempotency, PostgreSQL connection pooling, and structured error handling.
            </p>
          </div>
        </div>
      </section>

      {/* Realistic Journey Milestones */}
      <section className="space-y-8">
        <SectionHeading
          kicker="EXPERIENCE & TRAJECTORY"
          title="Engineering Trajectory & Milestones"
          description="A verifiable record of deliberate technical progression and software craftsmanship."
        />

        <div className="space-y-6 border-l-2 border-theme pl-6 sm:pl-8 ml-2">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-primary-theme" />

              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-primary-theme">
                  {m.year}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-canvas-text">
                  {m.title}
                </h3>
                <p className="text-sm text-muted-theme leading-relaxed max-w-2xl">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Contact CTA */}
      <section className="p-8 sm:p-12 rounded-2xl border border-theme bg-surface text-center space-y-4">
        <h3 className="text-2xl font-bold text-canvas-text">
          Looking for a full-stack engineer for your team or product?
        </h3>
        <p className="text-sm sm:text-base text-muted-theme max-w-xl mx-auto leading-relaxed">
          I am currently open to high-impact freelance projects, contract engagements, and select remote roles.
        </p>
        <div className="pt-2">
          <Button
            size="lg"
            variant="primary"
            onClick={() => navigate('/contact')}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
};
