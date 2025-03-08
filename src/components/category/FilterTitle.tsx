import { ChevronUp } from "lucide-react";
import React from "react";

const FilterTitle = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between">
      <h1 className="font-satoshiBold text-xl text-black">{text}</h1>
      <ChevronUp color="#000" size={20}/>
    </div>
  );
};

export default FilterTitle;
