import React from "react";
import FilterTitle from "./FilterTitle";
import FilterTextItem from "./FilterTextItem";

const DressStyle = () => {
  return (
    <div>
      <FilterTitle text="Dress Style" />
      <span className="flex flex-col">
        <FilterTextItem text="Casual" />
        <FilterTextItem text="Formal" />
        <FilterTextItem text="Party" />
        <FilterTextItem text="Gym" />
      </span>
    </div>
  );
};

export default DressStyle;
