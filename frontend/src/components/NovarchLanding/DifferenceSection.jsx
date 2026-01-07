import React from 'react';
import { differenceData } from '../../data/mock';

const DifferenceSection = () => {
  return (
    <section className="relative py-32 md:py-40">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      
      {/* Subtle side glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-slate-700/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-tight">
            {differenceData.title}
          </h2>
        </div>
        
        {/* Paragraphs */}
        <div className="space-y-6">
          {differenceData.paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className={`text-lg md:text-xl font-light leading-relaxed animate-fade-in-scroll ${
                index < 2 ? 'text-slate-300' : 'text-slate-400'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
