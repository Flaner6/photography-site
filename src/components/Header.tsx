import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeaderProps {
  data: PortfolioData;
}

export function Header({ data }: HeaderProps) {
  return (
    <header id="top-nav" className="sticky top-0 z-40 w-full backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <a 
          href="#hero" 
          id="brand-logo"
          className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-neutral-100 hover:text-white transition-colors group"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse group-hover:scale-125 transition-transform" />
          <span className="uppercase tracking-wider">{data.name}</span>
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
            href={`mailto:${data.email}`}
            id="nav-contact-cta"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
