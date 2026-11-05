'use client';
import React, { useState } from 'react';
import { PORTFOLIO_DATA, PROJECTS_DATA } from '../src/data';
import { ProjectItem } from '../src/types';
import { Header } from '../src/components/Header';
import { Hero } from '../src/components/Hero';
import { ProjectGrid } from '../src/components/ProjectGrid';
import { About } from '../src/components/About';
import { Footer } from '../src/components/Footer';
import { ProjectModal } from '../src/components/ProjectModal';

export default function Page() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <Header data={PORTFOLIO_DATA} />
      <main className="flex-1">
        <Hero data={PORTFOLIO_DATA} />
        
        <ProjectGrid 
          projects={PROJECTS_DATA} 
          onProjectClick={setActiveModalProject} 
        />
        
        <About 
          title="Philosophy & Toolkit"
          paragraph1="I believe the most compelling digital products combine robust engineering with subtle, tactile visual details. Every animation should feel intentional, every typographic hierarchy balanced."
          paragraph2="Core technologies and craft disciplines include React, Next.js, TypeScript, Tailwind CSS, WebGL visualizers, and digital editorial photography."
        />
      </main>

      <Footer data={PORTFOLIO_DATA} />

      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </>
  );
}
