import React from "react";
interface prop {
  h1text: string;
  smalltext: string;
}

const Stats = ({ h1text, smalltext }: prop) => {
  return (
    <span className="flex flex-col items-center justify-around">
      <h1 className="text-4xl text-black font-bold">{h1text}</h1>
      <p className="text-black">{smalltext}</p>
    </span>
  );
};

export default Stats;
