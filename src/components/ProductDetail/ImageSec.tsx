import Image from "next/image";
import React from "react";

const ImageSec = () => {
  return (
    <div>
      <span className="h-full w-[30%] bg-yellow-700">
        <Image
          alt="product image"
          src={""}
          height={50}
          width={40}
          className=""
        ></Image>
        <Image
          alt="product image"
          src={""}
          height={50}
          width={40}
          className=""
        ></Image>
        <Image
          alt="product image"
          src={""}
          height={50}
          width={40}
          className=""
        ></Image>
      </span>
      <span>
        <Image alt="big image" src={""} height={200} width={180}></Image>
      </span>
    </div>
  );
};

export default ImageSec;
