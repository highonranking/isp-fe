import React from "react";

const PlanCard = ({ title, price, features, buttonText }) => {
  return (
    <div className="relative bg-white shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-20"></div>
      <div className="relative z-10 p-8 flex-grow">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
        <div className="text-5xl font-extrabold text-gray-900 mb-4">
          {price}
          <span className="text-xl text-gray-500">/month</span>
        </div>
        <ul className="mb-8">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-700 mb-3 flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative z-10 p-8">
        <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white py-4 rounded-lg text-lg font-semibold hover:from-gray-800 hover:to-gray-900 transition-colors duration-300 shadow-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
