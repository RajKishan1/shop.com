import React from "react";
interface prop {
  text: string;
  Btnclass: string;
}
const Btn = ({ text, Btnclass }: prop) => {
  return (
    <button
      className={`h-[52px] w-[210px]  px-[54px] py-[16px] rounded-full ${Btnclass} flex items-center justify-center `}
    >
      <p className="font-semibold "> {text}</p>
    </button>
  );
};

export default Btn;
