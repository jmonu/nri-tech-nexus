
import React from 'react';

const Notices = () => {
  const notices = [
    {
      title: 'Mid-Semester Examination Schedule Released',
      date: 'January 15, 2024',
      type: 'Academic',
      urgent: true
    },
    {
      title: 'Scholarship Applications Open for Academic Year 2024-25',
      date: 'January 12, 2024',
      type: 'Scholarship',
      urgent: false
    },
    {
      title: 'Industrial Visit to Tech Companies - Registration Open',
      date: 'January 10, 2024',
      type: 'Industrial Visit',
      urgent: false
    },
    {
      title: 'Library Timing Extended During Examination Period',
      date: 'January 8, 2024',
      type: 'Library',
      urgent: false
    },
    {
      title: 'Guest Lecture on Artificial Intelligence - Prof. Dr. Smith',
      date: 'January 5, 2024',
      type: 'Guest Lecture',
      urgent: false
    }
  ];

  return (
    <section id="notices" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Important Notices
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest announcements and important updates from the institute
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {notices.map((notice, index) => (
              <div 
                key={index}
                className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {notice.urgent && (
                        <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 rounded-full text-xs font-semibold">
                          URGENT
                        </span>
                      )}
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-semibold">
                        {notice.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {notice.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Published on: {notice.date}
                    </p>
                  </div>
                  <button className="ml-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
            View All Notices
          </button>
        </div>
      </div>
    </section>
  );
};

export default Notices;
