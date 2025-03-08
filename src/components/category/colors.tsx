import React from "react";
import FilterTitle from "./FilterTitle";
import ColorDiv from "./colorDiv";

const Colors = () => {
  return (
    <div>
      <FilterTitle text="Colors" />
      <span className="flex items-center justify-center">
        <ColorDiv color="red" />
        <ColorDiv color="blue" />
        <ColorDiv color="green" />
        <ColorDiv color="orange" />
        <ColorDiv color="pink" />
        <br />
        <ColorDiv color="" />
        <ColorDiv color="" />
        <ColorDiv color="" />
        <ColorDiv color="" />
        <ColorDiv color="" />
      </span>
    </div>
  );
};

export default Colors;
