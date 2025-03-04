import React from "react";
interface prop {
  star: any | void;
  username: string;
  feedback: string;
}
const FeedbackCard = ({ star, username, feedback }: prop) => {
  return (
    <div className=" h-60 w-[400px] py-3 px-2 flex items-center justify-center rounded-[20px] border-[1px] border-slate-200 text-neutral-700">
      <span className="h-48 w-[350px] bg-emerald-00 flex flex-col justify-between px-3 py-2">
        <span className="">{star}</span>
        <h2 className="font-extrabold text-[1.6rem] text-black">
          {username}
        </h2>
        <p>
          {feedback}
          "I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've
          bought has exceeded my expectations.”
        </p>
      </span>
    </div>
  );
};

export default FeedbackCard;
