/**
 * ==============================================================================
 * PORTFOLIO HOMEPAGE STARTER (Next.js App Router 'page.tsx' & React compatible)
 * ==============================================================================
 * 
 * Instructions:
 * 1. Customize your personal details in the `PORTFOLIO_DATA` object below.
 * 2. Add or replace your photos & projects in the `PROJECTS_DATA` array.
 * 3. Adjust Tailwind CSS color classes (e.g., bg-neutral-900, text-emerald-400) as needed.
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA, PROJECTS_DATA } from './data';
import { ProjectItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white flex flex-col">
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
    </div>
  );
}

