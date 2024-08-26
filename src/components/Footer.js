import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-x-4 lg:flex-row lg:justify-between">
          {/* Company Info */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-4">Company Name</h3>
            <p className="mb-4">
            We're committed to revolutionizing the way you connect to the world.          </p>
            <p>&copy; {new Date().getFullYear()} Abhinav Dixit. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="lg:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="text-lg font-semibold mb-4">Get Started</h4>
          <form className="flex space-x-28 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-2/3 px-4 py-2 mb-2 sm:mb-0 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full sm:w-1/3 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
