import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md h-[100px] w-full flex items-center font-railway relative">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="ml-0 sm:ml-2 lg:ml-[150px]">
          <a href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[100px] w-[120px] sm:w-[100px] lg:w-[170px] lg:h-[200px] "
            />
          </a>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-[#FF3E54] focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex flex-1 justify-center ml-[200px]">
          <div className="flex items-center space-x-6 xl:space-x-10 font-semibold text-lg">
            <a
              href="/"
              className="text-gray-700 hover:text-[#FF3E54] transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#FF3E54] transition-colors"
            >
              Features
            </a>
            <a
              href="/features"
              className="text-gray-700 hover:text-[#FF3E54] transition-colors"
            >
              More Option
            </a>
            <a
              href="/help"
              className="text-gray-700 hover:text-[#FF3E54] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4 mr-0 xl:mr-[200px] lg:ml-[30px]">
          <button className="px-6 lg:px-9 py-2 text-[#FF3E54] border border-[#FF3E54] rounded-md hover:bg-gray-100 transition-colors whitespace-nowrap">
            Login
          </button>
          <button className="px-6 lg:px-9 py-2 text-white bg-[#FF3E54] rounded-md hover:bg-[#e03148] transition-colors whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-[100px] left-0 right-0 bg-white shadow-lg z-10 transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-3">
            <a
              href="/"
              className="text-gray-700 hover:text-[#FF3E54] transition-colors py-2 px-3 font-semibold"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#FF3E54] transition-colors py-2 px-3 font-semibold"
            >
              Features
            </a>
            <a
              href="/features"
              className="text-gray-700 hover:text-[#FF3E54] transition-colors py-2 px-3 font-semibold"
            >
              More Option
            </a>
            <a
              href="/help"
              className="text-gray-700 hover:text-[#FF3E54] transition-colors py-2 px-3 font-semibold"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-3 border-t border-gray-200">
            <button className="px-9 py-2 text-[#FF3E54] border border-[#FF3E54] rounded-md hover:bg-gray-100 transition-colors">
              Login
            </button>
            <button className="px-9 py-2 text-white bg-[#FF3E54] rounded-md hover:bg-[#e03148] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
