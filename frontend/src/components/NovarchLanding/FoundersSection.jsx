import React from 'react';
import { foundersData } from '../../data/mock';
import { MapPin } from 'lucide-react';

const FoundersSection = () => {
  return (
    <section id="founders" className="relative py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-12 animate-fade-in-scroll">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-tight">
            {foundersData.title}
          </h2>
          
          {/* Body */}
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            {foundersData.body}
          </p>
          
          {/* Founders */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-wrap gap-12">
              {foundersData.founders.map((founder, index) => (
                <div 
                  key={index}
                  className="space-y-2"
                >
                  <h4 className="text-xl font-light text-white">
                    {founder.name}
                  </h4>
                  <p className="text-sm text-slate-500 flex items-center gap-2">
                    <span>{founder.role}</span>
                    {founder.location && (
                      <>
                        <span className="text-slate-700">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {founder.location}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
