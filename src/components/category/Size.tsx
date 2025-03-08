import React from "react";
import FilterTitle from "./FilterTitle";
import SizeType from "./SizeType";

const Size = () => {
  return (
    <div>
      <FilterTitle text="Size" />
      <span>
        <SizeType text="XX-Small" />
        <SizeType text="X-Small" />
        <SizeType text="Small" />
        <SizeType text="Medium" />
        <SizeType text="Large" />
        <SizeType text="X-Large" />
        <SizeType text="2X-Large" />
        <SizeType text="3X-Large" />
        <SizeType text="4X-Large" />
      </span>
    </div>
  );
};

export default Size;
