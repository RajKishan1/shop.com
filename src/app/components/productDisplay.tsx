import React from "react";
import ProductCard from "./productCard";
interface prop {
  text: string;
}
const ProductDisplay = ({ text }: prop) => {
  return (
    <div className="w-[1440px] h-[700px] bg-pink-200">
      <h1 className="font-integral text-[48px] text-black text-center ">
        {text}
      </h1>
      <div className="flex">
        <ProductCard
          src="/images/blackTshirt.png"
          newPrice=""
          rating=""
          productName=""
        />

        <ProductCard
          src="/images/bluejeans.png"
          newPrice=""
          rating=""
          productName=""
        />
        <ProductCard
          src="/images/checkedshirt.png"
          newPrice=""
          rating=""
          productName=""
        />
        <ProductCard
          src="/images/orangetshirt.png"
          newPrice=""
          rating=""
          productName=""
        />
      </div>
    </div>
  );
};

export default ProductDisplay;
