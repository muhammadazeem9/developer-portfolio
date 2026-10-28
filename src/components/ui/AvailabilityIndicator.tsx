import React from 'react';
import { SITE_CONFIG } from '../../data/site';

interface AvailabilityIndicatorProps {
  className?: string;
  compact?: boolean;
}

export const AvailabilityIndicator: React.FC<AvailabilityIndicatorProps> = ({
  className = '',
  compact = false,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-mono text-muted-theme ${className}`}
      aria-label={`Status: ${SITE_CONFIG.availability}`}
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-primary-theme shrink-0 opacity-80"
        aria-hidden="true"
      />
      <span className="font-medium text-canvas-text">
        {compact ? 'Available for Projects' : SITE_CONFIG.availability}
      </span>
    </div>
  );
};
