import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      id="project-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/70 text-neutral-300 hover:text-white hover:bg-neutral-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-neutral-800 text-neutral-300">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-500">
              {project.year}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-neutral-100 mb-2">
            {project.title}
          </h3>
          
          <p className="text-neutral-300 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-400">
                  #{tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-900 font-semibold text-xs hover:bg-white transition-colors"
              >
                <span>Visit Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
