import React from "react";
import Price from "./Price";
import Colors from "./colors";
import Size from "./Size";
import DressStyle from "./DressStyle";
import Btn from "../btn";
import Filters from "./Filters";

const FilterComponent = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 w-full max-w-[300px] rounded-xl p-4">
      <Filters />
      <hr className="bg-slate-600 w-full h-[1px]" />
      <Price />
      <hr className="bg-slate-600 w-full h-[1px]" />
      <Colors />
      <hr className="bg-slate-600 w-full h-[1px]" />
      <Size />
      <hr className="bg-slate-600 w-full h-[1px]" />
      <DressStyle />
      <hr className="bg-slate-600 w-full h-[1px]" />
      <Btn text="Apply Filters" Btnclass="btnblack" />
    </div>
  );
};

export default FilterComponent;
