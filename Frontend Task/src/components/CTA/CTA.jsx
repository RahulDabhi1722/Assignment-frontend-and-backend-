import React from "react";

const CTA = () => {
  return (
    <section className="bg-white py-8 md:py-16 font-roboto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/Mobile Preview.jpg"
              alt="Mobile App Preview"
              className="shadow-md w-full max-w-[350px] md:max-w-[450px] lg:max-w-[585px] h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Start Organizing Your Life Today
            </h2>
            <p className="text-gray-700 mb-6 text-base lg:text-lg">
              Join us now and transform your productivity with our intuitive
              to-do list platform!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-md w-full sm:w-auto">
                Sign Up
              </button>
              <button className="border border-rose-500 text-rose-500 px-6 py-3 rounded-md hover:bg-rose-50 w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
