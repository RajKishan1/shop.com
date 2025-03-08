import React from "react";

const SizeType = ({ text }: { text: string }) => {
  return (
    <button className="bg-slate-300 rounded-full text-slate-800 px-2 text-lg">
      {text}
    </button>
  );
};

export default SizeType;
