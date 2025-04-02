import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1546519638-68e109acd27d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Basketball court" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md-6 relative z-10">
        <div className="max-w-3xl">
          <div 
            className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h1 className="text-4xl md-6xl lg-7xl font-bold mb-4">
              <span className="block">The Future of</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Basketball</span>
              <span className="block">Is Here</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Experience revolutionary basketball equipment engineered with cutting-edge technology for peak performance on the court.
            </p>
            
            <div className="flex flex-col sm-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover-90 transition-opacity flex items-center justify-center">
                Explore Collection
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-3 rounded-full hover-white/20 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero