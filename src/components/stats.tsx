import React from "react";
interface prop {
  h1text: string;
  smalltext: string;
}

const Stats = ({ h1text, smalltext }: prop) => {
  return (
    <span className="flex flex-col items-center justify-around  font-satoshi">
      <h1 className="text-[40px] text-black font-bold">{h1text}</h1>
      <p className="text-black text-[16px] leading-[22px]">{smalltext}</p>
    </span>
  );
};

export default Stats;
