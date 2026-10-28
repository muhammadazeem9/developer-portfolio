import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { ProjectCaseStudy } from '../../types';
import { useRouter } from '../../context/RouterContext';

export const ProjectCard: React.FC<{ project: ProjectCaseStudy }> = ({ project }) => {
  const { navigate } = useRouter();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group flex flex-col rounded-xl border border-theme bg-surface hover:border-primary-theme/60 transition-all duration-200 overflow-hidden">
      {/* Cover image container */}
      <div
        onClick={() => navigate(`/work/${project.slug}`)}
        className="relative aspect-video w-full overflow-hidden bg-surface-elevated cursor-pointer"
      >
        {!imageFailed ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-surface-elevated text-center">
            <span className="text-sm font-semibold text-canvas-text">{project.title}</span>
            <span className="text-xs text-muted-theme mt-1">{project.category}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Zero-Pill Metadata Line */}
        <div className="flex items-center gap-2 text-xs font-mono text-muted-theme mb-2.5">
          <span className="text-primary-theme font-medium">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.kind}</span>
          <span aria-hidden="true">·</span>
          <span>{project.timeline}</span>
        </div>

        {/* Title */}
        <h3
          onClick={() => navigate(`/work/${project.slug}`)}
          className="text-lg font-bold text-canvas-text group-hover:text-primary-theme transition-colors cursor-pointer"
        >
          {project.title}
        </h3>

        {/* Concise Description */}
        <p className="mt-2 text-sm text-muted-theme line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics highlight */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-theme-subtle">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="text-left">
                <div className="text-xs font-mono text-muted-theme">{m.label}</div>
                <div className="text-sm font-bold text-canvas-text font-mono tabular-nums">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technology labels (clean text list with middots) */}
        <div className="mt-auto pt-3 border-t border-theme-subtle">
          <div className="text-xs text-muted-theme flex flex-wrap gap-x-2 gap-y-1">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={tech}>
                {tech}
                {i < Math.min(project.technologies.length, 4) - 1 && (
                  <span className="ml-2 text-muted-theme/60" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-theme">
          <button
            onClick={() => navigate(`/work/${project.slug}`)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-theme hover:underline cursor-pointer"
          >
            <span>Read Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded text-muted-theme hover:text-canvas-text transition-colors"
                title="View Source Code"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded text-muted-theme hover:text-canvas-text transition-colors"
                title="View Live Demo"
                aria-label={`View ${project.title} live project`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
