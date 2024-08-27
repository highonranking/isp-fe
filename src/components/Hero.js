import React, { useState, useEffect } from "react";
import Hero1 from '../assets/Hero1.jpg';
import Hero2 from '../assets/Hero2.jpg';
import Hero3 from '../assets/Hero3.jpg';

const Hero = () => {
  const images = [
    `url(${Hero1})`,
    `url(${Hero2})`,
    `url(${Hero3})`,
  ];

  const cities = ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"];

  const [currentImage, setCurrentImage] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const validateForm = (name, value) => {
    const newErrors = { ...errors };

    if (name === "name" && !value.trim()) {
      newErrors.name = "Name is required.";
    } else {
      delete newErrors.name;
    }

    if (name === "phone") {
      if (!value.trim()) {
        newErrors.phone = "Phone number is required.";
      } else if (value.length !== 10) {
        newErrors.phone = "Phone number must be exactly 10 digits.";
      } else {
        delete newErrors.phone;
      }
    }

    if (name === "city" && !value) {
      newErrors.city = "City is required.";
    } else {
      delete newErrors.city;
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Email is invalid.";
      } else {
        delete newErrors.email;
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value) || value.length > 10) {
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    validateForm(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form data submitted: ", formData);
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-20">
        {/* Heading */}
        <div className="text-center lg:text-left lg:w-1/2 px-6 lg:px-0">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6 shadow-lg">
            Affordable, Fastest Wifi in Delhi NCR
          </h1>
          <p className="text-gray-300 text-lg mb-8 lg:max-w-md">
            Join us and experience blazing fast internet speeds at unbeatable prices. Stay connected, always.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white bg-opacity-70 hover:scale-105 transition-transform duration-300 p-8 lg:mt-32 rounded-2xl shadow-2xl backdrop-blur-md lg:w-1/3">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    placeholder="Your Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    } rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                  >
                    <option value="">Select your city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city}</p>}
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isLogin ? "Email or Phone" : "Email"}
              </label>
              <input
                type={isLogin ? "text" : "email"}
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                placeholder={isLogin ? "Email or Phone" : "Your Email Address"}
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-gray-600">
            {isLogin ? "New here? " : "Already a customer? "}
            <button
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
