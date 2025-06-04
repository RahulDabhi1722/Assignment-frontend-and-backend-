import React from "react";

const ThankYou = ({ onClose }) => {
  return (
    <div className="p-8 text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
        <svg
          className="h-8 w-8 text-red-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Thank You for connect with us.{" "}
      </h3>
      <p className="text-gray-600">Your team will conntact with you soon.</p>
      <button
        className="mt-6 px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ThankYou;
