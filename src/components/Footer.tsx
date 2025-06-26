
import React from 'react';
import { Mail, Contact } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    academics: [
      'Undergraduate Programs',
      'Postgraduate Programs',
      'Research',
      'Academic Calendar',
      'Examination'
    ],
    admissions: [
      'Admission Process',
      'Eligibility Criteria',
      'Fee Structure',
      'Scholarships',
      'FAQ'
    ],
    campus: [
      'Library',
      'Laboratories',
      'Hostels',
      'Sports',
      'Cafeteria'
    ],
    quickLinks: [
      'About Us',
      'Faculty',
      'Placements',
      'Events',
      'Contact'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=50&h=50&fit=crop&crop=center" 
                alt="NRI Institute Logo" 
                className="h-12 w-12 rounded-full mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-400">NRI Institute</h3>
                <p className="text-gray-400 text-sm">of Technology</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering future engineers with excellence in education, innovation, and technology. 
              Building tomorrow's leaders through world-class engineering education and research.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">info@nritech.edu.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Contact size={16} className="text-blue-400" />
                <span className="text-gray-300">+91 40 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Academics</h4>
            <ul className="space-y-2">
              {footerLinks.academics.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Admissions</h4>
            <ul className="space-y-2">
              {footerLinks.admissions.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Life */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Campus Life</h4>
            <ul className="space-y-2">
              {footerLinks.campus.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} NRI Institute of Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
