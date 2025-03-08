import React from "react";
import Btn from "../btn";
import { ChevronDownIcon, Settings2 } from "lucide-react";

const OptionsDiv = () => {
  return (
    <div className="bg-red-300 py-4 font-bold">
      <div className="w-full flex px-24 py-4 text-neutral-700 items-center justify-center text-xl">
        <span className="w-[30%] bg-red-300 flex items-center justify-center border-b-[1px]">
          Product Details
        </span>
        <span className="w-[30%] flex items-center justify-center border-b-[1px]">
          Rating & Reviews
        </span>
        <span className="w-[30%] flex items-center justify-center border-b-[1px]">
          FAQs
        </span>
      </div>
      <div className="flex justify-between px-28">
        <span className="flex text-2xl items-center gap-2">
          <h1 className="font-extrabold text-2xl text-black">All Reviews</h1>
          <p className="text-slate-700">(451)</p>
        </span>
        <span className="flex gap-3 text-slate-700">
          <div className="px-4 rounded-full bg-slate-200 flex items-center justify-center">
            <Settings2 />
          </div>
          <div className="flex items-center px-4 gap-3 bg-slate-200 rounded-full ">
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
