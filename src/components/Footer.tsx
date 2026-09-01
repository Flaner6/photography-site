import React from 'react';
import { PortfolioData } from '../types';

interface FooterProps {
  data: PortfolioData;
}

export function Footer({ data }: FooterProps) {
  return (
    <footer id="contact" className="mt-auto border-t border-neutral-800/80 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Copyright & Name */}
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-wider text-sm uppercase text-neutral-200">{data.name}</span>
          <span className="text-neutral-600 text-sm">© {new Date().getFullYear()}</span>
        </div>

        {/* Direct Email Action */}
        <div className="text-sm text-neutral-400 flex items-center gap-2">
          <span>Get in touch:</span>
          <a 
            href={`mailto:${data.email}`}
            id="footer-email-link"
            className="text-neutral-200 hover:text-white font-medium underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-colors"
          >
            {data.email}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-neutral-400 text-sm">
          {data.socials.map((social) => (
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
  );
}
