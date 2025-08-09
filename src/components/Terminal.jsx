import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Terminal as TerminalIcon } from "lucide-react"; // Fix: Avoid name conflict
import Typewriter from "typewriter-effect";

export const TerminalComponent = () => {
  // Fix: Renamed component
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/scanline.png')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="bg-gray-900 border-2 border-amber-600 rounded-lg p-6 md:p-8 max-w-4xl mx-auto transform transition-all duration-1000"
          style={{
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)",
            transform: inView ? "translateY(0)" : "translateY(50px)",
            opacity: inView ? 1 : 0,
          }}
        >
          <div className="flex items-center mb-6">
            <TerminalIcon className="text-amber-400 mr-2" size={24} />
            <h2 className="text-amber-400 text-xl font-bold">
              terminal@portfolio:~
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex">
                <span className="text-amber-600 mr-2">$</span>
                <span className="text-amber-400">whoami</span>
              </div>
              <div className="mt-2 text-amber-300 text-lg md:text-xl font-bold">
                Hii, I'm Deepanshu - MERN Stack Developer
              </div>
            </div>

            <div>
              <div className="flex">
                <span className="text-amber-600 mr-2">$</span>
                <span className="text-amber-400">cat welcome_message.txt</span>
              </div>
              <div className="mt-2 text-amber-300">
                <Typewriter
                  options={{
                    strings: [
                      "Welcome to my portfolio! I'm a passionate MERN stack developer with expertise in building modern web applications. Check out my projects and skills below!.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex">
                <span className="text-amber-600 mr-2">$</span>
                <span className="text-amber-400">ls -la skills/</span>
              </div>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                <span className="text-amber-300">React.js</span>
                <span className="text-amber-300">Node.js</span>
                <span className="text-amber-300">Express</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-amber-300">JavaScript</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-amber-300">HTML/CSS</span>
                <span className="text-amber-300">Git</span>
              </div>
            </div>

            <div>
              <div className="flex">
                <span className="text-amber-600 mr-2">$</span>
                <span className="text-amber-400">./explore.sh</span>
                <span
                  className={`ml-1 transition-opacity duration-300 ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  _
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalComponent; // Fix: Corrected export
