import React, { useState, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectCategory } from '../types';
import { useRouter } from '../context/RouterContext';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectFilter } from '../components/projects/ProjectFilter';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Button } from '../components/ui/Button';

export const WorkPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'Full-Stack Applications',
    'SaaS',
    'Websites',
    'APIs',
    'Developer Tools',
  ];

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-theme">
        <SectionHeading
          kicker="PORTFOLIO & CASE STUDIES"
          title="Digital Products & Systems Engineered"
          description="A curated catalog of full-stack web applications, SaaS platforms, developer tools, and API architectures."
          className="mb-0"
        />

        <div className="shrink-0">
          <Button
            size="md"
            variant="primary"
            onClick={() => navigate('/contact')}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a New Project
          </Button>
        </div>
      </div>

      {/* Interactive Category Filter Bar */}
      <div className="flex items-center justify-start overflow-x-auto pb-2">
        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          counts={counts}
        />
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface rounded-xl border border-theme">
          <p className="text-muted-theme">No projects found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-3 text-xs font-semibold text-primary-theme hover:underline cursor-pointer"
          >
            Reset filter to All Projects
          </button>
        </div>
      )}

      {/* Contextual CTA Strip */}
      <div className="mt-16 p-8 rounded-xl border border-theme bg-surface-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-canvas-text">Have a specific product idea in mind?</h3>
          <p className="text-sm text-muted-theme mt-1">
            Let's discuss technical architecture, milestones, and realistic timelines for your build.
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() => navigate('/contact')}
          icon={<ArrowUpRight className="w-4 h-4" />}
          className="shrink-0"
        >
          Request Proposal
        </Button>
      </div>
    </div>
  );
};
