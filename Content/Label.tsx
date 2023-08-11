import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";

export const Label = () => {
  return (
    <section className="bg-brand_primary-50 ">
      <div className="grid grid-cols-1 md:grid-cols-3 contain">
        <article className=" p-7 text-white items-center gap-4 lg:flex">
          <RiCustomerService2Line className=" text-5xl mb-5 lg:text-[10rem]" />
          <div className=" text-white">
            <h2 className=" uppercase font-medium text-lg mb-2 text-white">
              ONLINE SUPPORT 24/7
            </h2>
            <p className=" text-brand_gray-150 leading-8">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </article>

        <article className=" p-7 text-white items-center gap-4 bg-brand_primary-100 lg:flex">
          <GiTakeMyMoney className=" text-5xl mb-5 lg:text-[10rem]" />
          <div>
            <h2 className=" uppercase font-medium text-lg mb-2 text-white">
              MONEY BANK GUARANTEE
            </h2>
            <p className=" text-brand_gray-150 leading-8">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </article>

        <article className=" p-7 text-white items-center gap-4 bg-brand_primary-150 lg:flex">
          <CiDeliveryTruck className=" text-5xl mb-5 lg:text-[10rem]" />

          <div>
            <h2 className=" uppercase font-medium text-lg mb-2 text-white">
              FREE SHIPPING & RETURN
            </h2>
            <p className=" text-brand_gray-150 leading-8">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
