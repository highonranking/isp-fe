import React from "react";
import BackgroundImage from "../assets/Promotion.jpg"; 

const PromoSection = () => {
    return (
      <section className="relative flex space-x-12 flex-col lg:flex-row items-center justify-between bg-white py-16 px-8 lg:px-24">
        <div className="lg:w-1/2 z-10">
          <h4 className="text-blue-700 font-semibold text-lg mb-2">Our Features</h4>
          <h1 className="text-gray-900 font-bold text-4xl lg:text-5xl mb-6">
            More Great Reasons <br /> to Choose Our WiFi
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            To get started, explore our range of plans and find the perfect one for you. Our team is here to help you choose the ideal package!
          </p>
          <div className="space-y-4 mb-10">
            <div className="flex items-center">
              <div>
                <h4 className="text-gray-900 font-semibold text-xl">Blazing Fast and Reliable</h4>
                <p className="text-gray-600">
                  Experience top-notch customer support and high-speed satellite connectivity worldwide.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <h4 className="text-gray-900 font-semibold text-xl">All Entertainment in One Place</h4>
                <p className="text-gray-600">
                  From family nights to lively gatherings, we provide exceptional entertainment for every occasion.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-white text-gray-800 border-2 border-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
            View All Bundles
          </button>
        </div>
  
        <div className="lg:w-1/2 h-80 shadow-xl hover:scale-105 transition-transform duration-300 lg:h-[400px] relative mt-10 lg:mt-0 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})`, height: '100%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-lg"></div>
        </div>
      </section>
    );
  };
  
  export default PromoSection;


