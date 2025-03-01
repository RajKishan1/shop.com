import React from "react";
interface prop {
  text: string;
}
const Btn = ({ text }: prop) => {
  return (
    <div className="h-[52px] w-[210px]  px-[54px] py-[16px] bg-red-500">
      <button>
        <p className=" text-white rounded-full "> {text}</p>
      </button>
    </div>
  );
};

export default Btn;
