
import React from 'react';

const Courses = () => {
  const courses = [
    {
      name: 'Computer Science Engineering',
      duration: '4 Years',
      seats: '120',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center',
      description: 'Advanced programming, AI, ML, and software development',
    },
    {
      name: 'Electronics & Communication',
      duration: '4 Years',
      seats: '90',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center',
      description: 'Digital systems, VLSI design, and communication networks',
    },
    {
      name: 'Mechanical Engineering',
      duration: '4 Years',
      seats: '120',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center',
      description: 'Design, manufacturing, and thermal engineering',
    },
    {
      name: 'Civil Engineering',
      duration: '4 Years',
      seats: '90',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&crop=center',
      description: 'Structural design, construction, and infrastructure',
    },
    {
      name: 'Electrical Engineering',
      duration: '4 Years',
      seats: '90',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&crop=center',
      description: 'Power systems, control systems, and renewable energy',
    },
    {
      name: 'Information Technology',
      duration: '4 Years',
      seats: '90',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center',
      description: 'Web development, database management, and cybersecurity',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Engineering Programs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive B.Tech programs designed to meet industry demands and foster innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.seats} Seats
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    Duration: {course.duration}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
