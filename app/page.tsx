import { Blog } from "@/Content/Blog";
import { Drinks } from "@/Content/Drinks";
import { History } from "@/Content/History";
import { Label } from "@/Content/Label";
import { Products } from "@/Content/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between overflow-hidden">
      <header className="bg-hero-pattern bg-fixed h-screen bg-cover bg-bottom">
        <div className="h-full w-full bg-black absolute opacity-40"></div>

        <div className=" text-white z-10 transform -rotate-6 h-full flex flex-col items-center justify-center">
          <h1 className=" font-extrabold text-[40px] italic leading-[45px] mb-4 lg:text-7xl text-white">
            <span className="fill">Good</span> Drink{" "}
            <span className="fill">
              for <br /> Good
            </span>
            {"  "}
            Moments
            <span className="fill">.</span>
          </h1>
          <div className="flex gap-3">
            <button className=" py-2 px-6 lg:py-4 lg:px-8 text-white outline-none border-0 rounded-md bg-brand_primary-50">
              Shop Now
            </button>
            <button className="py-2 px-6 lg:py-4 lg:px-8 text-white outline-none border rounded-md">
              Read More
            </button>
          </div>
        </div>
      </header>

      <Label />
      <History />
      <Drinks />
      <Products />
      <Blog />
    </main>
  );
}
