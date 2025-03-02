import React from "react";
import FeedbackCard from "./feedbackCard";

const FeedbackBar = () => {
  return (
    <div className="w-[1440px] h-[240px] flex gap-[20px] px-[100px] bg-red-200 overflow-x-auto overflow-y-hidden">
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
    </div>
  );
};

export default FeedbackBar;
