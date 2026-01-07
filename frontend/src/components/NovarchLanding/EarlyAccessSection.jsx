import React, { useState } from 'react';
import { earlyAccessData } from '../../data/mock';
import CosmicOrb from './CosmicOrb';

const EarlyAccessSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="early-access" className="relative py-48 md:py-64 lg:py-80 overflow-hidden">
      {/* Background with central focus */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(25, 30, 50, 0.4) 0%, transparent 50%),
            linear-gradient(180deg, #0c0e14 0%, #0a0b10 50%, #08090d 100%)
          `
        }}
      />
      
      {/* Small orb echo - subtle reminder */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
        <CosmicOrb size="small" />
      </div>
      
      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-[#e8eaef] tracking-[-0.01em] leading-[1.15]">
            {earlyAccessData.title}
          </h2>
          
          {/* Body */}
          <p className="text-base md:text-lg text-[#6a7080] leading-[1.9] font-light tracking-wide">
            {earlyAccessData.body}
          </p>
          
          {/* Form */}
          <div className="pt-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent border border-[#2a2f40] text-[#e8eaef] placeholder:text-[#4a5060] px-6 py-4 text-[15px] tracking-wide font-light focus:outline-none focus:border-[#4a5060] transition-colors duration-500"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="group relative px-10 py-4 text-[13px] tracking-[0.2em] uppercase font-light overflow-hidden transition-all duration-500 bg-[#e8eaef] text-[#0a0b0f] hover:bg-white disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-3 h-3 border border-[#0a0b0f]/30 border-t-[#0a0b0f] rounded-full animate-spin" />
                      <span>Joining</span>
                    </span>
                  ) : (
                    <span>Join</span>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-4 text-[#a0a8b8]">
                <div className="w-2 h-2 rounded-full bg-[#6a8060]" />
                <p className="text-lg font-extralight tracking-wide">You're on the list. We'll be in touch.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
