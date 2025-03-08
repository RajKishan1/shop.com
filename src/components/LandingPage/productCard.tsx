import Image from "next/image";
import React from "react";
interface prop {
  src: string;
  productName: string;
  rating: string;
  // discount?: string;
  oldPrice?: string;
  newPrice: string;
}
const ProductCard = ({
  src,
  productName,
  rating,
  // discount,
  oldPrice,
  newPrice,
}: prop) => {
  return (
    <div className="h-[400px] w-[295px] flex flex-col  max-2xl:w-[275px]">
      <Image alt="" src={src} height={298} width={295} className=""></Image>
      <h3 className="font-satoshiBold text-[20px] font-bold text-black mt-[5px]">
        {productName}
      </h3>
      <span className="h-[219px] flex mt-[5px]">
        ⭐⭐⭐⭐
        <p className="ml-[8px] text-black">{rating}/5</p>
      </span>
      <div className="w-[170px] h-[30px]  flex justify-between">
        <h6 className="text-[24px] text-black font-satoshiBold">${newPrice}</h6>
        <h6 className="text-[24px] text-slate-600 font-bold">{oldPrice}</h6>
        {/* <span className="bg-red-200 h-[28px] w-[52px] rounded-full flex items-center justify-center">
          <p className="text-[12px]">{discount}</p>
        </span> */}
      </div>
    </div>
  );
};

export default ProductCard;
