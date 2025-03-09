import React from "react";
interface prop {
  h1text: string;
  smalltext: string;
}

const Stats = ({ h1text, smalltext }: prop) => {
  return (
    <span className=" flex flex-col items-center gap-1 md:gap-3 justify-around font-satoshi">
      <h1 className="text-2xl lg:text-[40px] text-black font-satoshiBold">{h1text}</h1>
      <p className="text-black text-sm md:text-base leading-[22px]">{smalltext}</p>
    </span>
  );
};

export default Stats;
