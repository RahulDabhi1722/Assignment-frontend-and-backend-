import React from "react";
import Hero from "./Hero/Hero";
import HeaderCard from "./Header Card/HeaderCard";
import LogoStrip from "./Logo Strip/LogoStrip";

const HeroSection = ({ addEntry }) => {
  return (
    <div>
      <Hero addEntry={addEntry} />
      <HeaderCard />
      <LogoStrip />
    </div>
  );
};

export default HeroSection;
