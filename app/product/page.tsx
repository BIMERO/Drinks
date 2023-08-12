import HeroSection from "@/Components/HeroSection";
import React from "react";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineEye,
} from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaCalendarAlt, FaComment } from "react-icons/fa";
import products from "@/Data/Products.json";
import { Num } from "@/Components/Num";
import blog from "@/Data/Blog.json";

export default function Page() {
  const displayCount = 3;
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <HeroSection title="Product" page="PRODUCT" />

      <div className="contain flex py-20 gap-8 flex-col md:flex-row">
        <section>
          <form className="flex items-center justify-between">
            <label className=" text-lg text-black">
              Select the Types of Products
            </label>
            <select name="selected" className=" outline-black">
              <option value="option 1">Brandy</option>
              <option value="option 2">Gin</option>
              <option value="option 3">Rum</option>
              <option value="option 4">Tequila</option>
              <option value="option 5">Vodka</option>
              <option value="option 6">Whiskey</option>
            </select>
          </form>
          <div className=" pt-7">
            <div className="grid mb-20 gap-6 md:grid-cols-3">
              {products.map((item) => {
                return (
                  <div key={item.id} className="text-center px-4">
                    <Image
                      src={item.cover}
                      alt="product_drink"
                      width={255}
                      height={350}
                      className=" rounded object-cover mb-5 h-72 w-full"
                    />
                    <p className="italic text-brand_primary-50">
                      {" "}
                      {item.name}{" "}
                    </p>
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
          </div>
          <Num />
        </section>

        <aside className="w-full px-5 md:w-2/6">
          <h3 className="text-2x1 font-medium mb-5">Product Types</h3>

          <ul className=" leading-10 mb-8">
            <li className="flex items-center justify-between border-b border-brand_secondary-100 mb-2">
              Brandy
              <RiArrowRightSLine />
            </li>
            <li className="flex items-center justify-between border-b border-brand_secondary-100 mb-2">
              Gin
              <RiArrowRightSLine />
            </li>
            <li className="flex items-center justify-between border-b border-brand_secondary-100 mb-2">
              Rum
              <RiArrowRightSLine />
            </li>
            <li className="flex items-center justify-between border-b border-brand_secondary-100 mb-2">
              Tequila
              <RiArrowRightSLine />
            </li>
            <li className="flex items-center justify-between border-b border-brand_secondary-100 mb-2">
              Vodka
              <RiArrowRightSLine />
            </li>
            <li className="flex items-center justify-between border-b border-brand_secondary-100 mb-2">
              Whiskey
              <RiArrowRightSLine />
            </li>
          </ul>

          <h3 className=" text-2xl font-medium mb-5">Recent Blogs</h3>
          {blog.slice(0, displayCount).map((blog) => {
            return (
              <div
                key={blog.id}
                className=" mb-4 gap-3 flex flex-row md:flex-col lg:flex-row"
              >
                <Image
                  src={blog.cover}
                  alt="blog-image"
                  width={100}
                  height={100}
                />
                <div className="">
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </p>
                  <div className="flex items-center gap-2">
                    <small className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span> Apr. 18, 2020</span>
                    </small>
                    <small className="flex items-center gap-2">
                      <FaComment />
                      <span>19</span>
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </main>
  );
}
