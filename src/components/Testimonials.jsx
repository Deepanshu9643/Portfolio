import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Professional Basketball Player",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      quote: "The NexusPro X1 has completely transformed my training routine. The real-time feedback helps me identify and correct shooting flaws I didn't even know I had.",
      rating: 5 // Added rating
    },
    {
      name: "Sarah Williams",
      role: "College Basketball Coach",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      quote: "As a coach, the analytics provided by Nexus Hoops equipment has been invaluable. I can track my team's progress with precision and tailor training programs to address specific weaknesses.",
      rating: 4 // Added rating
    },
    {
      name: "David Chen",
      role: "Amateur Basketball Enthusiast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "I've tried many basketballs, but nothing compares to the grip and feel of the NexusPro. The app integration is seamless, and I've seen measurable improvements in my shooting percentage.",
      rating: 5 // Added rating
    }
  ];
  
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              What Players Say
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from athletes and coaches who have experienced the future of basketball with our products.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 md-10">
              <div className="flex flex-col md-row gap-6 md-10">
                <div className="md-1/3 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-400 text-center text-sm">{testimonials[currentIndex].role}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonials[currentIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>
                <div className="md-2/3 flex flex-col justify-center">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-4xl text-purple-500 opacity-50">"</div>
                    <p className="text-gray-300 text-lg italic relative z-10">
                      {testimonials[currentIndex].quote}
                    </p>
                    <div className="absolute -bottom-4 -right-4 text-4xl text-purple-500 opacity-50">"</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-800 hover-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-300" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentIndex === index ? 'bg-purple-500' : 'bg-gray-600 hover-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-800 hover-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};