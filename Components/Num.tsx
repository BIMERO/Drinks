import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Num = () => {
  return (
    <ul className="flex items-center justify-center gap-2 text-brand_primary-50 mt-14">
      <li className="num">
        <MdKeyboardArrowLeft />
      </li>
      <li className="num active">1</li>
      <li className="num">2</li>
      <li className="num">3</li>
      <li className="num">4</li>
      <li className="num">5</li>
      <li className="num">
        <MdKeyboardArrowRight />
      </li>
    </ul>
  );
};
