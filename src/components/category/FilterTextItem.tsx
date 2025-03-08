import { ChevronRight } from "lucide-react";
import React from "react";

const FilterTextItem = ({ text }: { text: string }) => {
  return (
    <span className="w-full flex justify-between text-slate-600 py-1">
      <h3> {text}</h3> <ChevronRight />
    </span>
  );
};

export default FilterTextItem;
