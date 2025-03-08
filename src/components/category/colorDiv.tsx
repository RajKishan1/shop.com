import React from "react";

const ColorDiv = ({ color }: { color: string }) => {
  return (
    <span
      className={`h-[30px] w-[30px] bg-${color}-500 rounded-full border-[1px] border-${color}-800 `}
    ></span>
  );
};

export default ColorDiv;
