import React from "react";
interface prop {
  star: React.ReactNode;
  username: string;
  feedback: string;
}
const FeedbackCard = ({ star, username, feedback }: prop) => {
  return (
    <div className=" h-60 w-[400px] flex items-center justify-center rounded-[20px] border-[1px] border-slate-200 text-neutral-700 py-[28px] px-[32px]">
      <span className="h-48 w-[335px] bg-emerald-00 flex flex-col justify-betwee ">
        <span className="mb-2">{star}</span>
        <h2 className="font-extrabold font-satoshiBold text-[1.3rem] text-black mb-2">
          {username}
        </h2>
        <p className="text-[16px] leading-6">
          {feedback}I am blown away by the quality and style of the clothes I
          received from Shop.co. From casual wear to elegant dresses, every
          piece I have bought has exceeded my expectations.
        </p>
      </span>
    </div>
  );
};

export default FeedbackCard;
