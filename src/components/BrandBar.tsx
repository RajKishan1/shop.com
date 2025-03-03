import React from "react";
import BrandDiv from "./brandDiv";

const BrandBar = () => {
  return (
    <div className="w-full bg-black flex px-[100px] py-10  justify-around items-center">
      <BrandDiv src="/versace.svg" />
      <BrandDiv src="/zara.svg" />
      <BrandDiv src="/gucci.svg" />
      <BrandDiv src="/prada.svg" />
      <BrandDiv src="/calvin.svg" />
    </div>
  );
};

export default BrandBar;
