import Btn from "@/components/btn";
import Heading from "@/components/heading";
import ProductCard from "@/components/LandingPage/productCard";
import FeedbackComponent from "@/components/ProductDetail/FeedbackComponent";
import MainComponent from "@/components/ProductDetail/MainComponent";
import OptionsDiv from "@/components/ProductDetail/optionsDiv";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <MainComponent />
      <OptionsDiv />
      <FeedbackComponent />
      <div className="w-full flex flex-col items-center justify-between py-8">
        <Heading text="YOU MIGHT ALSO LIKE" />
        <div className="w-full flex items-center justify-center px-24 gap-[20px] mt-16 overflow-x-auto overflow-y-hidden">
          <ProductCard
            src="/images/blackTshirt.png"
            newPrice="120"
            rating="3.5"
            productName="T-shirt with Tape Details"
            oldPrice="2.50"
          />
          <ProductCard
            src="/images/bluejeans.png"
            newPrice="12"
            rating="4.2"
            productName="Skinny Fit Jeans"
          />
          <ProductCard
            src="/images/checkedshirt.png"
            newPrice="2.5"
            rating="3.5"
            productName="Checkered Shirt"
          />
          <ProductCard
            src="/images/orangetshirt.png"
            newPrice="6"
            rating="2.3"
            productName="Sleeve Striped T-Shirt"
          />
        </div>
        <Btn text="View All" Btnclass="btnwhite my-6" />
      </div>
    </div>
  );
};

export default Page;
