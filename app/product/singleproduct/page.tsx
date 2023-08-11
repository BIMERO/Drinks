"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductHero from "@/Components/ProductHero";
import BrandButton from "@/Components/BrandButton";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Tabs } from "@/Content/Tabs";

const tabs = [
  {
    label: "Tab 1",
    content: <p>Content of Tab 1</p>,
  },
  {
    label: "Tab 2",
    content: <p>Content of Tab 2</p>,
  },
  // Add more tabs as needed
];
export default function Page() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCount = parseInt(event.target.value);
    setCount(isNaN(inputCount) ? 0 : inputCount);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <ProductHero
        page="PRODUCTS"
        title="Product Single"
        spec="PRODUCT SINGLE"
      />

      <section className="contain py-24 px-5 gap-8 lg:flex">
        <Image
          src="/images/prod-1.jpg.png"
          width={540}
          height={810}
          alt="single-image"
          className="w-full mb-12"
        />
        <div>
          <h3 className=" text-3xl font-medium mb-3">Bacardi 151 Degree</h3>
          <div className="flex items-center gap-6 mb-3">
            <small className="flex items-center gap-1 text-lg text-brand_primary-50">
              5.0
              <span className="flex items-center">
                <RiStarSFill className=" text-brand_primary-50" />
                <RiStarSFill className=" text-brand_primary-50" />
                <RiStarSFill className=" text-brand_primary-50" />
                <RiStarSFill className=" text-brand_primary-50" />
                <RiStarSFill className=" text-brand_primary-50" />
              </span>
            </small>
            <small className="text-black text-lg">
              100 <span className=" text-brand_secondary-350">Rating</span>
            </small>
            <small className="text-black text-lg">
              500 <span className=" text-brand_secondary-350">Sold</span>
            </small>
          </div>
          <h2 className="mb-3 text-3xl">$120</h2>
          <p className="mb-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            and and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
          <div className="w-full flex items-center gap-4 my-6 h-12 max-w-sm">
            <button
              onClick={handleDecrement}
              className="h-full px-4 border border-brand_gray-200"
            >
              <AiOutlineMinus className="text-black" />
            </button>
            <input
              type="number"
              value={count}
              onChange={handleInputChange}
              className="text-center h-full w-full p-3 border border-brand_gray-200 text-black"
            />
            <button
              onClick={handleIncrement}
              className="h-full px-4 border border-brand_gray-200"
            >
              <AiOutlinePlus className="text-black" />
            </button>
          </div>
          <h3 className="text-lg mb-5">80 pieces available</h3>
          <div className="flex items-center gap-4 w-full max-w-xs">
            <BrandButton title="Add to Cart" className="w-full" />
            <BrandButton title="Buy now" className="w-full" />
          </div>
        </div>
      </section>
      <Tabs tabs={tabs} />
    </main>
  );
}
