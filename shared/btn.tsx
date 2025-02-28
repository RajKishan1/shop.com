import React from "react";
interface prop {
  text: string;
}
const Btn = ({ text }: prop) => {
  return (
    <button className="h-[52px] w-[210px] bg-neutral-950 rounded-full text-white">
      {text}
    </button>
  );
};

export default Btn;
