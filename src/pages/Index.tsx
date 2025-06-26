
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Faculty from '../components/Faculty';
import Placements from '../components/Placements';
import Events from '../components/Events';
import Notices from '../components/Notices';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useTheme } from '../hooks/useTheme';

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold">Loading NRI Institute of Technology...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Courses />
        <Faculty />
        <Placements />
        <Events />
        <Notices />
        <Contact />
        <Newsletter />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
