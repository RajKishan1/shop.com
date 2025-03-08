import { BadgeCheck, Ellipsis } from "lucide-react";
import React from "react";
interface prop {
  username: string;
  star: string;
  feedback: string;
  date: string;
}
const DetailCard = ({ date, star, feedback, username }: prop) => {
  return (
    <div className=" w-full md:w-1/3   flex items-center justify-center rounded-[20px] border-[1px] border-slate-200 text-neutral-700 py-[28px] px-[32px] ">
      <span className=" w-full bg-emerald-00 flex flex-col ">
        <span className="mb-2 flex justify-between">
          {star} <Ellipsis color="#94a3b8" />
        </span>
        <h2 className="font-black text-[1.4rem] text-black mb-2 flex items-center">
          {username}
          <BadgeCheck size={20} color="#00cc0e" strokeWidth={3} />
        </h2>
        <p
          className="text-[16px] font-thin w-full leading-6"
        >
          {feedback}
          "I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've
          bought has exceeded my expectations.”
        </p>
        <h2 className="font-bold mt-2">Posted on {date}</h2>
      </span>
    </div>
  );
};

export default DetailCard;
