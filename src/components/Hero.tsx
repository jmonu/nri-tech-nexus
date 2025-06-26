
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&crop=center" 
          alt="College Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to
          <span className="block text-yellow-400 mt-2">NRI Institute of Technology</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          Empowering Future Engineers with Excellence in Education, Innovation, and Technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
          <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Explore Programs
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
