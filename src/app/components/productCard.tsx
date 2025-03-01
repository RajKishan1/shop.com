import Image from "next/image";
import React from "react";
interface prop {
  src: string;
  productName: string;
  rating: string;
  discount?: string;
  oldPrice?: string;
  newPrice: string;
}
const ProductCard = ({
  src,
  productName,
  rating,
  discount,
  oldPrice,
  newPrice,
}: prop) => {
  return (
    <div className="h-[400px] w-[300px] bg-red-400 ">
      <Image alt="" src={src} height={298} width={295} className=""></Image>
      <h3 className="font-satoshi text-[20px]">{productName}</h3>
      <span className="h-[20px]">
        ⭐⭐⭐⭐
        <p>{rating}/5</p>
      </span>
      <div className="w-[170px] h-[32px]">
        <h6>{newPrice}</h6>
        <h6>{oldPrice}</h6>
        <span className="bg-red-200 rounded-full flex items-center justify-center">
          {discount}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
