
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-blue-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-tech-blue-light">Net</span>Engineer
            </a>
            <p className="text-tech-gray-light text-sm mt-2 max-w-md">
              Building reliable, secure, and high-performance network solutions for modern businesses.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex space-x-4">
              <a href="#home" className="text-tech-gray-light hover:text-white transition-colors text-sm">Home</a>
              <a href="#about" className="text-tech-gray-light hover:text-white transition-colors text-sm">About</a>
              <a href="#experience" className="text-tech-gray-light hover:text-white transition-colors text-sm">Experience</a>
              <a href="#projects" className="text-tech-gray-light hover:text-white transition-colors text-sm">Projects</a>
              <a href="#contact" className="text-tech-gray-light hover:text-white transition-colors text-sm">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-tech-gray-dark/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray-light text-sm">
            &copy; {currentYear} Network Engineer Portfolio. All rights reserved.
          </p>
          
          <p className="text-tech-gray-light text-sm mt-4 md:mt-0">
            Designed & Developed with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
