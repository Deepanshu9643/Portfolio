import React, { useEffect, useRef } from 'react';

export const Technology = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 } // ✅ Fixed threshold syntax
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Cutting-Edge Technology
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our proprietary technologies are designed to push the boundaries of what's possible in basketball equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16"> {/* ✅ Fixed md:grid-cols-2 */}
          {/* Left column */}
          <div
            ref={(el) => (itemsRef.current[0] = el)}
            className="opacity-0 transition-opacity duration-1000 delay-300"
            style={{
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518908336710-4e1cf821d3d1?auto=format&fit=crop&w=1073&q=80" 
                  alt="Basketball technology" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">NanoGrip™ Surface Technology</h3>
                  <p className="text-gray-400 mb-4">
                    Our proprietary surface technology uses microscopic texture patterns that adapt to your hand's moisture level, providing optimal grip in any condition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div
            ref={(el) => (itemsRef.current[1] = el)}
            className="opacity-0 transition-opacity duration-1000 delay-500"
            style={{
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1170&q=80" 
                  alt="Basketball technology" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AeroCore™ Lightweight Construction</h3>
                  <p className="text-gray-400 mb-4">
                    Our revolutionary composite material reduces weight by 30% while increasing structural integrity, allowing for faster play and reduced fatigue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature */}
        <div
          ref={(el) => (itemsRef.current[2] = el)}
          className="mt-16 opacity-0 transition-opacity duration-1000 delay-700"
          style={{
            opacity: 1,
            transform: "translateY(0)",
          }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-gray-900 rounded-lg overflow-hidden md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=1074&q=80" 
                  alt="Smart basketball technology" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-bold mb-2">SensorNet™ Performance Tracking</h3>
                <p className="text-gray-400 mb-6">
                  Our integrated sensor network captures 1,000+ data points per second, providing unprecedented insights into your game mechanics and performance metrics.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500 mb-1">99.8%</div>
                    <div className="text-sm text-gray-400">Tracking Accuracy</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500 mb-1">0.5ms</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
};
