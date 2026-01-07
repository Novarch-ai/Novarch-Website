import React from 'react';
import { footerData } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="relative py-20 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[#08090d]" />
      
      {/* Top border - very subtle */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(60, 70, 90, 0.3) 20%, rgba(60, 70, 90, 0.3) 80%, transparent 100%)'
        }}
      />
      
      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Copyright */}
          <p className="text-[13px] tracking-[0.15em] text-[#3a3f50] font-light">
            {footerData.copyright}
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-12">
            {footerData.links.map((link, index) => (
              <button
                key={index}
                className="text-[13px] tracking-[0.15em] text-[#4a5060] hover:text-[#8a90a0] transition-colors duration-500 font-light"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
