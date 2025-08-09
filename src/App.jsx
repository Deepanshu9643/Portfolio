import React, { useState, useEffect } from 'react';
import { BootSequence } from './components/BootSequence';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import TerminalComponent from './components/Terminal';


function App() {
  const [booting, setBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setBooting(false);
    }, 5000);
    
    const progressInterval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    
    return () => {
      clearTimeout(bootTimer);
      clearInterval(progressInterval);
    };
  }, []);
  
  if (booting) {
    return <BootSequence progress={bootProgress} />;
  }
  
  return (
    <div className="min-h-screen bg-black text-amber-400 font-mono">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;