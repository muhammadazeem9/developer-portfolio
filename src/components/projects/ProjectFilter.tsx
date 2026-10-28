import React from 'react';
import { ProjectCategory } from '../../types';

interface ProjectFilterProps {
  categories: (ProjectCategory | 'All')[];
  selectedCategory: ProjectCategory | 'All';
  onSelectCategory: (cat: ProjectCategory | 'All') => void;
  counts: Record<string, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div
      className="flex items-center gap-1.5 p-1 bg-surface-elevated border border-theme rounded-xl overflow-x-auto max-w-full"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        const count = counts[cat] ?? 0;

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
              isSelected
                ? 'bg-surface text-canvas-text shadow-sm border border-theme font-semibold'
                : 'text-muted-theme hover:text-canvas-text hover:bg-surface/50 border border-transparent'
            }`}
          >
            <span>{cat}</span>
            <span
              className={`ml-1.5 font-mono text-[11px] ${
                isSelected ? 'text-primary-theme font-semibold' : 'text-muted-theme/80'
              }`}
            >
              ({count})
            </span>
          </button>
        );
      })}
    </div>
  );
};
