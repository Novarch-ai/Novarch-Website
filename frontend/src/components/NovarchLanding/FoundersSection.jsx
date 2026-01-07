import React from 'react';
import { foundersData } from '../../data/mock';

const FoundersSection = () => {
  return (
    <section id="team" className="relative py-40 md:py-56 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 10% 80%, rgba(20, 25, 45, 0.3) 0%, transparent 40%),
            linear-gradient(180deg, #08090d 0%, #0a0b10 50%, #0c0e14 100%)
          `
        }}
      />
      
      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Title column */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8eaef] tracking-[-0.01em] leading-tight">
              {foundersData.title}
            </h2>
          </div>
          
          {/* Content column */}
          <div className="lg:col-span-6 lg:col-start-6 space-y-16">
            {/* Body */}
            <p className="text-base md:text-lg text-[#6a7080] leading-[1.9] font-light tracking-wide">
              {foundersData.body}
            </p>
            
            {/* Founders - minimal */}
            <div className="pt-8 border-t border-[#1a1f2a]">
              <div className="flex flex-wrap gap-16 md:gap-24">
                {foundersData.founders.map((founder, index) => (
                  <div 
                    key={index}
                    className="space-y-3"
                  >
                    <h4 className="text-xl md:text-2xl font-extralight text-[#e8eaef] tracking-wide">
                      {founder.name}
                    </h4>
                    <p className="text-[13px] tracking-[0.15em] text-[#4a5060] uppercase font-light">
                      {founder.role}
                      {founder.location && (
                        <span className="text-[#3a3f50]"> · {founder.location}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
