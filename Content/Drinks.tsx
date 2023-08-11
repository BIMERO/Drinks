import React from "react";
import drinks from "@/Data/drinks.json";
import Image from "next/image";

export const Drinks = () => {
  return (
    <section className="pt-24">
      <div className="contain grid gap-6 md:gap-x-8 md:grid-cols-3 lg:grid-cols-6">
        {drinks.map((item) => {
          return (
            <div key={item.id} className="relative text-center">
              <div className="drink w-32 h-32 rounded-[50%] m-auto mb-5 relative">
                <Image
                  src={item.cover}
                  width={130}
                  height={130}
                  alt="drinks"
                  className="rounded-[50%] h-full w-full"
                />
              </div>
              <h3 className=" text-2xl"> {item.name} </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};
