import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { SITE_CONFIG } from '../../data/site';
import { AvailabilityIndicator } from '../ui/AvailabilityIndicator';

export const SiteFooter: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="border-t border-theme bg-surface/60 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-theme">
          {/* Brand & Value summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-lg font-bold tracking-tight text-canvas-text">
              {SITE_CONFIG.name}
            </div>
            <p className="text-sm text-muted-theme max-w-sm leading-relaxed">
              {SITE_CONFIG.supportingMessage}
            </p>
            <div className="pt-2">
              <AvailabilityIndicator />
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-theme">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-muted-theme hover:text-canvas-text transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/work')}
                  className="text-muted-theme hover:text-canvas-text transition-colors cursor-pointer"
                >
                  Featured Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-muted-theme hover:text-canvas-text transition-colors cursor-pointer"
                >
                  Engineering Services & Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-muted-theme hover:text-canvas-text transition-colors cursor-pointer"
                >
                  About & Engineering Principles
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-muted-theme hover:text-canvas-text transition-colors cursor-pointer"
                >
                  Contact & Project Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-theme">
              Direct Contact
            </div>
            <p className="text-sm text-muted-theme leading-relaxed">
              Have an ambitious product or need an experienced full-stack engineer? Let's discuss scope and timeline.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-theme hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>{SITE_CONFIG.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="flex items-center gap-3 pt-3">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-theme text-muted-theme hover:text-canvas-text hover:bg-surface-elevated transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-theme text-muted-theme hover:text-canvas-text hover:bg-surface-elevated transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & technical note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-theme">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className="font-mono text-[11px]">
            WCAG 2.2 AA Compliant · Zero-Telemetry
          </div>
        </div>
      </div>
    </footer>
  );
};
