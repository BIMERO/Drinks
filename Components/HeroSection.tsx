import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface HeroSectionProps {
  page: string;
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ page, title }) => {
  return (
    <section className="bg-hero-pattern bg-center bg-cover h-[80vh] relative bg-fixed">
      <div className="h-full w-full bg-black absolute opacity-40"></div>
      <header className="flex items-center justify-end w-full h-full z-10 flex-col relative pb-7">
        <p className="flex items-center">
          HOME <MdArrowForwardIos /> {page} <MdArrowForwardIos />
        </p>
        <h1 className="text-white text-6xl">{title} </h1>
      </header>
    </section>
  );
};

export default HeroSection;
