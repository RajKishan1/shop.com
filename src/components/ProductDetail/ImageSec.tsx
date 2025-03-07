import Image from "next/image";
import React from "react";

const ImageSec = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center">
      <span className="h-full w-[30%] flex flex-row md:flex-col items-center justify-around">
        <Image
          alt="product image"
          src={"/images/sm1.jpg"}
          height={150}
          width={150}
          className=""
        ></Image>
        <Image
          alt="product image"
          src={"/images/sm2.jpg"}
          height={150}
          width={150}
          className=""
        ></Image>
        <Image
          alt="product image"
          src={"/images/sm3.jpg"}
          height={150}
          width={150}
          className=""
        ></Image>
      </span>
      <span>
        <Image
          alt="big image"
          src="/images/bigimage.jpg"
          height={800}
          width={480}
          // className="h-auto w-auto"
        ></Image>
      </span>
    </div>
  );
};

export default ImageSec;
