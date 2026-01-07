import React from 'react';
import { featuresData } from '../../data/mock';
import { Eye, Grid3X3, TrendingUp } from 'lucide-react';

const iconMap = {
  1: Eye,
  2: Grid3X3,
  3: TrendingUp
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-tight">
            What Novarch does
          </h2>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {featuresData.map((feature, index) => {
            const Icon = iconMap[feature.id];
            return (
              <div 
                key={feature.id}
                className="group space-y-6 animate-fade-in-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full border border-slate-700/50 flex items-center justify-center group-hover:border-slate-500/50 transition-colors duration-500">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-slate-200 transition-colors duration-500" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-light text-white tracking-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-slate-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
