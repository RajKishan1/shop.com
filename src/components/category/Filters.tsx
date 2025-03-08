import React from "react";
import FilterTitle from "./FilterTitle";
import FilterTextItem from "./FilterTextItem";

const Filters = () => {
  return (
    <div className="flex flex-col gap-3">
      <FilterTitle text="Filters" />
      <hr className="bg-slate-600 w-full h-[1px]" />
      <span>
        <FilterTextItem text="T-Shirt" />
        <FilterTextItem text="Shirt" />
        <FilterTextItem text="Short" />
        <FilterTextItem text="Hoodie" />
        <FilterTextItem text="Jeans" />
      </span>
    </div>
  );
};

export default Filters;
