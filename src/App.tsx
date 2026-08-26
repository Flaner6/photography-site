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
import { 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ExternalLink,
  ChevronDown,
  Layers,
  Camera,
  Code2,
  X,
  Eye
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* 1. CONFIGURATION DATA — Edit your info, links, and text here              */
/* -------------------------------------------------------------------------- */

const PORTFOLIO_DATA = {
  name: "Alex Morgan",
  role: "Creative Developer & Visual Designer",
  location: "San Francisco & Remote",
  status: "Available for new projects",
  bio: "I design and build thoughtful digital products, interactive web experiences, and visual stories. Focused on clean aesthetics, fluid motion, and resilient architecture.",
  email: "alex.morgan@example.com",
  socials: [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Email", href: "mailto:alex.morgan@example.com", icon: Mail },
  ],
};

/* -------------------------------------------------------------------------- */
/* 2. PLACEHOLDER PROJECTS / PHOTOS DATA — Replace with your own content      */
/* -------------------------------------------------------------------------- */

interface ProjectItem {
  id: string;
  title: string;
  category: 'Development' | 'Design' | 'Photography' | 'Branding';
  description: string;
  imageUrl: string;
  year: string;
  link?: string;
  tags: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "1",
    title: "Luminary Design System",
    category: "Design",
    description: "A minimal, accessible UI component library and design token architecture.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    year: "2025",
    link: "https://example.com",
    tags: ["Figma", "UI/UX", "Design Systems"],
  },
  {
    id: "2",
    title: "Aura Audio Interface",
    category: "Development",
    description: "Next-generation ambient sound synthesiser with WebGL audio visualizers.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    year: "2025",
    link: "https://example.com",
    tags: ["React", "WebGL", "Web Audio API"],
  },
  {
    id: "3",
    title: "Nordic Minimal Interiors",
    category: "Photography",
    description: "Curated architectural photo series capturing natural light and brutalist geometry.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    year: "2024",
    tags: ["Architecture", "Editorial", "35mm"],
  },
  {
    id: "4",
    title: "Mono Workspace Identity",
    category: "Branding",
    description: "Complete visual identity and bespoke typography for a modern co-working collective.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    year: "2024",
    link: "https://example.com",
    tags: ["Identity", "Typography", "Print"],
  },
  {
    id: "5",
    title: "Kinetic Motion Engine",
    category: "Development",
    description: "Physics-based micro-interaction library built for fluid touch and pointer events.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    year: "2024",
    link: "https://example.com",
    tags: ["TypeScript", "Canvas", "Physics"],
  },
  {
    id: "6",
    title: "Dusk in Tokyo Series",
    category: "Photography",
    description: "Night street photography documenting cinematic neon hues and quiet rain-slicked alleys.",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop",
    year: "2024",
    tags: ["Street", "Night", "Color Grading"],
  },
];

/* -------------------------------------------------------------------------- */
/* 3. MAIN HOMEPAGE COMPONENT                                                 */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Filter projects based on active category
  const categories = ['All', 'Development', 'Design', 'Photography', 'Branding'];
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white flex flex-col">
      
      {/* -------------------------------------------------------------------- */}
      {/* HEADER: Name / Logo & Navigation                                      */}
      {/* -------------------------------------------------------------------- */}
      <header id="top-nav" className="sticky top-0 z-40 w-full backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a 
            href="#hero" 
            id="brand-logo"
            className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-neutral-100 hover:text-white transition-colors group"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse group-hover:scale-125 transition-transform" />
            <span className="uppercase tracking-wider">{PORTFOLIO_DATA.name}</span>
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium">
            <a 
              href="#work" 
              id="nav-link-work"
              className="text-neutral-400 hover:text-neutral-100 transition-colors hidden sm:inline-block"
            >
              Work
            </a>
            <a 
              href="#about" 
              id="nav-link-about"
              className="text-neutral-400 hover:text-neutral-100 transition-colors hidden sm:inline-block"
            >
              About
            </a>
            
            {/* Call to Action Button */}
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              id="nav-contact-cta"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* HERO SECTION: Welcome message, role title, and bio                    */}
      {/* -------------------------------------------------------------------- */}
      <section id="hero" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-800/40">
        <div className="max-w-4xl mx-auto text-left">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 mb-6 sm:mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>{PORTFOLIO_DATA.status}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400">{PORTFOLIO_DATA.location}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-100 leading-[1.1] mb-6">
            Crafting digital experiences with <span className="text-neutral-400 font-light italic">precision</span> and <span className="text-neutral-200 underline decoration-neutral-700 underline-offset-8">purpose</span>.
          </h1>

          {/* Short Description / Bio */}
          <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            {PORTFOLIO_DATA.bio}
          </p>

          {/* Quick Action Buttons & Social Icons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <a
              href="#work"
              id="hero-view-work-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 text-neutral-900 font-semibold text-sm hover:bg-white hover:shadow-lg transition-all active:scale-95"
            >
              <span>Explore Selected Work</span>
              <ChevronDown className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              id="hero-email-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-neutral-850 hover:text-white hover:border-neutral-700 transition-all active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Copy Email</span>
            </a>

            {/* Social Links List */}
            <div className="flex items-center gap-2 ml-auto sm:ml-2">
              {PORTFOLIO_DATA.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2.5 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* GALLERY / PROJECT GRID: Responsive image grid with category filters  */}
      {/* -------------------------------------------------------------------- */}
      <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Section Header & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 mb-2">
              Selected Works & Photography
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              A curated collection of web apps, design experiments, and visual archives.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                id={`filter-btn-${category.toLowerCase()}`}
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

        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer rounded-2xl bg-neutral-900/60 border border-neutral-800/80 overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-neutral-950/50"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-neutral-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-700">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md text-neutral-200 border border-neutral-800/80">
                    {project.category}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-950/70 text-neutral-400">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Meta / Text Info */}
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

                {/* Tag Pills */}
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

        {/* Empty state if category filter has no results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-neutral-900/30 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-base">No items found in this category.</p>
          </div>
        )}

      </section>

      {/* -------------------------------------------------------------------- */}
      {/* ABOUT & PHILOSOPHY SECTION (Minimal & clean)                          */}
      {/* -------------------------------------------------------------------- */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">About me</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
                Philosophy & Toolkit
              </h2>
            </div>

            <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed text-base sm:text-lg">
              <p>
                I believe the most compelling digital products combine robust engineering with subtle, tactile visual details. Every animation should feel intentional, every typographic hierarchy balanced.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                Core technologies and craft disciplines include React, Next.js, TypeScript, Tailwind CSS, WebGL visualizers, and digital editorial photography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* FOOTER & CONTACT                                                     */}
      {/* -------------------------------------------------------------------- */}
      <footer id="contact" className="mt-auto border-t border-neutral-800/80 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Name */}
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-wider text-sm uppercase text-neutral-200">{PORTFOLIO_DATA.name}</span>
            <span className="text-neutral-600 text-sm">© {new Date().getFullYear()}</span>
          </div>

          {/* Direct Email Action */}
          <div className="text-sm text-neutral-400 flex items-center gap-2">
            <span>Get in touch:</span>
            <a 
              href={`mailto:${PORTFOLIO_DATA.email}`}
              id="footer-email-link"
              className="text-neutral-200 hover:text-white font-medium underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-colors"
            >
              {PORTFOLIO_DATA.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-neutral-400 text-sm">
            {PORTFOLIO_DATA.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-100 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>

        </div>
      </footer>

      {/* -------------------------------------------------------------------- */}
      {/* PREVIEW LIGHTBOX MODAL: Inspect image or project details              */}
      {/* -------------------------------------------------------------------- */}
      {activeModalProject && (
        <div 
          id="project-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/70 text-neutral-300 hover:text-white hover:bg-neutral-950 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-neutral-800 text-neutral-300">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {activeModalProject.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-100 mb-2">
                {activeModalProject.title}
              </h3>
              
              <p className="text-neutral-300 leading-relaxed mb-6">
                {activeModalProject.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                {activeModalProject.link && (
                  <a
                    href={activeModalProject.link}
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
      )}

    </div>
  );
}

