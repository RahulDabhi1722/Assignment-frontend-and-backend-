import React, { useState } from "react";
import Form from "../Form/Form";
import ThankYou from "../ThankYou/ThankYou";

const Hero = ({ addEntry }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    addEntry(formData);

    setFormSubmitted(true);

    setTimeout(() => {
      setShowModal(false);
      setFormSubmitted(false);
    }, 5000);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormSubmitted(false);
  };

  return (
    <div className="bg-[#F7F7FB] py-10 md:py-24 lg:py-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-railway">
            Simplify Your Life with Our <br />
            Todo App
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 font-railway text-center">
            Stay organized and boost your productivity with our intuitive todo
            website.
          </p>
          <p className="mt-1 text-lg md:text-xl text-gray-600 font-railway ">
            Experience a modern approach to task management that fits your
            lifestyle.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-8 py-3 bg-[#FF3E54] text-white rounded-full hover:bg-[#e03148] transition-colors font-medium text-lg shadow-md"
              onClick={() => setShowModal(true)}
            >
              Get Started
            </button>
            <button className="px-8 py-3 border border-[#FF3E54] text-gray-700 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            {formSubmitted ? (
              <ThankYou onClose={handleClose} />
            ) : (
              <div className="relative">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <Form onFormSubmit={handleFormSubmit} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
