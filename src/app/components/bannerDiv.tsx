import React from "react";
import Btn from "./btn";
import Stats from "./stats";
import Image from "next/image";

const BannerDiv = () => {
  return (
    <div className="relative pl-[100px] w-[1440px] h-[663px] bg-[url('/bannerBG.svg')] bg-cover">
      <Image
        alt="star"
        src="/star.svg"
        className="absolute  left-[1255px] top-[82px]"
        width={104}
        height={104}
      ></Image>
      <Image
        alt="star"
        src="/star.svg"
        className="absolute  left-[750px] top-[293px]"
        width={56}
        height={56}
      ></Image>
      <div className="w-1/2 h-full flex flex-col justify-evenly">
        <h1 className={`text-black text-[62px] font-integral leading-[64px]`}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-[16px] text-neutral-800  leading-[22px] -my-[40px]">
          Browse through our diverse range of meticulously crafted garments,
          designed <br />
          to bring out your individuality and cater to your sense of style.
        </p>
        <Btn text="Shop Now" Btnclass="btnblack"/>

        <div className="h-[74px] w-[596px] flex gap-[32px] justify-between">
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
