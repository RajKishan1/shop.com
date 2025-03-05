import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="font-integral text-[48px] text-black text-center mt-5 ">
      {text}
    </h1>
  );
};

export default Heading;
