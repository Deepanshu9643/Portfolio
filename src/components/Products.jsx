import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  
  const products = [
    {
      name: "NexusPro X1",
      category: "Smart Basketball",
      price: "$129.99",
      description: "The flagship smart basketball with embedded sensors that track your shots, dribbles, and movement patterns.",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      features: ["Shot tracking", "App connectivity", "LED illumination", "Wireless charging"]
    },
    {
      name: "AeroGrip Elite",
      category: "Performance Shoes",
      price: "$189.99",
      description: "Ultra-lightweight basketball shoes with responsive cushioning and AI-powered fit adjustment.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Adaptive fit", "Impact protection", "Traction control", "Breathable design"]
    },
    {
      name: "VisionTrack Goggles",
      category: "Training Equipment",
      price: "$249.99",
      description: "AR-enabled training goggles that simulate game scenarios and provide real-time visual cues for training.",
      image: "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["AR simulation", "Eye tracking", "Performance metrics", "Wireless connectivity"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Revolutionary Products
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our lineup of next-generation basketball equipment designed to transform how you play, train, and compete.
          </p>
        </div>
        
        <div className="flex flex-col lg-row gap-8">
          {/* Product Navigation */}
          <div className="lg-1/3">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Our Collection</h3>
              <div className="space-y-4">
                {products.map((product, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeProduct === index 
                        ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                        : 'hover-gray-800/50'
                    }`}
                    onClick={() => setActiveProduct(index)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className={`font-medium ${activeProduct === index ? 'text-white' : 'text-gray-300'}`}>
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-400">{product.category}</p>
                      </div>
                      <ChevronRight className={`h-5 w-5 ${activeProduct === index ? 'text-purple-500' : 'text-gray-500'}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Display */}
          <div className="lg-2/3">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
              <div className="h-64 md-80 overflow-hidden">
                <img 
                  src={products[activeProduct].image} 
                  alt={products[activeProduct].name}
                  className="w-full h-full object-cover transition-transform duration-500 hover-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{products[activeProduct].name}</h3>
                    <p className="text-gray-400">{products[activeProduct].category}</p>
                  </div>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                    {products[activeProduct].price}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{products[activeProduct].description}</p>
                <div className="mb-6">
                  <h4 className="text-sm uppercase text-gray-400 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {products[activeProduct].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover-90 transition-opacity">
                    Add to Cart
                  </button>
                  <button className="border border-gray-700 text-gray-300 px-6 py-2 rounded-full hover-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};