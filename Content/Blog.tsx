import React from "react";
import blog from "@/Data/Blog.json";
import { FcCalendar } from "react-icons/fc";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

export const Blog = () => {
  const displayCount = 4;
  return (
    <section className="contain py-24 px-4">
      <header className="text-center capitalize mb-12">
        <small className="text-base text-brand_primary-50 italic inline-block font-normal">
          Blog
        </small>
        <h2 className="text-[28px] font-bold lg:text-[40px]">Recent Blog</h2>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        {blog.slice(0, displayCount).map((item) => {
          return (
            <article key={item.id} className=" md:flex">
              <Image
                src={item.cover}
                alt="blog-image"
                width={100}
                height={100}
                className="w-full"
              />
              <div className=" bg-brand_secondary-50 p-6 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <FcCalendar />
                  <p> {item.date} </p>
                </div>
                <h3 className=" text-2xl font-medium italic mb-4">
                  {item.header}
                </h3>
                <p className="mb-4"> {item.para} </p>
                <Link
                  href="/"
                  className="flex items-center gap-3 text-brand_primary-50 italic font-bold"
                >
                  Continue
                  <span>
                    <HiArrowLongRight />
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
