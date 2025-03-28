import Link from "next/link";
import React from "react";
interface prop {
  text: string;
  Btnclass: string;
  link?: string;
}
const Btn = ({ text, Btnclass, link }: prop) => {
  return (
    <Link href={`${link}`}>
      <button
        className={`h-[52px] w-[180px] md:w-[240px]  px-0 lg:px-[54px] py-[16px] rounded-full ${Btnclass} flex items-center justify-center `}
      >
        <p className="font-light md:font-bold w-full "> {text}</p>
      </button>
    </Link>
  );
};

export default Btn;
