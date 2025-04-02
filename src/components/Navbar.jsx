import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-amber-600/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center space-x-2">
            <TerminalIcon className="text-amber-400" size={24} />
            <span className="text-amber-400 font-bold text-xl">Dev@Terminal</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-amber-400 hover:text-amber-300 transition-colors">
              <span className="text-amber-600">$</span> home
            </a>
            <a href="#about" className="text-amber-400 hover:text-amber-300 transition-colors">
              <span className="text-amber-600">$</span> about
            </a>
            <a href="#skills" className="text-amber-400 hover:text-amber-300 transition-colors">
              <span className="text-amber-600">$</span> skills
            </a>
            <a href="#projects" className="text-amber-400 hover:text-amber-300 transition-colors">
              <span className="text-amber-600">$</span> projects
            </a>
            <a href="#contact" className="text-amber-400 hover:text-amber-300 transition-colors">
              <span className="text-amber-600">$</span> contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-amber-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-amber-600">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home size={18} className="mr-2" />
                <span className="text-amber-600">$</span> home
              </a>
              <a 
                href="#about" 
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User size={18} className="mr-2" />
                <span className="text-amber-600">$</span> about
              </a>
              <a 
                href="#skills" 
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Code size={18} className="mr-2" />
                <span className="text-amber-600">$</span> skills
              </a>
              <a 
                href="#projects" 
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Briefcase size={18} className="mr-2" />
                <span className="text-amber-600">$</span> projects
              </a>
              <a 
                href="#contact" 
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail size={18} className="mr-2" />
                <span className="text-amber-600">$</span> contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
