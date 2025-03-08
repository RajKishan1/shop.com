import React from "react";
interface prop {
  text: string;
  Btnclass: string;
}
const Btn = ({ text, Btnclass }: prop) => {
  return (
    <button
      className={`h-[52px] w-[95%] md:w-auto  px-[54px] py-[16px] rounded-full ${Btnclass} flex items-center justify-center `}
    >
      <p className="font-bold w-full text-black"> {text}</p>
    </button>
  );
};

export default Btn;
