import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="font-integral text-3xl lg:text-[48px] text-black  ">
      {text}
    </h1>
  );
};

export default Heading;
