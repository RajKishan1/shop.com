import React from "react";

const SizeType = ({ text }: { text: string }) => {
  return (
    <button className="bg-neutral-200 rounded-full text-neutral-500 p-1 px-3 m-1 text-md">
      {text}
    </button>
  );
};

export default SizeType;
