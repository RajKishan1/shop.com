import React from "react";
import Btn from "../btn";
import Stats from "../stats";

const BannerDiv = () => {
  return (
    <div className="relative w-full px-3 lg:px-24 bg-[url('/bannerBG.svg')] bg-cover">
     
      <div className="w-full md:w-1/2 flex flex-col justify-evenly">
        <h1 className={`text-black mt-8 lg:mt-20 text-4xl lg:text-[66px] w-[90%] md:w-[70%] font-integral leading-9 lg:leading-[66px]`}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm md:text-[16px] text-neutral-600 w-[90%] lg:w-[65%] leading-[22px] my-4 lg:my-6">
          Browse through our diverse range of meticulously crafted garments,
          designed
          to bring out your individuality and cater to your sense of style.
        </p>
        <Btn text="Shop Now" Btnclass="btnblack w-[250px]"/>

        <div className="h-12 lg:h-[74px] w-full lg:w-[596px] flex gap-[32px] mt-16 mb-20 justify-between">
          <Stats h1text="200+" smalltext="International Brands" />
          <hr className="w-[1px]  bg-neutral-300 h-[80px]" />
          <Stats h1text="2,000+" smalltext="High-Quality Products" />
          <hr className="w-[1px]  bg-neutral-300  h-[80px]" />
          <Stats h1text="30,000+" smalltext="Happy Customers" />
        </div>
      </div>
    </div>
  );
};
export default BannerDiv;
