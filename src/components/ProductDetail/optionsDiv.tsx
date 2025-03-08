import React from "react";
import Btn from "../btn";
import { ChevronDownIcon, Settings2 } from "lucide-react";

const OptionsDiv = () => {
  return (
    <div className="py-8 font-bold px-2 lg:px-28">
      <div className="w-full flex py-4 text-neutral-700 items-center justify-center text-lg md:text-xl">
        <span className="w-1/3 py-2 flex items-center justify-center border-b-[1px]">
          Product Details
        </span>
        <span className="w-2/5 md:w-1/3 py-2 flex items-center  justify-center border-b-[1px]">
          Rating & Reviews
        </span>
        <span className="w-[10%] md:w-1/3 py-2 flex items-center justify-center border-b-[1px]">
          FAQs
        </span>
      </div>
      <div className="flex justify-between ">
        <span className="flex text-lg lg:text-2xl items-center gap-2">
          <h1 className="font-satoshiBold text-lg lg:text-2xl text-black">
            All Review
          </h1>
          <p className="text-slate-700">(451)</p>
        </span>
        <span className="flex gap-3 text-slate-700">
          <div className="px-4 rounded-full bg-slate-200 flex items-center justify-center">
            <Settings2 />
          </div>
          <div className="hidden md:flex items-center px-4 gap-0 lg:gap-3 bg-slate-200 rounded-full ">
            <p>Latest</p>
            <ChevronDownIcon />
          </div>
          <Btn text="Write a Review" Btnclass="btnblack" />
        </span>
      </div>
    </div>
  );
};

export default OptionsDiv;
