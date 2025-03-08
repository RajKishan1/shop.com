import React from "react";
interface prop {
  text: string;
  Btnclass: string;
}
const Btn = ({ text, Btnclass }: prop) => {
  return (
    <button
      className={`h-[52px] w-[95%] md:w-[240px]  px-1 lg:px-[54px] py-[16px] rounded-full ${Btnclass} flex items-center justify-center `}
    >
      <p className="font-light md:font-bold w-full "> {text}</p>
    </button>
  );
};

export default Btn;
