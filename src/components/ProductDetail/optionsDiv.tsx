import React from "react";
import Btn from "../btn";

const OptionsDiv = () => {
  return (
    <div>
      <div className="w-full flex px-24 text-neutral-700 justify-center text-xl">
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
      <div className="flex justify-between">
        <span className="flex">
          <h1></h1>
          <p></p>
        </span>
        <span className="flex">
          <Btn text="Write a Review" Btnclass="btnblack" />
        </span>
      </div>
    </div>
  );
};

export default OptionsDiv;
