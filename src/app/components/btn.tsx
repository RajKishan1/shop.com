import React from "react";
interface prop {
  text: string;
}
const Btn = ({ text }: prop) => {
  return (
    <button className="h-[52px] w-[210px]  px-[54px] py-[16px] rounded-full bg-black ">
      <p className=" text-white  "> {text}</p>
    </button>
  );
};

export default Btn;
