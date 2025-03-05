import React from "react";
import FeedbackCard from "./feedbackCard";

const FeedbackBar = () => {
  return (
    <div className="w-full overflow-x-hidden ">
      <div className="w-full flex gap-[20px] px-[100px] overflow-x-auto noScrollbar">
        <FeedbackCard
          feedback={""}
          username={"Alex R."}
          star={"⭐⭐⭐⭐⭐"}
        />
        <FeedbackCard feedback={""} username={"Maria"} star={"⭐⭐⭐⭐⭐"} />
        <FeedbackCard feedback={""} username={"Henry"} star={"⭐⭐⭐⭐"} />
        <FeedbackCard feedback={""} username={"Bheem"} star={"⭐⭐⭐⭐⭐"} />
        <FeedbackCard feedback={""} username={"Raju"} star={"⭐⭐⭐⭐⭐"} />
        <FeedbackCard feedback={""} username={"Munna"} star={"⭐⭐⭐"} />
      </div>
    </div>
  );
};

export default FeedbackBar;
