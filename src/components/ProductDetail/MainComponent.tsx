import React from "react";

const MainComponent = () => {
  return (
    <div className="w-full h-[45%]">
      <div className="w-1/2 h-full">
        <span className="w-[30] bg-red-400">
          <div></div>
          <div></div>
          <div></div>
        </span>
        <span className="w-[70%] bg-orange-400">1</span>
      </div>
      <div className="w-1/2 h-full bg-red-900">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default MainComponent;
