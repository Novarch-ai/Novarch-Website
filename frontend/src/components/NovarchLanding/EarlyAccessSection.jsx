import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { earlyAccessData } from '../../data/mock';
import { ArrowRight, Check } from 'lucide-react';

const EarlyAccessSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="early-access" className="relative py-32 md:py-40">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-700/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 text-center">
        <div className="space-y-8 animate-fade-in-scroll">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white tracking-tight">
            {earlyAccessData.title}
          </h2>
          
          {/* Body */}
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            {earlyAccessData.body}
          </p>
          
          {/* Form */}
          <div className="pt-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-slate-500 focus:ring-slate-500/20 h-12"
                />
                <Button 
                  type="submit"
                  disabled={loading}
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 h-12 font-normal transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                      Joining...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {earlyAccessData.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-lg font-light">You're on the list. We'll be in touch.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
