import React from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section id="hero" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-800/40">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 mb-6 sm:mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>{data.status}</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">{data.location}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-100 leading-[1.1] mb-6">
          Crafting digital experiences with <span className="text-neutral-400 font-light italic">precision</span> and <span className="text-neutral-200 underline decoration-neutral-700 underline-offset-8">purpose</span>.
        </h1>

        {/* Short Description / Bio */}
        <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
          {data.bio}
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
            href={`mailto:${data.email}`}
            id="hero-email-btn"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-neutral-850 hover:text-white hover:border-neutral-700 transition-all active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Copy Email</span>
          </a>

          {/* Social Links List */}
          <div className="flex items-center gap-2 ml-auto sm:ml-2">
            {data.socials.map((social) => {
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
  );
}
