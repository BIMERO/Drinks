import React from "react";
import Image from "next/image";
import review from "@/Data/Reviews.json";
import stars from "@/Data/Stars.json";
import { RiStarSFill } from "react-icons/ri";

export default function Review() {
  return (
    <section className="bg-brand_secondary-50 flex flex-col md:flex-row p-6 gap-8">
      <div className="w-full md:w-3/5">
        <h3 className=" text-2xl mb-5">23 Reviews</h3>
        {review.map((item) => {
          return (
            <div key={item.id} className="flex mb-8 gap-5">
              <Image
                src={item.cover}
                alt="image"
                width={100}
                height={100}
                className=" w-36 h-20 rounded-[50%]"
              />
              <article className="flex flex-col gap-4">
                <h4 className="flex justify-between text-lg">
                  {item.name}{" "}
                  <span className="text-brand_secondary-400 italic text-sm">
                    25 April 2023
                  </span>
                </h4>
                <p className="flex items-center">
                  <RiStarSFill className=" text-brand_primary-50" />
                  <RiStarSFill className=" text-brand_primary-50" />
                  <RiStarSFill className=" text-brand_primary-50" />
                  <RiStarSFill className=" text-brand_primary-50" />
                  <RiStarSFill className=" text-brand_primary-50" />
                </p>
                <p>
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrov
                </p>
              </article>
            </div>
          );
        })}
      </div>

      <aside>
        <h3 className=" text-2xl mb-5">Give a Review</h3>

        {stars.map((star) => {
          return (
            <div key={star.id} className="flex items-center w-max mb-5">
              <p className="flex items-center">
                <RiStarSFill className=" text-brand_primary-50" />
                <RiStarSFill className=" text-brand_primary-50" />
                <RiStarSFill className=" text-brand_primary-50" />
                <RiStarSFill className=" text-brand_primary-50" />
                <RiStarSFill className=" text-brand_primary-50" />
                <span className="ml-1 text-brand_secondary-400 italic text-sm">
                  ({star.num})
                </span>
              </p>
              <p className="md:ml-24 ml-16 text-brand_secondary-400 italic text-sm">
                {star.reviews}
              </p>
            </div>
          );
        })}
      </aside>
    </section>
  );
}
