import React from 'react';
import { featuresData } from '../../data/mock';

const FeaturesSection = () => {
  return (
    <section id="system" className="relative py-40 md:py-56 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(20, 25, 45, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(25, 30, 50, 0.3) 0%, transparent 40%),
            linear-gradient(180deg, #0a0b10 0%, #08090d 50%, #0a0b10 100%)
          `
        }}
      />
      
      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Section title - asymmetric */}
        <div className="mb-24 md:mb-32 lg:mb-40">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-[#6a7080] tracking-[0.15em] uppercase">
            What Novarch does
          </h2>
        </div>
        
        {/* Features - staggered layout */}
        <div className="space-y-32 md:space-y-40 lg:space-y-48">
          {featuresData.map((feature, index) => (
            <div 
              key={feature.id}
              className={`grid lg:grid-cols-12 gap-8 ${
                index % 2 === 0 ? '' : 'lg:text-right'
              }`}
            >
              <div 
                className={`lg:col-span-6 space-y-8 ${
                  index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-7'
                }`}
              >
                {/* Feature number - very subtle */}
                <div className="text-[11px] tracking-[0.3em] text-[#4a5060] uppercase font-light">
                  0{feature.id}
                </div>
                
                {/* Title */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#e8eaef] tracking-[-0.01em]">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-base md:text-lg text-[#6a7080] leading-[1.9] font-light tracking-wide max-w-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
