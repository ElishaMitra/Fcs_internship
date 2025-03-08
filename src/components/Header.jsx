import React, { useState, useEffect } from "react";
import { images } from "../constants/index.jsx";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white p-10 md:p-20">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          We manage your IT, so you can manage your business.
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Take charge of your business continuity with innovative IT solutions.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a href="#" className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-6 py-3 rounded-md text-lg text-center">
            Schedule a Free Consultation
          </a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md text-lg text-center">
            Services
          </a>
        </div>
      </div>
      
      {/* Right Image Slider Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative overflow-hidden">
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full z-10">&#8592;</button>
        
        {/* Image Container */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover rounded-xl transition-transform duration-700 ease-in-out blur-md ${
                index === currentIndex ? "translate-x-0 blur-none" : "translate-x-full opacity-0"
              }`}
              style={{ left: `${(index - currentIndex) * 100}%` }}
            />
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-gray-400 transition-all duration-300 ${
                index === currentIndex ? "bg-white w-4 h-4" : "opacity-50"
              }`}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full z-10">&#8594;</button>
      </div>
    </header>
  );
};

export default Header;