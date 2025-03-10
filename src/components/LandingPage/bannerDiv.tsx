import React from "react";
import Btn from "../btn";
import Stats from "../stats";
import Image from "next/image";

const BannerDiv = () => {
  return (
    <div className="relative w-full px-3 lg:px-24 bg-[url('/bannerBG.svg')] bg-cover">
      <div className="w-full md:w-1/2 flex flex-col justify-evenly ">
        <h1
          className={`text-black mt-8 lg:mt-20 max-md:text-4xl text-[66px] max-2xl:text-[50px]  w-[90%] lg:w-[80%] font-integral max-md:leading-9 leading-[66px] max-2xl:leading-[58px]`}
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        <p className="text-sm md:text-[16px] text-neutral-600 w-[95%] lg:w-[65%] leading-[22px] my-4 lg:my-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Btn text="Shop Now" Btnclass="btnblack w-[360px] md:w-[240px]" link="category"/>

        <div className="flex gap-4 lg:gap-1 flex-wrap mt-1 lg:mt-16 mb-2 lg:mb-20 justify-between items-center text-center ">
          <Stats h1text="200+" smalltext="International Brands" />
          <hr className="w-[1px]  bg-neutral-300 h-[80px]" />
          <Stats h1text="2,000+" smalltext="High-Quality Products" />
          <hr className="w-[1px]  bg-neutral-300  h-[80px]" />
          <Stats h1text="30,000+" smalltext="Happy Customers" />
        </div>
        <span className="flex md:hidden">
          <Image
            alt=""
            src={"/images/mobileimg.jpg"}
            width={380}
            height={600}
          ></Image>
        </span>
      </div>
    </div>
  );
};
export default BannerDiv;
