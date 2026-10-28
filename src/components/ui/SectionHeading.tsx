import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {kicker && (
        <span className="block text-xs font-mono font-medium tracking-wider uppercase text-primary-theme mb-2">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-canvas-text [text-wrap:balance]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-theme leading-relaxed [text-wrap:balance]">
          {description}
        </p>
      )}
    </div>
  );
};
