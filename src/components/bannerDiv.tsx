import React from "react";
import Btn from "./btn";
import Stats from "./stats";

const BannerDiv = () => {
  return (
    <div className="relative pl-[100px] w-full bg-[url('/bannerBG.svg')] bg-cover">
     
      <div className="w-1/2 h-full flex flex-col justify-evenly">
        <h1 className={`text-black mt-20 text-[66px] font-integral leading-[66px]`}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-[16px] text-neutral-800  leading-[22px] my-5">
          Browse through our diverse range of meticulously crafted garments,
          designed <br />
          to bring out your individuality and cater to your sense of style.
        </p>
        <Btn text="Shop Now" Btnclass="btnblack"/>

        <div className="h-[74px] w-[596px] flex gap-[32px] mt-16 mb-20 justify-between">
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
