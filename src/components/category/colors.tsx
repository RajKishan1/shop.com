import React from "react";
import FilterTitle from "./FilterTitle";
import ColorDiv from "./colorDiv";

const Colors = () => {
  return (
    <div className="bg-red-200">
      <FilterTitle text="Colors" />
      <span className="flex flex-col items-center justify-center bg-red-300">
        <span className="h-auto w-full">
          <ColorDiv color="bg-red-500" />
          <ColorDiv color="blue" />
          <ColorDiv color="green" />
          <ColorDiv color="orange" />
          <ColorDiv color="pink" />
        </span>
        <span className="h-auto w-full">
          <ColorDiv color="" />
          <ColorDiv color="" />
          <ColorDiv color="" />
          <ColorDiv color="" />
          <ColorDiv color="" />
        </span>
      </span>
    </div>
  );
};

export default Colors;
