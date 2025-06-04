import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HeaderCard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-stretch justify-center py-3 px-4 sm:px-6 lg:px-20 gap-6 bg-[#F7F7FB]">
        <div className="bg-[#FF3E54] text-white p-6 sm:p-10  lg:p-14 rounded-3xl lg:w-[60%] lg:ml-[133px] w-full ">
          <div className="h-full flex flex-col justify-between font-roboto">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                <span className="opacity-60">Organize.</span>
                <br />
                <span className="font-bold">Achieve.</span>
                <br />
                <span className="opacity-90">Relax.</span>
              </h1>

              <p className="text-base sm:text-lg mt-6 opacity-90">
                Turn clutter into clarity, chaos into control, and dreams into
                done.
                <span className="font-bold"> bold</span> visions into market
                success
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 font-dm sans">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="bg-[#FFFFFF1A] bg-opacity-20 px-6 py-3 rounded-full text-white hover:bg-opacity-30 transition-colors">
                Discover Features
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white relative rounded-3xl shadow-xl overflow-hidden w-full lg:w-[30%] lg:mr-[133px] mx-auto">
          <img
            src="/person.png"
            alt="Freddie Halvorson"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>

          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-white">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight opacity-60">
              Your Tasks.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Our Tools.
            </p>
          </div>

          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 flex space-x-2">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></span>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full opacity-40"></span>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full opacity-40"></span>
          </div>

          <button className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white opacity-80 hover:opacity-100 bg-black/20 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
            <IoIosArrowBack size={16} className="sm:text-xl" />
          </button>
          <button className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white opacity-80 hover:opacity-100 bg-black/20 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
            <IoIosArrowForward size={16} className="sm:text-xl" />
          </button>

          <div className="absolute bottom-16 lg:ml-[5px] lg:mt-[170px] sm:bottom-auto sm:top-[50%] left-4 sm:left-8 transform sm:-translate-y-1/2 text-white flex items-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center mr-2">
              <span className="text-gray-600 text-[10px] sm:text-xs">C</span>
            </div>
            <p className="text-xs sm:text-sm">
              <span className="font-light">logo</span>
              <span className="font-bold">ipsum</span>
            </p>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
            <p className="font-bold text-lg sm:text-xl">Freddie Halvorson</p>
            <p className="text-xs sm:text-sm opacity-80">
              Chief Productivity Enthusiast
            </p>
          </div>

          <button className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-black text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-gray-900">
            <FaPlay className="ml-0.5" size={12} />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
