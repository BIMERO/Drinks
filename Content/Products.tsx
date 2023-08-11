import React from "react";
import Image from "next/image";
import products from "@/Data/Products.json";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineEye,
} from "react-icons/ai";

export const Products = () => {
  const displayCount = 8;
  return (
    <section className="contain pt-24 px-4">
      <header className="text-center capitalize mb-12">
        <small className=" text-base text-brand_primary-50 italic inline-block font-normal">
          our delightful offerings
        </small>
        <h2 className=" text-[28px] font-bold lg:text-[40px]">
          tastefully yours
        </h2>
      </header>

      <div className="grid mb-20 gap-6 md:grid-cols-4">
        {products.slice(0, displayCount).map((item) => {
          return (
            <div key={item.id} className="text-center">
              <Image
                src={item.cover}
                alt="product_drink"
                width={255}
                height={350}
                className=" rounded w-full object-cover mb-5"
              />
              <p className="italic text-brand_primary-50"> {item.name} </p>
              <h2 className="capitalize text-2xl"> {item.spec} </h2>
              <h6 className=" text-black italic">
                <span className="line-through text-brand_secondary-200">
                  {item.old_price}
                </span>
                {item.price}
              </h6>
            </div>
          );
        })}
      </div>

      <button className="py-2 px-6 text-white outline-none border-0 rounded-md bg-brand_primary-50 flex items-center justify-center gap-3 w-full m-auto max-w-xs">
        View All Products
        <span>
          <BsFillArrowRightCircleFill className="" />
        </span>
      </button>
    </section>
  );
};
