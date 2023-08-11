"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const History = () => {
  const [counteron, setCounteron] = useState(false);
  return (
    <section className="pt-24">
      <div className="contain md:flex">
        <div className=" bg-history-pattern bg-cover h-[400px] w-full md:h-auto"></div>
        <div className="w-full lg:p-12 p-6">
          <small className=" text-brand_primary-50 italic text-base">
            Since 1908
          </small>
          <h1 className=" text-3xl font-bold mb-6 text-black">
            Desire meets a new taste
          </h1>
          <p className=" mb-6">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p className=" mb-6">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            &quot;and&quot; and the Little Blind Text should turn around and
            return to its own, safe country.
          </p>
          <h3 className=" text-3xl text-black capitalize leading-10 font-light">
            <CountUp
              start={0}
              end={115}
              duration={5}
              delay={3}
              className=" text-brand_primary-50 italic"
            />{" "}
            years of experience in business
          </h3>
        </div>
      </div>
    </section>
  );
};
