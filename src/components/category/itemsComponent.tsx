import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import React from "react";
import ProductCard from "../LandingPage/productCard";

const ItemsComponent = () => {
  return (
    <div className="w-[70%]">
      <div className="flex justify-between text-black">
        <h1 className="font-satoshiBold text-2xl ">Casual</h1>
        <span className="flex">
          <p>Showing 1-10 of 100 Products Sort by:</p>
          <span className="flex font-bold px-1">
            Most Popular <ChevronDown />
          </span>
        </span>
      </div>

      <span className="w-full flex gap-4">
        <ProductCard
          src="/images/gradient.jpg"
          productName="Gradient Graphics T-Shirt"
          rating="3.5"
          newPrice="145"
        />
        <ProductCard
          src="/images/tipping.jpg"
          productName="Polo with Tipping Details"
          rating="4.5"
          newPrice="180"
        />
        <ProductCard
          src="/images/striped.jpg"
          productName="Black Striped T-shirt"
          rating="5.0"
          newPrice="120"
        />
      </span>

      <div className="flex justify-between text-black">
        <button className="border-[1px] border-slate-300 p-2 flex items-center gap-3 px-3 font-satoshiBold rounded-lg">
          <ArrowLeft />
          Previous
        </button>
        <span></span>
        <button className="border-[1px] border-slate-300 p-2 flex items-center gap-3 px-3 font-satoshiBold rounded-lg">
          Next <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ItemsComponent;
