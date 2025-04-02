import React from 'react';
import { Zap, Shield, Gauge, Cpu } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Enhanced Performance",
      description: "Our smart basketballs track your shooting accuracy and provide real-time feedback to improve your game."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Durability Redefined",
      description: "Engineered with nano-composite materials that are 5x more durable than traditional basketballs."
    },
    {
      icon: <Gauge className="h-8 w-8 text-purple-500" />,
      title: "Precision Control",
      description: "Advanced grip technology ensures optimal ball control in all weather and court conditions."
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "Smart Analytics",
      description: "Connect to our app and get detailed insights about your performance metrics and improvement areas."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Future-Ready Features
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our basketball equipment combines cutting-edge technology with superior craftsmanship to elevate your game to new heights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md-cols-2 lg-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover hover-105 transition-all duration-300 hover-lg hover-purple-500/10"
            >
              <div className="mb-4 p-3 rounded-full bg-gray-800/50 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};