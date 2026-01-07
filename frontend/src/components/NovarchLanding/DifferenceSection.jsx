import React from 'react';
import { differenceData } from '../../data/mock';

const DifferenceSection = () => {
  return (
    <section className="relative py-40 md:py-56 lg:py-64 overflow-hidden">
      {/* Background with depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 90% 30%, rgba(25, 30, 50, 0.35) 0%, transparent 45%),
            linear-gradient(180deg, #0c0e14 0%, #0a0b10 50%, #08090d 100%)
          `
        }}
      />
      
      {/* Subtle orb echo in background */}
      <div 
        className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(180, 195, 220, 0.08) 0%, transparent 60%)',
          filter: 'blur(80px)'
        }}
      />
      
      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Content - centered but with breathing room */}
          <div className="lg:col-span-7 lg:col-start-2 space-y-12">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8eaef] tracking-[-0.01em] leading-tight">
              {differenceData.title}
            </h2>
            
            {/* Paragraphs - deliberate, spaced */}
            <div className="space-y-8">
              {differenceData.paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-lg md:text-xl font-extralight leading-[1.8] tracking-wide ${
                    index < 2 ? 'text-[#8a90a0]' : 'text-[#6a7080]'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
