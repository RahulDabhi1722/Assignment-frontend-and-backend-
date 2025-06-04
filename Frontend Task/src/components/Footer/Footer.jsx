import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-black font-roboto py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="do List"
                className="w-28 sm:w-36 h-auto"
              />
            </div>
            <p className="mb-4 text-gray-600 text-sm sm:text-base">
              Subscribe to our newsletter for the latest features and updates
              <br className="hidden md:block"></br> delivered to you.
            </p>
            <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Your email here"
                className="bg-transparent border border-gray-300 px-4 py-2 sm:py-3 rounded sm:rounded-l sm:rounded-r-none text-black w-full sm:w-64 focus:outline-none"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-12 py-2 sm:py-3 rounded sm:rounded-r sm:rounded-l-none transition w-full sm:w-auto mt-2 sm:mt-0">
                Join
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="text-center lg:text-left">
                <h3 className="font-bold mb-4 text-base sm:text-lg">
                  Useful Links
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li className="hover:text-gray-900 cursor-pointer">
                    Home Page
                  </li>
                  <li className="hover:text-gray-900 cursor-pointer">
                    About Us
                  </li>
                  <li className="hover:text-gray-900 cursor-pointer">
                    Contact Us
                  </li>
                  <li className="hover:text-gray-900 cursor-pointer">
                    Blog Posts
                  </li>
                  <li className="hover:text-gray-900 cursor-pointer">FAQs</li>
                </ul>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="font-bold mb-4 text-base sm:text-lg">
                  Resources
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li className="hover:text-gray-900 cursor-pointer">
                    Help Center
                  </li>
                  <li className="hover:text-gray-900 cursor-pointer">
                    User Guide
                  </li>
                  <li className="hover:text-gray-900 cursor-pointer">
                    Community Forum
                  </li>
                  <li className="hover:text-gray-900 cursor-pointer">
                    Feedback
                  </li>
                  <li className="hover:text-gray-900 cursor-pointer">
                    Support
                  </li>
                </ul>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="font-bold mb-4 text-base sm:text-lg">
                  Connect With Us
                </h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex items-center justify-center lg:justify-start gap-2 cursor-pointer">
                    <span className="text-red-500">
                      <FaFacebookF />
                    </span>
                    <span className="text-gray-600 hover:text-gray-900">
                      Facebook
                    </span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2 cursor-pointer">
                    <span className="text-red-500">
                      <FaInstagram />
                    </span>
                    <span className="text-gray-600 hover:text-gray-900">
                      Instagram
                    </span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2 cursor-pointer">
                    <span className="text-red-500">
                      <FaXTwitter />
                    </span>
                    <span className="text-gray-600 hover:text-gray-900">X</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2 cursor-pointer">
                    <span className="text-red-500">
                      <FaLinkedinIn />
                    </span>
                    <span className="text-gray-600 hover:text-gray-900">
                      LinkedIn
                    </span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2 cursor-pointer">
                    <span className="text-red-500">
                      <FaYoutube />
                    </span>
                    <span className="text-gray-600 hover:text-gray-900">
                      YouTube
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-6"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-600">
          <p className="mb-4 sm:mb-0">© 2024 Osumare. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
            <a href="#" className="hover:text-gray-900 underline font-semibold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 underline font-semibold">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900 underline font-semibold">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
