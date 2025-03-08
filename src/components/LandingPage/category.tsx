import React from "react";
import Heading from "../heading";
import CategoryCard from "./categoryCard";
import Link from "next/link";

const Category = () => {
  return (
    <div className="h-auto p-4 md:p-16 bg-[#f0f0f0] flex flex-col items-center gap-4 rounded-3xl">
      <Heading text="BROWSE BY DRESS STYLE" />
      <div className=" md:h-auto w-auto flex flex-col justify-center md:flex-row gap-4 mt-6">
        <Link href={""}>
          <CategoryCard category="" src="/images/casual.png" />
        </Link>
        <Link href={""}>
          <CategoryCard category="" src="/images/formal.png" />
        </Link>
      </div>
      <div className="h-auto w-auto flex flex-col md:flex-row gap-4 ">
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
