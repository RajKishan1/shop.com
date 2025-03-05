import React from "react";
import Heading from "./heading";
import CategoryCard from "./categoryCard";
import Link from "next/link";

const Category = () => {
  return (
    <div className="px-16 py-16 bg-[#f0f0f0] flex flex-col items-center mt-[72px] rounded-[40px]">
      <Heading text="BROWSE BY DRESS STYLE" />
      <div className="h-[289px] w-auto flex gap-[20px] mt-[64px]">
        <Link href={""}>
          <CategoryCard category="" src="/images/casual.png" />
        </Link>
        <Link href={""}>
          <CategoryCard category="" src="/images/formal.png" />
        </Link>
      </div>
      <div className="h-[289px] w-auto flex gap-[20px] mt-[20px]">
        <Link href={""}>
          <CategoryCard category="" src="/images/party.png" />
        </Link>
        <Link href={""}>
          <CategoryCard category="" src="/images/gym.png" />
        </Link>
      </div>
    </div>
  );
};

export default Category;
