import React from "react";
interface prop {
  text: string;
}
const Btn = ({ text }: prop) => {
  return (
    <button className="h-[52px] w-[210px] ">
      <p className="bg-black text-white rounded-full"> {text}</p>
    </button>
  );
};

export default Btn;
