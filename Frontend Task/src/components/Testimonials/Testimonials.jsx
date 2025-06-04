import React from "react";
import TestimonialCard from "./Card";

const Testimonials = () => {
  return (
    <section className="py-2 px-4 md:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1744] mb-4">
          Customer Testimonials
        </h2>

        <p className="text-base text-gray-700 mb-6 md:mb-12">
          This tool has transformed my productivity and organization!
        </p>

        <div className="relative">
          <div className="relative">
            <div className="hidden sm:block absolute top-0 left-0 w-[180px] sm:w-[250px] md:w-[320px] lg:w-[420px] h-[14px] bg-red-500"></div>

            <div className="hidden sm:block absolute top-0 left-0 h-[300px] sm:h-[380px] md:h-[855px] lg:h-[530px] w-[14px] bg-red-500"></div>

            <div className="hidden sm:block absolute bottom-0 left-0 w-[180px] sm:w-[250px] md:w-[700px] lg:w-[420px] h-[14px] bg-red-500"></div>

            <div className="hidden sm:block absolute top-0 right-[350px] sm:right-[450px] md:right-[390px] lg:right-[790px] h-[50px] w-[14px] bg-red-500"></div>

            <div className="hidden sm:block absolute bottom-0 right-[350px] sm:right-[450px] md:right-[10px]  lg:right-[790px] h-[50px] w-[14px] bg-red-500"></div>

            <div className="pt-4 sm:pl-[20px] sm:pt-[20px] sm:pb-[20px] md:pl-[24px] md:pt-[24px] md:pb-[24px] lg:pl-[28px] lg:pt-[28px] lg:pb-[28px] sm:ml-[40px] md:ml-[60px] lg:ml-[80px]">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
