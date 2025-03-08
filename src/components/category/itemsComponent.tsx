import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const ItemsComponent = () => {
  return (
    <div className="w-[70%]">
      <div className="flex justify-between">
        <h1 className="font-satoshiBold text-2xl text-black">Casual</h1>
        <p></p>
      </div>
      <div className="flex justify-between text-black">
        <button className="border-[1px] border-slate-300 p-2 flex items-center gap-3 px-3 font-satoshiBold rounded-lg">
          <ArrowLeft />
          Previous
        </button>
        <span></span>
        <button className="border-[1px] border-slate-300 p-2 flex items-center gap-3 px-3 font-satoshiBold rounded-lg">
          Next <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ItemsComponent;
