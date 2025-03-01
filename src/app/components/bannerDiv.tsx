import React from "react";
import { Lilita_One } from "next/font/google";
import Btn from "../../../shared/btn";
import Stats from "./stats";
const Lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});
const BannerDiv = () => {
  return (
    <div className="pl-[100px] w-[1440px] h-[663px] bg-[url('/bannerBG.svg')] bg-cover">
      <div className="w-1/2 h-full flex flex-col justify-evenly">
        <h1 className={`text-black text-[62px] font-integral leading-[64px]`}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-[16px] text-neutral-800 ">
          Browse through our diverse range of meticulously crafted garments,
          designed <br />
          to bring out your individuality and cater to your sense of style.
        </p>
        <Btn text="Shop Now" />

        <div className="h-[74px] w-[596px] bg-red-100 flex gap-[64px] justify-between">
          <Stats h1text="200+" smalltext="International Brands" />
          <Stats h1text="2000+" smalltext="High-Quality Products" />
          <Stats h1text="30,000+" smalltext="Happy Customers" />
        </div>
      </div>
    </div>
  );
};
export default BannerDiv;
