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
          ? "text-white shadow-lg p-4 bg-black opacity-70  rounded-none"
          : "bg-white mt-24 mx-12 px-16 py-4 opacity-70 rounded-lg"
      }`}
    >
      <nav className="flex justify-between  items-center">
        <div className="text-2xl font-bold">[Name]</div>
        <div>
          <ul className="flex space-x-4">
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
