import Image from "next/image";
import React from "react";

const BrandDiv = ({ src }: { src: string }) => {
  return (
    <span className="w-[288px] h-full flex items-center justify-center">
      <Image
        alt=""
        src={src}
        width={90}
        height={36}
        className="h-auto w-auto"
      ></Image>
    </span>
  );
};

export default BrandDiv;
