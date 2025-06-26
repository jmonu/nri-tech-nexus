
import React from 'react';

const Placements = () => {
  const recruiters = [
    'Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM',
    'Dell', 'HP', 'Oracle', 'Cognizant', 'HCL', 'Tech Mahindra', 'Capgemini', 'Deloitte'
  ];

  const placementStats = [
    { label: 'Placement Rate', value: '95%', color: 'text-green-600' },
    { label: 'Highest Package', value: '₹45 LPA', color: 'text-blue-600' },
    { label: 'Average Package', value: '₹8.5 LPA', color: 'text-purple-600' },
    { label: 'Companies Visited', value: '150+', color: 'text-orange-600' },
  ];

  return (
    <section id="placements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Placement Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our strong industry connections and comprehensive training programs ensure excellent career opportunities for our students
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {placementStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Training Programs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Training & Development
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">💼</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Industry-Ready Skills
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comprehensive training in latest technologies and industry best practices
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 dark:text-green-400 text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Interview Preparation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mock interviews, aptitude training, and soft skills development
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Industry Partnerships
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Strong relationships with top companies for internships and placements
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&crop=center" 
              alt="Students in placement training" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Top Recruiters */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Top Recruiters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {recruiters.map((recruiter, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <p className="text-center font-semibold text-gray-700 dark:text-gray-300">
                  {recruiter}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
