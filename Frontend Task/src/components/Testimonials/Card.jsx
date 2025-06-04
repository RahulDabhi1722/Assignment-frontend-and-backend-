import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 py-4 sm:py-8">
      <div className="w-full lg:w-1/2 mt-4 sm:mt-6 lg:mt-10">
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-[#333] mb-4 sm:mb-6 lg:mb-8 leading-tight">
          Using this website has made my{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          tasks so much easier! I can't{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          imagine my day without it.
        </blockquote>

        <div className="flex items-center mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6 lg:mb-8">
          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-red-500 mr-3 lg:mr-4 flex-shrink-0"></div>
          <div>
            <div className="flex items-center">
              <div className="w-6 sm:w-7 lg:w-8 border-t border-gray-300 mr-2"></div>
              <p className="font-bold text-lg sm:text-xl">Sherri Cronin</p>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              Project Manager, TechCorp
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-6 sm:mt-8 lg:mt-12">
          <button className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-red-500 flex items-center justify-center text-red-500 hover:bg-red-50 transition">
            <FiChevronLeft size={18} className="sm:text-lg lg:text-xl" />
          </button>
          <button className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition">
            <FiChevronRight size={18} className="sm:text-lg lg:text-xl" />
          </button>
        </div>
      </div>

      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/5 mt-6 lg:mt-0">
        <div className="relative">
          <div className="p-2 sm:p-3 md:p-4 lg:p-5">
            <img
              src="women.png"
              alt="Portrait"
              className="w-full h-auto max-w-[348px] mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
