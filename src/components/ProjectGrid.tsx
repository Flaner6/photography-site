import React, { useState } from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectGridProps {
  projects: ProjectItem[];
  onProjectClick: (project: ProjectItem) => void;
}

export function ProjectGrid({ projects, onProjectClick }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 mb-2">
            Selected Works & Photography
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            A curated collection of web apps, design experiments, and visual archives.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-neutral-100 text-neutral-900 shadow-sm'
                  : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-850 border border-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="group cursor-pointer rounded-2xl bg-neutral-900/60 border border-neutral-800/80 overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-neutral-950/50"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-800">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-neutral-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-700">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md text-neutral-200 border border-neutral-800/80">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-950/70 text-neutral-400">
                  {project.year}
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-neutral-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-neutral-400 bg-neutral-800/50 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-neutral-900/30 rounded-2xl border border-neutral-800">
          <p className="text-neutral-400 text-base">No items found in this category.</p>
        </div>
      )}
    </section>
  );
}
