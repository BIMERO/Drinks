import React from "react";

export const Expertise = () => {
  return (
    <section className="grid items-center justify-center text-center gap-8 py-24 contain md:grid-cols-2 lg:grid-cols-4">
      <div>
        <h4 className=" text-brand_primary-50 font-medium text-[40px] italic">
          3,000
        </h4>
        <p>OUR SATISFIED CUSTOMERS</p>
      </div>
      <div>
        <h4 className=" text-brand_primary-50 font-medium text-[40px] italic">
          115
        </h4>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <div>
        <h4 className=" text-brand_primary-50 font-medium text-[40px] italic">
          100
        </h4>
        <p>KINDS OF LIQUOR</p>
      </div>
      <div>
        <h4 className=" text-brand_primary-50 font-medium text-[40px] italic">
          40
        </h4>
        <p>OUR BRANCHES</p>
      </div>
    </section>
  );
};
