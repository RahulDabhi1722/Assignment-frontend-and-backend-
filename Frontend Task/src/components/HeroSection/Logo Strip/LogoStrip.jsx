import React from 'react';

const LogoStrip = () => {
  return (
    <div className="w-full bg-[#F7F7FB] py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <img 
          src="/Logo Strip.png" 
          alt="Popular brand logos" 
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1000px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LogoStrip;