
import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & HOD - CSE',
      qualification: 'Ph.D in Computer Science',
      experience: '15+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      specialization: 'Machine Learning, AI',
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Professor - ECE',
      qualification: 'Ph.D in Electronics',
      experience: '12+ Years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c5e2e8d8?w=300&h=300&fit=crop&crop=face',
      specialization: 'VLSI Design, Signal Processing',
    },
    {
      name: 'Dr. Amit Patel',
      designation: 'Associate Professor - ME',
      qualification: 'Ph.D in Mechanical Engg',
      experience: '10+ Years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      specialization: 'Thermal Engineering, Design',
    },
    {
      name: 'Dr. Sunita Reddy',
      designation: 'Professor - Civil',
      qualification: 'Ph.D in Structural Engg',
      experience: '14+ Years',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      specialization: 'Earthquake Engineering',
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Distinguished Faculty
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts and renowned academicians who bring years of experience and innovation to the classroom
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {faculty.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {faculty.designation}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {faculty.qualification}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Experience: {faculty.experience}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                  <p className="text-blue-800 dark:text-blue-300 text-sm font-medium">
                    Specialization: {faculty.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
            View All Faculty
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
