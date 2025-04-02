import React from 'react';
import { Terminal as TerminalIcon, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-black border-t border-amber-600/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md-row justify-between items-center">
          <div className="flex items-center mb-4 md-0">
            <TerminalIcon className="text-amber-400 mr-2" size={20} />
            <span className="text-amber-400 font-bold">Dev@Terminal</span>
          </div>
          
          <div className="text-amber-400 text-center mb-4 md-0">
            <p>
              Made with <Heart className="inline-block text-red-500 mx-1" size={16} fill="currentColor" /> and lots of coffee
            </p>
            <p className="text-sm text-amber-600">
              © {new Date().getFullYear()} | All rights reserved
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-amber-600 text-black p-2 rounded-full hover-amber-500 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};