import React from 'react';
import { howItWorksData } from '../../data/mock';

const HowItWorksSection = () => {
  return (
    <section className="relative py-40 md:py-56 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(30, 35, 55, 0.25) 0%, transparent 50%),
            linear-gradient(180deg, #0a0b10 0%, #0c0e14 100%)
          `
        }}
      />
      
      {/* Vertical light line */}
      <div 
        className="absolute top-0 bottom-0 left-1/4 w-[1px] opacity-5"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(150, 165, 190, 0.8) 30%, rgba(150, 165, 190, 0.8) 70%, transparent 100%)'
        }}
      />
      
      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Title - left aligned */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8eaef] tracking-[-0.01em] leading-tight sticky top-32">
              {howItWorksData.title}
            </h2>
          </div>
          
          {/* Steps - right side */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-16">
            {howItWorksData.steps.map((item, index) => (
              <div 
                key={item.step}
                className="group"
              >
                <div className="flex items-start gap-8">
                  {/* Step indicator */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <span className="text-[11px] tracking-[0.3em] text-[#4a5060] font-light">
                      {String(item.step).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Step text */}
                  <p className="text-lg md:text-xl lg:text-2xl text-[#a0a8b8] font-extralight leading-relaxed tracking-wide pt-2">
                    {item.text}
                  </p>
                </div>
                
                {/* Separator line */}
                {index < howItWorksData.steps.length - 1 && (
                  <div className="ml-6 mt-12 w-[1px] h-8 bg-[#2a2f40]" />
                )}
              </div>
            ))}
            
            {/* Tagline */}
            <div className="pt-12 pl-20">
              <p className="text-base text-[#4a5060] font-light italic tracking-wide">
                {howItWorksData.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
