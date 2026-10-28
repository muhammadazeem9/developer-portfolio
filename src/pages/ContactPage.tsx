import React from 'react';
import { Mail, Github, Linkedin, Clock, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/forms/ContactForm';
import { AvailabilityIndicator } from '../components/ui/AvailabilityIndicator';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Top Header */}
      <div className="pb-6 border-b border-theme">
        <SectionHeading
          kicker="DIRECT INQUIRIES & COLLABORATION"
          title="Let’s Discuss Your Next Digital Product"
          description="Whether you have a scoped specification ready for immediate implementation or an early product concept to shape, I am available to evaluate feasibility and architecture."
          className="mb-0"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct channels and expectations */}
        <div className="lg:col-span-5 space-y-8">
          {/* Availability Status */}
          <div className="p-6 rounded-xl border border-theme bg-surface space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-primary-theme font-medium">
              CURRENT STATUS
            </div>
            <AvailabilityIndicator />
            <p className="text-xs text-muted-theme leading-relaxed pt-1">
              Currently accepting client scopes for Q2 and Q3 2026. Fast turnaround on preliminary architectural assessments and feasibility reviews.
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="p-6 rounded-xl border border-theme bg-surface space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-theme">
              DIRECT EMAIL INBOX
            </div>
            <div>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-base font-bold text-primary-theme hover:underline break-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <p className="text-xs text-muted-theme mt-1 leading-relaxed">
                Prefer direct email over web forms? Send your PRD or project brief directly to my inbox anytime.
              </p>
            </div>

            <div className="pt-2 border-t border-theme-subtle flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted-theme hover:text-canvas-text transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <span className="text-muted-theme/40" aria-hidden="true">·</span>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted-theme hover:text-canvas-text transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="p-6 rounded-xl border border-theme bg-surface-elevated space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-canvas-text font-bold">
              What Happens Next?
            </h3>
            <ol className="space-y-3 text-xs sm:text-sm text-muted-theme">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface border border-theme text-primary-theme flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                  1
                </span>
                <span className="leading-snug">
                  <strong className="text-canvas-text">Review within 24 hours:</strong> I analyze your requirements, tech stack needs, and timeline.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface border border-theme text-primary-theme flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                  2
                </span>
                <span className="leading-snug">
                  <strong className="text-canvas-text">Introductory Discussion:</strong> A focused 20-minute video or async call to align on architecture and scope.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-surface border border-theme text-primary-theme flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                  3
                </span>
                <span className="leading-snug">
                  <strong className="text-canvas-text">Milestone Proposal:</strong> Clear scope breakdown with deliverables, milestone pricing, and launch dates.
                </span>
              </li>
            </ol>
          </div>

          {/* Privacy & Security Notice */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-theme text-xs text-muted-theme">
            <ShieldCheck className="w-5 h-5 text-primary-theme shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Your inquiry and intellectual property are treated with absolute confidentiality. Submissions are processed through encrypted server endpoints with zero third-party telemetry.
            </p>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-theme bg-surface shadow-xl">
          <div className="mb-6 pb-4 border-b border-theme">
            <h2 className="text-xl font-bold text-canvas-text">Project Inquiry Form</h2>
            <p className="text-xs sm:text-sm text-muted-theme mt-1">
              Fill out this form to provide initial context on your project requirements.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};
