import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import React from "react";
import ProductCard from "../LandingPage/productCard";

const ItemsComponent = () => {
  return (
    <div className="w-full md:w-[70vw] bg-red-30">
      <div className="flex justify-between items-center text-black">
        <h1 className="font-satoshiBold text-2xl ">Casual</h1>
        <span className="flex">
          <p>Showing 1-10 of 100 Products </p>
          <span className="hidden md:flex px-4">
            Sort by: <strong className="px-2 font-bold"> Most Popular</strong> <ChevronDown />
          </span>
        </span>
      </div>
      <span className="w-full flex flex-wrap justify-evenly py-8 gap-4 gap-y-6">
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
        />{" "}
        <ProductCard
          src="/images/checkedshirt.png"
          productName="Checkred Shirt"
          rating="3.5"
          newPrice="125"
        />{" "}
        <ProductCard
          src="/images/bluejeans.png"
          productName="Gradient Graphics T-Shirt"
          rating="3.5"
          newPrice="145"
        />
        <ProductCard
          src="/images/gradient.jpg"
          productName="Gradient Graphics T-Shirt"
          rating="3.5"
          newPrice="145"
        />
        <ProductCard
          src="/images/orangetshirt.png"
          productName="Polo with Tipping Details"
          rating="4.5"
          newPrice="180"
        />{" "}
        <ProductCard
          src="/images/striped.jpg"
          productName="Black Striped T-shirt"
          rating="5.0"
          newPrice="120"
        />
        <ProductCard
          src="/images/gradient.jpg"
          productName="Gradient Graphics T-Shirt"
          rating="3.5"
          newPrice="145"
        />{" "}
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
        />{" "}
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
      </span>{" "}
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
