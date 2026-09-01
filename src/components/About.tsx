import React from 'react';

// Using props here so this text can eventually come from your CMS!
interface AboutProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
}

export function About({ title, paragraph1, paragraph2 }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50 bg-neutral-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">About me</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">{title}</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed text-base sm:text-lg">
            <p>{paragraph1}</p>
            <p className="text-neutral-400 text-sm sm:text-base">{paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
