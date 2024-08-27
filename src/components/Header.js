import React, { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isSticky
          ? "bg-black text-white shadow-lg py-2 px-4 sm:py-4 sm:px-6 opacity-90 rounded-none"
          : "bg-white text-black lg:mt-24 lg:mx-4 sm:mx-12 px-4 sm:px-16 py-2 sm:py-4 opacity-95 rounded-lg"
      }`}
    >
      <nav className="flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold">[Name]</div>
        <div>
          <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
            <li>
              <a href="#" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
