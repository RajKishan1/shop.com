import React from "react";
import BrandDiv from "./brandDiv";

const BrandBar = () => {
  return (
    <div className="h-[146px] lg:h-[122px] w-[390] lg:w-[1440px] bg-black flex px-[100px]  justify-around items-center">
      <BrandDiv src="/versace.svg" />
      <BrandDiv src="/zara.svg" />
      <BrandDiv src="/gucci.svg" />
      <BrandDiv src="/prada.svg" />
      <BrandDiv src="/calvin.svg" />
    </div>
  );
};

export default BrandBar;
