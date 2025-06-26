
import React from 'react';

const About = () => {
  const stats = [
    { number: '5000+', label: 'Students' },
    { number: '200+', label: 'Faculty' },
    { number: '15+', label: 'Departments' },
    { number: '95%', label: 'Placement Rate' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About NRI Institute of Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Established in 1995, NRI Institute of Technology has been at the forefront of engineering education, 
            fostering innovation and excellence for over 25 years.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To provide world-class engineering education that combines theoretical knowledge with practical 
              application, preparing students to become innovative leaders in technology and engineering.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Industry-aligned curriculum with hands-on learning</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">State-of-the-art laboratories and research facilities</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Strong industry partnerships and placement support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=center" 
              alt="Students studying" 
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold">25+ Years</h4>
              <p className="text-blue-100">of Excellence</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
