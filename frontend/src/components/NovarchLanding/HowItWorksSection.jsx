import React from 'react';
import { howItWorksData } from '../../data/mock';

const HowItWorksSection = () => {
  return (
    <section className="relative py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-tight">
            {howItWorksData.title}
          </h2>
        </div>
        
        {/* Steps */}
        <div className="space-y-8 mb-16">
          {howItWorksData.steps.map((item, index) => (
            <div 
              key={item.step}
              className="flex items-start gap-6 animate-fade-in-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-slate-700/50 flex items-center justify-center">
                <span className="text-sm text-slate-400 font-light">{item.step}</span>
              </div>
              
              {/* Step text */}
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed pt-1.5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        
        {/* Tagline */}
        <div className="pt-8 border-t border-slate-800/50">
          <p className="text-lg text-slate-500 font-light italic">
            {howItWorksData.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
