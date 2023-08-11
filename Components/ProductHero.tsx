import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface ProductHeroProps {
  page: string;
  title: string;
  spec: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ page, title, spec }) => {
  return (
    <section className="bg-hero-pattern bg-center bg-cover h-[80vh] relative bg-fixed">
      <div className="h-full w-full bg-black absolute opacity-40"></div>
      <header className="flex items-center justify-end w-full h-full z-10 flex-col relative pb-7">
        <p className="flex items-center">
          HOME <MdArrowForwardIos /> {page} <MdArrowForwardIos /> {spec}{" "}
          <MdArrowForwardIos />
        </p>
        <h1 className="text-white text-center text-6xl">{title} </h1>
      </header>
    </section>
  );
};

export default ProductHero;
