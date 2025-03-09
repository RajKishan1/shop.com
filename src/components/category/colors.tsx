import React from "react";
import FilterTitle from "./FilterTitle";
import ColorDiv from "./colorDiv";

const Colors = () => {
  return (
    <div className="">
      <FilterTitle text="Colors" />
      <span className="flex flex-col items-center gap-2 mt-4 px-3">
        <span className="flex justify-evenly h-auto w-full">
          <ColorDiv color="bg-red-500" />
          <ColorDiv color="bg-blue-500" />
          <ColorDiv color="bg-green-300" />
          <ColorDiv color="bg-orange-500" />
          <ColorDiv color="bg-pink-500" />
        </span>
        <span className="flex justify-evenly h-auto w-full">
          <ColorDiv color="bg-emerald-500" />
          <ColorDiv color="bg-yellow-500" />
          <ColorDiv color="bg-cyan-500" />
          <ColorDiv color="bg-purple-500" />
          <ColorDiv color="bg-black" />
        </span>
      </span>
    </div>
  );
};

export default Colors;
