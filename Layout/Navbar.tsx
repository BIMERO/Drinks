"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { setNavOpen } from "@/Store/Store";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollposition = window.scrollY;
      setIsScrolled(scrollposition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //  const handleMenuButtonClick = () => {
  //    dispatch(setNavOpen(!isNavOpen));
  //  };

  return (
    <nav
      className={`flex fixed w-full top-0 z-20  py-5 px-4 transition duration-500 ease-out ${
        isScrolled ? "shadow-lg bg-white" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full contain">
        <h1
          className={`text-2xl font-bold ${
            isScrolled ? "text-black" : "text-white "
          }`}
        >
          LIQUOR{" "}
          <span
            className={`${
              isScrolled ? " text-brand_primary-50" : "text-brand_gray-50"
            }`}
          >
            STORE
          </span>
        </h1>

        <div className="hidden lg:block">
          <ul
            className={`flex items-center gap-8 ml-24 text-sm ${
              isScrolled ? "text-black" : "text-brand_gray-50"
            }`}
          >
            <li>
              <Link className="hover:text-brand_primary-50" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand_primary-50" href="/about">
                ABOUT
              </Link>
            </li>

            <li className="relative product">
              <Link
                className="hover:text-brand_primary-50 flex items-center gap-1"
                href=""
              >
                PRODUCTS
                <span>
                  <RiArrowDropDownLine className="text-sm" />
                </span>
              </Link>
              <ul className="absolute bg-white text-brand_secondary-300 p-4 leading-8 rounded-lg w-36 mt-3 hidden drop">
                <li>
                  <Link href="/product" className="hover:text-brand_primary-50">
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product/singleproduct"
                    className="hover:text-brand_primary-50"
                  >
                    Single products
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-brand_primary-50">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-brand_primary-50">
                    Checkout
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="hover:text-brand_primary-50" href="/blog">
                BLOG
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand_primary-50" href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <header className="relative">
          <HiOutlineShoppingBag className=" text-brand_primary-50 text-xl" />
          <span
            className={`absolute -top-1 -right-2 h-4 rounded-full p-1 leading-3 text-xs bg-brand_gray-200 ${
              isScrolled ? "text-brand_primary-50" : "text-white "
            }`}
          >
            3
          </span>
        </header>

        <button
          className={`lg:hidden ${
            isScrolled ? "text-brand_gray-250" : "text-brand_gray-50"
          }`}
          // onClick={handleMenuButtonClick}
        >
          MENU
        </button>
      </div>
    </nav>
  );
};
