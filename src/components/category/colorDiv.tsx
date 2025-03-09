import React from "react";

const ColorDiv = ({ color }: { color: string }) => {
  return (
    <span
      className={`h-[30px] w-[30px] ${color} rounded-full`}
    ></span>
  );
};

export default ColorDiv;
