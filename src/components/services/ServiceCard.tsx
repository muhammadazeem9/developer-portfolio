import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { ServiceItem } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';

export const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({
  service,
  index,
}) => {
  const { navigate } = useRouter();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-theme bg-surface p-6 sm:p-8 hover:border-primary-theme/50 transition-all duration-200">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono text-primary-theme font-medium tracking-wider">
            {String(index + 1).padStart(2, '0')}. SERVICE
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-canvas-text mt-1">
            {service.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-muted-theme max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        <div className="shrink-0 pt-1">
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate(`/contact?service=${encodeURIComponent(service.id)}`)}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Inquire for Scope
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-theme-subtle">
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-muted-theme mb-2">
            Ideal Client
          </h4>
          <p className="text-sm text-canvas-text leading-relaxed">
            {service.idealFor}
          </p>

          <h4 className="text-xs font-mono uppercase tracking-wider text-muted-theme mt-4 mb-2">
            Problem Solved
          </h4>
          <p className="text-sm text-muted-theme leading-relaxed">
            {service.problemSolved}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-muted-theme mb-2">
            Key Deliverables
          </h4>
          <ul className="space-y-2 text-sm text-canvas-text">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-theme shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expandable Technical & Workflow Deep Dive */}
      {expanded && (
        <div className="mt-6 pt-6 border-t border-theme space-y-6 animate-fadeIn">
          {service.deliverables.length > 3 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-theme mb-2">
                Additional Deliverables
              </h4>
              <ul className="space-y-2 text-sm text-canvas-text">
                {service.deliverables.slice(3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-theme shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-theme mb-2">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-theme">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-surface-elevated border border-theme text-canvas-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-theme mb-2">
              Execution Workflow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-theme">
              {service.workflow.map((step, idx) => (
                <div key={idx} className="p-2.5 rounded bg-surface-elevated border border-theme-subtle">
                  <span className="font-mono text-primary-theme mr-1.5 font-bold">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="text-canvas-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-theme mb-2">
              What’s Needed to Begin
            </h4>
            <ul className="list-disc list-inside text-xs text-muted-theme space-y-1">
              {service.gettingStartedRequirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Footer bar with Pricing Guidance and Expand Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-theme-subtle">
        <div className="text-xs font-mono text-muted-theme">
          <span className="text-canvas-text font-semibold">Scope: </span>
          {service.pricingGuidance}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-theme hover:underline cursor-pointer"
        >
          <span>{expanded ? 'Show Less Details' : 'View Full Scope & Workflow'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
