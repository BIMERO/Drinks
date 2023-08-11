import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import footerLinks from "@/Data/footerlinks1.json";

export const Footer = () => {
  const displayCount = 4;
  const displayCount1 = 8;
  const displayCount2 = 12;
  return (
    <footer className="bg-brand_secondary-250 py-12 px-4">
      <div className="contain gap-7 grid md:grid-cols-5 lg:grid-cols-5">
        <section>
          <h2 className=" text-white text-xl font-normal tracking-wider mb-7">
            LIQUOR <span className=" text-brand_gray-50">STORE</span>
          </h2>
          <p className=" mb-4">
            Far far away, behind the word mountains, far from the countries.
          </p>
          <div className="flex gap-3 md:flex-col xl:flex-row">
            <FaTwitter className="text-brand_gray-50 bg-brand_primary-50 p-2 rounded-full text-3xl h-12" />
            <FaFacebookF className="text-brand_gray-50 bg-brand_primary-50 p-2 rounded-full text-3xl h-12" />
            <FaInstagram className="text-brand_gray-50 bg-brand_primary-50 p-2 rounded-full text-3xl h-12" />
          </div>
        </section>
        <section>
          <h2 className=" text-brand_gray-150 mb-7 text-xl">My Accounts</h2>
          <ul className=" leading-10">
            {footerLinks.slice(0, displayCount).map((link) => {
              return (
                <li key={link.id} className="flex items-center gap-1">
                  <span>
                    <MdArrowForwardIos />
                  </span>
                  {link.name}
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h2 className=" text-brand_gray-150 mb-7 text-xl">Information</h2>
          <ul className=" leading-10">
            {footerLinks.slice(4, displayCount1).map((link) => {
              return (
                <li key={link.id} className="flex items-center gap-1">
                  <span>
                    <MdArrowForwardIos />
                  </span>
                  {link.name}
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h2 className=" text-brand_gray-150 mb-7 text-xl">Quick Link</h2>
          <ul className=" leading-10">
            {footerLinks.slice(8, displayCount2).map((link) => {
              return (
                <li key={link.id} className="flex items-center gap-1">
                  <span>
                    <MdArrowForwardIos />
                  </span>
                  {link.name}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className=" text-brand_gray-150 mb-7 text-xl">
            Have a Question?
          </h2>
          <ul>
            <li className="flex items-baseline gap-2 text-white text-base mb-3">
              <span>
                <FiMapPin />
              </span>
              203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li className="flex items-center gap-1 text-xs mb-3">
              <span>
                <BsFillTelephoneFill />
              </span>
              +234 7017319899
            </li>
            <li className="flex items-center gap-1 text-xs">
              <span>
                <FaTelegramPlane className=" text-sm" />
              </span>
              info@gmail.com
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
