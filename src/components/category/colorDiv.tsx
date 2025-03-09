import React from "react";

const ColorDiv = ({ color }: { color: string }) => {
  return (
    <span
      className={`h-[30px] w-[30px] ${color} bg-red-600 rounded-full`}
    ></span>
  );
};

export default ColorDiv;
