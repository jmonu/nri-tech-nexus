
import React from 'react';
import { Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'TechFest 2024',
      date: 'March 15-17, 2024',
      type: 'Technical Festival',
      description: 'Annual technical festival featuring competitions, workshops, and guest lectures',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center',
      status: 'upcoming'
    },
    {
      title: 'Industry Expert Lecture Series',
      date: 'Every Friday',
      type: 'Weekly Series',
      description: 'Weekly lectures by industry experts on emerging technologies',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop&crop=center',
      status: 'ongoing'
    },
    {
      title: 'Coding Championship',
      date: 'February 20, 2024',
      type: 'Competition',
      description: 'Inter-college programming competition with exciting prizes',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center',
      status: 'upcoming'
    },
    {
      title: 'Job Fair 2024',
      date: 'April 5-6, 2024',
      type: 'Placement Drive',
      description: 'Major job fair with 50+ companies for final year students',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&crop=center',
      status: 'upcoming'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'ongoing': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Events & Activities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with our exciting events, workshops, and activities that enhance your learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {event.type}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
