"use client";
import React, { useState, ChangeEvent } from "react";
import HeroSection from "@/Components/HeroSection";
import { TiTimes } from "react-icons/ti";
import Image from "next/image";
export default function Page() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <HeroSection title="My Cart" page="CART" />

      <section className="contain py-24 overflow-scroll">
        <table>
          <thead>
            <tr className="text-white bg-brand_primary-50">
              <th className="py-5 px-8">&nbsp;</th>
              <th className="py-5 px-8">&nbsp;</th>
              <th className="py-5 px-8">Products</th>
              <th className="py-5 px-8">Price</th>
              <th className="py-5 px-8">Quantity</th>
              <th className="py-5 px-8">Total</th>
              <th className="py-5 px-8">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-5 px-8">
                <input type="checkbox" />
              </td>
              <td className="py-5 px-8">
                <Image
                  src="/images/prod-1.jpg.png"
                  alt="drink"
                  width={100}
                  height={100}
                />
              </td>
              <td className="py-5 px-8">
                <h4 className="text-xl font-medium mb-3">
                  Jim Beam Kentucky Straight
                </h4>
                <p className="text-brand_gray-300">
                  Fugiat voluptates quasi nemo, ipsa perferendis
                </p>
              </td>
              <td className="py-5 px-8">
                <p>$44.99</p>
              </td>
              <td className="py-5 px-8">
                <input
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="border border-brand_secondary-100 p-4 outline-none rounded-md text-center"
                />
              </td>
              <td className="py-5 px-8">
                <p>$44.99</p>
              </td>

              <td className="py-5 px-8">
                <TiTimes className=" text-brand_primary-200" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
