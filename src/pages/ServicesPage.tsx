import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { SERVICES, ENGAGEMENT_PROCESS, FAQS } from '../data/services';
import { useRouter } from '../context/RouterContext';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceCard } from '../components/services/ServiceCard';
import { Button } from '../components/ui/Button';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-theme">
        <SectionHeading
          kicker="PRODUCT ENGINEERING SERVICES"
          title="Full-Cycle Engineering for Modern Web Products"
          description="From greenfield SaaS MVPs to high-throughput API integrations and sub-second performance overhauls, I deliver production software built to scale."
          className="mb-0"
        />

        <div className="shrink-0">
          <Button
            size="md"
            variant="primary"
            onClick={() => navigate('/contact')}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Inquire About Availability
          </Button>
        </div>
      </div>

      {/* Services List (7 Services) */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-canvas-text">
            Comprehensive Service Offerings
          </h2>
          <span className="text-xs font-mono text-muted-theme">
            7 Specialized Disciplines
          </span>
        </div>

        <div className="space-y-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Engagement Process */}
      <section className="space-y-8">
        <SectionHeading
          kicker="COLLABORATION METHODOLOGY"
          title="How We Work: The 6-Step Engagement Workflow"
          description="A transparent, milestone-driven framework ensuring clear expectations, zero surprises, and continuous shipping."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_PROCESS.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-xl border border-theme bg-surface relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-mono font-extrabold text-primary-theme block mb-3">
                  {item.step}.
                </span>
                <h3 className="text-base font-bold text-canvas-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-theme leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-theme-subtle flex items-center gap-1.5 text-[11px] font-mono text-muted-theme">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary-theme" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Philosophy Note */}
      <section className="p-8 rounded-2xl border border-theme bg-surface-elevated space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-primary-theme font-medium">
          TRANSPARENT VALUE-BASED PRICING
        </div>
        <h3 className="text-2xl font-bold text-canvas-text">
          Fair, milestone-based commitments with zero hidden fees.
        </h3>
        <p className="text-sm sm:text-base text-muted-theme leading-relaxed max-w-3xl">
          I do not publish arbitrary "fixed package" gimmicks because every serious digital product has distinct architecture, external API integrations, and security constraints. Instead, we define clear milestone scopes so you only pay for agreed deliverables upon satisfactory completion.
        </p>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="space-y-8">
        <SectionHeading
          kicker="TRANSPARENT EXPECTATIONS"
          title="Frequently Asked Questions"
          description="Common questions about project collaboration, communication cadence, code ownership, and warranties."
        />

        <div className="space-y-3 max-w-4xl">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-theme bg-surface overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-canvas-text hover:text-primary-theme transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary-theme shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-theme shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-muted-theme leading-relaxed border-t border-theme-subtle">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="p-8 sm:p-12 rounded-2xl border border-theme bg-surface text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-canvas-text">
          Ready to kick off your project?
        </h3>
        <p className="text-sm sm:text-base text-muted-theme max-w-xl mx-auto leading-relaxed">
          Tell me about your product requirements, desired timeline, and technical constraints.
        </p>
        <div className="pt-2">
          <Button
            size="lg"
            variant="primary"
            onClick={() => navigate('/contact')}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};
