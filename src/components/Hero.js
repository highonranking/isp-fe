import React, { useState, useEffect } from "react";

// Importing images directly
import Hero1 from '../assets/Hero1.jpg';
import Hero2 from '../assets/Hero2.jpg';
import Hero3 from '../assets/Hero3.jpg';

const Hero = () => {
  const images = [
    `url(${Hero1})`,
    `url(${Hero2})`,
    `url(${Hero3})`,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
            Affordable, Fastest Wifi in Delhi NCR
        </h1>
        <button className="bg-white text-gray-800 border-2  font-bold hover:text-gray-900 border-black mt-24 px-36 py-3 rounded-lg block text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
