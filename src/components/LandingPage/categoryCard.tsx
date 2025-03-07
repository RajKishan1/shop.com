import Image from "next/image";
import React from "react";

const CategoryCard = ({ category, src }: { category: string; src: string }) => {
  return (
    <div className={`relative h-[289px] w-[auto]`}>
      <h2 className="absolute z-10 left-[36px] top-[25px] text-black">
        {category}
      </h2>
      <Image
        alt=""
        src={src}
        height={888}
        width={800}
        className=" w-auto"
      ></Image>
    </div>
  );
};

export default CategoryCard;
