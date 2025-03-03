import React from "react";
import Heading from "./heading";
import CategoryCard from "./categoryCard";

const Category = () => {
  return (
    <div className="w-[1240px] h-[866px] bg-[#f0f0f0] flex flex-col items-center px-[64px] mt-[72px] rounded-[40px]">
      <Heading text="BROWSE BY DRESS STYLE" />
      <div className="h-[289px] w-auto flex gap-[20px] mt-[64px]">
        <CategoryCard category="" src="/images/casual.png" />
        <CategoryCard category="" src="/images/formal.png" />
      </div>
      <div className="h-[289px] w-auto flex gap-[20px] mt-[20px]">
        <CategoryCard category="" src="/images/party.png" />
        <CategoryCard category="" src="/images/gym.png" />
      </div>
    </div>
  );
};

export default Category;
